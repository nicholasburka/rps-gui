import nodeAssert from 'assert';
import crypto from 'crypto';
import ethers from 'ethers';
const BigNumber = ethers.BigNumber;
let DEBUG = process.env.REACH_DEBUG ? true : false;
export const setDEBUG = (b) => {
  if (b === false || b === true) {
    DEBUG = b;
  } else {
    throw Error(`Expected bool, got ${JSON.stringify(b)}`);
  }
};
export const getDEBUG = () => { return DEBUG; };
export const debug = (msg) => {
  if (getDEBUG()) {
    console.log(`[${(new Date()).toISOString()}] DEBUG: ${msg}`);
  }
};
export const assert = (d, ai = null) => nodeAssert.strict(d, format_ai(ai));
const { hexlify, toUtf8Bytes, toUtf8String, isHexString } = ethers.utils;
export const { isBigNumber } = BigNumber;
export const bigNumberify = (x) => BigNumber.from(x);
// Hex helpers
// const un0x           = h => h.replace(/^0x/, ''); // unused
const hexTo0x = (h) => '0x' + h.replace(/^0x/, '');
const byteToHex = (b) => (b & 0xFF).toString(16).padStart(2, '0');
const byteArrayToHex = (b) => Array.from(b, byteToHex).join('');
// const hexOf = x =>
//       typeof x === 'string' && x.slice(0, 2) === '0x'
//       ? un0x(toHex(x))
//       : un0x(toHex(`0x${x}`));
const hexOf = (x) => toHex(x);
export const T_Null = {
  name: 'Null',
  canonicalize: (v) => {
    // Doesn't check with triple eq; we're being lenient here
    if (v != null) {
      throw Error(`Expected null, but got ${JSON.stringify(v)}`);
    }
    return null;
  },
  // null is represented in solidity as false
  munge: (v) => { void(v); return false; },
  unmunge: (v) => { void(v); return null; },
  defaultValue: null,
};
export const T_Bool = {
  name: 'Bool',
  canonicalize: (v) => {
    if (typeof(v) !== 'boolean') {
      throw Error(`Expected boolean, but got ${JSON.stringify(v)}`);
    }
    return v;
  },
  munge: (v) => v,
  unmunge: (v) => v,
  defaultValue: false,
};
export const T_UInt256 = {
  name: 'UInt256',
  canonicalize: (v) => {
    if (isBigNumber(v)) {
      return v;
    }
    if (typeof(v) === 'number') {
      return bigNumberify(v);
    }
    if (typeof(v) === 'string') {
      if (v.slice(0, 2) == '0x' && v.length == 66) {
        // TODO: also check it is entirely 0-9 a-f
        return bigNumberify(v);
      } else {
        throw Error(`String does not represent a BigNumber. ${JSON.stringify(v)}`);
      }
    }
    throw Error(`Expected BigNumber or number, but got ${JSON.stringify(v)}`);
  },
  munge: (v) => v,
  // TODO: double check:
  // It looks like munging BigNumber to string is no longer needed?
  // munge: (v) => v.toString(),
  unmunge: (v) => v,
  defaultValue: bigNumberify(0),
};
// TODO: define some wrapper type Bytes?
export const T_Bytes = {
  name: 'Bytes',
  canonicalize: (x) => {
    if (typeof(x) !== 'string') {
      throw Error(`Bytes expected string, but got ${JSON.stringify(x)}`);
    }
    if (isHex(x)) {
      return x;
    } else {
      return toHex(x);
      // TODO: fix things so this restriction is not necessary
      // throw Error(`Please use toHex on string sent to Reach: "${x}"`);
    }
  },
  munge: (v) => v,
  unmunge: (v) => v,
  defaultValue: '0x0',
};
export const T_Digest = Object.assign({}, T_UInt256, { name: 'Digest' });
// TODO: use a wrapper type for canonicalized form
export const T_Address = {
  name: 'Address',
  canonicalize: (x) => {
    if (typeof x !== 'string') {
      throw Error(`Address must be a string, but got: ${JSON.stringify(x)}`);
    }
    if (x.slice(0, 2) !== '0x') {
      throw Error(`Address must start with 0x, but got: ${JSON.stringify(x)}`);
    }
    if (!isHex(x)) {
      throw Error(`Address must be a valid hex string, but got: ${JSON.stringify(x)}`);
    }
    // TODO check address length?
    return x;
  },
  munge: (v) => v,
  unmunge: (v) => v,
  defaultValue: '0x' + Array(64).fill('0').join(''),
};
export const T_Array = (ctc, sz) => {
  // TODO: check ctc, sz for sanity
  return {
    name: `Array(${ctc.name}, ${sz})`,
    canonicalize: (args) => {
      if (!Array.isArray(args)) {
        throw Error(`Expected an Array, but got ${JSON.stringify(args)}`);
      }
      if (sz != args.length) {
        throw Error(`Expected array of length ${sz}, but got ${args.length}`);
      }
      return args.map((arg) => ctc.canonicalize(arg));
    },
    munge: (v) => {
      return v.map((arg) => ctc.munge(arg));
    },
    unmunge: (v) => {
      return v.map((arg) => ctc.unmunge(arg));
    },
    defaultValue: (() => {
      return Array(sz).fill(ctc.defaultValue);
    })(),
  };
};
// TODO: way too hard to figure out how to teach typescript the type of this
// T is just the "union of all types in the tuple"
export const T_Tuple = (ctcs) => {
  // TODO: check ctcs for sanity
  return {
    name: `Tuple(${ctcs.map((ctc) => ` ${ctc.name} `)})`,
    canonicalize: (args) => {
      if (!Array.isArray(args)) {
        throw Error(`Expected a Tuple, but got ${JSON.stringify(args)}`);
      }
      if (ctcs.length != args.length) {
        throw Error(`Expected tuple of size ${ctcs.length}, but got ${args.length}`);
      }
      return args.map((arg, i) => ctcs[i].canonicalize(arg));
    },
    munge: (args) => {
      return args.map((arg, i) => ctcs[i].munge(arg));
    },
    unmunge: (args) => {
      return args.map((arg, i) => ctcs[i].unmunge(arg));
    },
    defaultValue: (() => {
      return ctcs.map(ctc => ctc.defaultValue);
    })(),
  };
};
// TODO: way too hard to teach typescript the type of this
// T is just the "union of all object value types"
export const T_Object = (co) => {
  // TODO: check co for sanity
  return {
    name: `Object(${Object.keys(co).map((k) => ` ${k}: ${co[k].name} `)})`,
    canonicalize: (vo) => {
      if (typeof(vo) !== 'object') {
        throw Error(`Expected object, but got ${JSON.stringify(vo)}`);
      }
      const obj = {};
      for (const prop in co) {
        // This is dumb but it's how ESLint says to do it
        // https://eslint.org/docs/rules/no-prototype-builtins
        if (!{}.hasOwnProperty.call(vo, prop)) {
          throw Error(`Expected prop ${prop}, but didn't found it in ${Object.keys(vo)}`);
        }
        obj[prop] = co[prop].canonicalize(vo[prop]);
      }
      return obj;
    },
    munge: (vo) => {
      const obj = {};
      for (const prop in co) {
        obj[prop] = co[prop].munge(vo[prop]);
      }
      return obj;
    },
    // TODO: reduce duplication somehow
    unmunge: (vo) => {
      const obj = {};
      for (const prop in co) {
        obj[prop] = co[prop].unmunge(vo[prop]);
      }
      return obj;
    },
    defaultValue: (() => {
      const obj = {};
      for (const prop in co) {
        obj[prop] = co[prop].defaultValue;
      }
      return obj;
    })(),
  };
};
// TODO: way too hard to teach typescript the type of this
// T is just the "union of all variant types"
export const T_Data = (co) => {
  // TODO: check co for sanity
  // ascLabels[i] = label
  // labelMap[label] = i
  const ascLabels = Object.keys(co).sort();
  const labelMap = {};
  for (const i in ascLabels) {
    labelMap[ascLabels[i]] = parseInt(i);
  }
  return {
    name: `Data(${Object.keys(co).map((k) => ` ${k}: ${co[k].name} `)})`,
    canonicalize: (io) => {
      if (!(Array.isArray(io) && io.length == 2)) {
        throw Error(`Expected an array of length two to represent a data instance, but got ${JSON.stringify(io)}`);
      }
      const vn = io[0];
      if (!{}.hasOwnProperty.call(co, vn)) {
        throw Error(`Expected a variant in ${Object.keys(co)}, but got ${vn}`);
      }
      return [vn, co[vn].canonicalize(io[1])];
    },
    // Data representation in js is a 2-tuple:
    // [label, val]
    // where label : string
    // and val : co[label]
    //
    // Data representation in solidity is an N+1-tuple: (actually a struct)
    // [labelInt, v0, ..., vN]
    // where labelInt : number, 0 <= labelInt < N
    // vN : co[ascLabels[i]]
    //
    munge: (vt) => {
      // Typescript is stupid about destructuring tuple tupes =(
      const label = vt[0];
      const v = vt[1];
      const i = labelMap[label];
      const vals = ascLabels.map((label) => {
        const vco = co[label];
        return vco.munge(vco.defaultValue);
      });
      vals[i] = co[label].munge(v);
      return [i].concat(vals);
    },
    // Note: when it comes back from solidity, vs behaves like an N+1-tuple,
    // but also has secret extra keys you can access,
    // based on the struct field names.
    // e.g. Maybe has keys vs["which"], vs["_None"], and vs["_Some"],
    // corresponding to    vs[0],       vs[1],       and vs[2] respectively.
    // We don't currently use these, but we could.
    unmunge: (vs) => {
      const i = vs[0];
      const label = ascLabels[i];
      const val = vs[i + 1];
      return [label, co[label].unmunge(val)];
    },
    defaultValue: (() => {
      const label = ascLabels[0];
      return [label, co[label].defaultValue];
    })(),
  };
};
const format_ai = (ai) => JSON.stringify(ai);
export function protect(ctc, v, ai = null) {
  try {
    return ctc.canonicalize(v);
  } catch (e) {
    console.log(`Protect failed: expected ${ctc.name} but got ${JSON.stringify(v)}${format_ai(ai)}`);
    throw e;
  }
}
// Massage the arg into a form keccak256 will handle correctly
let digestWidth = 32;
export const setDigestWidth = (sz) => {
  digestWidth = sz;
};
const kek = (arg) => {
  if (typeof(arg) === 'string') {
    if (isHex(arg)) {
      return arg;
    } else {
      return toUtf8Bytes(arg);
    }
  } else if (typeof(arg) === 'number') {
    return '0x' + bigNumberToHex(arg, digestWidth);
  } else if (isBigNumber(arg)) {
    return '0x' + bigNumberToHex(arg, digestWidth);
  } else if (arg && arg.constructor && arg.constructor.name == 'Uint8Array') {
    return arg;
  } else if (Array.isArray(arg)) {
    return ethers.utils.concat(arg.map((x) => ethers.utils.arrayify(kek(x))));
  } else {
    throw Error(`Can't kek this: ${arg}`);
  }
};
export const toHex = (x) => hexlify(kek(x));
export const isHex = isHexString;
export const hexToString = toUtf8String;
// XXX the JS backend expects this to be a BigNumber
export const digest = (...args) => {
  const kekCat = kek(args);
  const r = ethers.utils.keccak256(kekCat);
  debug(`keccak(${JSON.stringify(args)}) => internal(${JSON.stringify(kekCat)}) => ${JSON.stringify(r)}`);
  return r;
};
export const hexToBigNumber = (h) => bigNumberify(hexTo0x(h));
export const uint256ToBytes = (i) => bigNumberToHex(i);
export const bigNumberToHex = (u, size = 32) => {
  const width = 8 * size;
  const format = `ufixed${width}x0`;
  const nPos = bigNumberify(u).toTwos(width);
  // They took away padZeros so we have to use FixedNumber
  const nFix = ethers.FixedNumber.from(nPos.toString(), format);
  // XXX why do we slice off the 0x?
  return hexlify(nFix).slice(2);
};
export const bytesEq = (x, y) => hexOf(x) === hexOf(y);
export const digestEq = bytesEq;
export const addressEq = bytesEq;
export const randomUInt256 = () => hexToBigNumber(byteArrayToHex(crypto.randomBytes(32)));
export const hasRandom = {
  random: randomUInt256,
};
export const eq = (a, b) => bigNumberify(a).eq(bigNumberify(b));
export const add = (a, b) => bigNumberify(a).add(bigNumberify(b));
export const sub = (a, b) => bigNumberify(a).sub(bigNumberify(b));
export const mod = (a, b) => bigNumberify(a).mod(bigNumberify(b));
export const mul = (a, b) => bigNumberify(a).mul(bigNumberify(b));
export const div = (a, b) => bigNumberify(a).div(bigNumberify(b));
export const ge = (a, b) => bigNumberify(a).gte(bigNumberify(b));
export const gt = (a, b) => bigNumberify(a).gt(bigNumberify(b));
export const le = (a, b) => bigNumberify(a).lte(bigNumberify(b));
export const lt = (a, b) => bigNumberify(a).lt(bigNumberify(b));
// Array helpers
export function Array_set(arr, idx, elem) {
  const arrp = arr.slice();
  arrp[idx] = elem;
  return arrp;
}
export const Array_zip = (x, y) => x.map((e, i) => [e, y[i]]);
