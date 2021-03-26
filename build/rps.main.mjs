// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export async function Attacher(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc1, ctc3, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc1, ctc3, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc4, ctc3, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc4, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc1, ctc0]);
  
  
  const v39 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Attacher', 1, 3, [ctc0, ctc0, ctc1], false, false));
  const [v48, v49, v50] = txn1.data;
  const v51 = txn1.value;
  const v55 = txn1.time;
  const v47 = txn1.from;
  const v52 = stdlib.eq(v51, v48);
  stdlib.assert(v52, {
    at: './index.rsh:93:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './index.rsh:93:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
     });
  const v54 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v51);
  const v56 = ctc.selfAddress('Attacher', false, stdlib.checkedBigNumberify('./index.rsh:99:31:application', stdlib.UInt_max, 0));
  stdlib.protect(ctc2, await interact.acceptGame(v48, v49), {
    at: './index.rsh:100:52:application',
    fs: ['at ./index.rsh:99:31:application call to [unknown function] (defined at: ./index.rsh:99:35:function exp)'],
    msg: 'acceptGame',
    who: 'Attacher'
     });
  const v58 = stdlib.protect(ctc3, await interact.getHands(), {
    at: './index.rsh:101:71:application',
    fs: ['at ./index.rsh:99:31:application call to [unknown function] (defined at: ./index.rsh:99:35:function exp)'],
    msg: 'getHands',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './index.rsh:104:39:application',
    fs: ['at ./index.rsh:99:31:application call to [unknown function] (defined at: ./index.rsh:99:35:function exp)'],
    msg: null,
    who: 'Attacher'
     });
  const txn2 = await (ctc.sendrecv('Attacher', 2, 2, stdlib.checkedBigNumberify('./index.rsh:106:27:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc0, ctc1, ctc0, ctc0, ctc3, ctc4], [v47, v48, v49, v50, v54, v55, v58, v56], v48, [ctc3, ctc4], true, true, false, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:106:27:dot', stdlib.UInt_max, 1), v47, v48, v49, v50, v54, v55]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:106:27:dot', stdlib.UInt_max, 1), v47, v48, v49, v50, v54]);
    const [v60, v61] = txn2.data;
    const v62 = txn2.value;
    const v66 = txn2.time;
    const v59 = txn2.from;
    
    const v63 = stdlib.eq(v62, v48);
    stdlib.assert(v63, {
      at: './index.rsh:106:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    stdlib.assert(true, {
      at: './index.rsh:106:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v65 = stdlib.add(v54, v62);
    const v68 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, 2), v48);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:109:33:after expr stmt semicolon', stdlib.UInt_max, 2), v47, v49, v50, v59, v60, v65, v66, v68]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:109:33:after expr stmt semicolon', stdlib.UInt_max, 2), v47, v49, v50, v59, v60, v65, v68]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v60, v61] = txn2.data;
  const v62 = txn2.value;
  const v66 = txn2.time;
  const v59 = txn2.from;
  const v63 = stdlib.eq(v62, v48);
  stdlib.assert(v63, {
    at: './index.rsh:106:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './index.rsh:106:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
     });
  const v65 = stdlib.add(v54, v62);
  const v68 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, 2), v48);
  const txn3 = await (ctc.recv('Attacher', 3, 2, [ctc0, ctc3], false, v49));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv('Attacher', 4, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc1, ctc4, ctc3, ctc0, ctc0, ctc0], [v47, v49, v50, v59, v60, v65, v66, v68], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn4) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v47, v49, v50, v59, v60, v65, v66, v68]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v47, v49, v50, v59, v60, v65, v68]);
      const [] = txn4.data;
      const v395 = txn4.value;
      const v400 = txn4.time;
      const v394 = txn4.from;
      
      const v396 = stdlib.eq(v395, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v396, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Attacher'
         });
      const v397 = stdlib.addressEq(v59, v394);
      stdlib.assert(v397, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
         });
      const v399 = stdlib.add(v65, v395);
      sim_r.txns.push({
        amt: v399,
        to: v59
         });
      sim_r.nextSt = stdlib.digest(ctc6, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn4.data;
    const v395 = txn4.value;
    const v400 = txn4.time;
    const v394 = txn4.from;
    const v396 = stdlib.eq(v395, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v396, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    const v397 = stdlib.addressEq(v59, v394);
    stdlib.assert(v397, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v399 = stdlib.add(v65, v395);
    ;
    stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:119:84:decimal', stdlib.UInt_max, 0)), {
      at: './index.rsh:77:63:application',
      fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:119:83:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:119:66:function exp)', 'at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
       });
    return;
     }
  else {
    const [v73, v74] = txn3.data;
    const v75 = txn3.value;
    const v80 = txn3.time;
    const v72 = txn3.from;
    const v76 = stdlib.eq(v75, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v76, {
      at: './index.rsh:118:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    const v77 = stdlib.addressEq(v47, v72);
    stdlib.assert(v77, {
      at: './index.rsh:118:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v79 = stdlib.add(v65, v75);
    const v82 = stdlib.digest(ctc5, [v73, v74]);
    const v83 = stdlib.eq(v50, v82);
    stdlib.assert(v83, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:120:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Attacher'
       });
    const v100 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 0)];
    const v101 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 0)];
    const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v101);
    const v104 = stdlib.add(v100, v103);
    const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v109 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 1)];
    const v110 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 1)];
    const v112 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
    const v113 = stdlib.add(v109, v112);
    const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v118 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 2)];
    const v119 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 2)];
    const v121 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
    const v122 = stdlib.add(v118, v121);
    const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v127 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 3)];
    const v128 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 3)];
    const v130 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
    const v131 = stdlib.add(v127, v130);
    const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v136 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 4)];
    const v137 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 4)];
    const v139 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v137);
    const v140 = stdlib.add(v136, v139);
    const v141 = stdlib.mod(v140, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v154 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v155 = v154 ? v114 : v105;
    const v158 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v159 = v158 ? v123 : v155;
    const v162 = stdlib.eq(v159, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v163 = v162 ? v132 : v159;
    const v166 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v167 = v166 ? v141 : v163;
    let v170 = v167;
    let v414 = v79;
    let v415 = v80;
    
    while ((() => {
      const v181 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v181; })()) {
      stdlib.protect(ctc2, await interact.informDraw(), {
        at: './index.rsh:160:52:application',
        fs: ['at ./index.rsh:159:31:application call to [unknown function] (defined at: ./index.rsh:159:43:function exp)'],
        msg: 'informDraw',
        who: 'Attacher'
         });
      const txn4 = await (ctc.recv('Attacher', 7, 1, [ctc1], false, v49));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv('Attacher', 8, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0], [v47, v49, v59, v68, v414, v415], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn5) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 5), v47, v49, v59, v68, v414, v415]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 5), v47, v49, v59, v68, v414]);
          const [] = txn5.data;
          const v356 = txn5.value;
          const v361 = txn5.time;
          const v355 = txn5.from;
          
          const v357 = stdlib.eq(v356, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v357, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v358 = stdlib.addressEq(v59, v355);
          stdlib.assert(v358, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v360 = stdlib.add(v414, v356);
          sim_r.txns.push({
            amt: v360,
            to: v59
             });
          sim_r.nextSt = stdlib.digest(ctc6, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
          sim_r.isHalt = true;
          
          return sim_r;
           })));
        const [] = txn5.data;
        const v356 = txn5.value;
        const v361 = txn5.time;
        const v355 = txn5.from;
        const v357 = stdlib.eq(v356, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v357, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Attacher'
           });
        const v358 = stdlib.addressEq(v59, v355);
        stdlib.assert(v358, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
           });
        const v360 = stdlib.add(v414, v356);
        ;
        stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:222:86:decimal', stdlib.UInt_max, 0)), {
          at: './index.rsh:77:63:application',
          fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:222:85:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:222:68:function exp)', 'at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'informTimeout',
          who: 'Attacher'
           });
        return;
         }
      else {
        const [v194] = txn4.data;
        const v195 = txn4.value;
        const v200 = txn4.time;
        const v193 = txn4.from;
        const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v196, {
          at: './index.rsh:221:29:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Attacher'
           });
        const v197 = stdlib.addressEq(v47, v193);
        stdlib.assert(v197, {
          at: './index.rsh:221:29:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
           });
        const v199 = stdlib.add(v414, v195);
        const v203 = stdlib.protect(ctc3, await interact.getHands(), {
          at: './index.rsh:227:72:application',
          fs: ['at ./index.rsh:226:33:application call to [unknown function] (defined at: ./index.rsh:226:37:function exp)'],
          msg: 'getHands',
          who: 'Attacher'
           });
        const txn5 = await (ctc.sendrecv('Attacher', 9, 1, stdlib.checkedBigNumberify('./index.rsh:228:29:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc1, ctc0, ctc0, ctc3], [v47, v49, v59, v68, v194, v199, v200, v203], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc3], true, true, v49, (async (txn5) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:228:29:dot', stdlib.UInt_max, 7), v47, v49, v59, v68, v194, v199, v200]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:228:29:dot', stdlib.UInt_max, 7), v47, v49, v59, v68, v194, v199]);
          const [v205] = txn5.data;
          const v206 = txn5.value;
          const v211 = txn5.time;
          const v204 = txn5.from;
          
          const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v207, {
            at: './index.rsh:228:29:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v208 = stdlib.addressEq(v59, v204);
          stdlib.assert(v208, {
            at: './index.rsh:228:29:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v210 = stdlib.add(v199, v206);
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:230:35:after expr stmt semicolon', stdlib.UInt_max, 9), v47, v49, v59, v68, v194, v205, v210, v211]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:230:35:after expr stmt semicolon', stdlib.UInt_max, 9), v47, v49, v59, v68, v194, v205, v210]);
          sim_r.isHalt = false;
          
          return sim_r;
           })));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.recv('Attacher', 10, 0, [], false, false));
          const [] = txn6.data;
          const v335 = txn6.value;
          const v340 = txn6.time;
          const v334 = txn6.from;
          const v336 = stdlib.eq(v335, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v336, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v337 = stdlib.addressEq(v47, v334);
          stdlib.assert(v337, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v339 = stdlib.add(v199, v335);
          ;
          stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:229:86:decimal', stdlib.UInt_max, 1)), {
            at: './index.rsh:77:63:application',
            fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:229:85:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:229:68:function exp)', 'at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'informTimeout',
            who: 'Attacher'
             });
          return;
           }
        else {
          const [v205] = txn5.data;
          const v206 = txn5.value;
          const v211 = txn5.time;
          const v204 = txn5.from;
          const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v207, {
            at: './index.rsh:228:29:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v208 = stdlib.addressEq(v59, v204);
          stdlib.assert(v208, {
            at: './index.rsh:228:29:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v210 = stdlib.add(v199, v206);
          const txn6 = await (ctc.recv('Attacher', 11, 2, [ctc0, ctc3], false, v49));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv('Attacher', 12, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc1, ctc3, ctc0, ctc0], [v47, v49, v59, v68, v194, v205, v210, v211], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn7) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 9), v47, v49, v59, v68, v194, v205, v210, v211]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 9), v47, v49, v59, v68, v194, v205, v210]);
              const [] = txn7.data;
              const v314 = txn7.value;
              const v319 = txn7.time;
              const v313 = txn7.from;
              
              const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v315, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v316 = stdlib.addressEq(v59, v313);
              stdlib.assert(v316, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v318 = stdlib.add(v210, v314);
              sim_r.txns.push({
                amt: v318,
                to: v59
                 });
              sim_r.nextSt = stdlib.digest(ctc6, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn7.data;
            const v314 = txn7.value;
            const v319 = txn7.time;
            const v313 = txn7.from;
            const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v315, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v316 = stdlib.addressEq(v59, v313);
            stdlib.assert(v316, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v318 = stdlib.add(v210, v314);
            ;
            stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:235:86:decimal', stdlib.UInt_max, 0)), {
              at: './index.rsh:77:63:application',
              fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:235:85:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:235:68:function exp)', 'at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'informTimeout',
              who: 'Attacher'
               });
            return;
             }
          else {
            const [v215, v216] = txn6.data;
            const v217 = txn6.value;
            const v222 = txn6.time;
            const v214 = txn6.from;
            const v218 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v218, {
              at: './index.rsh:234:29:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v219 = stdlib.addressEq(v47, v214);
            stdlib.assert(v219, {
              at: './index.rsh:234:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v221 = stdlib.add(v210, v217);
            const v224 = stdlib.digest(ctc5, [v215, v216]);
            const v225 = stdlib.eq(v194, v224);
            stdlib.assert(v225, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:236:42:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Attacher'
               });
            const v242 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 0)];
            const v243 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 0)];
            const v245 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v243);
            const v246 = stdlib.add(v242, v245);
            const v247 = stdlib.mod(v246, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v251 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 1)];
            const v252 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 1)];
            const v254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v252);
            const v255 = stdlib.add(v251, v254);
            const v256 = stdlib.mod(v255, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v260 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 2)];
            const v261 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 2)];
            const v263 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v261);
            const v264 = stdlib.add(v260, v263);
            const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v269 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 3)];
            const v270 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 3)];
            const v272 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v270);
            const v273 = stdlib.add(v269, v272);
            const v274 = stdlib.mod(v273, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v278 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 4)];
            const v279 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 4)];
            const v281 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v279);
            const v282 = stdlib.add(v278, v281);
            const v283 = stdlib.mod(v282, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v296 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v297 = v296 ? v256 : v247;
            const v300 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v301 = v300 ? v265 : v297;
            const v304 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v305 = v304 ? v274 : v301;
            const v308 = stdlib.eq(v305, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v309 = v308 ? v283 : v305;
            const cv170 = v309;
            const cv414 = v221;
            const cv415 = v222;
            
            v170 = cv170;
            v414 = cv414;
            v415 = cv415;
            
            continue; }
           }
         }
       }
    const v375 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v380 = v375 ? v47 : v59;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v170), {
      at: './index.rsh:251:52:application',
      fs: ['at ./index.rsh:250:29:application call to [unknown function] (defined at: ./index.rsh:250:40:function exp)'],
      msg: 'seeOutcome',
      who: 'Attacher'
       });
    return; }
  
  
  
   }
