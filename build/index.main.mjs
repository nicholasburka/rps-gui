// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    batchSize: stdlib.checkedBigNumberify('./reach/index.rsh:9:19:decimal', stdlib.UInt_max, 5)
    };
  };

export async function Attacher(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0, ctc2, ctc0]);
  
  
  const v53 = await ctc.creationTime();
  const v52 = stdlib.protect(ctc1, interact.firstHands, null);
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc2], false, false));
  const [v62, v63, v64] = txn1.data;
  const v67 = txn1.time;
  const v61 = txn1.from;
  stdlib.assert(true, {
    at: './reach/index.rsh:72:27:dot',
    fs: [],
    msg: null,
    who: 'Attacher'
    });
  const v66 = stdlib.add(stdlib.checkedBigNumberify('./reach/index.rsh:compileDApp', stdlib.UInt_max, 0), v62);
  ;
  stdlib.assert(true, {
    at: './reach/index.rsh:72:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
    });
  const v69 = ctc.selfAddress('Attacher', false, stdlib.checkedBigNumberify('./reach/index.rsh:78:31:application', stdlib.UInt_max, 68));
  stdlib.assert(true, {
    at: './reach/index.rsh:82:39:application',
    fs: ['at ./reach/index.rsh:78:31:application call to [unknown function] (defined at: ./reach/index.rsh:78:35:function exp)'],
    msg: null,
    who: 'Attacher'
    });
  const txn2 = await (ctc.sendrecv(2, 2, stdlib.checkedBigNumberify('./reach/index.rsh:84:27:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc3], [v61, v62, v63, v64, v66, v67, v52, v69], [v62, []], [ctc1, ctc3], true, true, v63, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./reach/index.rsh:84:27:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66, v67]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./reach/index.rsh:84:27:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66]);
    const [v72, v73] = txn2.data;
    const v76 = txn2.time;
    const v71 = txn2.from;
    
    stdlib.assert(true, {
      at: './reach/index.rsh:84:27:dot',
      fs: [],
      msg: null,
      who: 'Attacher'
      });
    const v75 = stdlib.add(v66, v62);
    sim_r.txns.push({
      amt: v62,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './reach/index.rsh:84:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
      });
    const v78 = stdlib.mul(stdlib.checkedBigNumberify('./reach/index.rsh:90:46:decimal', stdlib.UInt_max, 2), v62);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v76, v78]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./reach/index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v78]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v623 = txn3.time;
    const v619 = txn3.from;
    stdlib.assert(true, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: null,
      who: 'Attacher'
      });
    const v621 = stdlib.add(v66, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    ;
    const v622 = stdlib.addressEq(v61, v619);
    stdlib.assert(v622, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Attacher'
      });
    ;
    stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:86:84:decimal', stdlib.UInt_max, 1)), {
      at: './reach/index.rsh:60:63:application',
      fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:86:83:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:86:66:function exp)', 'at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
      });
    return;
    }
  else {
    const [v72, v73] = txn2.data;
    const v76 = txn2.time;
    const v71 = txn2.from;
    stdlib.assert(true, {
      at: './reach/index.rsh:84:27:dot',
      fs: [],
      msg: null,
      who: 'Attacher'
      });
    const v75 = stdlib.add(v66, v62);
    ;
    stdlib.assert(true, {
      at: './reach/index.rsh:84:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
      });
    const v78 = stdlib.mul(stdlib.checkedBigNumberify('./reach/index.rsh:90:46:decimal', stdlib.UInt_max, 2), v62);
    const txn3 = await (ctc.recv(4, 2, [ctc0, ctc1], false, v63));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0, ctc0], [v61, v63, v64, v71, v72, v75, v76, v78], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v76, v78]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v78]);
        const [] = txn4.data;
        const v602 = txn4.time;
        const v598 = txn4.from;
        
        stdlib.assert(true, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: null,
          who: 'Attacher'
          });
        const v600 = stdlib.add(v75, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v601 = stdlib.addressEq(v71, v598);
        stdlib.assert(v601, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        sim_r.txns.push({
          amt: v600,
          kind: 'from',
          to: v71,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc8, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
        sim_r.isHalt = true;
        
        return sim_r;
        })));
      const [] = txn4.data;
      const v602 = txn4.time;
      const v598 = txn4.from;
      stdlib.assert(true, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: null,
        who: 'Attacher'
        });
      const v600 = stdlib.add(v75, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      ;
      const v601 = stdlib.addressEq(v71, v598);
      stdlib.assert(v601, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
        });
      ;
      stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:97:84:decimal', stdlib.UInt_max, 0)), {
        at: './reach/index.rsh:60:63:application',
        fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:97:83:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:97:66:function exp)', 'at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Attacher'
        });
      return;
      }
    else {
      const [v84, v85] = txn3.data;
      const v89 = txn3.time;
      const v83 = txn3.from;
      stdlib.assert(true, {
        at: './reach/index.rsh:96:27:dot',
        fs: [],
        msg: null,
        who: 'Attacher'
        });
      const v87 = stdlib.add(v75, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
      ;
      const v88 = stdlib.addressEq(v61, v83);
      stdlib.assert(v88, {
        at: './reach/index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
        });
      const v91 = stdlib.digest(ctc4, [v84, v85]);
      const v92 = stdlib.digestEq(v64, v91);
      stdlib.assert(v92, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./reach/index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Attacher'
        });
      const v109 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v110 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v112 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
      const v113 = stdlib.add(v109, v112);
      const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v118 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v119 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v121 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
      const v122 = stdlib.add(v118, v121);
      const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v127 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v128 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v130 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
      const v131 = stdlib.add(v127, v130);
      const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v136 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v137 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v139 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v137);
      const v140 = stdlib.add(v136, v139);
      const v141 = stdlib.mod(v140, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v145 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v146 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
      const v148 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v146);
      const v149 = stdlib.add(v145, v148);
      const v150 = stdlib.mod(v149, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v163 = stdlib.eq(v114, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v164 = v163 ? v123 : v114;
      const v167 = stdlib.eq(v164, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v168 = v167 ? v132 : v164;
      const v171 = stdlib.eq(v168, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v172 = v171 ? v141 : v168;
      const v175 = stdlib.eq(v172, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v176 = v175 ? v150 : v172;
      let v179 = v72;
      let v180 = v85;
      let v181 = v176;
      let v182 = stdlib.checkedBigNumberify('./reach/index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      let v639 = v89;
      let v641 = v87;
      
      while ((() => {
        const v192 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v192;})()) {
        const v193 = stdlib.mod(v182, stdlib.checkedBigNumberify('./reach/index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v194 = stdlib.eq(v193, stdlib.checkedBigNumberify('./reach/index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v194) {
          const v199 = stdlib.protect(ctc1, await interact.getHands(), {
            at: './reach/index.rsh:107:72:application',
            fs: ['at ./reach/index.rsh:106:43:application call to [unknown function] (defined at: ./reach/index.rsh:106:47:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
            msg: 'getHands',
            who: 'Attacher'
            });
          const v201 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./reach/index.rsh:108:84:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./reach/index.rsh:106:43:application call to [unknown function] (defined at: ./reach/index.rsh:106:47:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
            msg: 'random',
            who: 'Attacher'
            });
          const v202 = stdlib.digest(ctc4, [v201, v199]);
          const txn4 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2], [v61, v63, v71, v78, v182, v639, v641, v202], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc2], true, true, v63, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
            const [v205] = txn4.data;
            const v209 = txn4.time;
            const v204 = txn4.from;
            
            stdlib.assert(true, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Attacher'
              });
            const v207 = stdlib.add(v641, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v208 = stdlib.addressEq(v71, v204);
            stdlib.assert(v208, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
              });
            sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207, v209]);
            sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207]);
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.recv(9, 0, [], false, false));
            const [] = txn5.data;
            const v284 = txn5.time;
            const v280 = txn5.from;
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Attacher'
              });
            const v282 = stdlib.add(v641, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            ;
            const v283 = stdlib.addressEq(v61, v280);
            stdlib.assert(v283, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
              });
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
              at: './reach/index.rsh:60:63:application',
              fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:111:96:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:111:79:function exp)', 'at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Attacher'
              });
            return;
            }
          else {
            const [v205] = txn4.data;
            const v209 = txn4.time;
            const v204 = txn4.from;
            stdlib.assert(true, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Attacher'
              });
            const v207 = stdlib.add(v641, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
            ;
            const v208 = stdlib.addressEq(v71, v204);
            stdlib.assert(v208, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
              });
            const txn5 = await (ctc.recv(10, 1, [ctc1], false, v63));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0], [v61, v63, v71, v78, v182, v205, v207, v209], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207, v209]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207]);
                const [] = txn6.data;
                const v262 = txn6.time;
                const v258 = txn6.from;
                
                stdlib.assert(true, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v260 = stdlib.add(v207, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v261 = stdlib.addressEq(v71, v258);
                stdlib.assert(v261, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                  });
                sim_r.txns.push({
                  amt: v260,
                  kind: 'from',
                  to: v71,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.isHalt = true;
                
                return sim_r;
                })));
              const [] = txn6.data;
              const v262 = txn6.time;
              const v258 = txn6.from;
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Attacher'
                });
              const v260 = stdlib.add(v207, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              ;
              const v261 = stdlib.addressEq(v71, v258);
              stdlib.assert(v261, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                });
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:132:82:decimal', stdlib.UInt_max, 0)), {
                at: './reach/index.rsh:60:63:application',
                fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:119:94:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:119:78:function exp)', 'at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Attacher'
                });
              return;
              }
            else {
              const [v215] = txn5.data;
              const v219 = txn5.time;
              const v214 = txn5.from;
              stdlib.assert(true, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Attacher'
                });
              const v217 = stdlib.add(v207, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
              ;
              const v218 = stdlib.addressEq(v61, v214);
              stdlib.assert(v218, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                });
              const txn6 = await (ctc.sendrecv(12, 2, stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 8), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0, ctc0, ctc1], [v61, v63, v71, v78, v182, v205, v215, v217, v219, v201, v199], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, v63, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217, v219]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217]);
                const [v224, v225] = txn6.data;
                const v229 = txn6.time;
                const v223 = txn6.from;
                
                stdlib.assert(true, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v227 = stdlib.add(v217, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v228 = stdlib.addressEq(v71, v223);
                stdlib.assert(v228, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                  });
                const v231 = stdlib.digest(ctc4, [v224, v225]);
                const v232 = stdlib.digestEq(v205, v231);
                stdlib.assert(v232, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./reach/index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v315 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v316 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v318 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v316);
                const v319 = stdlib.add(v315, v318);
                const v320 = stdlib.mod(v319, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v324 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v325 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v327 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v325);
                const v328 = stdlib.add(v324, v327);
                const v329 = stdlib.mod(v328, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v333 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v334 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v336 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v334);
                const v337 = stdlib.add(v333, v336);
                const v338 = stdlib.mod(v337, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v342 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v343 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v345 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v343);
                const v346 = stdlib.add(v342, v345);
                const v347 = stdlib.mod(v346, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v351 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v352 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v354 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v352);
                const v355 = stdlib.add(v351, v354);
                const v356 = stdlib.mod(v355, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v369 = stdlib.eq(v320, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v370 = v369 ? v329 : v320;
                const v373 = stdlib.eq(v370, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v374 = v373 ? v338 : v370;
                const v377 = stdlib.eq(v374, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v378 = v377 ? v347 : v374;
                const v381 = stdlib.eq(v378, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v382 = v381 ? v356 : v378;
                const v385 = stdlib.add(v182, stdlib.checkedBigNumberify('./reach/index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv179 = v225;
                const cv180 = v215;
                const cv181 = v382;
                const cv182 = v385;
                const cv639 = v229;
                const cv641 = v227;
                
                (() => {
                  const v179 = cv179;
                  const v180 = cv180;
                  const v181 = cv181;
                  const v182 = cv182;
                  const v639 = cv639;
                  const v641 = cv641;
                  
                  if ((() => {
                    const v192 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v192;})()) {
                    const v193 = stdlib.mod(v182, stdlib.checkedBigNumberify('./reach/index.rsh:131:39:decimal', stdlib.UInt_max, 2));
                    const v194 = stdlib.eq(v193, stdlib.checkedBigNumberify('./reach/index.rsh:131:44:decimal', stdlib.UInt_max, 0));
                    if (v194) {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.isHalt = false;
                      }}
                  else {
                    const v577 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v582 = v577 ? v61 : v71;
                    sim_r.txns.push({
                      amt: v78,
                      kind: 'from',
                      to: v582,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.nextSt = stdlib.digest(ctc8, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                })));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.recv(13, 0, [], false, false));
                const [] = txn7.data;
                const v240 = txn7.time;
                const v236 = txn7.from;
                stdlib.assert(true, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v238 = stdlib.add(v217, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                ;
                const v239 = stdlib.addressEq(v61, v236);
                stdlib.assert(v239, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                  });
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
                  at: './reach/index.rsh:60:63:application',
                  fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:125:95:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:125:79:function exp)', 'at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Attacher'
                  });
                return;
                }
              else {
                const [v224, v225] = txn6.data;
                const v229 = txn6.time;
                const v223 = txn6.from;
                stdlib.assert(true, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v227 = stdlib.add(v217, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
                ;
                const v228 = stdlib.addressEq(v71, v223);
                stdlib.assert(v228, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                  });
                const v231 = stdlib.digest(ctc4, [v224, v225]);
                const v232 = stdlib.digestEq(v205, v231);
                stdlib.assert(v232, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./reach/index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v315 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v316 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v318 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v316);
                const v319 = stdlib.add(v315, v318);
                const v320 = stdlib.mod(v319, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v324 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v325 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v327 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v325);
                const v328 = stdlib.add(v324, v327);
                const v329 = stdlib.mod(v328, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v333 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v334 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v336 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v334);
                const v337 = stdlib.add(v333, v336);
                const v338 = stdlib.mod(v337, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v342 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v343 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v345 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v343);
                const v346 = stdlib.add(v342, v345);
                const v347 = stdlib.mod(v346, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v351 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v352 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v354 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v352);
                const v355 = stdlib.add(v351, v354);
                const v356 = stdlib.mod(v355, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v369 = stdlib.eq(v320, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v370 = v369 ? v329 : v320;
                const v373 = stdlib.eq(v370, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v374 = v373 ? v338 : v370;
                const v377 = stdlib.eq(v374, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v378 = v377 ? v347 : v374;
                const v381 = stdlib.eq(v378, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v382 = v381 ? v356 : v378;
                const v385 = stdlib.add(v182, stdlib.checkedBigNumberify('./reach/index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv179 = v225;
                const cv180 = v215;
                const cv181 = v382;
                const cv182 = v385;
                const cv639 = v229;
                const cv641 = v227;
                
                v179 = cv179;
                v180 = cv180;
                v181 = cv181;
                v182 = cv182;
                v639 = cv639;
                v641 = cv641;
                
                continue;}
              }
            }
          }
        else {
          const txn4 = await (ctc.recv(14, 1, [ctc2], false, v63));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv(15, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0], [v61, v63, v71, v78, v182, v639, v641], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
              const [] = txn5.data;
              const v475 = txn5.time;
              const v471 = txn5.from;
              
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Attacher'
                });
              const v473 = stdlib.add(v641, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v474 = stdlib.addressEq(v71, v471);
              stdlib.assert(v474, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                });
              sim_r.txns.push({
                amt: v473,
                kind: 'from',
                to: v71,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn5.data;
            const v475 = txn5.time;
            const v471 = txn5.from;
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Attacher'
              });
            const v473 = stdlib.add(v641, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            ;
            const v474 = stdlib.addressEq(v71, v471);
            stdlib.assert(v474, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
              });
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
              at: './reach/index.rsh:60:63:application',
              fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:111:96:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:111:79:function exp)', 'at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Attacher'
              });
            return;
            }
          else {
            const [v396] = txn4.data;
            const v400 = txn4.time;
            const v395 = txn4.from;
            stdlib.assert(true, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Attacher'
              });
            const v398 = stdlib.add(v641, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
            ;
            const v399 = stdlib.addressEq(v61, v395);
            stdlib.assert(v399, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
              });
            const v404 = stdlib.protect(ctc1, await interact.getHands(), {
              at: './reach/index.rsh:117:83:application',
              fs: ['at ./reach/index.rsh:116:44:application call to [unknown function] (defined at: ./reach/index.rsh:116:48:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'getHands',
              who: 'Attacher'
              });
            const txn5 = await (ctc.sendrecv(16, 1, stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 7), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1], [v61, v63, v71, v78, v182, v396, v398, v400, v404], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, v63, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398, v400]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398]);
              const [v406] = txn5.data;
              const v410 = txn5.time;
              const v405 = txn5.from;
              
              stdlib.assert(true, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Attacher'
                });
              const v408 = stdlib.add(v398, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v409 = stdlib.addressEq(v71, v405);
              stdlib.assert(v409, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                });
              sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408, v410]);
              sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408]);
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv(17, 0, [], false, false));
              const [] = txn6.data;
              const v453 = txn6.time;
              const v449 = txn6.from;
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Attacher'
                });
              const v451 = stdlib.add(v398, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              ;
              const v452 = stdlib.addressEq(v61, v449);
              stdlib.assert(v452, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                });
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:136:83:decimal', stdlib.UInt_max, 1)), {
                at: './reach/index.rsh:60:63:application',
                fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:119:94:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:119:78:function exp)', 'at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Attacher'
                });
              return;
              }
            else {
              const [v406] = txn5.data;
              const v410 = txn5.time;
              const v405 = txn5.from;
              stdlib.assert(true, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Attacher'
                });
              const v408 = stdlib.add(v398, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
              ;
              const v409 = stdlib.addressEq(v71, v405);
              stdlib.assert(v409, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                });
              const txn6 = await (ctc.recv(18, 2, [ctc0, ctc1], false, v63));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.sendrecv(19, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0], [v61, v63, v71, v78, v182, v396, v406, v408, v410], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408, v410]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408]);
                  const [] = txn7.data;
                  const v431 = txn7.time;
                  const v427 = txn7.from;
                  
                  stdlib.assert(true, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                    msg: null,
                    who: 'Attacher'
                    });
                  const v429 = stdlib.add(v408, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v430 = stdlib.addressEq(v71, v427);
                  stdlib.assert(v430, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                    msg: 'sender correct',
                    who: 'Attacher'
                    });
                  sim_r.txns.push({
                    amt: v429,
                    kind: 'from',
                    to: v71,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.nextSt = stdlib.digest(ctc8, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  })));
                const [] = txn7.data;
                const v431 = txn7.time;
                const v427 = txn7.from;
                stdlib.assert(true, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v429 = stdlib.add(v408, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                ;
                const v430 = stdlib.addressEq(v71, v427);
                stdlib.assert(v430, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                  });
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
                  at: './reach/index.rsh:60:63:application',
                  fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:125:95:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:125:79:function exp)', 'at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Attacher'
                  });
                return;
                }
              else {
                const [v415, v416] = txn6.data;
                const v420 = txn6.time;
                const v414 = txn6.from;
                stdlib.assert(true, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v418 = stdlib.add(v408, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
                ;
                const v419 = stdlib.addressEq(v61, v414);
                stdlib.assert(v419, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                  });
                const v422 = stdlib.digest(ctc4, [v415, v416]);
                const v423 = stdlib.digestEq(v396, v422);
                stdlib.assert(v423, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./reach/index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                  });
                const v506 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v507 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v509 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v507);
                const v510 = stdlib.add(v506, v509);
                const v511 = stdlib.mod(v510, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v515 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v516 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v518 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v516);
                const v519 = stdlib.add(v515, v518);
                const v520 = stdlib.mod(v519, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v524 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v525 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v527 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v525);
                const v528 = stdlib.add(v524, v527);
                const v529 = stdlib.mod(v528, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v533 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v534 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v536 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v534);
                const v537 = stdlib.add(v533, v536);
                const v538 = stdlib.mod(v537, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v542 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v543 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v545 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v543);
                const v546 = stdlib.add(v542, v545);
                const v547 = stdlib.mod(v546, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v560 = stdlib.eq(v511, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v561 = v560 ? v520 : v511;
                const v564 = stdlib.eq(v561, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v565 = v564 ? v529 : v561;
                const v568 = stdlib.eq(v565, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v569 = v568 ? v538 : v565;
                const v572 = stdlib.eq(v569, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v573 = v572 ? v547 : v569;
                const v576 = stdlib.add(v182, stdlib.checkedBigNumberify('./reach/index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv179 = v406;
                const cv180 = v416;
                const cv181 = v573;
                const cv182 = v576;
                const cv639 = v420;
                const cv641 = v418;
                
                v179 = cv179;
                v180 = cv180;
                v181 = cv181;
                v182 = cv182;
                v639 = cv639;
                v641 = cv641;
                
                continue;}
              }
            }
          }}
      const v577 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v582 = v577 ? v61 : v71;
      ;
      stdlib.protect(ctc5, await interact.seeOutcome(v181, v180, v179), {
        at: './reach/index.rsh:150:52:application',
        fs: ['at ./reach/index.rsh:149:29:application call to [unknown function] (defined at: ./reach/index.rsh:149:40:function exp)'],
        msg: 'seeOutcome',
        who: 'Attacher'
        });
      return;}
    }
  
  
  };
