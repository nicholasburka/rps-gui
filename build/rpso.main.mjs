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
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc1, ctc3, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc1, ctc3, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc4, ctc3, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc1, ctc4, ctc3, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc1, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc1, ctc0]);
  
  
  const v33 = await ctc.creationTime();
  const txn1 = await (ctc.recv('Attacher', 1, 3, [ctc0, ctc0, ctc1], false, false));
  const [v42, v43, v44] = txn1.data;
  const v45 = txn1.value;
  const v49 = txn1.time;
  const v41 = txn1.from;
  const v46 = stdlib.eq(v45, v42);
  stdlib.assert(v46, {
    at: './rps.rsh:93:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './rps.rsh:93:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
     });
  const v48 = stdlib.add(stdlib.checkedBigNumberify('./rps.rsh:compileDApp', stdlib.UInt_max, 0), v45);
  const v50 = ctc.selfAddress('Attacher', false, stdlib.checkedBigNumberify('./rps.rsh:99:31:application', stdlib.UInt_max, 0));
  stdlib.protect(ctc2, await interact.acceptGame(v42, v43), {
    at: './rps.rsh:100:52:application',
    fs: ['at ./rps.rsh:99:31:application call to [unknown function] (defined at: ./rps.rsh:99:35:function exp)'],
    msg: 'acceptGame',
    who: 'Attacher'
     });
  const v52 = stdlib.protect(ctc3, await interact.getHands(), {
    at: './rps.rsh:101:71:application',
    fs: ['at ./rps.rsh:99:31:application call to [unknown function] (defined at: ./rps.rsh:99:35:function exp)'],
    msg: 'getHands',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './rps.rsh:104:39:application',
    fs: ['at ./rps.rsh:99:31:application call to [unknown function] (defined at: ./rps.rsh:99:35:function exp)'],
    msg: null,
    who: 'Attacher'
     });
  const txn2 = await (ctc.sendrecv('Attacher', 2, 2, stdlib.checkedBigNumberify('./rps.rsh:106:27:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc0, ctc1, ctc0, ctc0, ctc3, ctc4], [v41, v42, v43, v44, v48, v49, v52, v50], v42, [ctc3, ctc4], true, true, false, ((txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./rps.rsh:106:27:dot', stdlib.UInt_max, 1), v41, v42, v43, v44, v48, v49]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./rps.rsh:106:27:dot', stdlib.UInt_max, 1), v41, v42, v43, v44, v48]);
    const [v54, v55] = txn2.data;
    const v56 = txn2.value;
    const v60 = txn2.time;
    const v53 = txn2.from;
    
    const v57 = stdlib.eq(v56, v42);
    stdlib.assert(v57, {
      at: './rps.rsh:106:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    stdlib.assert(true, {
      at: './rps.rsh:106:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v59 = stdlib.add(v48, v56);
    const v62 = stdlib.mul(stdlib.checkedBigNumberify('./rps.rsh:111:46:decimal', stdlib.UInt_max, 2), v42);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./rps.rsh:109:33:after expr stmt semicolon', stdlib.UInt_max, 2), v41, v43, v44, v53, v54, v59, v60, v62]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./rps.rsh:109:33:after expr stmt semicolon', stdlib.UInt_max, 2), v41, v43, v44, v53, v54, v59, v62]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v54, v55] = txn2.data;
  const v56 = txn2.value;
  const v60 = txn2.time;
  const v53 = txn2.from;
  const v57 = stdlib.eq(v56, v42);
  stdlib.assert(v57, {
    at: './rps.rsh:106:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './rps.rsh:106:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
     });
  const v59 = stdlib.add(v48, v56);
  const v62 = stdlib.mul(stdlib.checkedBigNumberify('./rps.rsh:111:46:decimal', stdlib.UInt_max, 2), v42);
  const txn3 = await (ctc.recv('Attacher', 3, 2, [ctc0, ctc3], false, v43));
  if (txn3.didTimeout) {
    const txn4 = await (ctc.sendrecv('Attacher', 4, 0, stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc1, ctc4, ctc3, ctc0, ctc0, ctc0], [v41, v43, v44, v53, v54, v59, v60, v62], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn4) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 2), v41, v43, v44, v53, v54, v59, v60, v62]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 2), v41, v43, v44, v53, v54, v59, v62]);
      const [] = txn4.data;
      const v389 = txn4.value;
      const v394 = txn4.time;
      const v388 = txn4.from;
      
      const v390 = stdlib.eq(v389, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v390, {
        at: 'reach standard library:66:7:dot',
        fs: ['at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Attacher'
         });
      const v391 = stdlib.addressEq(v53, v388);
      stdlib.assert(v391, {
        at: 'reach standard library:66:7:dot',
        fs: ['at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
         });
      const v393 = stdlib.add(v59, v389);
      sim_r.txns.push({
        amt: v393,
        to: v53
         });
      sim_r.nextSt = stdlib.digest(ctc6, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn4.data;
    const v389 = txn4.value;
    const v394 = txn4.time;
    const v388 = txn4.from;
    const v390 = stdlib.eq(v389, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v390, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    const v391 = stdlib.addressEq(v53, v388);
    stdlib.assert(v391, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v393 = stdlib.add(v59, v389);
    ;
    stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:119:84:decimal', stdlib.UInt_max, 0)), {
      at: './rps.rsh:77:63:application',
      fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:119:83:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:119:66:function exp)', 'at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
       });
    return;
     }
  else {
    const [v67, v68] = txn3.data;
    const v69 = txn3.value;
    const v74 = txn3.time;
    const v66 = txn3.from;
    const v70 = stdlib.eq(v69, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v70, {
      at: './rps.rsh:118:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    const v71 = stdlib.addressEq(v41, v66);
    stdlib.assert(v71, {
      at: './rps.rsh:118:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v73 = stdlib.add(v59, v69);
    const v76 = stdlib.digest(ctc5, [v67, v68]);
    const v77 = stdlib.eq(v44, v76);
    stdlib.assert(v77, {
      at: 'reach standard library:63:17:application',
      fs: ['at ./rps.rsh:120:40:application call to "checkCommitment" (defined at: reach standard library:62:8:function exp)'],
      msg: null,
      who: 'Attacher'
       });
    const v94 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 0)];
    const v95 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 0)];
    const v97 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v95);
    const v98 = stdlib.add(v94, v97);
    const v99 = stdlib.mod(v98, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v103 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 1)];
    const v104 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 1)];
    const v106 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v104);
    const v107 = stdlib.add(v103, v106);
    const v108 = stdlib.mod(v107, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v112 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 2)];
    const v113 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 2)];
    const v115 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v113);
    const v116 = stdlib.add(v112, v115);
    const v117 = stdlib.mod(v116, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v121 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 3)];
    const v122 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 3)];
    const v124 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v122);
    const v125 = stdlib.add(v121, v124);
    const v126 = stdlib.mod(v125, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v130 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 4)];
    const v131 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 4)];
    const v133 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v131);
    const v134 = stdlib.add(v130, v133);
    const v135 = stdlib.mod(v134, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v148 = stdlib.eq(v99, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v149 = v148 ? v108 : v99;
    const v152 = stdlib.eq(v149, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v153 = v152 ? v117 : v149;
    const v156 = stdlib.eq(v153, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v157 = v156 ? v126 : v153;
    const v160 = stdlib.eq(v157, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v161 = v160 ? v135 : v157;
    let v164 = v161;
    let v165 = stdlib.checkedBigNumberify('./rps.rsh:154:88:decimal', stdlib.UInt_max, 0);
    let v408 = v73;
    let v409 = v74;
    let v410 = v60;
    
    while ((() => {
      const v175 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v175; })()) {
      stdlib.protect(ctc2, await interact.informDraw(), {
        at: './rps.rsh:160:52:application',
        fs: ['at ./rps.rsh:159:31:application call to [unknown function] (defined at: ./rps.rsh:159:43:function exp)'],
        msg: 'informDraw',
        who: 'Attacher'
         });
      const txn4 = await (ctc.recv('Attacher', 7, 1, [ctc1], false, v43));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv('Attacher', 8, 0, stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0], [v41, v43, v53, v62, v165, v408, v409], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn5) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408, v409]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408]);
          const [] = txn5.data;
          const v350 = txn5.value;
          const v355 = txn5.time;
          const v349 = txn5.from;
          
          const v351 = stdlib.eq(v350, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v351, {
            at: 'reach standard library:66:7:dot',
            fs: ['at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v352 = stdlib.addressEq(v53, v349);
          stdlib.assert(v352, {
            at: 'reach standard library:66:7:dot',
            fs: ['at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v354 = stdlib.add(v408, v350);
          sim_r.txns.push({
            amt: v354,
            to: v53
             });
          sim_r.nextSt = stdlib.digest(ctc6, []);
          sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
          sim_r.isHalt = true;
          
          return sim_r;
           })));
        const [] = txn5.data;
        const v350 = txn5.value;
        const v355 = txn5.time;
        const v349 = txn5.from;
        const v351 = stdlib.eq(v350, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v351, {
          at: 'reach standard library:66:7:dot',
          fs: ['at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Attacher'
           });
        const v352 = stdlib.addressEq(v53, v349);
        stdlib.assert(v352, {
          at: 'reach standard library:66:7:dot',
          fs: ['at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
           });
        const v354 = stdlib.add(v408, v350);
        ;
        stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:222:86:decimal', stdlib.UInt_max, 0)), {
          at: './rps.rsh:77:63:application',
          fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:222:85:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:222:68:function exp)', 'at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
          msg: 'informTimeout',
          who: 'Attacher'
           });
        return;
         }
      else {
        const [v188] = txn4.data;
        const v189 = txn4.value;
        const v194 = txn4.time;
        const v187 = txn4.from;
        const v190 = stdlib.eq(v189, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v190, {
          at: './rps.rsh:221:29:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Attacher'
           });
        const v191 = stdlib.addressEq(v41, v187);
        stdlib.assert(v191, {
          at: './rps.rsh:221:29:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
           });
        const v193 = stdlib.add(v408, v189);
        const v197 = stdlib.protect(ctc3, await interact.getHands(), {
          at: './rps.rsh:227:72:application',
          fs: ['at ./rps.rsh:226:33:application call to [unknown function] (defined at: ./rps.rsh:226:37:function exp)'],
          msg: 'getHands',
          who: 'Attacher'
           });
        const txn5 = await (ctc.sendrecv('Attacher', 9, 1, stdlib.checkedBigNumberify('./rps.rsh:228:29:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc1, ctc0, ctc0, ctc3], [v41, v43, v53, v62, v165, v188, v193, v194, v197], stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0), [ctc3], true, true, v43, ((txn5) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./rps.rsh:228:29:dot', stdlib.UInt_max, 7), v41, v43, v53, v62, v165, v188, v193, v194]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./rps.rsh:228:29:dot', stdlib.UInt_max, 7), v41, v43, v53, v62, v165, v188, v193]);
          const [v199] = txn5.data;
          const v200 = txn5.value;
          const v205 = txn5.time;
          const v198 = txn5.from;
          
          const v201 = stdlib.eq(v200, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v201, {
            at: './rps.rsh:228:29:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v202 = stdlib.addressEq(v53, v198);
          stdlib.assert(v202, {
            at: './rps.rsh:228:29:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v204 = stdlib.add(v193, v200);
          sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./rps.rsh:230:35:after expr stmt semicolon', stdlib.UInt_max, 9), v41, v43, v53, v62, v165, v188, v199, v204, v205]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./rps.rsh:230:35:after expr stmt semicolon', stdlib.UInt_max, 9), v41, v43, v53, v62, v165, v188, v199, v204]);
          sim_r.isHalt = false;
          
          return sim_r;
           })));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.recv('Attacher', 10, 0, [], false, false));
          const [] = txn6.data;
          const v329 = txn6.value;
          const v334 = txn6.time;
          const v328 = txn6.from;
          const v330 = stdlib.eq(v329, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v330, {
            at: 'reach standard library:66:7:dot',
            fs: ['at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v331 = stdlib.addressEq(v41, v328);
          stdlib.assert(v331, {
            at: 'reach standard library:66:7:dot',
            fs: ['at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v333 = stdlib.add(v193, v329);
          ;
          stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:229:86:decimal', stdlib.UInt_max, 1)), {
            at: './rps.rsh:77:63:application',
            fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:229:85:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:229:68:function exp)', 'at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'informTimeout',
            who: 'Attacher'
             });
          return;
           }
        else {
          const [v199] = txn5.data;
          const v200 = txn5.value;
          const v205 = txn5.time;
          const v198 = txn5.from;
          const v201 = stdlib.eq(v200, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v201, {
            at: './rps.rsh:228:29:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Attacher'
             });
          const v202 = stdlib.addressEq(v53, v198);
          stdlib.assert(v202, {
            at: './rps.rsh:228:29:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
             });
          const v204 = stdlib.add(v193, v200);
          const txn6 = await (ctc.recv('Attacher', 11, 2, [ctc0, ctc3], false, v43));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv('Attacher', 12, 0, stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc1, ctc3, ctc0, ctc0], [v41, v43, v53, v62, v165, v188, v199, v204, v205], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn7) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 9), v41, v43, v53, v62, v165, v188, v199, v204, v205]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 9), v41, v43, v53, v62, v165, v188, v199, v204]);
              const [] = txn7.data;
              const v308 = txn7.value;
              const v313 = txn7.time;
              const v307 = txn7.from;
              
              const v309 = stdlib.eq(v308, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v309, {
                at: 'reach standard library:66:7:dot',
                fs: ['at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v310 = stdlib.addressEq(v53, v307);
              stdlib.assert(v310, {
                at: 'reach standard library:66:7:dot',
                fs: ['at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v312 = stdlib.add(v204, v308);
              sim_r.txns.push({
                amt: v312,
                to: v53
                 });
              sim_r.nextSt = stdlib.digest(ctc6, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn7.data;
            const v308 = txn7.value;
            const v313 = txn7.time;
            const v307 = txn7.from;
            const v309 = stdlib.eq(v308, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v309, {
              at: 'reach standard library:66:7:dot',
              fs: ['at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v310 = stdlib.addressEq(v53, v307);
            stdlib.assert(v310, {
              at: 'reach standard library:66:7:dot',
              fs: ['at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v312 = stdlib.add(v204, v308);
            ;
            stdlib.protect(ctc2, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:235:86:decimal', stdlib.UInt_max, 0)), {
              at: './rps.rsh:77:63:application',
              fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:235:85:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:235:68:function exp)', 'at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'informTimeout',
              who: 'Attacher'
               });
            return;
             }
          else {
            const [v209, v210] = txn6.data;
            const v211 = txn6.value;
            const v216 = txn6.time;
            const v208 = txn6.from;
            const v212 = stdlib.eq(v211, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v212, {
              at: './rps.rsh:234:29:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v213 = stdlib.addressEq(v41, v208);
            stdlib.assert(v213, {
              at: './rps.rsh:234:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v215 = stdlib.add(v204, v211);
            const v218 = stdlib.digest(ctc5, [v209, v210]);
            const v219 = stdlib.eq(v188, v218);
            stdlib.assert(v219, {
              at: 'reach standard library:63:17:application',
              fs: ['at ./rps.rsh:236:42:application call to "checkCommitment" (defined at: reach standard library:62:8:function exp)'],
              msg: null,
              who: 'Attacher'
               });
            const v236 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 0)];
            const v237 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 0)];
            const v239 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v237);
            const v240 = stdlib.add(v236, v239);
            const v241 = stdlib.mod(v240, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v245 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 1)];
            const v246 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 1)];
            const v248 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v246);
            const v249 = stdlib.add(v245, v248);
            const v250 = stdlib.mod(v249, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v254 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 2)];
            const v255 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 2)];
            const v257 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v255);
            const v258 = stdlib.add(v254, v257);
            const v259 = stdlib.mod(v258, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v263 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 3)];
            const v264 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 3)];
            const v266 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v264);
            const v267 = stdlib.add(v263, v266);
            const v268 = stdlib.mod(v267, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v272 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 4)];
            const v273 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 4)];
            const v275 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v273);
            const v276 = stdlib.add(v272, v275);
            const v277 = stdlib.mod(v276, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v290 = stdlib.eq(v241, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v291 = v290 ? v250 : v241;
            const v294 = stdlib.eq(v291, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v295 = v294 ? v259 : v291;
            const v298 = stdlib.eq(v295, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v299 = v298 ? v268 : v295;
            const v302 = stdlib.eq(v299, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v303 = v302 ? v277 : v299;
            const cv164 = v303;
            const cv165 = v165;
            const cv408 = v215;
            const cv409 = v216;
            const cv410 = v205;
            
            v164 = cv164;
            v165 = cv165;
            v408 = cv408;
            v409 = cv409;
            v410 = cv410;
            
            continue; }
           }
         }
       }
    const v369 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 2));
    const v374 = v369 ? v41 : v53;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v164), {
      at: './rps.rsh:251:52:application',
      fs: ['at ./rps.rsh:250:29:application call to [unknown function] (defined at: ./rps.rsh:250:40:function exp)'],
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
  const ctc6 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0]);
  
  
  const v33 = await ctc.creationTime();
  const v31 = stdlib.protect(ctc0, interact.deadline, null);
  const v32 = stdlib.protect(ctc0, interact.wager, null);
  const v36 = stdlib.protect(ctc1, await interact.getHands(), {
    at: './rps.rsh:86:71:application',
    fs: ['at ./rps.rsh:83:31:application call to [unknown function] (defined at: ./rps.rsh:83:35:function exp)'],
    msg: 'getHands',
    who: 'Deployer'
     });
  const v38 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:58:31:application',
    fs: ['at ./rps.rsh:89:98:application call to "makeCommitment" (defined at: reach standard library:57:8:function exp)', 'at ./rps.rsh:83:31:application call to [unknown function] (defined at: ./rps.rsh:83:35:function exp)'],
    msg: 'random',
    who: 'Deployer'
     });
  const v39 = stdlib.digest(ctc2, [v38, v36]);
  const txn1 = await (ctc.sendrecv('Deployer', 1, 3, stdlib.checkedBigNumberify('./rps.rsh:93:27:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc3], [v33, v32, v31, v39], v32, [ctc0, ctc0, ctc3], true, true, false, ((txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./rps.rsh:93:27:dot', stdlib.UInt_max, 0), v33]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./rps.rsh:93:27:dot', stdlib.UInt_max, 0)]);
    const [v42, v43, v44] = txn1.data;
    const v45 = txn1.value;
    const v49 = txn1.time;
    const v41 = txn1.from;
    
    const v46 = stdlib.eq(v45, v42);
    stdlib.assert(v46, {
      at: './rps.rsh:93:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    stdlib.assert(true, {
      at: './rps.rsh:93:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v48 = stdlib.add(stdlib.checkedBigNumberify('./rps.rsh:compileDApp', stdlib.UInt_max, 0), v45);
    sim_r.nextSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./rps.rsh:95:33:after expr stmt semicolon', stdlib.UInt_max, 1), v41, v42, v43, v44, v48, v49]);
    sim_r.nextSt_noTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./rps.rsh:95:33:after expr stmt semicolon', stdlib.UInt_max, 1), v41, v42, v43, v44, v48]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v42, v43, v44] = txn1.data;
  const v45 = txn1.value;
  const v49 = txn1.time;
  const v41 = txn1.from;
  const v46 = stdlib.eq(v45, v42);
  stdlib.assert(v46, {
    at: './rps.rsh:93:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Deployer'
     });
  stdlib.assert(true, {
    at: './rps.rsh:93:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
     });
  const v48 = stdlib.add(stdlib.checkedBigNumberify('./rps.rsh:compileDApp', stdlib.UInt_max, 0), v45);
  const txn2 = await (ctc.recv('Deployer', 2, 2, [ctc1, ctc4], false, false));
  const [v54, v55] = txn2.data;
  const v56 = txn2.value;
  const v60 = txn2.time;
  const v53 = txn2.from;
  const v57 = stdlib.eq(v56, v42);
  stdlib.assert(v57, {
    at: './rps.rsh:106:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Deployer'
     });
  stdlib.assert(true, {
    at: './rps.rsh:106:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
     });
  const v59 = stdlib.add(v48, v56);
  const v62 = stdlib.mul(stdlib.checkedBigNumberify('./rps.rsh:111:46:decimal', stdlib.UInt_max, 2), v42);
  stdlib.protect(ctc5, await interact.informOpponent(v55), {
    at: './rps.rsh:115:56:application',
    fs: ['at ./rps.rsh:114:31:application call to [unknown function] (defined at: ./rps.rsh:114:35:function exp)'],
    msg: 'informOpponent',
    who: 'Deployer'
     });
  const txn3 = await (ctc.sendrecv('Deployer', 3, 2, stdlib.checkedBigNumberify('./rps.rsh:118:27:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1], [v41, v43, v44, v53, v54, v59, v60, v62, v38, v36], stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v43, ((txn3) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./rps.rsh:118:27:dot', stdlib.UInt_max, 2), v41, v43, v44, v53, v54, v59, v60, v62]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./rps.rsh:118:27:dot', stdlib.UInt_max, 2), v41, v43, v44, v53, v54, v59, v62]);
    const [v67, v68] = txn3.data;
    const v69 = txn3.value;
    const v74 = txn3.time;
    const v66 = txn3.from;
    
    const v70 = stdlib.eq(v69, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v70, {
      at: './rps.rsh:118:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v71 = stdlib.addressEq(v41, v66);
    stdlib.assert(v71, {
      at: './rps.rsh:118:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v73 = stdlib.add(v59, v69);
    const v76 = stdlib.digest(ctc2, [v67, v68]);
    const v77 = stdlib.eq(v44, v76);
    stdlib.assert(v77, {
      at: 'reach standard library:63:17:application',
      fs: ['at ./rps.rsh:120:40:application call to "checkCommitment" (defined at: reach standard library:62:8:function exp)'],
      msg: null,
      who: 'Deployer'
       });
    const v94 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 0)];
    const v95 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 0)];
    const v97 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v95);
    const v98 = stdlib.add(v94, v97);
    const v99 = stdlib.mod(v98, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v103 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 1)];
    const v104 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 1)];
    const v106 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v104);
    const v107 = stdlib.add(v103, v106);
    const v108 = stdlib.mod(v107, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v112 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 2)];
    const v113 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 2)];
    const v115 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v113);
    const v116 = stdlib.add(v112, v115);
    const v117 = stdlib.mod(v116, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v121 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 3)];
    const v122 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 3)];
    const v124 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v122);
    const v125 = stdlib.add(v121, v124);
    const v126 = stdlib.mod(v125, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v130 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 4)];
    const v131 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 4)];
    const v133 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v131);
    const v134 = stdlib.add(v130, v133);
    const v135 = stdlib.mod(v134, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v148 = stdlib.eq(v99, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v149 = v148 ? v108 : v99;
    const v152 = stdlib.eq(v149, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v153 = v152 ? v117 : v149;
    const v156 = stdlib.eq(v153, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v157 = v156 ? v126 : v153;
    const v160 = stdlib.eq(v157, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v161 = v160 ? v135 : v157;
    const v164 = v161;
    const v165 = stdlib.checkedBigNumberify('./rps.rsh:154:88:decimal', stdlib.UInt_max, 0);
    const v408 = v73;
    const v409 = v74;
    const v410 = v60;
    
    if ((() => {
      const v175 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v175; })()) {
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./rps.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408, v409]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./rps.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408]);
      sim_r.isHalt = false;
       }
    else {
      const v369 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 2));
      const v374 = v369 ? v41 : v53;
      sim_r.txns.push({
        amt: v62,
        to: v374
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
    const v389 = txn4.value;
    const v394 = txn4.time;
    const v388 = txn4.from;
    const v390 = stdlib.eq(v389, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v390, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v391 = stdlib.addressEq(v53, v388);
    stdlib.assert(v391, {
      at: 'reach standard library:66:7:dot',
      fs: ['at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v393 = stdlib.add(v59, v389);
    ;
    stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:119:84:decimal', stdlib.UInt_max, 0)), {
      at: './rps.rsh:77:63:application',
      fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:119:83:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:119:66:function exp)', 'at ./rps.rsh:119:59:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
       });
    return;
     }
  else {
    const [v67, v68] = txn3.data;
    const v69 = txn3.value;
    const v74 = txn3.time;
    const v66 = txn3.from;
    const v70 = stdlib.eq(v69, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v70, {
      at: './rps.rsh:118:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v71 = stdlib.addressEq(v41, v66);
    stdlib.assert(v71, {
      at: './rps.rsh:118:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v73 = stdlib.add(v59, v69);
    const v76 = stdlib.digest(ctc2, [v67, v68]);
    const v77 = stdlib.eq(v44, v76);
    stdlib.assert(v77, {
      at: 'reach standard library:63:17:application',
      fs: ['at ./rps.rsh:120:40:application call to "checkCommitment" (defined at: reach standard library:62:8:function exp)'],
      msg: null,
      who: 'Deployer'
       });
    const v94 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 0)];
    const v95 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 0)];
    const v97 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v95);
    const v98 = stdlib.add(v94, v97);
    const v99 = stdlib.mod(v98, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v103 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 1)];
    const v104 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 1)];
    const v106 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v104);
    const v107 = stdlib.add(v103, v106);
    const v108 = stdlib.mod(v107, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v112 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 2)];
    const v113 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 2)];
    const v115 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v113);
    const v116 = stdlib.add(v112, v115);
    const v117 = stdlib.mod(v116, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v121 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 3)];
    const v122 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 3)];
    const v124 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v122);
    const v125 = stdlib.add(v121, v124);
    const v126 = stdlib.mod(v125, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v130 = v68[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 4)];
    const v131 = v54[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 4)];
    const v133 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v131);
    const v134 = stdlib.add(v130, v133);
    const v135 = stdlib.mod(v134, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
    const v148 = stdlib.eq(v99, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v149 = v148 ? v108 : v99;
    const v152 = stdlib.eq(v149, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v153 = v152 ? v117 : v149;
    const v156 = stdlib.eq(v153, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v157 = v156 ? v126 : v153;
    const v160 = stdlib.eq(v157, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
    const v161 = v160 ? v135 : v157;
    let v164 = v161;
    let v165 = stdlib.checkedBigNumberify('./rps.rsh:154:88:decimal', stdlib.UInt_max, 0);
    let v408 = v73;
    let v409 = v74;
    let v410 = v60;
    
    while ((() => {
      const v175 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v175; })()) {
      stdlib.protect(ctc5, await interact.informDraw(), {
        at: './rps.rsh:160:52:application',
        fs: ['at ./rps.rsh:159:31:application call to [unknown function] (defined at: ./rps.rsh:159:43:function exp)'],
        msg: 'informDraw',
        who: 'Deployer'
         });
      const v182 = stdlib.protect(ctc1, await interact.getHands(), {
        at: './rps.rsh:218:62:application',
        fs: ['at ./rps.rsh:217:33:application call to [unknown function] (defined at: ./rps.rsh:217:37:function exp)'],
        msg: 'getHands',
        who: 'Deployer'
         });
      const v184 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:58:31:application',
        fs: ['at ./rps.rsh:219:70:application call to "makeCommitment" (defined at: reach standard library:57:8:function exp)', 'at ./rps.rsh:217:33:application call to [unknown function] (defined at: ./rps.rsh:217:37:function exp)'],
        msg: 'random',
        who: 'Deployer'
         });
      const v185 = stdlib.digest(ctc2, [v184, v182]);
      const txn4 = await (ctc.sendrecv('Deployer', 7, 1, stdlib.checkedBigNumberify('./rps.rsh:221:29:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc3], [v41, v43, v53, v62, v165, v408, v409, v185], stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0), [ctc3], true, true, v43, ((txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./rps.rsh:221:29:dot', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408, v409]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./rps.rsh:221:29:dot', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408]);
        const [v188] = txn4.data;
        const v189 = txn4.value;
        const v194 = txn4.time;
        const v187 = txn4.from;
        
        const v190 = stdlib.eq(v189, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v190, {
          at: './rps.rsh:221:29:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Deployer'
           });
        const v191 = stdlib.addressEq(v41, v187);
        stdlib.assert(v191, {
          at: './rps.rsh:221:29:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
           });
        const v193 = stdlib.add(v408, v189);
        sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./rps.rsh:223:35:after expr stmt semicolon', stdlib.UInt_max, 7), v41, v43, v53, v62, v165, v188, v193, v194]);
        sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./rps.rsh:223:35:after expr stmt semicolon', stdlib.UInt_max, 7), v41, v43, v53, v62, v165, v188, v193]);
        sim_r.isHalt = false;
        
        return sim_r;
         })));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.recv('Deployer', 8, 0, [], false, false));
        const [] = txn5.data;
        const v350 = txn5.value;
        const v355 = txn5.time;
        const v349 = txn5.from;
        const v351 = stdlib.eq(v350, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v351, {
          at: 'reach standard library:66:7:dot',
          fs: ['at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Deployer'
           });
        const v352 = stdlib.addressEq(v53, v349);
        stdlib.assert(v352, {
          at: 'reach standard library:66:7:dot',
          fs: ['at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
           });
        const v354 = stdlib.add(v408, v350);
        ;
        stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:222:86:decimal', stdlib.UInt_max, 0)), {
          at: './rps.rsh:77:63:application',
          fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:222:85:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:222:68:function exp)', 'at ./rps.rsh:222:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
          msg: 'informTimeout',
          who: 'Deployer'
           });
        return;
         }
      else {
        const [v188] = txn4.data;
        const v189 = txn4.value;
        const v194 = txn4.time;
        const v187 = txn4.from;
        const v190 = stdlib.eq(v189, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v190, {
          at: './rps.rsh:221:29:dot',
          fs: [],
          msg: 'pay amount correct',
          who: 'Deployer'
           });
        const v191 = stdlib.addressEq(v41, v187);
        stdlib.assert(v191, {
          at: './rps.rsh:221:29:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
           });
        const v193 = stdlib.add(v408, v189);
        const txn5 = await (ctc.recv('Deployer', 9, 1, [ctc1], false, v43));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv('Deployer', 10, 0, stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v41, v43, v53, v62, v165, v188, v193, v194], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, ((txn6) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 7), v41, v43, v53, v62, v165, v188, v193, v194]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:66:7:dot', stdlib.UInt_max, 7), v41, v43, v53, v62, v165, v188, v193]);
            const [] = txn6.data;
            const v329 = txn6.value;
            const v334 = txn6.time;
            const v328 = txn6.from;
            
            const v330 = stdlib.eq(v329, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v330, {
              at: 'reach standard library:66:7:dot',
              fs: ['at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v331 = stdlib.addressEq(v41, v328);
            stdlib.assert(v331, {
              at: 'reach standard library:66:7:dot',
              fs: ['at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v333 = stdlib.add(v193, v329);
            sim_r.txns.push({
              amt: v333,
              to: v41
               });
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.isHalt = true;
            
            return sim_r;
             })));
          const [] = txn6.data;
          const v329 = txn6.value;
          const v334 = txn6.time;
          const v328 = txn6.from;
          const v330 = stdlib.eq(v329, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v330, {
            at: 'reach standard library:66:7:dot',
            fs: ['at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'pay amount correct',
            who: 'Deployer'
             });
          const v331 = stdlib.addressEq(v41, v328);
          stdlib.assert(v331, {
            at: 'reach standard library:66:7:dot',
            fs: ['at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
             });
          const v333 = stdlib.add(v193, v329);
          ;
          stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:229:86:decimal', stdlib.UInt_max, 1)), {
            at: './rps.rsh:77:63:application',
            fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:229:85:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:229:68:function exp)', 'at ./rps.rsh:229:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
            msg: 'informTimeout',
            who: 'Deployer'
             });
          return;
           }
        else {
          const [v199] = txn5.data;
          const v200 = txn5.value;
          const v205 = txn5.time;
          const v198 = txn5.from;
          const v201 = stdlib.eq(v200, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
          stdlib.assert(v201, {
            at: './rps.rsh:228:29:dot',
            fs: [],
            msg: 'pay amount correct',
            who: 'Deployer'
             });
          const v202 = stdlib.addressEq(v53, v198);
          stdlib.assert(v202, {
            at: './rps.rsh:228:29:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
             });
          const v204 = stdlib.add(v193, v200);
          const txn6 = await (ctc.sendrecv('Deployer', 11, 2, stdlib.checkedBigNumberify('./rps.rsh:234:29:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0, ctc0, ctc1], [v41, v43, v53, v62, v165, v188, v199, v204, v205, v184, v182], stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v43, ((txn6) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./rps.rsh:234:29:dot', stdlib.UInt_max, 9), v41, v43, v53, v62, v165, v188, v199, v204, v205]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./rps.rsh:234:29:dot', stdlib.UInt_max, 9), v41, v43, v53, v62, v165, v188, v199, v204]);
            const [v209, v210] = txn6.data;
            const v211 = txn6.value;
            const v216 = txn6.time;
            const v208 = txn6.from;
            
            const v212 = stdlib.eq(v211, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v212, {
              at: './rps.rsh:234:29:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v213 = stdlib.addressEq(v41, v208);
            stdlib.assert(v213, {
              at: './rps.rsh:234:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v215 = stdlib.add(v204, v211);
            const v218 = stdlib.digest(ctc2, [v209, v210]);
            const v219 = stdlib.eq(v188, v218);
            stdlib.assert(v219, {
              at: 'reach standard library:63:17:application',
              fs: ['at ./rps.rsh:236:42:application call to "checkCommitment" (defined at: reach standard library:62:8:function exp)'],
              msg: null,
              who: 'Deployer'
               });
            const v236 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 0)];
            const v237 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 0)];
            const v239 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v237);
            const v240 = stdlib.add(v236, v239);
            const v241 = stdlib.mod(v240, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v245 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 1)];
            const v246 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 1)];
            const v248 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v246);
            const v249 = stdlib.add(v245, v248);
            const v250 = stdlib.mod(v249, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v254 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 2)];
            const v255 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 2)];
            const v257 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v255);
            const v258 = stdlib.add(v254, v257);
            const v259 = stdlib.mod(v258, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v263 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 3)];
            const v264 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 3)];
            const v266 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v264);
            const v267 = stdlib.add(v263, v266);
            const v268 = stdlib.mod(v267, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v272 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 4)];
            const v273 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 4)];
            const v275 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v273);
            const v276 = stdlib.add(v272, v275);
            const v277 = stdlib.mod(v276, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v290 = stdlib.eq(v241, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v291 = v290 ? v250 : v241;
            const v294 = stdlib.eq(v291, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v295 = v294 ? v259 : v291;
            const v298 = stdlib.eq(v295, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v299 = v298 ? v268 : v295;
            const v302 = stdlib.eq(v299, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v303 = v302 ? v277 : v299;
            const cv164 = v303;
            const cv165 = v165;
            const cv408 = v215;
            const cv409 = v216;
            const cv410 = v205;
            
            (() => {
              const v164 = cv164;
              const v165 = cv165;
              const v408 = cv408;
              const v409 = cv409;
              const v410 = cv410;
              
              if ((() => {
                const v175 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v175; })()) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./rps.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408, v409]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./rps.rsh:157:35:after expr stmt semicolon', stdlib.UInt_max, 5), v41, v43, v53, v62, v165, v408]);
                sim_r.isHalt = false;
                 }
              else {
                const v369 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 2));
                const v374 = v369 ? v41 : v53;
                sim_r.txns.push({
                  amt: v62,
                  to: v374
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
            const v308 = txn7.value;
            const v313 = txn7.time;
            const v307 = txn7.from;
            const v309 = stdlib.eq(v308, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v309, {
              at: 'reach standard library:66:7:dot',
              fs: ['at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v310 = stdlib.addressEq(v53, v307);
            stdlib.assert(v310, {
              at: 'reach standard library:66:7:dot',
              fs: ['at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v312 = stdlib.add(v204, v308);
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./rps.rsh:235:86:decimal', stdlib.UInt_max, 0)), {
              at: './rps.rsh:77:63:application',
              fs: ['at ./rps.rsh:76:37:application call to [unknown function] (defined at: ./rps.rsh:76:48:function exp)', 'at ./rps.rsh:235:85:application call to "informTimeout" (defined at: ./rps.rsh:75:53:function exp)', 'at reach standard library:69:8:application call to "after" (defined at: ./rps.rsh:235:68:function exp)', 'at ./rps.rsh:235:61:application call to "closeTo" (defined at: reach standard library:65:8:function exp)'],
              msg: 'informTimeout',
              who: 'Deployer'
               });
            return;
             }
          else {
            const [v209, v210] = txn6.data;
            const v211 = txn6.value;
            const v216 = txn6.time;
            const v208 = txn6.from;
            const v212 = stdlib.eq(v211, stdlib.checkedBigNumberify('./rps.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v212, {
              at: './rps.rsh:234:29:dot',
              fs: [],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v213 = stdlib.addressEq(v41, v208);
            stdlib.assert(v213, {
              at: './rps.rsh:234:29:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v215 = stdlib.add(v204, v211);
            const v218 = stdlib.digest(ctc2, [v209, v210]);
            const v219 = stdlib.eq(v188, v218);
            stdlib.assert(v219, {
              at: 'reach standard library:63:17:application',
              fs: ['at ./rps.rsh:236:42:application call to "checkCommitment" (defined at: reach standard library:62:8:function exp)'],
              msg: null,
              who: 'Deployer'
               });
            const v236 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 0)];
            const v237 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 0)];
            const v239 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v237);
            const v240 = stdlib.add(v236, v239);
            const v241 = stdlib.mod(v240, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v245 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 1)];
            const v246 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 1)];
            const v248 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v246);
            const v249 = stdlib.add(v245, v248);
            const v250 = stdlib.mod(v249, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v254 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 2)];
            const v255 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 2)];
            const v257 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v255);
            const v258 = stdlib.add(v254, v257);
            const v259 = stdlib.mod(v258, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v263 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 3)];
            const v264 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 3)];
            const v266 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v264);
            const v267 = stdlib.add(v263, v266);
            const v268 = stdlib.mod(v267, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v272 = v210[stdlib.checkedBigNumberify('./rps.rsh:62:18:array ref', stdlib.UInt_max, 4)];
            const v273 = v199[stdlib.checkedBigNumberify('./rps.rsh:62:29:array ref', stdlib.UInt_max, 4)];
            const v275 = stdlib.sub(stdlib.checkedBigNumberify('./rps.rsh:7:20:decimal', stdlib.UInt_max, 4), v273);
            const v276 = stdlib.add(v272, v275);
            const v277 = stdlib.mod(v276, stdlib.checkedBigNumberify('./rps.rsh:7:34:decimal', stdlib.UInt_max, 3));
            const v290 = stdlib.eq(v241, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v291 = v290 ? v250 : v241;
            const v294 = stdlib.eq(v291, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v295 = v294 ? v259 : v291;
            const v298 = stdlib.eq(v295, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v299 = v298 ? v268 : v295;
            const v302 = stdlib.eq(v299, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 1));
            const v303 = v302 ? v277 : v299;
            const cv164 = v303;
            const cv165 = v165;
            const cv408 = v215;
            const cv409 = v216;
            const cv410 = v205;
            
            v164 = cv164;
            v165 = cv165;
            v408 = cv408;
            v409 = cv409;
            v410 = cv410;
            
            continue; }
           }
         }
       }
    const v369 = stdlib.eq(v164, stdlib.checkedBigNumberify('./rps.rsh:makeEnum', stdlib.UInt_max, 2));
    const v374 = v369 ? v41 : v53;
    ;
    stdlib.protect(ctc5, await interact.seeOutcome(v164), {
      at: './rps.rsh:251:52:application',
      fs: ['at ./rps.rsh:250:29:application call to [unknown function] (defined at: ./rps.rsh:250:40:function exp)'],
      msg: 'seeOutcome',
      who: 'Deployer'
       });
    return; }
  
  
  
   }