export async function Deployer(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5));
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc3, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc3, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc3, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0]);
  
  
  const v39 = await ctc.creationTime();
  const v37 = stdlib.protect(ctc0, interact.deadline, null);
  const v38 = stdlib.protect(ctc0, interact.wager, null);
  const v42 = stdlib.protect(ctc1, await interact.getHands(), {
    at: './index.rsh:86:71:application',
    fs: ['at ./index.rsh:83:31:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)'],
    msg: 'getHands',
    who: 'Deployer'
     });
  const v44 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./index.rsh:89:98:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:83:31:application call to [unknown function] (defined at: ./index.rsh:83:35:function exp)'],
    msg: 'random',
    who: 'Deployer'
     });
  const v45 = stdlib.digest(ctc2, [v44, v42]);
  const txn1 = await (ctc.sendrecv('Deployer', 1, 3, stdlib.checkedBigNumberify('./index.rsh:93:27:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc3], [v39, v38, v37, v45], v38, [ctc0, ctc0, ctc3], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:93:27:dot', stdlib.UInt_max, 0), v39]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:93:27:dot', stdlib.UInt_max, 0)]);
    const [v48, v49, v50] = txn1.data;
    const v51 = txn1.value;
    const v55 = txn1.time;
    const v47 = txn1.from;
    
    const v52 = stdlib.eq(v51, v48);
    stdlib.assert(v52, {
      at: './index.rsh:93:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    stdlib.assert(true, {
      at: './index.rsh:93:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v54 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v51);
    sim_r.nextSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:95:33:after expr stmt semicolon', stdlib.UInt_max, 1), v47, v48, v49, v50, v54, v55]);
    sim_r.nextSt_noTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:95:33:after expr stmt semicolon', stdlib.UInt_max, 1), v47, v48, v49, v50, v54]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v48, v49, v50] = txn1.data;
  const v51 = txn1.value;
  const v55 = txn1.time;
  const v47 = txn1.from;
  const v52 = stdlib.eq(v51, v48);
  stdlib.assert(v52, {
    at: './index.rsh:93:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Deployer'
     });
  stdlib.assert(true, {
    at: './index.rsh:93:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
     });
  const v54 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v51);
  const txn2 = await (ctc.recv('Deployer', 2, 2, [ctc1, ctc4], false, false));
  const [v60, v61] = txn2.data;
  const v62 = txn2.value;
  const v66 = txn2.time;
  const v59 = txn2.from;
  const v63 = stdlib.eq(v62, v48);
  stdlib.assert(v63, {
    at: './index.rsh:106:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Deployer'
     });
  stdlib.assert(true, {
    at: './index.rsh:106:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
     });
  const v65 = stdlib.add(v54, v62);
  const v68 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:111:46:decimal', stdlib.UInt_max, 2), v48);
  stdlib.protect(ctc5, await interact.informOpponent(v61), {
    at: './index.rsh:115:56:application',
    fs: ['at ./index.rsh:114:31:application call to [unknown function] (defined at: ./index.rsh:114:35:function exp)'],
    msg: 'informOpponent',
    who: 'Deployer'
     });
  const txn3 = await (ctc.sendrecv('Deployer', 3, 2, stdlib.checkedBigNumberify('./index.rsh:118:27:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1], [v47, v49, v50, v59, v60, v65, v66, v68, v44, v42], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v49, (async (txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:118:27:dot', stdlib.UInt_max, 2), v47, v49, v50, v59, v60, v65, v66, v68]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:118:27:dot', stdlib.UInt_max, 2), v47, v49, v50, v59, v60, v65, v68]);
    const [v73, v74] = txn3.data;
    const v75 = txn3.value;
    const v80 = txn3.time;
    const v72 = txn3.from;
    
    const v76 = stdlib.eq(v75, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v76, {
      at: './index.rsh:118:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v77 = stdlib.addressEq(v47, v72);
    stdlib.assert(v77, {
      at: './index.rsh:118:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v79 = stdlib.add(v65, v75);
    const v82 = stdlib.digest(ctc2, [v73, v74]);
    const v83 = stdlib.eq(v50, v82);
    stdlib.assert(v83, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:120:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Deployer'
       });
    const v100 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 0)];
    const v101 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 0)];
    const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v101);
    const v104 = stdlib.add(v100, v103);
    const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v109 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 1)];
    const v110 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 1)];
    const v112 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
    const v113 = stdlib.add(v109, v112);
    const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v118 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 2)];
    const v119 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 2)];
    const v121 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
    const v122 = stdlib.add(v118, v121);
    const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v127 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 3)];
    const v128 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 3)];
    const v130 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
    const v131 = stdlib.add(v127, v130);
    const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v136 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 4)];
    const v137 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 4)];
    const v139 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v137);
    const v140 = stdlib.add(v136, v139);
    const v141 = stdlib.mod(v140, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v154 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v155 = v154 ? v114 : v105;
    const v158 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v159 = v158 ? v123 : v155;
    const v162 = stdlib.eq(v159, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v163 = v162 ? v132 : v159;
    const v166 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v167 = v166 ? v141 : v163;
    const v170 = v167;
    const v414 = v79;
    const v415 = v80;
    
    if ((() => {
      const v181 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v181; })()) {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v47, v49, v59, v68, v414, v415]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v47, v49, v59, v68, v414]);
      sim_r.isHalt = false;
       }
    else {
      const v375 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v380 = v375 ? v47 : v59;
      sim_r.txns.push({
        amt: v68,
        to: v380
         });
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.isHalt = true;
       }
    return sim_r;
     })));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.recv('Deployer', 4, 0, [], false, false));
    const [] = txn4.data;
    const v395 = txn4.value;
    const v400 = txn4.time;
    const v394 = txn4.from;
    const v396 = stdlib.eq(v395, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v396, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v397 = stdlib.addressEq(v59, v394);
    stdlib.assert(v397, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v399 = stdlib.add(v65, v395);
    ;
    stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:119:84:decimal', stdlib.UInt_max, 0)), {
      at: './index.rsh:77:63:application',
      fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:119:83:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:119:66:function exp)', 'at ./index.rsh:119:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
       });
    return;
     }
  else {
    const [v73, v74] = txn3.data;
    const v75 = txn3.value;
    const v80 = txn3.time;
    const v72 = txn3.from;
    const v76 = stdlib.eq(v75, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v76, {
      at: './index.rsh:118:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v77 = stdlib.addressEq(v47, v72);
    stdlib.assert(v77, {
      at: './index.rsh:118:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v79 = stdlib.add(v65, v75);
    const v82 = stdlib.digest(ctc2, [v73, v74]);
    const v83 = stdlib.eq(v50, v82);
    stdlib.assert(v83, {
      at: 'reach standard library:65:17:application',
      fs: ['at ./index.rsh:120:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
      msg: null,
      who: 'Deployer'
       });
    const v100 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 0)];
    const v101 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 0)];
    const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v101);
    const v104 = stdlib.add(v100, v103);
    const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v109 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 1)];
    const v110 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 1)];
    const v112 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
    const v113 = stdlib.add(v109, v112);
    const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v118 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 2)];
    const v119 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 2)];
    const v121 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
    const v122 = stdlib.add(v118, v121);
    const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v127 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 3)];
    const v128 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 3)];
    const v130 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
    const v131 = stdlib.add(v127, v130);
    const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v136 = v74[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 4)];
    const v137 = v60[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 4)];
    const v139 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v137);
    const v140 = stdlib.add(v136, v139);
    const v141 = stdlib.mod(v140, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v154 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v155 = v154 ? v114 : v105;
    const v158 = stdlib.eq(v155, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v159 = v158 ? v123 : v155;
    const v162 = stdlib.eq(v159, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v163 = v162 ? v132 : v159;
    const v166 = stdlib.eq(v163, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    const v167 = v166 ? v141 : v163;
    let v170 = v167;
    let v414 = v79;
    let v415 = v80;
    
    while ((() => {
      const v181 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v181; })()) {
      stdlib.protect(ctc5, await interact.informDraw(), {
        at: './index.rsh:160:52:application',
        fs: ['at ./index.rsh:159:31:application call to [unknown function] (defined at: ./index.rsh:159:43:function exp)'],
        msg: 'informDraw',
        who: 'Deployer'
         });
      const v188 = stdlib.protect(ctc1, await interact.getHands(), {
        at: './index.rsh:218:62:application',
        fs: ['at ./index.rsh:217:33:application call to [unknown function] (defined at: ./index.rsh:217:37:function exp)'],
        msg: 'getHands',
        who: 'Deployer'
         });
      const v190 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:60:31:application',
        fs: ['at ./index.rsh:219:70:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:217:33:application call to [unknown function] (defined at: ./index.rsh:217:37:function exp)'],
        msg: 'random',
        who: 'Deployer'
         });
      const v191 = stdlib.digest(ctc2, [v190, v188]);
      const txn4 = await (ctc.sendrecv('Deployer', 7, 1, stdlib.checkedBigNumberify('./index.rsh:221:29:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc3], [v47, v49, v59, v68, v414, v415, v191], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc3], true, true, v49, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:221:29:dot', stdlib.UInt_max, 5), v47, v49, v59, v68, v414, v415]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:221:29:dot', stdlib.UInt_max, 5), v47, v49, v59, v68, v414]);
        const [v194] = txn4.data;
        const v195 = txn4.value;
        const v200 = txn4.time;
        const v193 = txn4.from;
        
        const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v196, {
          at: './index.rsh:221:29:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Deployer'
           });
        const v197 = stdlib.addressEq(v47, v193);
        stdlib.assert(v197, {
          at: './index.rsh:221:29:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
           });
        const v199 = stdlib.add(v414, v195);
        sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:223:35:after expr stmt semicolon', stdlib.UInt_max, 7), v47, v49, v59, v68, v194, v199, v200]);
        sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:223:35:after expr stmt semicolon', stdlib.UInt_max, 7), v47, v49, v59, v68, v194, v199]);
        sim_r.isHalt = false;
        
        return sim_r;
         })));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.recv('Deployer', 8, 0, [], false, false));
        const [] = txn5.data;
        const v356 = txn5.value;
        const v361 = txn5.time;
        const v355 = txn5.from;
        const v357 = stdlib.eq(v356, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v357, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Deployer'
           });
        const v358 = stdlib.addressEq(v59, v355);
        stdlib.assert(v358, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
           });
        const v360 = stdlib.add(v414, v356);
        ;
        stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:222:86:decimal', stdlib.UInt_max, 0)), {
          at: './index.rsh:77:63:application',
          fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:222:85:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:222:68:function exp)', 'at ./index.rsh:222:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'informTimeout',
          who: 'Deployer'
           });
        return;
         }
      else {
        const [v194] = txn4.data;
        const v195 = txn4.value;
        const v200 = txn4.time;
        const v193 = txn4.from;
        const v196 = stdlib.eq(v195, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v196, {
          at: './index.rsh:221:29:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Deployer'
           });
        const v197 = stdlib.addressEq(v47, v193);
        stdlib.assert(v197, {
          at: './index.rsh:221:29:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
           });
        const v199 = stdlib.add(v414, v195);
        const txn5 = await (ctc.recv('Deployer', 9, 1, [ctc1], false, v49));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv('Deployer', 10, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc3, ctc0, ctc0], [v47, v49, v59, v68, v194, v199, v200], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn6) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), v47, v49, v59, v68, v194, v199, v200]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), v47, v49, v59, v68, v194, v199]);
            const [] = txn6.data;
            const v335 = txn6.value;
            const v340 = txn6.time;
            const v334 = txn6.from;
            
            const v336 = stdlib.eq(v335, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v336, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v337 = stdlib.addressEq(v47, v334);
            stdlib.assert(v337, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v339 = stdlib.add(v199, v335);
            sim_r.txns.push({
              amt: v339,
              to: v47
               });
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.isHalt = true;
            
            return sim_r;
             })));
          const [] = txn6.data;
          const v335 = txn6.value;
          const v340 = txn6.time;
          const v334 = txn6.from;
          const v336 = stdlib.eq(v335, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v336, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Deployer'
             });
          const v337 = stdlib.addressEq(v47, v334);
          stdlib.assert(v337, {
            at: 'reach standard library:68:7:dot',
            fs: ['at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
             });
          const v339 = stdlib.add(v199, v335);
          ;
          stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:229:86:decimal', stdlib.UInt_max, 1)), {
            at: './index.rsh:77:63:application',
            fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:229:85:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:229:68:function exp)', 'at ./index.rsh:229:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
            msg: 'informTimeout',
            who: 'Deployer'
             });
          return;
           }
        else {
          const [v205] = txn5.data;
          const v206 = txn5.value;
          const v211 = txn5.time;
          const v204 = txn5.from;
          const v207 = stdlib.eq(v206, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v207, {
            at: './index.rsh:228:29:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Deployer'
             });
          const v208 = stdlib.addressEq(v59, v204);
          stdlib.assert(v208, {
            at: './index.rsh:228:29:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
             });
          const v210 = stdlib.add(v199, v206);
          const txn6 = await (ctc.sendrecv('Deployer', 11, 2, stdlib.checkedBigNumberify('./index.rsh:234:29:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc3, ctc1, ctc0, ctc0, ctc0, ctc1], [v47, v49, v59, v68, v194, v205, v210, v211, v190, v188], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v49, (async (txn6) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:234:29:dot', stdlib.UInt_max, 9), v47, v49, v59, v68, v194, v205, v210, v211]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:234:29:dot', stdlib.UInt_max, 9), v47, v49, v59, v68, v194, v205, v210]);
            const [v215, v216] = txn6.data;
            const v217 = txn6.value;
            const v222 = txn6.time;
            const v214 = txn6.from;
            
            const v218 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v218, {
              at: './index.rsh:234:29:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v219 = stdlib.addressEq(v47, v214);
            stdlib.assert(v219, {
              at: './index.rsh:234:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v221 = stdlib.add(v210, v217);
            const v224 = stdlib.digest(ctc2, [v215, v216]);
            const v225 = stdlib.eq(v194, v224);
            stdlib.assert(v225, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:236:42:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Deployer'
               });
            const v242 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 0)];
            const v243 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 0)];
            const v245 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v243);
            const v246 = stdlib.add(v242, v245);
            const v247 = stdlib.mod(v246, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v251 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 1)];
            const v252 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 1)];
            const v254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v252);
            const v255 = stdlib.add(v251, v254);
            const v256 = stdlib.mod(v255, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v260 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 2)];
            const v261 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 2)];
            const v263 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v261);
            const v264 = stdlib.add(v260, v263);
            const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v269 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 3)];
            const v270 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 3)];
            const v272 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v270);
            const v273 = stdlib.add(v269, v272);
            const v274 = stdlib.mod(v273, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v278 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 4)];
            const v279 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 4)];
            const v281 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v279);
            const v282 = stdlib.add(v278, v281);
            const v283 = stdlib.mod(v282, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v296 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v297 = v296 ? v256 : v247;
            const v300 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v301 = v300 ? v265 : v297;
            const v304 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v305 = v304 ? v274 : v301;
            const v308 = stdlib.eq(v305, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v309 = v308 ? v283 : v305;
            const cv170 = v309;
            const cv414 = v221;
            const cv415 = v222;
            
            (() => {
              const v170 = cv170;
              const v414 = cv414;
              const v415 = cv415;
              
              if ((() => {
                const v181 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v181; })()) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v47, v49, v59, v68, v414, v415]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v47, v49, v59, v68, v414]);
                sim_r.isHalt = false;
                 }
              else {
                const v375 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                const v380 = v375 ? v47 : v59;
                sim_r.txns.push({
                  amt: v68,
                  to: v380
                   });
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.isHalt = true;
                 } })();
            return sim_r;
             })));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.recv('Deployer', 12, 0, [], false, false));
            const [] = txn7.data;
            const v314 = txn7.value;
            const v319 = txn7.time;
            const v313 = txn7.from;
            const v315 = stdlib.eq(v314, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v315, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v316 = stdlib.addressEq(v59, v313);
            stdlib.assert(v316, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v318 = stdlib.add(v210, v314);
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:235:86:decimal', stdlib.UInt_max, 0)), {
              at: './index.rsh:77:63:application',
              fs: ['at ./index.rsh:76:37:application call to [unknown function] (defined at: ./index.rsh:76:48:function exp)', 'at ./index.rsh:235:85:application call to "informTimeout" (defined at: ./index.rsh:75:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:235:68:function exp)', 'at ./index.rsh:235:61:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
              msg: 'informTimeout',
              who: 'Deployer'
               });
            return;
             }
          else {
            const [v215, v216] = txn6.data;
            const v217 = txn6.value;
            const v222 = txn6.time;
            const v214 = txn6.from;
            const v218 = stdlib.eq(v217, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v218, {
              at: './index.rsh:234:29:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v219 = stdlib.addressEq(v47, v214);
            stdlib.assert(v219, {
              at: './index.rsh:234:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v221 = stdlib.add(v210, v217);
            const v224 = stdlib.digest(ctc2, [v215, v216]);
            const v225 = stdlib.eq(v194, v224);
            stdlib.assert(v225, {
              at: 'reach standard library:65:17:application',
              fs: ['at ./index.rsh:236:42:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
              msg: null,
              who: 'Deployer'
               });
            const v242 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 0)];
            const v243 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 0)];
            const v245 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v243);
            const v246 = stdlib.add(v242, v245);
            const v247 = stdlib.mod(v246, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v251 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 1)];
            const v252 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 1)];
            const v254 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v252);
            const v255 = stdlib.add(v251, v254);
            const v256 = stdlib.mod(v255, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v260 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 2)];
            const v261 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 2)];
            const v263 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v261);
            const v264 = stdlib.add(v260, v263);
            const v265 = stdlib.mod(v264, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v269 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 3)];
            const v270 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 3)];
            const v272 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v270);
            const v273 = stdlib.add(v269, v272);
            const v274 = stdlib.mod(v273, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v278 = v216[stdlib.checkedBigNumberify('./index.rsh:62:18:array ref', stdlib.UInt_max, 4)];
            const v279 = v205[stdlib.checkedBigNumberify('./index.rsh:62:29:array ref', stdlib.UInt_max, 4)];
            const v281 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v279);
            const v282 = stdlib.add(v278, v281);
            const v283 = stdlib.mod(v282, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v296 = stdlib.eq(v247, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v297 = v296 ? v256 : v247;
            const v300 = stdlib.eq(v297, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v301 = v300 ? v265 : v297;
            const v304 = stdlib.eq(v301, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v305 = v304 ? v274 : v301;
            const v308 = stdlib.eq(v305, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
            const v309 = v308 ? v283 : v305;
            const cv170 = v309;
            const cv414 = v221;
            const cv415 = v222;
            
            v170 = cv170;
            v414 = cv414;
            v415 = cv415;
            
            continue; }
           }
         }
       }
    const v375 = stdlib.eq(v170, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v380 = v375 ? v47 : v59;
    ;
    stdlib.protect(ctc5, await interact.seeOutcome(v170), {
      at: './index.rsh:251:52:application',
      fs: ['at ./index.rsh:250:29:application call to [unknown function] (defined at: ./index.rsh:250:40:function exp)'],
      msg: 'seeOutcome',
      who: 'Deployer'
       });
    return; }
  
  
  
   }

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
int 4
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
byte "{{m7}}"
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
int 4
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
assert
txn RekeyTo
global ZeroAddress
==
assert
global ZeroAddress
byte "{{Deployer}}"
global GroupSize
int 1
-
txn GroupIndex
==
gtxna 0 ApplicationArgs 2
btoi
&&
select
txn CloseRemainderTo
==
assert
txn GroupIndex
int 4
>=
assert
done:
int 1
return
`,
  stepargs: [0, 129, 241, 289, 241, 0, 0, 201, 169, 241, 201, 289, 241],
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// Just "pay amount correct"
// "./index.rsh:93:27:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Just "sender correct"
// "./index.rsh:93:27:dot"
// "[]"
int 1
assert
int 0
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 1
int 1
itob
gtxn 3 Sender
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// Just "pay amount correct"
// "./index.rsh:106:27:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
gtxna 0 ApplicationArgs 6
btoi
==
assert
// Just "sender correct"
// "./index.rsh:106:27:dot"
// "[]"
int 1
assert
gtxna 0 ApplicationArgs 9
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
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
gtxn 3 Sender
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// Just "pay amount correct"
// "./index.rsh:118:27:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:118:27:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 10
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:120:40:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
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
// compute state in HM_Set 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 8
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
gtxn 5 Fee
gtxn 4 Fee
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:119:59:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:119:59:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 8
gtxn 3 Sender
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
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
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
gtxn 5 Fee
gtxn 4 Fee
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
// Handler 7
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// compute state in HM_Check 5
int 5
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
// Just "pay amount correct"
// "./index.rsh:221:29:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:221:29:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 9
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 7
int 7
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
concat
gtxna 0 ApplicationArgs 10
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// compute state in HM_Check 5
int 5
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:222:61:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:222:61:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
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
gtxna 0 ApplicationArgs 9
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
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
gtxn 5 Fee
gtxn 4 Fee
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// compute state in HM_Check 7
int 7
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
// Just "pay amount correct"
// "./index.rsh:228:29:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:228:29:dot"
// "[]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 10
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// compute state in HM_Set 9
int 9
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// compute state in HM_Check 7
int 7
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:229:61:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:229:61:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
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
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
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
gtxn 5 Fee
gtxn 4 Fee
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// compute state in HM_Check 9
int 9
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
// Just "pay amount correct"
// "./index.rsh:234:29:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:234:29:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 11
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// Nothing
// "reach standard library:65:17:application"
// "[at ./index.rsh:236:42:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
gtxna 0 ApplicationArgs 9
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
gtxna 0 ApplicationArgs 10
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
gtxna 0 ApplicationArgs 10
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
gtxna 0 ApplicationArgs 10
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
gtxna 0 ApplicationArgs 10
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
gtxna 0 ApplicationArgs 10
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
// compute state in HM_Set 5
int 5
itob
gtxna 0 ApplicationArgs 5
concat
gtxna 0 ApplicationArgs 6
concat
gtxna 0 ApplicationArgs 7
concat
gtxna 0 ApplicationArgs 8
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
gtxn 5 Fee
gtxn 4 Fee
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
// Check txnToContract
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
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
// compute state in HM_Check 9
int 9
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:235:61:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:235:61:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxn 3 Sender
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
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
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
gtxn 5 Fee
gtxn 4 Fee
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
                "name": "v39",
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
                "name": "v48",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v205",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v215",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v216",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v205",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v48",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v54",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v55",
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
                "name": "v60",
                "type": "uint256[5]"
              },
              {
                "internalType": "address payable",
                "name": "v61",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v60",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v73",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v74",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v60",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v205",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
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
                "name": "v39",
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
                "name": "v48",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v205",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v215",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v216",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v205",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v48",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v54",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v55",
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
                "name": "v60",
                "type": "uint256[5]"
              },
              {
                "internalType": "address payable",
                "name": "v61",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v60",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v73",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v74",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v60",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v65",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v66",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v47",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v49",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v59",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v199",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v200",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v205",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055611bd6806100826000396000f3fe6080604052600436106100955760003560e01c806346c4040c1161005957806346c4040c14610102578063888b17ac14610115578063b23a015214610128578063cded421f1461013b578063d408d99c1461014e5761009c565b80630ef4fdaf146100a15780631c7776e5146100b65780632bf4f873146100c957806338abd030146100dc5780633e6f020c146100ef5761009c565b3661009c57005b600080fd5b6100b46100af3660046115e3565b610161565b005b6100b46100c436600461161a565b610287565b6100b46100d736600461162c565b610398565b6100b46100ea3660046115ab565b610539565b6100b46100fd3660046115ab565b610832565b6100b46101103660046115fe565b610b09565b6100b46101233660046115fe565b610c96565b6100b46101363660046115c7565b610de5565b6100b46101493660046115c7565b610efe565b6100b461015c3660046115e3565b611017565b6040516101759060059083906020016119c6565b6040516020818303038152906040528051906020012060001c6000541461019b57600080fd5b600080556101b1602082013560a0830135611b1c565b43101580156101be575060015b6101c757600080fd5b34156101d257600080fd5b336101e3606083016040840161158a565b6001600160a01b0316146101f657600080fd5b610206606082016040830161158a565b6001600160a01b03166108fc610220346080850135611b1c565b6040518115909202916000818181858888f19350505050158015610248573d6000803e3d6000fd5b507f759d7cfb768b5801e05d03e8bdf04f74552cf1ce2d1fa3c4098bc4bb6f95e7b78160405161027891906118c6565b60405180910390a16000805533ff5b60405161029b9060079083906020016119da565b6040516020818303038152906040528051906020012060001c600054146102c157600080fd5b600080556102d7602082013560c0830135611b1c565b43101580156102e4575060015b6102ed57600080fd5b34156102f857600080fd5b33610306602083018361158a565b6001600160a01b03161461031957600080fd5b610326602082018261158a565b6001600160a01b03166108fc6103403460a0850135611b1c565b6040518115909202916000818181858888f19350505050158015610368573d6000803e3d6000fd5b507fba1e0c85ab13e20d404f2527a5571330787fea94b6a2cf769129bcbbc656e81181604051610278919061191a565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146103d557600080fd5b60008080556040805160208101909152908152346020830135146103f857600080fd5b610403346000611b1c565b815260408051833581526020808501359082015283820135818301526060808501359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a16104976040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b338152602083810135818301908152604080860135818501908152606080880135818701908152875160808089019182524360a0808b01918252875160019a81019a909a528a516001600160a01b0316978a019790975296519388019390935292519186019190915251918401919091525160c08301525160e0820152610100015b60408051601f198184030181529190528051602090910120600055505050565b60405161054d906009908390602001611a03565b6040516020818303038152906040528051906020012060001c6000541461057357600080fd5b600080819055506105a56040518060800160405280600081526020016000815260200160008152602001600081525090565b6105b86020830135610160840135611b1c565b43106105c357600080fd5b34156105ce57600080fd5b336105dc602084018461158a565b6001600160a01b0316146105ef57600080fd5b60405161060b90610180840135906101a08501906020016119ac565b60408051601f19818403018152919052805160209091012060808301351461063257600080fd5b600361064360a08401356004611b53565b610652906101a0850135611b1c565b61065c9190611b6a565b80825260011461066d578051610697565b600361067e60c08401356004611b53565b61068d906101c0850135611b1c565b6106979190611b6a565b602082018190526001146106af5780602001516106d9565b60036106c060e08401356004611b53565b6106cf906101e0850135611b1c565b6106d99190611b6a565b604082018190526001146106f157806040015161071c565b60036107036101008401356004611b53565b61071290610200850135611b1c565b61071c9190611b6a565b60608201526040517fcd97369b52fe23aa4c5bf370e00b65ed81ea1ef4f298b5da32a46a8101c0ed419061075190849061194b565b60405180910390a16107616113f0565b61076e602084018461158a565b81516001600160a01b0390911690528051602080850135910152610798606084016040850161158a565b81516001600160a01b039091166040909101528051606080850135918101919091528201516001146107ce5781606001516107f9565b60036107e06101208501356004611b53565b6107ef90610220860135611b1c565b6107f99190611b6a565b60208201515261080e34610140850135611b1c565b6020808301805190910191909152514360409091015261082d8161120b565b505050565b604051610846906002908390602001611a8f565b6040516020818303038152906040528051906020012060001c6000541461086c57600080fd5b6000808190555061089e6040518060800160405280600081526020016000815260200160008152602001600081525090565b6108b16020830135610140840135611b1c565b43106108bc57600080fd5b34156108c757600080fd5b336108d5602084018461158a565b6001600160a01b0316146108e857600080fd5b60405161090490610180840135906101a08501906020016119ac565b6040516020818303038152906040528051906020012060001c82600001604001351461092f57600080fd5b600361094060808401356004611b53565b61094f906101a0850135611b1c565b6109599190611b6a565b80825260011461096a578051610994565b600361097b60a08401356004611b53565b61098a906101c0850135611b1c565b6109949190611b6a565b602082018190526001146109ac5780602001516109d6565b60036109bd60c08401356004611b53565b6109cc906101e0850135611b1c565b6109d69190611b6a565b604082018190526001146109ee578060400151610a18565b60036109ff60e08401356004611b53565b610a0e90610200850135611b1c565b610a189190611b6a565b60608201526040517fcd926af7f9a68e32e933bf15d4e47bcce858f526e88f89f68a2d70ca616d5b1190610a4d908490611850565b60405180910390a1610a5d6113f0565b610a6a602084018461158a565b81516001600160a01b0390911690528051602080850135910152610a94608084016060850161158a565b81516001600160a01b039091166040909101528051610160840135606091820152820151600114610ac9578160600151610af4565b6003610adb6101008501356004611b53565b610aea90610220860135611b1c565b610af49190611b6a565b60208201515261080e34610120850135611b1c565b604051610b1d9060079083906020016119da565b6040516020818303038152906040528051906020012060001c60005414610b4357600080fd5b60008080556040805160208101909152908152610b68602083013560c0840135611b1c565b4310610b7357600080fd5b3415610b7e57600080fd5b33610b8f606084016040850161158a565b6001600160a01b031614610ba257600080fd5b610bb03460a0840135611b1c565b81526040517fe597ae356d095a92b3822055f1c648ca52032e1f228a5880234c1daf5df1103b90610be29084906118f6565b60405180910390a1610bf2611449565b610bff602084018461158a565b6001600160a01b0316815260208084013590820152610c24606084016040850161158a565b6001600160a01b03166040808301919091526060808501359083015260808085013590830152805160a08181019092529060e08501906005908390839080828437600092019190915250505060a0820152815160c08201524360e0820152604051610519906009908390602001611a18565b604051610caa9060019083906020016119ef565b6040516020818303038152906040528051906020012060001c60005414610cd057600080fd5b600080805560408051808201909152818152602081019190915234602083013514610cfa57600080fd5b610d08346080840135611b1c565b8152610d1960208301356002611b34565b60208201526040517ff196eb766d2d8533f0df41b064e516bf7376911659bd46c361acef78536bf4bc90610d4e908490611969565b60405180910390a1610d5e6114a6565b610d6b602084018461158a565b6001600160a01b031681526040808401356020830152606080850135828401523390830152805160a08181019092529060c0850190600590839083908082843760009201919091525050506080820152815160a08201524360c082015260208083015160e083015260405161051991600291849101611aa4565b604051610df9906002908390602001611a8f565b6040516020818303038152906040528051906020012060001c60005414610e1f57600080fd5b60008055610e366020820135610140830135611b1c565b4310158015610e43575060015b610e4c57600080fd5b3415610e5757600080fd5b33610e68608083016060840161158a565b6001600160a01b031614610e7b57600080fd5b610e8b608082016060830161158a565b6001600160a01b03166108fc610ea634610120850135611b1c565b6040518115909202916000818181858888f19350505050158015610ece573d6000803e3d6000fd5b507f055940c5e15feb719569f4500c80f7bfb314fddcaa7f5277f460d0001d9e15aa816040516102789190611877565b604051610f12906009908390602001611a03565b6040516020818303038152906040528051906020012060001c60005414610f3857600080fd5b60008055610f4f6020820135610160830135611b1c565b4310158015610f5c575060015b610f6557600080fd5b3415610f7057600080fd5b33610f81606083016040840161158a565b6001600160a01b031614610f9457600080fd5b610fa4606082016040830161158a565b6001600160a01b03166108fc610fbf34610140850135611b1c565b6040518115909202916000818181858888f19350505050158015610fe7573d6000803e3d6000fd5b507f17b976f55a5f758a1520d35102ae12de435fd25c8b955a12770ad4a43390b04e81604051610278919061195a565b60405161102b9060059083906020016119c6565b6040516020818303038152906040528051906020012060001c6000541461105157600080fd5b60008080556040805160208101909152908152611076602083013560a0840135611b1c565b431061108157600080fd5b341561108c57600080fd5b3361109a602084018461158a565b6001600160a01b0316146110ad57600080fd5b6110bb346080840135611b1c565b81526040517f14b2fac8669411cf21e4ba5bb5a1dc8f8090c18cfc40ef348f6c982590270f0e906110ed9084906118aa565b60405180910390a16111476040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b611154602084018461158a565b6001600160a01b0316815260208084013590820152611179606084016040850161158a565b6001600160a01b03908116604083810191825260608681013581860190815260c0808901356080808901918252895160a0808b0191825243858c01908152885160076020808301919091528d518d169a82019a909a52988c0151978901979097529751909816908601529151948401949094525192820192909252915160e08301525161010082015261012001610519565b60208101515160011415611321576112646040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840190815284516040908101518416818601908152865160609081015181880190815285890180518701516080808b01918252915186015160a0808c01918252875160059a81019a909a528b518b16978a0197909752965193880193909352925190961691850191909152935190830152915160c0820152905160e08201526101000160408051601f19818403018152919052805160209091012060005550611389565b6040805160c081018252600081830181815260608084018381526080850184815260a086018581528487526020808801969096528851516001600160a01b039081169095528851909701519093169052855101519052830151519091526113878161138c565b505b50565b8051606001516002146113a4578051602001516113a8565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f193505050501580156113e8573d6000803e3d6000fd5b506000805533ff5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161144460405180606001604052806000815260200160008152602001600081525090565b905290565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611492611503565b815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016114e8611503565b81526020016000815260200160008152602001600081525090565b6040518060a001604052806005906020820280368337509192915050565b80356001600160a01b038116811461153857600080fd5b919050565b6000610240828403121561154f578081fd5b50919050565b60006101a0828403121561154f578081fd5b600060e0828403121561154f578081fd5b6000610180828403121561154f578081fd5b60006020828403121561159b578081fd5b6115a482611521565b9392505050565b600061024082840312156115bd578081fd5b6115a4838361153d565b60006101a082840312156115d9578081fd5b6115a48383611555565b600060e082840312156115f4578081fd5b6115a48383611567565b60006101808284031215611610578081fd5b6115a48383611578565b6000610100828403121561154f578081fd5b60006080828403121561154f578081fd5b8060005b6005811015611660578151845260209384019390910190600101611641565b50505050565b8035825260a0602082016020840137600060c08301525050565b6001600160a01b038061169283611521565b16835260208201356020840152806116ac60408401611521565b16604084015250606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b03806116e783611521565b168352602082013560208401528061170160408401611521565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0361174582611521565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b038061179083611521565b16835260208201356020840152806117aa60408401611521565b16604084015250606081013560608301526080810135608083015260a080820160a0840137610140818101359083015261016090810135910152565b6001600160a01b03806117f883611521565b16835260208201356020840152604082013560408401528061181c60608401611521565b1660608401525060a06080820160808401376101208181013590830152610140808201359083015261016090810135910152565b610240810161185f82846117e6565b610180611870818401828601611666565b5092915050565b6101a0810161188682846117e6565b6101808084013580151580821461189c57600080fd5b808386015250505092915050565b60e081016118b88284611680565b60c092830135919092015290565b60e081016118d48284611680565b60c08301358015158082146118e857600080fd5b8060c0850152505092915050565b610180810161190582846116d5565b60a060e0840160e08401376000815292915050565b610100810161192982846116d5565b60e083013580151580821461193d57600080fd5b8060e0850152505092915050565b610240810161185f828461177e565b6101a08101611886828461177e565b61018081016119788284611734565b60a060c0840160c08401376000610160838101918252906001600160a01b036119a2868401611521565b1690525092915050565b82815260c0810160a0836020840137600081529392505050565b82815260e081016115a46020830184611680565b82815261010081016115a460208301846116d5565b82815260e081016115a46020830184611734565b8281526101a081016115a4602083018461177e565b60006101a08201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a0830151611a7160c084018261163d565b5060c083015161016083015260e08301516101808301529392505050565b8281526101a081016115a460208301846117e6565b60006101a08201905083825260018060a01b038084511660208401526020840151604084015260408401516060840152806060850151166080840152506080830151611af360a084018261163d565b5060a083015161014083015260c083015161016083015260e08301516101808301529392505050565b60008219821115611b2f57611b2f611b8a565b500190565b6000816000190483118215151615611b4e57611b4e611b8a565b500290565b600082821015611b6557611b65611b8a565b500390565b600082611b8557634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea26469706673582212207b48136c0ad557ee0afbd1acf3e64339c52389ad7d24fee731fbb76d5c95430e64736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