export async function Deployer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0]);
  
  
  const v53 = await ctc.creationTime();
  const v49 = stdlib.protect(ctc0, interact.deadline, null);
  const v50 = stdlib.protect(ctc1, interact.firstHands, null);
  const v51 = stdlib.protect(ctc0, interact.wager, null);
  const v58 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./reach/index.rsh:68:98:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./reach/index.rsh:64:31:application call to [unknown function] (defined at: ./reach/index.rsh:64:35:function exp)'],
    msg: 'random',
    who: 'Deployer'
    });
  const v59 = stdlib.digest(ctc2, [v58, v50]);
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./reach/index.rsh:72:27:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc3], [v53, v51, v49, v59], [v51, []], [ctc0, ctc0, ctc3], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./reach/index.rsh:72:27:dot', stdlib.UInt_max, 0), v53]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./reach/index.rsh:72:27:dot', stdlib.UInt_max, 0)]);
    const [v62, v63, v64] = txn1.data;
    const v67 = txn1.time;
    const v61 = txn1.from;
    
    stdlib.assert(true, {
      at: './reach/index.rsh:72:27:dot',
      fs: [],
      msg: null,
      who: 'Deployer'
      });
    const v66 = stdlib.add(stdlib.checkedBigNumberify('./reach/index.rsh:compileDApp', stdlib.UInt_max, 0), v62);
    sim_r.txns.push({
      amt: v62,
      kind: 'to',
      tok: undefined
      });
    stdlib.assert(true, {
      at: './reach/index.rsh:72:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    sim_r.nextSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./reach/index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v61, v62, v63, v64, v66, v67]);
    sim_r.nextSt_noTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./reach/index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v61, v62, v63, v64, v66]);
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v62, v63, v64] = txn1.data;
  const v67 = txn1.time;
  const v61 = txn1.from;
  stdlib.assert(true, {
    at: './reach/index.rsh:72:27:dot',
    fs: [],
    msg: null,
    who: 'Deployer'
    });
  const v66 = stdlib.add(stdlib.checkedBigNumberify('./reach/index.rsh:compileDApp', stdlib.UInt_max, 0), v62);
  ;
  stdlib.assert(true, {
    at: './reach/index.rsh:72:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  const txn2 = await (ctc.recv(2, 2, [ctc1, ctc4], false, v63));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v61, v62, v63, v64, v66, v67], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66, v67]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66]);
      const [] = txn3.data;
      const v623 = txn3.time;
      const v619 = txn3.from;
      
      stdlib.assert(true, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      const v621 = stdlib.add(v66, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v622 = stdlib.addressEq(v61, v619);
      stdlib.assert(v622, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      sim_r.txns.push({
        amt: v621,
        kind: 'from',
        to: v61,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc6, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v623 = txn3.time;
    const v619 = txn3.from;
    stdlib.assert(true, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: null,
      who: 'Deployer'
      });
    const v621 = stdlib.add(v66, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    ;
    const v622 = stdlib.addressEq(v61, v619);
    stdlib.assert(v622, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Deployer'
      });
    ;
    stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:86:84:decimal', stdlib.UInt_max, 1)), {
      at: './reach/index.rsh:60:63:application',
      fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:86:83:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:86:66:function exp)', 'at ./reach/index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
      });
    return;
    }
  else {
    const [v72, v73] = txn2.data;
    const v76 = txn2.time;
    const v71 = txn2.from;
    stdlib.assert(true, {
      at: './reach/index.rsh:84:27:dot',
      fs: [],
      msg: null,
      who: 'Deployer'
      });
    const v75 = stdlib.add(v66, v62);
    ;
    stdlib.assert(true, {
      at: './reach/index.rsh:84:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
      });
    const v78 = stdlib.mul(stdlib.checkedBigNumberify('./reach/index.rsh:90:46:decimal', stdlib.UInt_max, 2), v62);
    stdlib.protect(ctc5, await interact.informOpponent(v73), {
      at: './reach/index.rsh:93:56:application',
      fs: ['at ./reach/index.rsh:92:31:application call to [unknown function] (defined at: ./reach/index.rsh:92:35:function exp)'],
      msg: 'informOpponent',
      who: 'Deployer'
      });
    const txn3 = await (ctc.sendrecv(4, 2, stdlib.checkedBigNumberify('./reach/index.rsh:96:27:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1], [v61, v63, v64, v71, v72, v75, v76, v78, v58, v50], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, v63, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:96:27:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v76, v78]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./reach/index.rsh:96:27:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v78]);
      const [v84, v85] = txn3.data;
      const v89 = txn3.time;
      const v83 = txn3.from;
      
      stdlib.assert(true, {
        at: './reach/index.rsh:96:27:dot',
        fs: [],
        msg: null,
        who: 'Deployer'
        });
      const v87 = stdlib.add(v75, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v88 = stdlib.addressEq(v61, v83);
      stdlib.assert(v88, {
        at: './reach/index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v91 = stdlib.digest(ctc2, [v84, v85]);
      const v92 = stdlib.digestEq(v64, v91);
      stdlib.assert(v92, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./reach/index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      const v109 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v110 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v112 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
      const v113 = stdlib.add(v109, v112);
      const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v118 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v119 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v121 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
      const v122 = stdlib.add(v118, v121);
      const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v127 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v128 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v130 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
      const v131 = stdlib.add(v127, v130);
      const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v136 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v137 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v139 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v137);
      const v140 = stdlib.add(v136, v139);
      const v141 = stdlib.mod(v140, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v145 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v146 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
      const v148 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v146);
      const v149 = stdlib.add(v145, v148);
      const v150 = stdlib.mod(v149, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v163 = stdlib.eq(v114, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v164 = v163 ? v123 : v114;
      const v167 = stdlib.eq(v164, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v168 = v167 ? v132 : v164;
      const v171 = stdlib.eq(v168, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v172 = v171 ? v141 : v168;
      const v175 = stdlib.eq(v172, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v176 = v175 ? v150 : v172;
      const v179 = v72;
      const v180 = v85;
      const v181 = v176;
      const v182 = stdlib.checkedBigNumberify('./reach/index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      const v639 = v89;
      const v641 = v87;
      
      if ((() => {
        const v192 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v192;})()) {
        const v193 = stdlib.mod(v182, stdlib.checkedBigNumberify('./reach/index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v194 = stdlib.eq(v193, stdlib.checkedBigNumberify('./reach/index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v194) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
          sim_r.isHalt = false;
          }
        else {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
          sim_r.isHalt = false;
          }}
      else {
        const v577 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v582 = v577 ? v61 : v71;
        sim_r.txns.push({
          amt: v78,
          kind: 'from',
          to: v582,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.nextSt = stdlib.digest(ctc6, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
        sim_r.isHalt = true;
        }
      return sim_r;
      })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv(5, 0, [], false, false));
      const [] = txn4.data;
      const v602 = txn4.time;
      const v598 = txn4.from;
      stdlib.assert(true, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      const v600 = stdlib.add(v75, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      ;
      const v601 = stdlib.addressEq(v71, v598);
      stdlib.assert(v601, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      ;
      stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:97:84:decimal', stdlib.UInt_max, 0)), {
        at: './reach/index.rsh:60:63:application',
        fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:97:83:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:97:66:function exp)', 'at ./reach/index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Deployer'
        });
      return;
      }
    else {
      const [v84, v85] = txn3.data;
      const v89 = txn3.time;
      const v83 = txn3.from;
      stdlib.assert(true, {
        at: './reach/index.rsh:96:27:dot',
        fs: [],
        msg: null,
        who: 'Deployer'
        });
      const v87 = stdlib.add(v75, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
      ;
      const v88 = stdlib.addressEq(v61, v83);
      stdlib.assert(v88, {
        at: './reach/index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v91 = stdlib.digest(ctc2, [v84, v85]);
      const v92 = stdlib.digestEq(v64, v91);
      stdlib.assert(v92, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./reach/index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Deployer'
        });
      const v109 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v110 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v112 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
      const v113 = stdlib.add(v109, v112);
      const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v118 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v119 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v121 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
      const v122 = stdlib.add(v118, v121);
      const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v127 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v128 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v130 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
      const v131 = stdlib.add(v127, v130);
      const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v136 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v137 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v139 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v137);
      const v140 = stdlib.add(v136, v139);
      const v141 = stdlib.mod(v140, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v145 = v85[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v146 = v72[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
      const v148 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v146);
      const v149 = stdlib.add(v145, v148);
      const v150 = stdlib.mod(v149, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v163 = stdlib.eq(v114, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v164 = v163 ? v123 : v114;
      const v167 = stdlib.eq(v164, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v168 = v167 ? v132 : v164;
      const v171 = stdlib.eq(v168, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v172 = v171 ? v141 : v168;
      const v175 = stdlib.eq(v172, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v176 = v175 ? v150 : v172;
      let v179 = v72;
      let v180 = v85;
      let v181 = v176;
      let v182 = stdlib.checkedBigNumberify('./reach/index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      let v639 = v89;
      let v641 = v87;
      
      while ((() => {
        const v192 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v192;})()) {
        const v193 = stdlib.mod(v182, stdlib.checkedBigNumberify('./reach/index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v194 = stdlib.eq(v193, stdlib.checkedBigNumberify('./reach/index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v194) {
          const txn4 = await (ctc.recv(8, 1, [ctc3], false, v63));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv(9, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0], [v61, v63, v71, v78, v182, v639, v641], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
              const [] = txn5.data;
              const v284 = txn5.time;
              const v280 = txn5.from;
              
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Deployer'
                });
              const v282 = stdlib.add(v641, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v283 = stdlib.addressEq(v61, v280);
              stdlib.assert(v283, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                });
              sim_r.txns.push({
                amt: v282,
                kind: 'from',
                to: v61,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc6, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn5.data;
            const v284 = txn5.time;
            const v280 = txn5.from;
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v282 = stdlib.add(v641, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            ;
            const v283 = stdlib.addressEq(v61, v280);
            stdlib.assert(v283, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
              at: './reach/index.rsh:60:63:application',
              fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:111:96:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:111:79:function exp)', 'at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Deployer'
              });
            return;
            }
          else {
            const [v205] = txn4.data;
            const v209 = txn4.time;
            const v204 = txn4.from;
            stdlib.assert(true, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v207 = stdlib.add(v641, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
            ;
            const v208 = stdlib.addressEq(v71, v204);
            stdlib.assert(v208, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            const v213 = stdlib.protect(ctc1, await interact.getHands(), {
              at: './reach/index.rsh:117:83:application',
              fs: ['at ./reach/index.rsh:116:44:application call to [unknown function] (defined at: ./reach/index.rsh:116:48:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'getHands',
              who: 'Deployer'
              });
            const txn5 = await (ctc.sendrecv(10, 1, stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1], [v61, v63, v71, v78, v182, v205, v207, v209, v213], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1], true, true, v63, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207, v209]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207]);
              const [v215] = txn5.data;
              const v219 = txn5.time;
              const v214 = txn5.from;
              
              stdlib.assert(true, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Deployer'
                });
              const v217 = stdlib.add(v207, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v218 = stdlib.addressEq(v61, v214);
              stdlib.assert(v218, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                });
              sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217, v219]);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217]);
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv(11, 0, [], false, false));
              const [] = txn6.data;
              const v262 = txn6.time;
              const v258 = txn6.from;
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Deployer'
                });
              const v260 = stdlib.add(v207, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              ;
              const v261 = stdlib.addressEq(v71, v258);
              stdlib.assert(v261, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                });
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:132:82:decimal', stdlib.UInt_max, 0)), {
                at: './reach/index.rsh:60:63:application',
                fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:119:94:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:119:78:function exp)', 'at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Deployer'
                });
              return;
              }
            else {
              const [v215] = txn5.data;
              const v219 = txn5.time;
              const v214 = txn5.from;
              stdlib.assert(true, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Deployer'
                });
              const v217 = stdlib.add(v207, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
              ;
              const v218 = stdlib.addressEq(v61, v214);
              stdlib.assert(v218, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                });
              const txn6 = await (ctc.recv(12, 2, [ctc0, ctc1], false, v63));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.sendrecv(13, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0], [v61, v63, v71, v78, v182, v205, v215, v217, v219], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn7) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217, v219]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217]);
                  const [] = txn7.data;
                  const v240 = txn7.time;
                  const v236 = txn7.from;
                  
                  stdlib.assert(true, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                    msg: null,
                    who: 'Deployer'
                    });
                  const v238 = stdlib.add(v217, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  sim_r.txns.push({
                    amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                    kind: 'to',
                    tok: undefined
                    });
                  const v239 = stdlib.addressEq(v61, v236);
                  stdlib.assert(v239, {
                    at: 'reach standard library:209:7:dot',
                    fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                    msg: 'sender correct',
                    who: 'Deployer'
                    });
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v61,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.nextSt = stdlib.digest(ctc6, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  })));
                const [] = txn7.data;
                const v240 = txn7.time;
                const v236 = txn7.from;
                stdlib.assert(true, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v238 = stdlib.add(v217, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                ;
                const v239 = stdlib.addressEq(v61, v236);
                stdlib.assert(v239, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                  });
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
                  at: './reach/index.rsh:60:63:application',
                  fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:125:95:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:125:79:function exp)', 'at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Deployer'
                  });
                return;
                }
              else {
                const [v224, v225] = txn6.data;
                const v229 = txn6.time;
                const v223 = txn6.from;
                stdlib.assert(true, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v227 = stdlib.add(v217, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
                ;
                const v228 = stdlib.addressEq(v71, v223);
                stdlib.assert(v228, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                  });
                const v231 = stdlib.digest(ctc2, [v224, v225]);
                const v232 = stdlib.digestEq(v205, v231);
                stdlib.assert(v232, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./reach/index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./reach/index.rsh:132:75:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v315 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v316 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v318 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v316);
                const v319 = stdlib.add(v315, v318);
                const v320 = stdlib.mod(v319, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v324 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v325 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v327 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v325);
                const v328 = stdlib.add(v324, v327);
                const v329 = stdlib.mod(v328, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v333 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v334 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v336 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v334);
                const v337 = stdlib.add(v333, v336);
                const v338 = stdlib.mod(v337, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v342 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v343 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v345 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v343);
                const v346 = stdlib.add(v342, v345);
                const v347 = stdlib.mod(v346, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v351 = v215[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v352 = v225[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v354 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v352);
                const v355 = stdlib.add(v351, v354);
                const v356 = stdlib.mod(v355, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v369 = stdlib.eq(v320, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v370 = v369 ? v329 : v320;
                const v373 = stdlib.eq(v370, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v374 = v373 ? v338 : v370;
                const v377 = stdlib.eq(v374, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v378 = v377 ? v347 : v374;
                const v381 = stdlib.eq(v378, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v382 = v381 ? v356 : v378;
                const v385 = stdlib.add(v182, stdlib.checkedBigNumberify('./reach/index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv179 = v225;
                const cv180 = v215;
                const cv181 = v382;
                const cv182 = v385;
                const cv639 = v229;
                const cv641 = v227;
                
                v179 = cv179;
                v180 = cv180;
                v181 = cv181;
                v182 = cv182;
                v639 = cv639;
                v641 = cv641;
                
                continue;}
              }
            }
          }
        else {
          const v390 = stdlib.protect(ctc1, await interact.getHands(), {
            at: './reach/index.rsh:107:72:application',
            fs: ['at ./reach/index.rsh:106:43:application call to [unknown function] (defined at: ./reach/index.rsh:106:47:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
            msg: 'getHands',
            who: 'Deployer'
            });
          const v392 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./reach/index.rsh:108:84:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./reach/index.rsh:106:43:application call to [unknown function] (defined at: ./reach/index.rsh:106:47:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
            msg: 'random',
            who: 'Deployer'
            });
          const v393 = stdlib.digest(ctc2, [v392, v390]);
          const txn4 = await (ctc.sendrecv(14, 1, stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc3], [v61, v63, v71, v78, v182, v639, v641, v393], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc3], true, true, v63, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
            const [v396] = txn4.data;
            const v400 = txn4.time;
            const v395 = txn4.from;
            
            stdlib.assert(true, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v398 = stdlib.add(v641, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v399 = stdlib.addressEq(v61, v395);
            stdlib.assert(v399, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398, v400]);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398]);
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.recv(15, 0, [], false, false));
            const [] = txn5.data;
            const v475 = txn5.time;
            const v471 = txn5.from;
            stdlib.assert(true, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v473 = stdlib.add(v641, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            ;
            const v474 = stdlib.addressEq(v71, v471);
            stdlib.assert(v474, {
              at: 'reach standard library:209:7:dot',
              fs: ['at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
              at: './reach/index.rsh:60:63:application',
              fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:111:96:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:111:79:function exp)', 'at ./reach/index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Deployer'
              });
            return;
            }
          else {
            const [v396] = txn4.data;
            const v400 = txn4.time;
            const v395 = txn4.from;
            stdlib.assert(true, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v398 = stdlib.add(v641, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
            ;
            const v399 = stdlib.addressEq(v61, v395);
            stdlib.assert(v399, {
              at: './reach/index.rsh:110:39:dot',
              fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            const txn5 = await (ctc.recv(16, 1, [ctc1], false, v63));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv(17, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v61, v63, v71, v78, v182, v396, v398, v400], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398, v400]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398]);
                const [] = txn6.data;
                const v453 = txn6.time;
                const v449 = txn6.from;
                
                stdlib.assert(true, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v451 = stdlib.add(v398, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v452 = stdlib.addressEq(v61, v449);
                stdlib.assert(v452, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                  });
                sim_r.txns.push({
                  amt: v451,
                  kind: 'from',
                  to: v61,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc6, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                sim_r.isHalt = true;
                
                return sim_r;
                })));
              const [] = txn6.data;
              const v453 = txn6.time;
              const v449 = txn6.from;
              stdlib.assert(true, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Deployer'
                });
              const v451 = stdlib.add(v398, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              ;
              const v452 = stdlib.addressEq(v61, v449);
              stdlib.assert(v452, {
                at: 'reach standard library:209:7:dot',
                fs: ['at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                });
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:136:83:decimal', stdlib.UInt_max, 1)), {
                at: './reach/index.rsh:60:63:application',
                fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:119:94:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:119:78:function exp)', 'at ./reach/index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Deployer'
                });
              return;
              }
            else {
              const [v406] = txn5.data;
              const v410 = txn5.time;
              const v405 = txn5.from;
              stdlib.assert(true, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: null,
                who: 'Deployer'
                });
              const v408 = stdlib.add(v398, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
              ;
              const v409 = stdlib.addressEq(v71, v405);
              stdlib.assert(v409, {
                at: './reach/index.rsh:118:40:dot',
                fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                });
              const txn6 = await (ctc.sendrecv(18, 2, stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0, ctc0, ctc1], [v61, v63, v71, v78, v182, v396, v406, v408, v410, v392, v390], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, v63, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408, v410]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408]);
                const [v415, v416] = txn6.data;
                const v420 = txn6.time;
                const v414 = txn6.from;
                
                stdlib.assert(true, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v418 = stdlib.add(v408, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v419 = stdlib.addressEq(v61, v414);
                stdlib.assert(v419, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                  });
                const v422 = stdlib.digest(ctc2, [v415, v416]);
                const v423 = stdlib.digestEq(v396, v422);
                stdlib.assert(v423, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./reach/index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v506 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v507 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v509 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v507);
                const v510 = stdlib.add(v506, v509);
                const v511 = stdlib.mod(v510, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v515 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v516 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v518 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v516);
                const v519 = stdlib.add(v515, v518);
                const v520 = stdlib.mod(v519, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v524 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v525 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v527 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v525);
                const v528 = stdlib.add(v524, v527);
                const v529 = stdlib.mod(v528, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v533 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v534 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v536 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v534);
                const v537 = stdlib.add(v533, v536);
                const v538 = stdlib.mod(v537, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v542 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v543 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v545 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v543);
                const v546 = stdlib.add(v542, v545);
                const v547 = stdlib.mod(v546, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v560 = stdlib.eq(v511, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v561 = v560 ? v520 : v511;
                const v564 = stdlib.eq(v561, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v565 = v564 ? v529 : v561;
                const v568 = stdlib.eq(v565, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v569 = v568 ? v538 : v565;
                const v572 = stdlib.eq(v569, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v573 = v572 ? v547 : v569;
                const v576 = stdlib.add(v182, stdlib.checkedBigNumberify('./reach/index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv179 = v406;
                const cv180 = v416;
                const cv181 = v573;
                const cv182 = v576;
                const cv639 = v420;
                const cv641 = v418;
                
                (() => {
                  const v179 = cv179;
                  const v180 = cv180;
                  const v181 = cv181;
                  const v182 = cv182;
                  const v639 = cv639;
                  const v641 = cv641;
                  
                  if ((() => {
                    const v192 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v192;})()) {
                    const v193 = stdlib.mod(v182, stdlib.checkedBigNumberify('./reach/index.rsh:131:39:decimal', stdlib.UInt_max, 2));
                    const v194 = stdlib.eq(v193, stdlib.checkedBigNumberify('./reach/index.rsh:131:44:decimal', stdlib.UInt_max, 0));
                    if (v194) {
                      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.isHalt = false;
                      }}
                  else {
                    const v577 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v582 = v577 ? v61 : v71;
                    sim_r.txns.push({
                      amt: v78,
                      kind: 'from',
                      to: v582,
                      tok: undefined
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined
                      })
                    sim_r.nextSt = stdlib.digest(ctc6, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                })));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.recv(19, 0, [], false, false));
                const [] = txn7.data;
                const v431 = txn7.time;
                const v427 = txn7.from;
                stdlib.assert(true, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v429 = stdlib.add(v408, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                ;
                const v430 = stdlib.addressEq(v71, v427);
                stdlib.assert(v430, {
                  at: 'reach standard library:209:7:dot',
                  fs: ['at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                  });
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./reach/index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
                  at: './reach/index.rsh:60:63:application',
                  fs: ['at ./reach/index.rsh:59:37:application call to [unknown function] (defined at: ./reach/index.rsh:59:48:function exp)', 'at ./reach/index.rsh:125:95:application call to "informTimeout" (defined at: ./reach/index.rsh:58:53:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./reach/index.rsh:125:79:function exp)', 'at ./reach/index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:207:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Deployer'
                  });
                return;
                }
              else {
                const [v415, v416] = txn6.data;
                const v420 = txn6.time;
                const v414 = txn6.from;
                stdlib.assert(true, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v418 = stdlib.add(v408, stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0));
                ;
                const v419 = stdlib.addressEq(v61, v414);
                stdlib.assert(v419, {
                  at: './reach/index.rsh:124:39:dot',
                  fs: ['at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                  });
                const v422 = stdlib.digest(ctc2, [v415, v416]);
                const v423 = stdlib.digestEq(v396, v422);
                stdlib.assert(v423, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./reach/index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./reach/index.rsh:136:76:application call to "doRound" (defined at: ./reach/index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                  });
                const v506 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v507 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v509 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v507);
                const v510 = stdlib.add(v506, v509);
                const v511 = stdlib.mod(v510, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v515 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v516 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v518 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v516);
                const v519 = stdlib.add(v515, v518);
                const v520 = stdlib.mod(v519, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v524 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v525 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v527 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v525);
                const v528 = stdlib.add(v524, v527);
                const v529 = stdlib.mod(v528, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v533 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v534 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v536 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v534);
                const v537 = stdlib.add(v533, v536);
                const v538 = stdlib.mod(v537, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v542 = v416[stdlib.checkedBigNumberify('./reach/index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v543 = v406[stdlib.checkedBigNumberify('./reach/index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v545 = stdlib.sub(stdlib.checkedBigNumberify('./reach/index.rsh:7:20:decimal', stdlib.UInt_max, 4), v543);
                const v546 = stdlib.add(v542, v545);
                const v547 = stdlib.mod(v546, stdlib.checkedBigNumberify('./reach/index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v560 = stdlib.eq(v511, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v561 = v560 ? v520 : v511;
                const v564 = stdlib.eq(v561, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v565 = v564 ? v529 : v561;
                const v568 = stdlib.eq(v565, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v569 = v568 ? v538 : v565;
                const v572 = stdlib.eq(v569, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v573 = v572 ? v547 : v569;
                const v576 = stdlib.add(v182, stdlib.checkedBigNumberify('./reach/index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv179 = v406;
                const cv180 = v416;
                const cv181 = v573;
                const cv182 = v576;
                const cv639 = v420;
                const cv641 = v418;
                
                v179 = cv179;
                v180 = cv180;
                v181 = cv181;
                v182 = cv182;
                v639 = cv639;
                v641 = cv641;
                
                continue;}
              }
            }
          }}
      const v577 = stdlib.eq(v181, stdlib.checkedBigNumberify('./reach/index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v582 = v577 ? v61 : v71;
      ;
      stdlib.protect(ctc5, await interact.seeOutcome(v181, v180, v179), {
        at: './reach/index.rsh:150:52:application',
        fs: ['at ./reach/index.rsh:149:29:application call to [unknown function] (defined at: ./reach/index.rsh:149:40:function exp)'],
        msg: 'seeOutcome',
        who: 'Deployer'
        });
      return;}
    }
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m2}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
gtxn 2 Sender
byte "{{m13}}"
==
||
gtxn 2 Sender
byte "{{m14}}"
==
||
gtxn 2 Sender
byte "{{m15}}"
==
||
gtxn 2 Sender
byte "{{m16}}"
==
||
gtxn 2 Sender
byte "{{m17}}"
==
||
gtxn 2 Sender
byte "{{m18}}"
==
||
gtxn 2 Sender
byte "{{m19}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 2
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [0, 129, 241, 169, 289, 241, 0, 0, 209, 177, 249, 209, 297, 249, 209, 177, 249, 209, 297, 249],
  steps: [null, `#pragma version 3
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:72:27:dot"
// "[]"
int 1
assert
int 0
gtxna 0 ApplicationArgs 5
btoi
+
store 255
// CheckPay
// "./reach/index.rsh:72:27:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:72:27:dot"
// "[]"
int 1
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
// Handler 2
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:84:27:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 9
btoi
gtxna 0 ApplicationArgs 6
btoi
+
store 255
// CheckPay
// "./reach/index.rsh:84:27:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:84:27:dot"
// "[]"
int 1
assert
int 2
gtxna 0 ApplicationArgs 6
btoi
*
store 254
// compute state in HM_Set 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxn 0 Sender
concat
gtxna 0 ApplicationArgs 10
concat
load 255
itob
concat
load 254
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 7
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 10
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 1
int 1
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:86:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:86:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:86:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 9
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 7
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 14
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:96:27:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 10
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:96:27:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:96:27:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./reach/index.rsh:98:40:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 12
gtxna 0 ApplicationArgs 13
concat
keccak256
==
assert
gtxna 0 ApplicationArgs 13
substring 0 8
btoi
int 4
gtxna 0 ApplicationArgs 9
substring 0 8
btoi
-
+
int 3
%
dup
store 254
gtxna 0 ApplicationArgs 13
substring 8 16
btoi
int 4
gtxna 0 ApplicationArgs 9
substring 8 16
btoi
-
+
int 3
%
load 254
int 1
==
select
dup
store 253
gtxna 0 ApplicationArgs 13
substring 16 24
btoi
int 4
gtxna 0 ApplicationArgs 9
substring 16 24
btoi
-
+
int 3
%
load 253
int 1
==
select
dup
store 252
gtxna 0 ApplicationArgs 13
substring 24 32
btoi
int 4
gtxna 0 ApplicationArgs 9
substring 24 32
btoi
-
+
int 3
%
load 252
int 1
==
select
dup
store 251
gtxna 0 ApplicationArgs 13
substring 32 40
btoi
int 4
gtxna 0 ApplicationArgs 9
substring 32 40
btoi
-
+
int 3
%
load 251
int 1
==
select
dup
store 250
int 1
==
bz l0
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 11
concat
int 0
itob
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 8
gtxna 0 ApplicationArgs 5
load 250
int 2
==
select
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 11
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:97:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:97:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:97:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
gtxna 0 ApplicationArgs 8
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 8
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 10
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, null, null, `#pragma version 3
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 10
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
// compute state in HM_Set 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 11
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 10
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 11
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// compute state in HM_Set 10
int 10
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 12
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 11
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 15
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 12
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./reach/index.rsh:126:48:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 10
gtxna 0 ApplicationArgs 13
gtxna 0 ApplicationArgs 14
concat
keccak256
==
assert
gtxna 0 ApplicationArgs 11
substring 0 8
btoi
int 4
gtxna 0 ApplicationArgs 14
substring 0 8
btoi
-
+
int 3
%
dup
store 254
gtxna 0 ApplicationArgs 11
substring 8 16
btoi
int 4
gtxna 0 ApplicationArgs 14
substring 8 16
btoi
-
+
int 3
%
load 254
int 1
==
select
dup
store 253
gtxna 0 ApplicationArgs 11
substring 16 24
btoi
int 4
gtxna 0 ApplicationArgs 14
substring 16 24
btoi
-
+
int 3
%
load 253
int 1
==
select
dup
store 252
gtxna 0 ApplicationArgs 11
substring 24 32
btoi
int 4
gtxna 0 ApplicationArgs 14
substring 24 32
btoi
-
+
int 3
%
load 252
int 1
==
select
dup
store 251
gtxna 0 ApplicationArgs 11
substring 32 40
btoi
int 4
gtxna 0 ApplicationArgs 14
substring 32 40
btoi
-
+
int 3
%
load 251
int 1
==
select
store 250
gtxna 0 ApplicationArgs 9
btoi
int 1
+
store 249
load 250
int 1
==
bz l0
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
load 249
itob
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 5
load 250
int 2
==
select
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 8
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 13
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 10
int 10
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 12
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 14
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 10
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// compute state in HM_Set 14
int 14
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 11
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 15
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 11
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 10
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 16
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 14
int 14
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 11
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
// compute state in HM_Set 16
int 16
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 12
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 17
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 12
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 14
int 14
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 5
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 11
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 18
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 15
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 16
int 16
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
gtxna 0 ApplicationArgs 12
btoi
int 0
+
store 255
// CheckPay
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./reach/index.rsh:126:48:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 10
gtxna 0 ApplicationArgs 13
gtxna 0 ApplicationArgs 14
concat
keccak256
==
assert
gtxna 0 ApplicationArgs 14
substring 0 8
btoi
int 4
gtxna 0 ApplicationArgs 11
substring 0 8
btoi
-
+
int 3
%
dup
store 254
gtxna 0 ApplicationArgs 14
substring 8 16
btoi
int 4
gtxna 0 ApplicationArgs 11
substring 8 16
btoi
-
+
int 3
%
load 254
int 1
==
select
dup
store 253
gtxna 0 ApplicationArgs 14
substring 16 24
btoi
int 4
gtxna 0 ApplicationArgs 11
substring 16 24
btoi
-
+
int 3
%
load 253
int 1
==
select
dup
store 252
gtxna 0 ApplicationArgs 14
substring 24 32
btoi
int 4
gtxna 0 ApplicationArgs 11
substring 24 32
btoi
-
+
int 3
%
load 252
int 1
==
select
dup
store 251
gtxna 0 ApplicationArgs 14
substring 32 40
btoi
int 4
gtxna 0 ApplicationArgs 11
substring 32 40
btoi
-
+
int 3
%
load 251
int 1
==
select
store 250
gtxna 0 ApplicationArgs 9
btoi
int 1
+
store 249
load 250
int 1
==
bz l0
// compute state in HM_Set 6
int 6
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
load 249
itob
concat
load 255
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
pop
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 5
load 250
int 2
==
select
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 8
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
dup
gtxn 5 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
// Handler 19
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 13
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 16
int 16
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 9
concat
gtxna 0 ApplicationArgs 10
concat
gtxna 0 ApplicationArgs 11
concat
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// Nothing
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
int 1
assert
// CheckPay
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
gtxna 0 ApplicationArgs 7
==
assert
gtxn 4 Amount
gtxna 0 ApplicationArgs 12
btoi
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 5 Amount
int 0
==
assert
gtxn 5 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 5 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 6
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 4
btoi
gtxna 0 ApplicationArgs 6
btoi
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
dup
gtxn 5 FirstValid
==
assert
pop
done:
int 1
return
`],
  unsupported: false
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v53",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v215",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v215",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v219",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v225",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v215",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v219",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v406",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v406",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v416",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e18",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v406",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T39",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e19",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v72",
                "type": "uint256[5]"
              },
              {
                "internalType": "address payable",
                "name": "v73",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v72",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v85",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v72",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v53",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v215",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T24",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T25",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v215",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v219",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v224",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v225",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v215",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v217",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v219",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              }
            ],
            "internalType": "struct T31",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T32",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v406",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T34",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T35",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v398",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v400",
                "type": "uint256"
              }
            ],
            "internalType": "struct T30",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T36",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v406",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v416",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T37",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T38",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m18",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v406",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v410",
                "type": "uint256"
              }
            ],
            "internalType": "struct T33",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T39",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m19",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v72",
                "type": "uint256[5]"
              },
              {
                "internalType": "address payable",
                "name": "v73",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v72",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v84",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v85",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v64",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v72",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v75",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v76",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v61",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v63",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v182",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v641",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055612b12806100826000396000f3fe6080604052600436106101025760003560e01c80637bb6c55a11610095578063b4ee70da11610064578063b4ee70da146101f4578063b537725c14610207578063d22bdb581461021a578063d6f2b29e1461022d578063df3ceab41461024057610109565b80637bb6c55a146101a8578063888b17ac146101bb5780639cb841e4146101ce578063b14757a1146101e157610109565b8063386ba45a116100d1578063386ba45a1461015c5780633c9b9af01461016f5780633ef9c7d6146101825780636a2d4f691461019557610109565b80630caf0ab41461010e57806325a98d59146101235780632aa6c51d146101365780632bf4f8731461014957610109565b3661010957005b600080fd5b61012161011c36600461234d565b610253565b005b61012161013136600461234d565b61042c565b610121610144366004612331565b61054d565b6101216101573660046123bd565b610667565b61012161016a366004612385565b6107f0565b61012161017d366004612369565b610b68565b610121610190366004612331565b610c7a565b6101216101a336600461231f565b610e10565b6101216101b63660046123a1565b611162565b6101216101c93660046123ce565b61127c565b6101216101dc366004612385565b6113ea565b6101216101ef3660046123a1565b6116fb565b61012161020236600461234d565b61180f565b610121610215366004612369565b611927565b6101216102283660046123e0565b611a3f565b61012161023b366004612331565b611b51565b61012161024e36600461234d565b611ce4565b604051610267906006908390602001612897565b6040516020818303038152906040528051906020012060001c6000541461028d57600080fd5b600080805560408051602081019091529081526102b2602083013560a0840135612a58565b43106102bd57600080fd5b6102cc600060c0840135612a58565b815234156102d957600080fd5b336102e760208401846122fe565b6001600160a01b0316146102fa57600080fd5b7f6645f134722f09472cf0828d081bdc1c9fd608f2695ff21eb1322f1779b11b1a826040516103299190612769565b60405180910390a161038b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b61039860208401846122fe565b6001600160a01b03168152602080840135908201526103bd60608401604085016122fe565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c90600e908390602001612923565b60408051601f198184030181529190528051602090910120600055505050565b604051610440906006908390602001612897565b6040516020818303038152906040528051906020012060001c6000541461046657600080fd5b6000805561047c602082013560a0830135612a58565b4310158015610489575060015b61049257600080fd5b341561049d57600080fd5b336104ab60208301836122fe565b6001600160a01b0316146104be57600080fd5b6104cb60208201826122fe565b6001600160a01b03166108fc6104e6600060c0850135612a58565b6040518115909202916000818181858888f1935050505015801561050e573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec58160405161053e9190612786565b60405180910390a16000805533ff5b6040516105619060029083906020016129cb565b6040516020818303038152906040528051906020012060001c6000541461058757600080fd5b6000805561059e6020820135610140830135612a58565b43101580156105ab575060015b6105b457600080fd5b34156105bf57600080fd5b336105d060808301606084016122fe565b6001600160a01b0316146105e357600080fd5b6105f360808201606083016122fe565b6001600160a01b03166108fc61060f6000610120850135612a58565b6040518115909202916000818181858888f19350505050158015610637573d6000803e3d6000fd5b507f84606dd8aa7a944a019509c8d173de0673af125ea2335128823b183fd58ac9b28160405161053e9190612736565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146106a457600080fd5b600080805560408051602081019091529081526106c660208301356000612a58565b8152346020830135146106d857600080fd5b60408051833581526020808501359082015283820135818301526060808501359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a161076a6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b338152602083810135818301908152604080860135818501908152606080880135818701908152875160808089019182524360a0808b01918252875160019a81019a909a528a516001600160a01b0316978a019790975296519388019390935292519186019190915251918401919091525160c08301525160e08201526101000161040c565b6040516108049060109083906020016129a1565b6040516020818303038152906040528051906020012060001c6000541461082a57600080fd5b6000808190555061085c6040518060800160405280600081526020016000815260200160008152602001600081525090565b61086f6020830135610180840135612a58565b431061087a57600080fd5b341561088557600080fd5b3361089360208401846122fe565b6001600160a01b0316146108a657600080fd5b6040516108c2906101a0840135906101c085019060200161287d565b60408051601f19818403018152919052805160209091012060a0830135146108e957600080fd5b60036108fa60c08401356004612a8f565b610909906101c0850135612a58565b6109139190612aa6565b80825260011461092457805161094e565b600361093560e08401356004612a8f565b610944906101e0850135612a58565b61094e9190612aa6565b60208201819052600114610966578060200151610991565b60036109786101008401356004612a8f565b61098790610200850135612a58565b6109919190612aa6565b604082018190526001146109a95780604001516109d4565b60036109bb6101208401356004612a8f565b6109ca90610220850135612a58565b6109d49190612aa6565b60608201526040517fdfb849c5f273733a39dfd860be80c8bc88140960e86644f0ef7ceebac92b4f6f90610a099084906127db565b60405180910390a1610a196120d6565b610a2660208401846122fe565b81516001600160a01b0390911690528051602080850135910152610a5060608401604085016122fe565b81516001600160a01b039091166040918201528151606080860135910152805160a08181019092529060c0850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101c08501906005908390839080828437600092019190915250505060208083015101526060820151600114610ae1578160600151610b14565b6003610af36101408501356004612a8f565b6101c0850160045b6020020135610b0a9190612a58565b610b149190612aa6565b602082015160400152610b2c60016080850135612a58565b602082018051606001919091525143608090910152610b516000610160850135612a58565b602082015160a00152610b6381611ea0565b505050565b604051610b7c90600e90839060200161290e565b6040516020818303038152906040528051906020012060001c60005414610ba257600080fd5b60008055610bb8602082013560e0830135612a58565b4310158015610bc5575060015b610bce57600080fd5b3415610bd957600080fd5b33610be760208301836122fe565b6001600160a01b031614610bfa57600080fd5b610c0760208201826122fe565b6001600160a01b03166108fc610c22600060c0850135612a58565b6040518115909202916000818181858888f19350505050158015610c4a573d6000803e3d6000fd5b507f45ebc520699ff172c712e9500a8125d4de36a9450b99d8c5ba7490b0dff7fa698160405161053e91906127cc565b604051610c8e90600e90839060200161290e565b6040516020818303038152906040528051906020012060001c60005414610cb457600080fd5b60008080556040805160208101909152908152610cd9602083013560e0840135612a58565b4310610ce457600080fd5b610cf3600060c0840135612a58565b81523415610d0057600080fd5b33610d1160608401604085016122fe565b6001600160a01b031614610d2457600080fd5b7f644153cb00b5902ba0237e14ba781544b02196bdedd4a4c36929d9ad9d00c5b382604051610d5391906127b7565b60405180910390a1610d63612112565b610d7060208401846122fe565b6001600160a01b0316815260208084013590820152610d9560608401604085016122fe565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c9060109083906020016129b6565b604051610e249060029083906020016129cb565b6040516020818303038152906040528051906020012060001c60005414610e4a57600080fd5b60008081905550610e7c6040518060800160405280600081526020016000815260200160008152602001600081525090565b610e8f6020830135610140840135612a58565b4310610e9a57600080fd5b3415610ea557600080fd5b33610eb360208401846122fe565b6001600160a01b031614610ec657600080fd5b604051610ee290610180840135906101a085019060200161287d565b6040516020818303038152906040528051906020012060001c826000016040013514610f0d57600080fd5b6003610f1e60808401356004612a8f565b610f2d906101a0850135612a58565b610f379190612aa6565b808252600114610f48578051610f72565b6003610f5960a08401356004612a8f565b610f68906101c0850135612a58565b610f729190612aa6565b60208201819052600114610f8a578060200151610fb4565b6003610f9b60c08401356004612a8f565b610faa906101e0850135612a58565b610fb49190612aa6565b60408201819052600114610fcc578060400151610ff6565b6003610fdd60e08401356004612a8f565b610fec90610200850135612a58565b610ff69190612aa6565b60608201526040517f985f563580b925dd30b120f2473fe883c4c74039f091b0f47fe9b1e0b9bab45b9061102b90849061270f565b60405180910390a161103b6120d6565b61104860208401846122fe565b81516001600160a01b039091169052805160208085013591015261107260808401606085016122fe565b81516001600160a01b039091166040918201528151610160850135606090910152805160a0818101909252906080850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101a08501906005908390839080828437600092019190915250505060208083015101526060820151600114611106578160600151611131565b60036111186101008501356004612a8f565b61112790610220860135612a58565b6111319190612aa6565b60208201805160400191909152805160006060909101819052905143608090910152610b5190610120850135612a58565b6040516111769060109083906020016129a1565b6040516020818303038152906040528051906020012060001c6000541461119c57600080fd5b600080556111b36020820135610180830135612a58565b43101580156111c0575060015b6111c957600080fd5b34156111d457600080fd5b336111e560608301604084016122fe565b6001600160a01b0316146111f857600080fd5b61120860608201604083016122fe565b6001600160a01b03166108fc6112246000610160850135612a58565b6040518115909202916000818181858888f1935050505015801561124c573d6000803e3d6000fd5b507f09c5ad06358a3e2f898ba0aef76151a9013aec5745ed85ef1ee0e81565c980be8160405161053e91906127fb565b60405161129090600190839060200161298d565b6040516020818303038152906040528051906020012060001c600054146112b657600080fd5b600080805560408051808201825282815260208101929092526112e09083013560a0840135612a58565b43106112eb57600080fd5b6112fd60208301356080840135612a58565b81523460208301351461130f57600080fd5b61131e60208301356002612a70565b60208201526040517ff196eb766d2d8533f0df41b064e516bf7376911659bd46c361acef78536bf4bc9061135390849061280a565b60405180910390a1611363612176565b61137060208401846122fe565b6001600160a01b031681526040808401356020830152606080850135828401523390830152805160a08181019092529060c0850190600590839083908082843760009201919091525050506080820152815160a08201524360c082015260208083015160e083015260405161040c916002918491016129e0565b6040516113fe90600a9083906020016129a1565b6040516020818303038152906040528051906020012060001c6000541461142457600080fd5b600080819055506114566040518060800160405280600081526020016000815260200160008152602001600081525090565b6114696020830135610180840135612a58565b431061147457600080fd5b341561147f57600080fd5b3361149060608401604085016122fe565b6001600160a01b0316146114a357600080fd5b6040516114bf906101a0840135906101c085019060200161287d565b60408051601f19818403018152919052805160209091012060a0830135146114e657600080fd5b60036114f86101c08401356004612a8f565b6115069060c0850135612a58565b6115109190612aa6565b80825260011461152157805161154b565b60036115336101e08401356004612a8f565b6115419060e0850135612a58565b61154b9190612aa6565b6020820181905260011461156357806020015161158e565b60036115756102008401356004612a8f565b61158490610100850135612a58565b61158e9190612aa6565b604082018190526001146115a65780604001516115d1565b60036115b86102208401356004612a8f565b6115c790610120850135612a58565b6115d19190612aa6565b60608201526040517f258efe6f6e995791e3c206c5f7508e6472977eefb4afb67101812a20af39aa9b906116069084906127db565b60405180910390a16116166120d6565b61162360208401846122fe565b81516001600160a01b039091169052805160208085013591015261164d60608401604085016122fe565b81516001600160a01b039091166040918201528151606080860135910152805160a0818101909252906101c0850190600590839083908082843760009201919091525050506020820151526040805160a08181019092529060c085019060059083908390808284376000920191909152505050602080830151015260608201516001146116de578160600151610b14565b60036116f06102408501356004612a8f565b60c085016004610afb565b60405161170f90600a9083906020016129a1565b6040516020818303038152906040528051906020012060001c6000541461173557600080fd5b6000805561174c6020820135610180830135612a58565b4310158015611759575060015b61176257600080fd5b341561176d57600080fd5b3361177b60208301836122fe565b6001600160a01b03161461178e57600080fd5b61179b60208201826122fe565b6001600160a01b03166108fc6117b76000610160850135612a58565b6040518115909202916000818181858888f193505050501580156117df573d6000803e3d6000fd5b507fe38eaeebe01f8fea2d39bfc35b82cb3697543788a548da0d97c4a704ce6ec2b18160405161053e91906127fb565b604051611823906006908390602001612897565b6040516020818303038152906040528051906020012060001c6000541461184957600080fd5b6000805561185f602082013560a0830135612a58565b431015801561186c575060015b61187557600080fd5b341561188057600080fd5b3361189160608301604084016122fe565b6001600160a01b0316146118a457600080fd5b6118b460608201604083016122fe565b6001600160a01b03166108fc6118cf600060c0850135612a58565b6040518115909202916000818181858888f193505050501580156118f7573d6000803e3d6000fd5b507f6ce0b6368a969de24391cb6a77cee3c86b93b4c8da6963a920b1d95b44fbf0a28160405161053e9190612786565b60405161193b90600890839060200161290e565b6040516020818303038152906040528051906020012060001c6000541461196157600080fd5b60008055611977602082013560e0830135612a58565b4310158015611984575060015b61198d57600080fd5b341561199857600080fd5b336119a960608301604084016122fe565b6001600160a01b0316146119bc57600080fd5b6119cc60608201604083016122fe565b6001600160a01b03166108fc6119e7600060c0850135612a58565b6040518115909202916000818181858888f19350505050158015611a0f573d6000803e3d6000fd5b507f239047e7ecda813bd5d0deda901af2cfd51f309e8f9aa8f06ae255dc092fa8a48160405161053e91906127cc565b604051611a5390600190839060200161298d565b6040516020818303038152906040528051906020012060001c60005414611a7957600080fd5b60008055611a8f604082013560a0830135612a58565b4310158015611a9c575060015b611aa557600080fd5b3415611ab057600080fd5b33611abe60208301836122fe565b6001600160a01b031614611ad157600080fd5b611ade60208201826122fe565b6001600160a01b03166108fc611af960006080850135612a58565b6040518115909202916000818181858888f19350505050158015611b21573d6000803e3d6000fd5b507f17040e3ed853a8df776cd092f1357f15488d98d460f66cd5e6b0cb07d5bc8ae38160405161053e919061284d565b604051611b6590600890839060200161290e565b6040516020818303038152906040528051906020012060001c60005414611b8b57600080fd5b60008080556040805160208101909152908152611bb0602083013560e0840135612a58565b4310611bbb57600080fd5b611bca600060c0840135612a58565b81523415611bd757600080fd5b33611be560208401846122fe565b6001600160a01b031614611bf857600080fd5b7fc5bf379625a42284cf436ae38bfbe777a1b3406a9e2eea51c37126337545d40082604051611c2791906127b7565b60405180910390a1611c37612112565b611c4460208401846122fe565b6001600160a01b0316815260208084013590820152611c6960608401604085016122fe565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c90600a9083906020016129b6565b604051611cf8906006908390602001612897565b6040516020818303038152906040528051906020012060001c60005414611d1e57600080fd5b60008080556040805160208101909152908152611d43602083013560a0840135612a58565b4310611d4e57600080fd5b611d5d600060c0840135612a58565b81523415611d6a57600080fd5b33611d7b60608401604085016122fe565b6001600160a01b031614611d8e57600080fd5b7fee312f330bc747f7ed8a854ea245bb93733f831d3c4296b2fd99db1023ff8f4282604051611dbd9190612769565b60405180910390a1611e1f60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b611e2c60208401846122fe565b6001600160a01b0316815260208084013590820152611e5160608401604085016122fe565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c906008908390602001612923565b600181602001516040015114156120015760006002826020015160600151611ec89190612aa6565b1415611f6757611ed66121d3565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051909101516080808601919091528151015160a0808601919091529051015160c08401529051611f46916006918491016128ac565b60408051601f19818403018152919052805160209091012060005550611ffc565b611f6f6121d3565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051909101516080808601919091528151015160a0808601919091529051015160c08401529051611fdf916006918491016128ac565b60408051601f198184030181529190528051602090910120600055505b61206f565b6040805160c081018252600081830181815260608084018381526080850184815260a086018581528487526020808801969096528851516001600160a01b0390811690955288518801519094169091528651909101519052908401519092015190915261206d81612072565b505b50565b80516060015160021461208a5780516020015161208e565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f193505050501580156120ce573d6000803e3d6000fd5b506000805533ff5b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081526020810161210d612222565b905290565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001612162612264565b815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016121b8612264565b81526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060c00160405280612235612264565b8152602001612242612264565b8152602001600081526020016000815260200160008152602001600081525090565b6040518060a001604052806005906020820280368337509192915050565b80356001600160a01b038116811461229957600080fd5b919050565b60006101a082840312156122b0578081fd5b50919050565b600061010082840312156122b0578081fd5b600061012082840312156122b0578081fd5b600061026082840312156122b0578081fd5b60006101c082840312156122b0578081fd5b60006020828403121561230f578081fd5b61231882612282565b9392505050565b600061024082840312156122b0578081fd5b60006101a08284031215612343578081fd5b612318838361229e565b6000610100828403121561235f578081fd5b61231883836122b6565b6000610120828403121561237b578081fd5b61231883836122c8565b60006102608284031215612397578081fd5b61231883836122da565b60006101c082840312156123b3578081fd5b61231883836122ec565b6000608082840312156122b0578081fd5b600061018082840312156122b0578081fd5b600060e082840312156122b0578081fd5b8060005b60058110156124145781518452602093840193909101906001016123f5565b50505050565b8035825260a0602082016020840137600060c08301525050565b6001600160a01b038061244683612282565b168352602082013560208401528061246060408401612282565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03806124a583612282565b16835260208201356020840152806124bf60408401612282565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b0361250d82612282565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b038061255883612282565b168352602082013560208401528061257260408401612282565b16604084015250606081013560608301526080810135608083015260a081013560a083015260a060c0820160c0840137610160818101359083015261018090810135910152565b80516001600160a01b0316825260208082015190830152604080820151906125eb908401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015161261c60c08401826123f1565b5060e0810151610160830152610100015161018090910152565b6126408282612493565b61010060a0818301828501375060006101a08301525050565b6126638282612493565b6101008082013580151580821461267957600080fd5b80838601525050505050565b61268f8282612546565b6101a08082013580151580821461267957600080fd5b6001600160a01b03806126b783612282565b1683526020820135602084015260408201356040840152806126db60608401612282565b1660608401525060a06080820160808401376101208181013590830152610140808201359083015261016090810135910152565b610240810161271e82846126a5565b61018061272f81840182860161241a565b5092915050565b6101a0810161274582846126a5565b6101808084013580151580821461275b57600080fd5b808386015250505092915050565b61010081016127788284612434565b60e092830135919092015290565b61010081016127958284612434565b60e08301358015158082146127a957600080fd5b8060e0850152505092915050565b6101a081016127c68284612636565b92915050565b61012081016127c68284612659565b61026081016127ea8284612546565b6101a061272f81840182860161241a565b6101c081016127c68284612685565b610180810161281982846124fc565b60a060c0840160c08401376000610160838101918252906001600160a01b03612843868401612282565b1690525092915050565b60e0810161285b82846124fc565b60c083013580151580821461286f57600080fd5b8060c0850152505092915050565b82815260c0810160a0836020840137600081529392505050565b82815261010081016123186020830184612434565b60006101008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015160c083015260c083015160e08301529392505050565b82815261012081016123186020830184612493565b8281526101208101612318602083018460018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b82815260e0810161231860208301846124fc565b8281526101c081016123186020830184612546565b8281526101c0810161231860208301846125b9565b8281526101a0810161231860208301846126a5565b60006101a08201905083825260018060a01b038084511660208401526020840151604084015260408401516060840152806060850151166080840152506080830151612a2f60a08401826123f1565b5060a083015161014083015260c083015161016083015260e08301516101808301529392505050565b60008219821115612a6b57612a6b612ac6565b500190565b6000816000190483118215151615612a8a57612a8a612ac6565b500290565b600082821015612aa157612aa1612ac6565b500390565b600082612ac157634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea26469706673582212209e28f4741a0764d90246cbf3a22677beb87dcc45c2ac65aab1df7899f91141b264736f6c63430008020033`,
  deployMode: `DM_constructor`
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