const _ALGO = {
  appApproval: `#pragma version 2
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
  appApproval0: `#pragma version 2
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
int 12
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
  appClear: `#pragma version 2
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
  ctc: `#pragma version 2
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
txn CloseRemainderTo
global ZeroAddress
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
  stepargs: [0, 129, 241, 289, 241, 0, 0, 209, 177, 249, 209, 297, 249],
  steps: [null, `#pragma version 2
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
// Run body
// Just "pay amount correct"
// "./rps.rsh:93:27:dot"
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
// "./rps.rsh:93:27:dot"
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
`, `#pragma version 2
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
// Run body
// Just "pay amount correct"
// "./rps.rsh:106:27:dot"
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
// "./rps.rsh:106:27:dot"
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
`, `#pragma version 2
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
// Run body
// Just "pay amount correct"
// "./rps.rsh:118:27:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./rps.rsh:118:27:dot"
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
// "reach standard library:63:17:application"
// "[at ./rps.rsh:120:40:application call to \"checkCommitment\" (defined at: reach standard library:62:8:function exp)]"
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
int 1
==
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
ite
dup
store 253
int 1
==
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
ite
dup
store 252
int 1
==
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
ite
dup
store 251
int 1
==
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
ite
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
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 250
int 2
==
gtxna 0 ApplicationArgs 5
gtxna 0 ApplicationArgs 8
ite
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
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
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
pop
done:
int 1
return
`, `#pragma version 2
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
// Run body
// Just "pay amount correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:119:59:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:119:59:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
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
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
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
pop
done:
int 1
return
`, null, null, `#pragma version 2
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
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./rps.rsh:221:29:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./rps.rsh:221:29:dot"
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
`, `#pragma version 2
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
gtxna 0 ApplicationArgs 10
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:222:61:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:222:61:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
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
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
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
pop
done:
int 1
return
`, `#pragma version 2
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
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./rps.rsh:228:29:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./rps.rsh:228:29:dot"
// "[]"
gtxna 0 ApplicationArgs 7
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
`, `#pragma version 2
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
gtxna 0 ApplicationArgs 11
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:229:61:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:229:61:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
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
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
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
pop
done:
int 1
return
`, `#pragma version 2
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
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "./rps.rsh:234:29:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./rps.rsh:234:29:dot"
// "[]"
gtxna 0 ApplicationArgs 5
gtxn 3 Sender
==
assert
gtxna 0 ApplicationArgs 12
btoi
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
+
store 255
// Nothing
// "reach standard library:63:17:application"
// "[at ./rps.rsh:236:42:application call to \"checkCommitment\" (defined at: reach standard library:62:8:function exp)]"
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
int 1
==
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
ite
dup
store 253
int 1
==
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
ite
dup
store 252
int 1
==
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
ite
dup
store 251
int 1
==
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
ite
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
gtxna 0 ApplicationArgs 9
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
l0:
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 250
int 2
==
gtxna 0 ApplicationArgs 5
gtxna 0 ApplicationArgs 7
ite
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
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
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
pop
done:
int 1
return
`, `#pragma version 2
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
gtxna 0 ApplicationArgs 12
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
// Run body
// Just "pay amount correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:235:61:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:66:7:dot"
// "[at ./rps.rsh:235:61:application call to \"closeTo\" (defined at: reach standard library:65:8:function exp)]"
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
gtxna 0 ApplicationArgs 12
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
gtxna 0 ApplicationArgs 2
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 3
btoi
gtxn 4 Fee
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
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a1",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a7postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a10",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v199",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a9postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v210",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct ReachContract.a11msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a11",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v199",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a9postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a12",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
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
              }
            ],
            "internalType": "struct ReachContract.a1postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v54",
                "type": "uint256[5]"
              },
              {
                "internalType": "address payable",
                "name": "v55",
                "type": "address"
              }
            ],
            "internalType": "struct ReachContract.a2msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a2",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v54",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v68",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct ReachContract.a3msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a3",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v54",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a4",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a5postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a7msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a7",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a5postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a8",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a7postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v199",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct ReachContract.a9msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct ReachContract.a9",
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
                "name": "v33",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a0postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a1msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a1",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a7postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a10",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v199",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a9postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v209",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v210",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct ReachContract.a11msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a11",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v199",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v205",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a9postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a12",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v42",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
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
              }
            ],
            "internalType": "struct ReachContract.a1postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v54",
                "type": "uint256[5]"
              },
              {
                "internalType": "address payable",
                "name": "v55",
                "type": "address"
              }
            ],
            "internalType": "struct ReachContract.a2msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a2",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v54",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v68",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct ReachContract.a3msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a3",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v44",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256[5]",
                "name": "v54",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v59",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a2postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a4",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a5postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a7msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a7",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v409",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a5postsvs",
            "name": "svs",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a8",
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
                "name": "v41",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v43",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v53",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v165",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v194",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReachContract.a7postsvs",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256[5]",
                "name": "v199",
                "type": "uint256[5]"
              }
            ],
            "internalType": "struct ReachContract.a9msg",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct ReachContract.a9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a161003461007a565b43815261003f61007a565b8151815260405161005790600090839060200161008d565b60408051601f1981840301815291905280516020909101206000555061009c9050565b6040518060200160405280600081525090565b91825251602082015260400190565b611ce480620000ac6000396000f3fe6080604052600436106100915760003560e01c80634a00629c116100595780634a00629c146100f7578063555dbdf41461010a578063888b17ac1461011d578063a4e89afd14610130578063c7a3be981461014357610091565b80630217f0f2146100965780632bf4f873146100ab5780633e6f020c146100be57806341e9ca2d146100d1578063474269aa146100e4575b600080fd5b6100a96100a4366004611594565b610156565b005b6100a96100b93660046115b0565b610301565b6100a96100cc3660046115dd565b6103de565b6100a96100df366004611566565b6106c8565b6100a96100f2366004611594565b6107e4565b6100a9610105366004611566565b6108f9565b6100a9610118366004611582565b610a55565b6100a961012b3660046115c1565b610d3c565b6100a961013e3660046115ef565b610e79565b6100a96101513660046115c1565b610f8c565b60405161016a906007908390602001611b0c565b6040516020818303038152906040528051906020012060001c6000541461019057600080fd5b6101986111f9565b6101aa602083013560e0840135611c2a565b43106101b557600080fd5b34156101c057600080fd5b336101d16060840160408501611545565b6001600160a01b0316146101e457600080fd5b6101f23460c0840135611c2a565b81526040517f5e95a4549df0d5f2c020017c58c4d66b6a5962e0b7860ed68791a6ff248eea9c90610224908490611952565b60405180910390a161023461120c565b6102416020840184611545565b6001600160a01b03168152602080840135908201526102666060840160408501611545565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e0820152436101008201526040516102e1906009908390602001611ba3565b60408051601f198184030181529190528051602090910120600055505050565b604051610315906000908390602001611992565b6040516020818303038152906040528051906020012060001c6000541461033b57600080fd5b6103436111f9565b3460208301351461035357600080fd5b61035e346000611c2a565b81526040517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709061039090849061188a565b60405180910390a16103a0611270565b338152602080840135818301526040808501358184015260608086013590840152835160808401524360a0840152516102e1916001918491016119b5565b6040516103f2906002908390602001611a08565b6040516020818303038152906040528051906020012060001c6000541461041857600080fd5b6104206112af565b6104336020830135610140840135611c2a565b431061043e57600080fd5b341561044957600080fd5b336104576020840184611545565b6001600160a01b03161461046a57600080fd5b60405161048690610180840135906101a0850190602001611978565b6040516020818303038152906040528051906020012060001c8260000160400135146104b157600080fd5b60036104c260808401356004611c61565b6104d1906101a0850135611c2a565b6104db9190611c78565b8082526001146104ec578051610516565b60036104fd60a08401356004611c61565b61050c906101c0850135611c2a565b6105169190611c78565b6020820181905260011461052e578060200151610558565b600361053f60c08401356004611c61565b61054e906101e0850135611c2a565b6105589190611c78565b6040820181905260011461057057806040015161059a565b600361058160e08401356004611c61565b61059090610200850135611c2a565b61059a9190611c78565b60608201526040517fcd926af7f9a68e32e933bf15d4e47bcce858f526e88f89f68a2d70ca616d5b11906105cf9084906118f8565b60405180910390a16105df6112d7565b6105ec6020840184611545565b81516001600160a01b03909116905280516020808501359101526106166080840160608501611545565b81516001600160a01b03909116604090910152805161016084013560609182015282015160011461064b578160600151610676565b600361065d6101008501356004611c61565b61066c90610220860135611c2a565b6106769190611c78565b60208083018051929092529051600091015261069734610120850135611c2a565b60208201805160400191909152805143606090910152516101408401356080909101526106c3816110a1565b505050565b6040516106dc906007908390602001611b0c565b6040516020818303038152906040528051906020012060001c6000541461070257600080fd5b610714602082013560e0830135611c2a565b4310158015610721575060015b61072a57600080fd5b341561073557600080fd5b336107436020830183611545565b6001600160a01b03161461075657600080fd5b6107636020820182611545565b6001600160a01b03166108fc61077d3460c0850135611c2a565b6040518115909202916000818181858888f193505050501580156107a5573d6000803e3d6000fd5b507f6c892daa5ecfacf957ce19af675858a96c03cd93e039dc8105a0fe001bbcc84c816040516107d5919061183f565b60405180910390a16000805533ff5b6040516107f8906009908390602001611b8e565b6040516020818303038152906040528051906020012060001c6000541461081e57600080fd5b6108316020820135610180830135611c2a565b431015801561083e575060015b61084757600080fd5b341561085257600080fd5b336108636060830160408401611545565b6001600160a01b03161461087657600080fd5b6108866060820160408301611545565b6001600160a01b03166108fc6108a134610160850135611c2a565b6040518115909202916000818181858888f193505050501580156108c9573d6000803e3d6000fd5b507f70680f84e1be71ec6e099555776700818c82d3b125a77ad604ac618f3ea8d9ae816040516107d5919061187b565b60405161090d906005908390602001611a95565b6040516020818303038152906040528051906020012060001c6000541461093357600080fd5b61093b6111f9565b61094d602083013560c0840135611c2a565b431061095857600080fd5b341561096357600080fd5b336109716020840184611545565b6001600160a01b03161461098457600080fd5b6109923460a0840135611c2a565b81526040517fa337d0f4b1150004c88da9ea857ee79350e4609de82716aba228e1d9693dbff0906109c4908490611927565b60405180910390a16109d46112fc565b6109e16020840184611545565b6001600160a01b0316815260208084013590820152610a066060840160408501611545565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c08401524390830152516102e1906007908390602001611b21565b604051610a69906009908390602001611b8e565b6040516020818303038152906040528051906020012060001c60005414610a8f57600080fd5b610a976112af565b610aaa6020830135610180840135611c2a565b4310610ab557600080fd5b3415610ac057600080fd5b33610ace6020840184611545565b6001600160a01b031614610ae157600080fd5b604051610afd906101a0840135906101c0850190602001611978565b60408051601f19818403018152919052805160209091012060a083013514610b2457600080fd5b6003610b3560c08401356004611c61565b610b44906101c0850135611c2a565b610b4e9190611c78565b808252600114610b5f578051610b89565b6003610b7060e08401356004611c61565b610b7f906101e0850135611c2a565b610b899190611c78565b60208201819052600114610ba1578060200151610bcc565b6003610bb36101008401356004611c61565b610bc290610200850135611c2a565b610bcc9190611c78565b60408201819052600114610be4578060400151610c0f565b6003610bf66101208401356004611c61565b610c0590610220850135611c2a565b610c0f9190611c78565b60608201526040517f1ad438cbe247cddae380fcafb6768d3591cd82d77d26aac4ef02e389914f3c9190610c44908490611854565b60405180910390a1610c546112d7565b610c616020840184611545565b81516001600160a01b0390911690528051602080850135910152610c8b6060840160408501611545565b81516001600160a01b03909116604090910152805160608085013591810191909152820151600114610cc1578160600151610cec565b6003610cd36101408501356004611c61565b610ce290610240860135611c2a565b610cec9190611c78565b602080830180519290925290516080850135910152610d1034610160850135611c2a565b60208201805160400191909152805143606090910152516101808401356080909101526106c3816110a1565b604051610d509060019083906020016119a1565b6040516020818303038152906040528051906020012060001c60005414610d7657600080fd5b610d7e611353565b34602083013514610d8e57600080fd5b610d9c346080840135611c2a565b8152610dad60208301356002611c42565b60208201526040517ff196eb766d2d8533f0df41b064e516bf7376911659bd46c361acef78536bf4bc90610de29084906118b5565b60405180910390a1610df261136d565b610dff6020840184611545565b6001600160a01b031681526040808401356020830152606080850135828401523390830152805160a08181019092529060c0850190600590839083908082843760009201919091525050506080820152815160a08201524360c082015260208083015160e08301526040516102e191600291849101611a1d565b604051610e8d906005908390602001611a95565b6040516020818303038152906040528051906020012060001c60005414610eb357600080fd5b610ec5602082013560c0830135611c2a565b4310158015610ed2575060015b610edb57600080fd5b3415610ee657600080fd5b33610ef76060830160408401611545565b6001600160a01b031614610f0a57600080fd5b610f1a6060820160408301611545565b6001600160a01b03166108fc610f343460a0850135611c2a565b6040518115909202916000818181858888f19350505050158015610f5c573d6000803e3d6000fd5b507f550c98753b37456740bd1e4e48bacdc044464818784c331e0da64a85bc8cd2b7816040516107d59190611944565b604051610fa0906002908390602001611a08565b6040516020818303038152906040528051906020012060001c60005414610fc657600080fd5b610fd96020820135610140830135611c2a565b4310158015610fe6575060015b610fef57600080fd5b3415610ffa57600080fd5b3361100b6080830160608401611545565b6001600160a01b03161461101e57600080fd5b61102e6080820160608301611545565b6001600160a01b03166108fc61104934610120850135611c2a565b6040518115909202916000818181858888f19350505050158015611071573d6000803e3d6000fd5b507f93f2dfbc2d5cc86e18b791736d5c6ed4c45880bc0d12ce406467baf9a6328e32816040516107d59190611918565b6020810151516001141561113f576110b76113ca565b8151516001600160a01b03908116825282516020908101518184015283516040908101519092168284015283516060908101518185015281850180518301516080860152805184015160a086015251015160c0840152905161111e91600591849101611aaa565b60408051601f19818403018152919052805160209091012060005550611192565b611147611419565b81515181516001600160a01b0391821690528251604090810151835192166020928301528351606090810151845190920191909152908301515182519091015261119081611195565b505b50565b8051606001516002146111ad578051602001516111b1565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f193505050501580156111f1573d6000803e3d6000fd5b506000805533ff5b6040518060200160405280600081525090565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161125c61142c565b815260200160008152602001600081525090565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518060800160405280600081526020016000815260200160008152602001600081525090565b60405180604001604052806112ea61144a565b81526020016112f7611484565b905290565b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806040016040528060008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016113af61142c565b81526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b60405180602001604052806112f76114b3565b6040518060a001604052806005906020820280368337509192915050565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b80356001600160a01b038116811461150457600080fd5b919050565b6000610100828403121561151b578081fd5b50919050565b60006101a0828403121561151b578081fd5b6000610180828403121561151b578081fd5b600060208284031215611556578081fd5b61155f826114ed565b9392505050565b60006101008284031215611578578081fd5b61155f8383611509565b6000610260828403121561151b578081fd5b60006101a082840312156115a6578081fd5b61155f8383611521565b60006080828403121561151b578081fd5b600061018082840312156115d3578081fd5b61155f8383611533565b6000610240828403121561151b578081fd5b600060e0828403121561151b578081fd5b6001600160a01b03169052565b8060005b6005811015611630578151845260209384019390910190600101611611565b50505050565b8035825260a0602082016020840137600060c08301525050565b6001600160a01b03611661826114ed565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b03806116ac836114ed565b1683526020820135602084015260408201356040840152806116d0606084016114ed565b1660608401525060a06080820160808401376101208181013590830152610140808201359083015261016090810135910152565b6001600160a01b0380611716836114ed565b1683526020820135602084015280611730604084016114ed565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b0380611775836114ed565b168352602082013560208401528061178f604084016114ed565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b03806117de836114ed565b16835260208201356020840152806117f8604084016114ed565b16604084015250606081013560608301526080810135608083015260a081013560a083015260a060c0820160c0840137610160818101359083015261018090810135910152565b610100810161184e8284611763565b92915050565b610260810161186382846117cc565b6101a0611874818401828601611636565b5092915050565b6101a0810161184e82846117cc565b8135815260208083013590820152604080830135908201526060918201359181019190915260800190565b61018081016118c48284611650565b60a060c0840160c08401376000610160838101918252906001600160a01b036118ee8684016114ed565b1690525092915050565b6102408101611907828461169a565b610180611874818401828601611636565b610180810161184e828461169a565b61010081016119368284611704565b60e092830135919092015290565b60e0810161184e8284611704565b6101a081016119618284611763565b61010060a081850182850137506000815292915050565b82815260c0810160a0836020840137600081529392505050565b91825235602082015260400190565b82815260e0810161155f6020830184611650565b600060e08201905083825260018060a01b038351166020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015260a083015160c08301529392505050565b8281526101a0810161155f602083018461169a565b60006101a08201905083825260018060a01b038084511660208401526020840151604084015260408401516060840152806060850151166080840152506080830151611a6c60a084018261160d565b5060a083015161014083015260c083015161016083015260e08301516101808301529392505050565b828152610100810161155f6020830184611704565b60006101008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015160c083015260c083015160e08301529392505050565b828152610120810161155f6020830184611763565b60006101208201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e08301516101008301529392505050565b8281526101c0810161155f60208301846117cc565b60006101c08201905083825260018060a01b038351166020830152602083015160408301526040830151611bda6060840182611600565b5060608301516080830152608083015160a083015260a083015160c083015260c0830151611c0b60e084018261160d565b5060e08301516101808301526101008301516101a08301529392505050565b60008219821115611c3d57611c3d611c98565b500190565b6000816000190483118215151615611c5c57611c5c611c98565b500290565b600082821015611c7357611c73611c98565b500390565b600082611c9357634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220ab22c06ef8e2168170a5f053856f47d7977012cd29bab00a16316d55187ca23564736f6c63430008000033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

