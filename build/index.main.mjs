// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


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
  
  
  const v41 = await ctc.creationTime();
  const v40 = stdlib.protect(ctc1, interact.firstHands, null);
  const txn1 = await (ctc.recv('Attacher', 1, 3, [ctc0, ctc0, ctc2], false, false));
  const [v49, v50, v51] = txn1.data;
  const v52 = txn1.value;
  const v56 = txn1.time;
  const v48 = txn1.from;
  const v53 = stdlib.eq(v52, v49);
  stdlib.assert(v53, {
    at: './index.rsh:72:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Attacher'
     });
  stdlib.assert(true, {
    at: './index.rsh:72:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Attacher'
     });
  const v55 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v52);
  const v57 = ctc.selfAddress('Attacher', false, stdlib.checkedBigNumberify('./index.rsh:78:31:application', stdlib.UInt_max, 0));
  stdlib.assert(true, {
    at: './index.rsh:82:39:application',
    fs: ['at ./index.rsh:78:31:application call to [unknown function] (defined at: ./index.rsh:78:35:function exp)'],
    msg: null,
    who: 'Attacher'
     });
  const txn2 = await (ctc.sendrecv('Attacher', 2, 2, stdlib.checkedBigNumberify('./index.rsh:84:27:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc3], [v48, v49, v50, v51, v55, v56, v40, v57], v49, [ctc1, ctc3], true, true, v50, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:84:27:dot', stdlib.UInt_max, 1), v48, v49, v50, v51, v55, v56]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:84:27:dot', stdlib.UInt_max, 1), v48, v49, v50, v51, v55]);
    const [v60, v61] = txn2.data;
    const v62 = txn2.value;
    const v66 = txn2.time;
    const v59 = txn2.from;
    
    const v63 = stdlib.eq(v62, v49);
    stdlib.assert(v63, {
      at: './index.rsh:84:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    stdlib.assert(true, {
      at: './index.rsh:84:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v65 = stdlib.add(v55, v62);
    const v68 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 2), v49);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v48, v50, v51, v59, v60, v65, v66, v68]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v48, v50, v51, v59, v60, v65, v68]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv('Attacher', 3, 0, [], false, false));
    const [] = txn3.data;
    const v617 = txn3.value;
    const v622 = txn3.time;
    const v616 = txn3.from;
    const v618 = stdlib.eq(v617, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v618, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    const v619 = stdlib.addressEq(v48, v616);
    stdlib.assert(v619, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v621 = stdlib.add(v55, v617);
    ;
    stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:86:84:decimal', stdlib.UInt_max, 1)), {
      at: './index.rsh:60:63:application',
      fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:86:83:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:86:66:function exp)', 'at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'Attacher'
       });
    return;
     }
  else {
    const [v60, v61] = txn2.data;
    const v62 = txn2.value;
    const v66 = txn2.time;
    const v59 = txn2.from;
    const v63 = stdlib.eq(v62, v49);
    stdlib.assert(v63, {
      at: './index.rsh:84:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    stdlib.assert(true, {
      at: './index.rsh:84:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v65 = stdlib.add(v55, v62);
    const v68 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 2), v49);
    const txn3 = await (ctc.recv('Attacher', 4, 2, [ctc0, ctc1], false, v50));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv('Attacher', 5, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0, ctc0], [v48, v50, v51, v59, v60, v65, v66, v68], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v48, v50, v51, v59, v60, v65, v66, v68]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v48, v50, v51, v59, v60, v65, v68]);
        const [] = txn4.data;
        const v596 = txn4.value;
        const v601 = txn4.time;
        const v595 = txn4.from;
        
        const v597 = stdlib.eq(v596, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v597, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Attacher'
           });
        const v598 = stdlib.addressEq(v59, v595);
        stdlib.assert(v598, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
           });
        const v600 = stdlib.add(v65, v596);
        sim_r.txns.push({
          amt: v600,
          to: v59
           });
        sim_r.nextSt = stdlib.digest(ctc8, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
        sim_r.isHalt = true;
        
        return sim_r;
         })));
      const [] = txn4.data;
      const v596 = txn4.value;
      const v601 = txn4.time;
      const v595 = txn4.from;
      const v597 = stdlib.eq(v596, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v597, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Attacher'
         });
      const v598 = stdlib.addressEq(v59, v595);
      stdlib.assert(v598, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
         });
      const v600 = stdlib.add(v65, v596);
      ;
      stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:97:84:decimal', stdlib.UInt_max, 0)), {
        at: './index.rsh:60:63:application',
        fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:97:83:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:97:66:function exp)', 'at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
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
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Attacher'
         });
      const v77 = stdlib.addressEq(v48, v72);
      stdlib.assert(v77, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
         });
      const v79 = stdlib.add(v65, v75);
      const v82 = stdlib.digest(ctc4, [v73, v74]);
      const v83 = stdlib.eq(v51, v82);
      stdlib.assert(v83, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Attacher'
         });
      const v86 = [stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 4)];
      const v100 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v101 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v101);
      const v104 = stdlib.add(v100, v103);
      const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v109 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v110 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v112 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
      const v113 = stdlib.add(v109, v112);
      const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v118 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v119 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v121 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
      const v122 = stdlib.add(v118, v121);
      const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v127 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v128 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v130 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
      const v131 = stdlib.add(v127, v130);
      const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v136 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v137 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
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
      let v170 = v86;
      let v171 = v86;
      let v172 = v167;
      let v173 = stdlib.checkedBigNumberify('./index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      let v636 = v79;
      let v637 = v80;
      
      while ((() => {
        const v185 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v185; })()) {
        const v186 = stdlib.mod(v173, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v187 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v187) {
          const v191 = stdlib.protect(ctc1, await interact.getHands(), {
            at: './index.rsh:107:72:application',
            fs: ['at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'getHands',
            who: 'Attacher'
             });
          const v193 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./index.rsh:108:84:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'random',
            who: 'Attacher'
             });
          const v194 = stdlib.digest(ctc4, [v193, v191]);
          const txn4 = await (ctc.sendrecv('Attacher', 8, 1, stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2], [v48, v50, v59, v68, v173, v636, v637, v194], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc2], true, true, v50, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
            const [v197] = txn4.data;
            const v198 = txn4.value;
            const v203 = txn4.time;
            const v196 = txn4.from;
            
            const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v199, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v200 = stdlib.addressEq(v59, v196);
            stdlib.assert(v200, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v202 = stdlib.add(v636, v198);
            sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v48, v50, v59, v68, v173, v197, v202, v203]);
            sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v48, v50, v59, v68, v173, v197, v202]);
            sim_r.isHalt = false;
            
            return sim_r;
             })));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.recv('Attacher', 9, 0, [], false, false));
            const [] = txn5.data;
            const v277 = txn5.value;
            const v282 = txn5.time;
            const v276 = txn5.from;
            const v278 = stdlib.eq(v277, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v278, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v279 = stdlib.addressEq(v48, v276);
            stdlib.assert(v279, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v281 = stdlib.add(v636, v277);
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
              at: './index.rsh:60:63:application',
              fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:111:96:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:111:79:function exp)', 'at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Attacher'
               });
            return;
             }
          else {
            const [v197] = txn4.data;
            const v198 = txn4.value;
            const v203 = txn4.time;
            const v196 = txn4.from;
            const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v199, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v200 = stdlib.addressEq(v59, v196);
            stdlib.assert(v200, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v202 = stdlib.add(v636, v198);
            const txn5 = await (ctc.recv('Attacher', 10, 1, [ctc1], false, v50));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv('Attacher', 11, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0], [v48, v50, v59, v68, v173, v197, v202, v203], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), v48, v50, v59, v68, v173, v197, v202, v203]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), v48, v50, v59, v68, v173, v197, v202]);
                const [] = txn6.data;
                const v255 = txn6.value;
                const v260 = txn6.time;
                const v254 = txn6.from;
                
                const v256 = stdlib.eq(v255, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v256, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v257 = stdlib.addressEq(v59, v254);
                stdlib.assert(v257, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v259 = stdlib.add(v202, v255);
                sim_r.txns.push({
                  amt: v259,
                  to: v59
                   });
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.isHalt = true;
                
                return sim_r;
                 })));
              const [] = txn6.data;
              const v255 = txn6.value;
              const v260 = txn6.time;
              const v254 = txn6.from;
              const v256 = stdlib.eq(v255, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v256, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v257 = stdlib.addressEq(v59, v254);
              stdlib.assert(v257, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v259 = stdlib.add(v202, v255);
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:132:82:decimal', stdlib.UInt_max, 0)), {
                at: './index.rsh:60:63:application',
                fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:119:94:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:119:78:function exp)', 'at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Attacher'
                 });
              return;
               }
            else {
              const [v208] = txn5.data;
              const v209 = txn5.value;
              const v214 = txn5.time;
              const v207 = txn5.from;
              const v210 = stdlib.eq(v209, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v210, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v211 = stdlib.addressEq(v48, v207);
              stdlib.assert(v211, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v213 = stdlib.add(v202, v209);
              const txn6 = await (ctc.sendrecv('Attacher', 12, 2, stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 8), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0, ctc0, ctc1], [v48, v50, v59, v68, v173, v197, v208, v213, v214, v193, v191], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v50, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 10), v48, v50, v59, v68, v173, v197, v208, v213, v214]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 10), v48, v50, v59, v68, v173, v197, v208, v213]);
                const [v218, v219] = txn6.data;
                const v220 = txn6.value;
                const v225 = txn6.time;
                const v217 = txn6.from;
                
                const v221 = stdlib.eq(v220, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v221, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v222 = stdlib.addressEq(v59, v217);
                stdlib.assert(v222, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v224 = stdlib.add(v213, v220);
                const v227 = stdlib.digest(ctc4, [v218, v219]);
                const v228 = stdlib.eq(v197, v227);
                stdlib.assert(v228, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                   });
                const v311 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v312 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v314 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v312);
                const v315 = stdlib.add(v311, v314);
                const v316 = stdlib.mod(v315, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v320 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v321 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v323 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v321);
                const v324 = stdlib.add(v320, v323);
                const v325 = stdlib.mod(v324, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v329 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v330 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v332 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v330);
                const v333 = stdlib.add(v329, v332);
                const v334 = stdlib.mod(v333, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v338 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v339 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v341 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v339);
                const v342 = stdlib.add(v338, v341);
                const v343 = stdlib.mod(v342, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v347 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v348 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v350 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v348);
                const v351 = stdlib.add(v347, v350);
                const v352 = stdlib.mod(v351, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v365 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v366 = v365 ? v325 : v316;
                const v369 = stdlib.eq(v366, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v370 = v369 ? v334 : v366;
                const v373 = stdlib.eq(v370, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v374 = v373 ? v343 : v370;
                const v377 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v378 = v377 ? v352 : v374;
                const v381 = stdlib.add(v173, stdlib.checkedBigNumberify('./index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv170 = v208;
                const cv171 = v219;
                const cv172 = v378;
                const cv173 = v381;
                const cv636 = v224;
                const cv637 = v225;
                
                (() => {
                  const v170 = cv170;
                  const v171 = cv171;
                  const v172 = cv172;
                  const v173 = cv173;
                  const v636 = cv636;
                  const v637 = cv637;
                  
                  if ((() => {
                    const v185 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v185; })()) {
                    const v186 = stdlib.mod(v173, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
                    const v187 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
                    if (v187) {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
                      sim_r.isHalt = false;
                       }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
                      sim_r.isHalt = false;
                       } }
                  else {
                    const v576 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v581 = v576 ? v48 : v59;
                    sim_r.txns.push({
                      amt: v68,
                      to: v581
                       });
                    sim_r.nextSt = stdlib.digest(ctc8, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                    sim_r.isHalt = true;
                     } })();
                return sim_r;
                 })));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.recv('Attacher', 13, 0, [], false, false));
                const [] = txn7.data;
                const v233 = txn7.value;
                const v238 = txn7.time;
                const v232 = txn7.from;
                const v234 = stdlib.eq(v233, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v234, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v235 = stdlib.addressEq(v48, v232);
                stdlib.assert(v235, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v237 = stdlib.add(v213, v233);
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
                  at: './index.rsh:60:63:application',
                  fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:125:95:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:125:79:function exp)', 'at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Attacher'
                   });
                return;
                 }
              else {
                const [v218, v219] = txn6.data;
                const v220 = txn6.value;
                const v225 = txn6.time;
                const v217 = txn6.from;
                const v221 = stdlib.eq(v220, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v221, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v222 = stdlib.addressEq(v59, v217);
                stdlib.assert(v222, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v224 = stdlib.add(v213, v220);
                const v227 = stdlib.digest(ctc4, [v218, v219]);
                const v228 = stdlib.eq(v197, v227);
                stdlib.assert(v228, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                   });
                const v311 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v312 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v314 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v312);
                const v315 = stdlib.add(v311, v314);
                const v316 = stdlib.mod(v315, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v320 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v321 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v323 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v321);
                const v324 = stdlib.add(v320, v323);
                const v325 = stdlib.mod(v324, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v329 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v330 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v332 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v330);
                const v333 = stdlib.add(v329, v332);
                const v334 = stdlib.mod(v333, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v338 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v339 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v341 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v339);
                const v342 = stdlib.add(v338, v341);
                const v343 = stdlib.mod(v342, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v347 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v348 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v350 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v348);
                const v351 = stdlib.add(v347, v350);
                const v352 = stdlib.mod(v351, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v365 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v366 = v365 ? v325 : v316;
                const v369 = stdlib.eq(v366, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v370 = v369 ? v334 : v366;
                const v373 = stdlib.eq(v370, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v374 = v373 ? v343 : v370;
                const v377 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v378 = v377 ? v352 : v374;
                const v381 = stdlib.add(v173, stdlib.checkedBigNumberify('./index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv170 = v208;
                const cv171 = v219;
                const cv172 = v378;
                const cv173 = v381;
                const cv636 = v224;
                const cv637 = v225;
                
                v170 = cv170;
                v171 = cv171;
                v172 = cv172;
                v173 = cv173;
                v636 = cv636;
                v637 = cv637;
                
                continue; }
               }
             }
           }
        else {
          const txn4 = await (ctc.recv('Attacher', 14, 1, [ctc2], false, v50));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv('Attacher', 15, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0], [v48, v50, v59, v68, v173, v636, v637], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
              const [] = txn5.data;
              const v471 = txn5.value;
              const v476 = txn5.time;
              const v470 = txn5.from;
              
              const v472 = stdlib.eq(v471, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v472, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v473 = stdlib.addressEq(v59, v470);
              stdlib.assert(v473, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v475 = stdlib.add(v636, v471);
              sim_r.txns.push({
                amt: v475,
                to: v59
                 });
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn5.data;
            const v471 = txn5.value;
            const v476 = txn5.time;
            const v470 = txn5.from;
            const v472 = stdlib.eq(v471, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v472, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v473 = stdlib.addressEq(v59, v470);
            stdlib.assert(v473, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v475 = stdlib.add(v636, v471);
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
              at: './index.rsh:60:63:application',
              fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:111:96:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:111:79:function exp)', 'at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Attacher'
               });
            return;
             }
          else {
            const [v391] = txn4.data;
            const v392 = txn4.value;
            const v397 = txn4.time;
            const v390 = txn4.from;
            const v393 = stdlib.eq(v392, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v393, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v394 = stdlib.addressEq(v48, v390);
            stdlib.assert(v394, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v396 = stdlib.add(v636, v392);
            const v400 = stdlib.protect(ctc1, await interact.getHands(), {
              at: './index.rsh:117:83:application',
              fs: ['at ./index.rsh:116:44:application call to [unknown function] (defined at: ./index.rsh:116:48:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'getHands',
              who: 'Attacher'
               });
            const txn5 = await (ctc.sendrecv('Attacher', 16, 1, stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 7), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1], [v48, v50, v59, v68, v173, v391, v396, v397, v400], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc1], true, true, v50, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 14), v48, v50, v59, v68, v173, v391, v396, v397]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 14), v48, v50, v59, v68, v173, v391, v396]);
              const [v402] = txn5.data;
              const v403 = txn5.value;
              const v408 = txn5.time;
              const v401 = txn5.from;
              
              const v404 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v404, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v405 = stdlib.addressEq(v59, v401);
              stdlib.assert(v405, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v407 = stdlib.add(v396, v403);
              sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v48, v50, v59, v68, v173, v391, v402, v407, v408]);
              sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v48, v50, v59, v68, v173, v391, v402, v407]);
              sim_r.isHalt = false;
              
              return sim_r;
               })));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv('Attacher', 17, 0, [], false, false));
              const [] = txn6.data;
              const v449 = txn6.value;
              const v454 = txn6.time;
              const v448 = txn6.from;
              const v450 = stdlib.eq(v449, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v450, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v451 = stdlib.addressEq(v48, v448);
              stdlib.assert(v451, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v453 = stdlib.add(v396, v449);
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:136:83:decimal', stdlib.UInt_max, 1)), {
                at: './index.rsh:60:63:application',
                fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:119:94:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:119:78:function exp)', 'at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Attacher'
                 });
              return;
               }
            else {
              const [v402] = txn5.data;
              const v403 = txn5.value;
              const v408 = txn5.time;
              const v401 = txn5.from;
              const v404 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v404, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v405 = stdlib.addressEq(v59, v401);
              stdlib.assert(v405, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v407 = stdlib.add(v396, v403);
              const txn6 = await (ctc.recv('Attacher', 18, 2, [ctc0, ctc1], false, v50));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.sendrecv('Attacher', 19, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0], [v48, v50, v59, v68, v173, v391, v402, v407, v408], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn7) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 16), v48, v50, v59, v68, v173, v391, v402, v407, v408]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 16), v48, v50, v59, v68, v173, v391, v402, v407]);
                  const [] = txn7.data;
                  const v427 = txn7.value;
                  const v432 = txn7.time;
                  const v426 = txn7.from;
                  
                  const v428 = stdlib.eq(v427, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  stdlib.assert(v428, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'pay amount correct',
                    who: 'Attacher'
                     });
                  const v429 = stdlib.addressEq(v59, v426);
                  stdlib.assert(v429, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'sender correct',
                    who: 'Attacher'
                     });
                  const v431 = stdlib.add(v407, v427);
                  sim_r.txns.push({
                    amt: v431,
                    to: v59
                     });
                  sim_r.nextSt = stdlib.digest(ctc8, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                   })));
                const [] = txn7.data;
                const v427 = txn7.value;
                const v432 = txn7.time;
                const v426 = txn7.from;
                const v428 = stdlib.eq(v427, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v428, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v429 = stdlib.addressEq(v59, v426);
                stdlib.assert(v429, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v431 = stdlib.add(v407, v427);
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
                  at: './index.rsh:60:63:application',
                  fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:125:95:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:125:79:function exp)', 'at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Attacher'
                   });
                return;
                 }
              else {
                const [v412, v413] = txn6.data;
                const v414 = txn6.value;
                const v419 = txn6.time;
                const v411 = txn6.from;
                const v415 = stdlib.eq(v414, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v415, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v416 = stdlib.addressEq(v48, v411);
                stdlib.assert(v416, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v418 = stdlib.add(v407, v414);
                const v421 = stdlib.digest(ctc4, [v412, v413]);
                const v422 = stdlib.eq(v391, v421);
                stdlib.assert(v422, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                   });
                const v505 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v506 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v508 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v506);
                const v509 = stdlib.add(v505, v508);
                const v510 = stdlib.mod(v509, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v514 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v515 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v517 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v515);
                const v518 = stdlib.add(v514, v517);
                const v519 = stdlib.mod(v518, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v523 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v524 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v526 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v524);
                const v527 = stdlib.add(v523, v526);
                const v528 = stdlib.mod(v527, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v532 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v533 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v535 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v533);
                const v536 = stdlib.add(v532, v535);
                const v537 = stdlib.mod(v536, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v541 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v542 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v544 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v542);
                const v545 = stdlib.add(v541, v544);
                const v546 = stdlib.mod(v545, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v559 = stdlib.eq(v510, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v560 = v559 ? v519 : v510;
                const v563 = stdlib.eq(v560, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v564 = v563 ? v528 : v560;
                const v567 = stdlib.eq(v564, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v568 = v567 ? v537 : v564;
                const v571 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v572 = v571 ? v546 : v568;
                const v575 = stdlib.add(v173, stdlib.checkedBigNumberify('./index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv170 = v413;
                const cv171 = v402;
                const cv172 = v572;
                const cv173 = v575;
                const cv636 = v418;
                const cv637 = v419;
                
                v170 = cv170;
                v171 = cv171;
                v172 = cv172;
                v173 = cv173;
                v636 = cv636;
                v637 = cv637;
                
                continue; }
               }
             }
           } }
      const v576 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v581 = v576 ? v48 : v59;
      ;
      stdlib.protect(ctc5, await interact.seeOutcome(v172, v171, v170), {
        at: './index.rsh:150:52:application',
        fs: ['at ./index.rsh:149:29:application call to [unknown function] (defined at: ./index.rsh:149:40:function exp)'],
        msg: 'seeOutcome',
        who: 'Attacher'
         });
      return; }
     }
  
  
   }
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
  
  
  const v41 = await ctc.creationTime();
  const v37 = stdlib.protect(ctc0, interact.deadline, null);
  const v38 = stdlib.protect(ctc1, interact.firstHands, null);
  const v39 = stdlib.protect(ctc0, interact.wager, null);
  const v45 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./index.rsh:68:98:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:64:31:application call to [unknown function] (defined at: ./index.rsh:64:35:function exp)'],
    msg: 'random',
    who: 'Deployer'
     });
  const v46 = stdlib.digest(ctc2, [v45, v38]);
  const txn1 = await (ctc.sendrecv('Deployer', 1, 3, stdlib.checkedBigNumberify('./index.rsh:72:27:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc3], [v41, v39, v37, v46], v39, [ctc0, ctc0, ctc3], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:72:27:dot', stdlib.UInt_max, 0), v41]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:72:27:dot', stdlib.UInt_max, 0)]);
    const [v49, v50, v51] = txn1.data;
    const v52 = txn1.value;
    const v56 = txn1.time;
    const v48 = txn1.from;
    
    const v53 = stdlib.eq(v52, v49);
    stdlib.assert(v53, {
      at: './index.rsh:72:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    stdlib.assert(true, {
      at: './index.rsh:72:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v55 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v52);
    sim_r.nextSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v48, v49, v50, v51, v55, v56]);
    sim_r.nextSt_noTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v48, v49, v50, v51, v55]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v49, v50, v51] = txn1.data;
  const v52 = txn1.value;
  const v56 = txn1.time;
  const v48 = txn1.from;
  const v53 = stdlib.eq(v52, v49);
  stdlib.assert(v53, {
    at: './index.rsh:72:27:dot',
    fs: [],
    msg: 'pay amount correct',
    who: 'Deployer'
     });
  stdlib.assert(true, {
    at: './index.rsh:72:27:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
     });
  const v55 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v52);
  const txn2 = await (ctc.recv('Deployer', 2, 2, [ctc1, ctc4], false, v50));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv('Deployer', 3, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v48, v49, v50, v51, v55, v56], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 1), v48, v49, v50, v51, v55, v56]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 1), v48, v49, v50, v51, v55]);
      const [] = txn3.data;
      const v617 = txn3.value;
      const v622 = txn3.time;
      const v616 = txn3.from;
      
      const v618 = stdlib.eq(v617, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v618, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v619 = stdlib.addressEq(v48, v616);
      stdlib.assert(v619, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v621 = stdlib.add(v55, v617);
      sim_r.txns.push({
        amt: v621,
        to: v48
         });
      sim_r.nextSt = stdlib.digest(ctc6, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn3.data;
    const v617 = txn3.value;
    const v622 = txn3.time;
    const v616 = txn3.from;
    const v618 = stdlib.eq(v617, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v618, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v619 = stdlib.addressEq(v48, v616);
    stdlib.assert(v619, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v621 = stdlib.add(v55, v617);
    ;
    stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:86:84:decimal', stdlib.UInt_max, 1)), {
      at: './index.rsh:60:63:application',
      fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:86:83:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:86:66:function exp)', 'at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'informTimeout',
      who: 'Deployer'
       });
    return;
     }
  else {
    const [v60, v61] = txn2.data;
    const v62 = txn2.value;
    const v66 = txn2.time;
    const v59 = txn2.from;
    const v63 = stdlib.eq(v62, v49);
    stdlib.assert(v63, {
      at: './index.rsh:84:27:dot',
      fs: [],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    stdlib.assert(true, {
      at: './index.rsh:84:27:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v65 = stdlib.add(v55, v62);
    const v68 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 2), v49);
    stdlib.protect(ctc5, await interact.informOpponent(v61), {
      at: './index.rsh:93:56:application',
      fs: ['at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:35:function exp)'],
      msg: 'informOpponent',
      who: 'Deployer'
       });
    const txn3 = await (ctc.sendrecv('Deployer', 4, 2, stdlib.checkedBigNumberify('./index.rsh:96:27:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1], [v48, v50, v51, v59, v60, v65, v66, v68, v45, v38], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v50, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:96:27:dot', stdlib.UInt_max, 2), v48, v50, v51, v59, v60, v65, v66, v68]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:96:27:dot', stdlib.UInt_max, 2), v48, v50, v51, v59, v60, v65, v68]);
      const [v73, v74] = txn3.data;
      const v75 = txn3.value;
      const v80 = txn3.time;
      const v72 = txn3.from;
      
      const v76 = stdlib.eq(v75, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v76, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v77 = stdlib.addressEq(v48, v72);
      stdlib.assert(v77, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v79 = stdlib.add(v65, v75);
      const v82 = stdlib.digest(ctc2, [v73, v74]);
      const v83 = stdlib.eq(v51, v82);
      stdlib.assert(v83, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Deployer'
         });
      const v86 = [stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 4)];
      const v100 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v101 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v101);
      const v104 = stdlib.add(v100, v103);
      const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v109 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v110 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v112 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
      const v113 = stdlib.add(v109, v112);
      const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v118 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v119 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v121 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
      const v122 = stdlib.add(v118, v121);
      const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v127 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v128 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v130 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
      const v131 = stdlib.add(v127, v130);
      const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v136 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v137 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
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
      const v170 = v86;
      const v171 = v86;
      const v172 = v167;
      const v173 = stdlib.checkedBigNumberify('./index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      const v636 = v79;
      const v637 = v80;
      
      if ((() => {
        const v185 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v185; })()) {
        const v186 = stdlib.mod(v173, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v187 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v187) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
          sim_r.isHalt = false;
           }
        else {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
          sim_r.isHalt = false;
           } }
      else {
        const v576 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v581 = v576 ? v48 : v59;
        sim_r.txns.push({
          amt: v68,
          to: v581
           });
        sim_r.nextSt = stdlib.digest(ctc6, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
        sim_r.isHalt = true;
         }
      return sim_r;
       })));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv('Deployer', 5, 0, [], false, false));
      const [] = txn4.data;
      const v596 = txn4.value;
      const v601 = txn4.time;
      const v595 = txn4.from;
      const v597 = stdlib.eq(v596, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v597, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v598 = stdlib.addressEq(v59, v595);
      stdlib.assert(v598, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v600 = stdlib.add(v65, v596);
      ;
      stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:97:84:decimal', stdlib.UInt_max, 0)), {
        at: './index.rsh:60:63:application',
        fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:97:83:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:97:66:function exp)', 'at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
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
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v77 = stdlib.addressEq(v48, v72);
      stdlib.assert(v77, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v79 = stdlib.add(v65, v75);
      const v82 = stdlib.digest(ctc2, [v73, v74]);
      const v83 = stdlib.eq(v51, v82);
      stdlib.assert(v83, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Deployer'
         });
      const v86 = [stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 3), stdlib.checkedBigNumberify('./index.rsh:13:13:application', stdlib.UInt_max, 4)];
      const v100 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v101 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v101);
      const v104 = stdlib.add(v100, v103);
      const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v109 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v110 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v112 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v110);
      const v113 = stdlib.add(v109, v112);
      const v114 = stdlib.mod(v113, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v118 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v119 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v121 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v119);
      const v122 = stdlib.add(v118, v121);
      const v123 = stdlib.mod(v122, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v127 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v128 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v130 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v128);
      const v131 = stdlib.add(v127, v130);
      const v132 = stdlib.mod(v131, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v136 = v74[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v137 = v60[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
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
      let v170 = v86;
      let v171 = v86;
      let v172 = v167;
      let v173 = stdlib.checkedBigNumberify('./index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      let v636 = v79;
      let v637 = v80;
      
      while ((() => {
        const v185 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v185; })()) {
        const v186 = stdlib.mod(v173, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v187 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v187) {
          const txn4 = await (ctc.recv('Deployer', 8, 1, [ctc3], false, v50));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv('Deployer', 9, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0], [v48, v50, v59, v68, v173, v636, v637], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
              const [] = txn5.data;
              const v277 = txn5.value;
              const v282 = txn5.time;
              const v276 = txn5.from;
              
              const v278 = stdlib.eq(v277, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v278, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v279 = stdlib.addressEq(v48, v276);
              stdlib.assert(v279, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v281 = stdlib.add(v636, v277);
              sim_r.txns.push({
                amt: v281,
                to: v48
                 });
              sim_r.nextSt = stdlib.digest(ctc6, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn5.data;
            const v277 = txn5.value;
            const v282 = txn5.time;
            const v276 = txn5.from;
            const v278 = stdlib.eq(v277, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v278, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v279 = stdlib.addressEq(v48, v276);
            stdlib.assert(v279, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v281 = stdlib.add(v636, v277);
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
              at: './index.rsh:60:63:application',
              fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:111:96:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:111:79:function exp)', 'at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Deployer'
               });
            return;
             }
          else {
            const [v197] = txn4.data;
            const v198 = txn4.value;
            const v203 = txn4.time;
            const v196 = txn4.from;
            const v199 = stdlib.eq(v198, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v199, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v200 = stdlib.addressEq(v59, v196);
            stdlib.assert(v200, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v202 = stdlib.add(v636, v198);
            const v206 = stdlib.protect(ctc1, await interact.getHands(), {
              at: './index.rsh:117:83:application',
              fs: ['at ./index.rsh:116:44:application call to [unknown function] (defined at: ./index.rsh:116:48:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'getHands',
              who: 'Deployer'
               });
            const txn5 = await (ctc.sendrecv('Deployer', 10, 1, stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1], [v48, v50, v59, v68, v173, v197, v202, v203, v206], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc1], true, true, v50, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 8), v48, v50, v59, v68, v173, v197, v202, v203]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 8), v48, v50, v59, v68, v173, v197, v202]);
              const [v208] = txn5.data;
              const v209 = txn5.value;
              const v214 = txn5.time;
              const v207 = txn5.from;
              
              const v210 = stdlib.eq(v209, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v210, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v211 = stdlib.addressEq(v48, v207);
              stdlib.assert(v211, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v213 = stdlib.add(v202, v209);
              sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v48, v50, v59, v68, v173, v197, v208, v213, v214]);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v48, v50, v59, v68, v173, v197, v208, v213]);
              sim_r.isHalt = false;
              
              return sim_r;
               })));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv('Deployer', 11, 0, [], false, false));
              const [] = txn6.data;
              const v255 = txn6.value;
              const v260 = txn6.time;
              const v254 = txn6.from;
              const v256 = stdlib.eq(v255, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v256, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v257 = stdlib.addressEq(v59, v254);
              stdlib.assert(v257, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v259 = stdlib.add(v202, v255);
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:132:82:decimal', stdlib.UInt_max, 0)), {
                at: './index.rsh:60:63:application',
                fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:119:94:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:119:78:function exp)', 'at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Deployer'
                 });
              return;
               }
            else {
              const [v208] = txn5.data;
              const v209 = txn5.value;
              const v214 = txn5.time;
              const v207 = txn5.from;
              const v210 = stdlib.eq(v209, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v210, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v211 = stdlib.addressEq(v48, v207);
              stdlib.assert(v211, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v213 = stdlib.add(v202, v209);
              const txn6 = await (ctc.recv('Deployer', 12, 2, [ctc0, ctc1], false, v50));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.sendrecv('Deployer', 13, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0], [v48, v50, v59, v68, v173, v197, v208, v213, v214], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn7) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 10), v48, v50, v59, v68, v173, v197, v208, v213, v214]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 10), v48, v50, v59, v68, v173, v197, v208, v213]);
                  const [] = txn7.data;
                  const v233 = txn7.value;
                  const v238 = txn7.time;
                  const v232 = txn7.from;
                  
                  const v234 = stdlib.eq(v233, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  stdlib.assert(v234, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'pay amount correct',
                    who: 'Deployer'
                     });
                  const v235 = stdlib.addressEq(v48, v232);
                  stdlib.assert(v235, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'sender correct',
                    who: 'Deployer'
                     });
                  const v237 = stdlib.add(v213, v233);
                  sim_r.txns.push({
                    amt: v237,
                    to: v48
                     });
                  sim_r.nextSt = stdlib.digest(ctc6, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                   })));
                const [] = txn7.data;
                const v233 = txn7.value;
                const v238 = txn7.time;
                const v232 = txn7.from;
                const v234 = stdlib.eq(v233, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v234, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v235 = stdlib.addressEq(v48, v232);
                stdlib.assert(v235, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v237 = stdlib.add(v213, v233);
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:132:80:decimal', stdlib.UInt_max, 1)), {
                  at: './index.rsh:60:63:application',
                  fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:125:95:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:125:79:function exp)', 'at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Deployer'
                   });
                return;
                 }
              else {
                const [v218, v219] = txn6.data;
                const v220 = txn6.value;
                const v225 = txn6.time;
                const v217 = txn6.from;
                const v221 = stdlib.eq(v220, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v221, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v222 = stdlib.addressEq(v59, v217);
                stdlib.assert(v222, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v224 = stdlib.add(v213, v220);
                const v227 = stdlib.digest(ctc2, [v218, v219]);
                const v228 = stdlib.eq(v197, v227);
                stdlib.assert(v228, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                   });
                const v311 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v312 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v314 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v312);
                const v315 = stdlib.add(v311, v314);
                const v316 = stdlib.mod(v315, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v320 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v321 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v323 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v321);
                const v324 = stdlib.add(v320, v323);
                const v325 = stdlib.mod(v324, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v329 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v330 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v332 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v330);
                const v333 = stdlib.add(v329, v332);
                const v334 = stdlib.mod(v333, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v338 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v339 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v341 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v339);
                const v342 = stdlib.add(v338, v341);
                const v343 = stdlib.mod(v342, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v347 = v208[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v348 = v219[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v350 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v348);
                const v351 = stdlib.add(v347, v350);
                const v352 = stdlib.mod(v351, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v365 = stdlib.eq(v316, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v366 = v365 ? v325 : v316;
                const v369 = stdlib.eq(v366, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v370 = v369 ? v334 : v366;
                const v373 = stdlib.eq(v370, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v374 = v373 ? v343 : v370;
                const v377 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v378 = v377 ? v352 : v374;
                const v381 = stdlib.add(v173, stdlib.checkedBigNumberify('./index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv170 = v208;
                const cv171 = v219;
                const cv172 = v378;
                const cv173 = v381;
                const cv636 = v224;
                const cv637 = v225;
                
                v170 = cv170;
                v171 = cv171;
                v172 = cv172;
                v173 = cv173;
                v636 = cv636;
                v637 = cv637;
                
                continue; }
               }
             }
           }
        else {
          const v385 = stdlib.protect(ctc1, await interact.getHands(), {
            at: './index.rsh:107:72:application',
            fs: ['at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'getHands',
            who: 'Deployer'
             });
          const v387 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./index.rsh:108:84:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'random',
            who: 'Deployer'
             });
          const v388 = stdlib.digest(ctc2, [v387, v385]);
          const txn4 = await (ctc.sendrecv('Deployer', 14, 1, stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc3], [v48, v50, v59, v68, v173, v636, v637, v388], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc3], true, true, v50, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
            const [v391] = txn4.data;
            const v392 = txn4.value;
            const v397 = txn4.time;
            const v390 = txn4.from;
            
            const v393 = stdlib.eq(v392, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v393, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v394 = stdlib.addressEq(v48, v390);
            stdlib.assert(v394, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v396 = stdlib.add(v636, v392);
            sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v48, v50, v59, v68, v173, v391, v396, v397]);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v48, v50, v59, v68, v173, v391, v396]);
            sim_r.isHalt = false;
            
            return sim_r;
             })));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.recv('Deployer', 15, 0, [], false, false));
            const [] = txn5.data;
            const v471 = txn5.value;
            const v476 = txn5.time;
            const v470 = txn5.from;
            const v472 = stdlib.eq(v471, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v472, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v473 = stdlib.addressEq(v59, v470);
            stdlib.assert(v473, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v475 = stdlib.add(v636, v471);
            ;
            stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
              at: './index.rsh:60:63:application',
              fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:111:96:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:111:79:function exp)', 'at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'informTimeout',
              who: 'Deployer'
               });
            return;
             }
          else {
            const [v391] = txn4.data;
            const v392 = txn4.value;
            const v397 = txn4.time;
            const v390 = txn4.from;
            const v393 = stdlib.eq(v392, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v393, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v394 = stdlib.addressEq(v48, v390);
            stdlib.assert(v394, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v396 = stdlib.add(v636, v392);
            const txn5 = await (ctc.recv('Deployer', 16, 1, [ctc1], false, v50));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv('Deployer', 17, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v48, v50, v59, v68, v173, v391, v396, v397], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 14), v48, v50, v59, v68, v173, v391, v396, v397]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 14), v48, v50, v59, v68, v173, v391, v396]);
                const [] = txn6.data;
                const v449 = txn6.value;
                const v454 = txn6.time;
                const v448 = txn6.from;
                
                const v450 = stdlib.eq(v449, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v450, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v451 = stdlib.addressEq(v48, v448);
                stdlib.assert(v451, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v453 = stdlib.add(v396, v449);
                sim_r.txns.push({
                  amt: v453,
                  to: v48
                   });
                sim_r.nextSt = stdlib.digest(ctc6, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                sim_r.isHalt = true;
                
                return sim_r;
                 })));
              const [] = txn6.data;
              const v449 = txn6.value;
              const v454 = txn6.time;
              const v448 = txn6.from;
              const v450 = stdlib.eq(v449, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v450, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v451 = stdlib.addressEq(v48, v448);
              stdlib.assert(v451, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v453 = stdlib.add(v396, v449);
              ;
              stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:136:83:decimal', stdlib.UInt_max, 1)), {
                at: './index.rsh:60:63:application',
                fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:119:94:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:119:78:function exp)', 'at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'informTimeout',
                who: 'Deployer'
                 });
              return;
               }
            else {
              const [v402] = txn5.data;
              const v403 = txn5.value;
              const v408 = txn5.time;
              const v401 = txn5.from;
              const v404 = stdlib.eq(v403, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v404, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v405 = stdlib.addressEq(v59, v401);
              stdlib.assert(v405, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v407 = stdlib.add(v396, v403);
              const txn6 = await (ctc.sendrecv('Deployer', 18, 2, stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0, ctc0, ctc1], [v48, v50, v59, v68, v173, v391, v402, v407, v408, v387, v385], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v50, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 16), v48, v50, v59, v68, v173, v391, v402, v407, v408]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 16), v48, v50, v59, v68, v173, v391, v402, v407]);
                const [v412, v413] = txn6.data;
                const v414 = txn6.value;
                const v419 = txn6.time;
                const v411 = txn6.from;
                
                const v415 = stdlib.eq(v414, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v415, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v416 = stdlib.addressEq(v48, v411);
                stdlib.assert(v416, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v418 = stdlib.add(v407, v414);
                const v421 = stdlib.digest(ctc2, [v412, v413]);
                const v422 = stdlib.eq(v391, v421);
                stdlib.assert(v422, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                   });
                const v505 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v506 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v508 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v506);
                const v509 = stdlib.add(v505, v508);
                const v510 = stdlib.mod(v509, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v514 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v515 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v517 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v515);
                const v518 = stdlib.add(v514, v517);
                const v519 = stdlib.mod(v518, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v523 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v524 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v526 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v524);
                const v527 = stdlib.add(v523, v526);
                const v528 = stdlib.mod(v527, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v532 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v533 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v535 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v533);
                const v536 = stdlib.add(v532, v535);
                const v537 = stdlib.mod(v536, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v541 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v542 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v544 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v542);
                const v545 = stdlib.add(v541, v544);
                const v546 = stdlib.mod(v545, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v559 = stdlib.eq(v510, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v560 = v559 ? v519 : v510;
                const v563 = stdlib.eq(v560, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v564 = v563 ? v528 : v560;
                const v567 = stdlib.eq(v564, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v568 = v567 ? v537 : v564;
                const v571 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v572 = v571 ? v546 : v568;
                const v575 = stdlib.add(v173, stdlib.checkedBigNumberify('./index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv170 = v413;
                const cv171 = v402;
                const cv172 = v572;
                const cv173 = v575;
                const cv636 = v418;
                const cv637 = v419;
                
                (() => {
                  const v170 = cv170;
                  const v171 = cv171;
                  const v172 = cv172;
                  const v173 = cv173;
                  const v636 = cv636;
                  const v637 = cv637;
                  
                  if ((() => {
                    const v185 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v185; })()) {
                    const v186 = stdlib.mod(v173, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
                    const v187 = stdlib.eq(v186, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
                    if (v187) {
                      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
                      sim_r.isHalt = false;
                       }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636, v637]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v48, v50, v59, v68, v173, v636]);
                      sim_r.isHalt = false;
                       } }
                  else {
                    const v576 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v581 = v576 ? v48 : v59;
                    sim_r.txns.push({
                      amt: v68,
                      to: v581
                       });
                    sim_r.nextSt = stdlib.digest(ctc6, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                    sim_r.isHalt = true;
                     } })();
                return sim_r;
                 })));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.recv('Deployer', 19, 0, [], false, false));
                const [] = txn7.data;
                const v427 = txn7.value;
                const v432 = txn7.time;
                const v426 = txn7.from;
                const v428 = stdlib.eq(v427, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v428, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v429 = stdlib.addressEq(v59, v426);
                stdlib.assert(v429, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v431 = stdlib.add(v407, v427);
                ;
                stdlib.protect(ctc5, await interact.informTimeout(stdlib.checkedBigNumberify('./index.rsh:136:81:decimal', stdlib.UInt_max, 0)), {
                  at: './index.rsh:60:63:application',
                  fs: ['at ./index.rsh:59:37:application call to [unknown function] (defined at: ./index.rsh:59:48:function exp)', 'at ./index.rsh:125:95:application call to "informTimeout" (defined at: ./index.rsh:58:53:function exp)', 'at reach standard library:71:8:application call to "after" (defined at: ./index.rsh:125:79:function exp)', 'at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'informTimeout',
                  who: 'Deployer'
                   });
                return;
                 }
              else {
                const [v412, v413] = txn6.data;
                const v414 = txn6.value;
                const v419 = txn6.time;
                const v411 = txn6.from;
                const v415 = stdlib.eq(v414, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v415, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v416 = stdlib.addressEq(v48, v411);
                stdlib.assert(v416, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v418 = stdlib.add(v407, v414);
                const v421 = stdlib.digest(ctc2, [v412, v413]);
                const v422 = stdlib.eq(v391, v421);
                stdlib.assert(v422, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                   });
                const v505 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v506 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v508 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v506);
                const v509 = stdlib.add(v505, v508);
                const v510 = stdlib.mod(v509, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v514 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v515 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v517 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v515);
                const v518 = stdlib.add(v514, v517);
                const v519 = stdlib.mod(v518, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v523 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v524 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v526 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v524);
                const v527 = stdlib.add(v523, v526);
                const v528 = stdlib.mod(v527, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v532 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v533 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v535 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v533);
                const v536 = stdlib.add(v532, v535);
                const v537 = stdlib.mod(v536, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v541 = v413[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v542 = v402[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v544 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v542);
                const v545 = stdlib.add(v541, v544);
                const v546 = stdlib.mod(v545, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v559 = stdlib.eq(v510, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v560 = v559 ? v519 : v510;
                const v563 = stdlib.eq(v560, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v564 = v563 ? v528 : v560;
                const v567 = stdlib.eq(v564, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v568 = v567 ? v537 : v564;
                const v571 = stdlib.eq(v568, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v572 = v571 ? v546 : v568;
                const v575 = stdlib.add(v173, stdlib.checkedBigNumberify('./index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv170 = v413;
                const cv171 = v402;
                const cv172 = v572;
                const cv173 = v575;
                const cv636 = v418;
                const cv637 = v419;
                
                v170 = cv170;
                v171 = cv171;
                v172 = cv172;
                v173 = cv173;
                v636 = cv636;
                v637 = cv637;
                
                continue; }
               }
             }
           } }
      const v576 = stdlib.eq(v172, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v581 = v576 ? v48 : v59;
      ;
      stdlib.protect(ctc5, await interact.seeOutcome(v172, v171, v170), {
        at: './index.rsh:150:52:application',
        fs: ['at ./index.rsh:149:29:application call to [unknown function] (defined at: ./index.rsh:149:40:function exp)'],
        msg: 'seeOutcome',
        who: 'Deployer'
         });
      return; }
     }
  
  
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
// "./index.rsh:72:27:dot"
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
// "./index.rsh:72:27:dot"
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
// "./index.rsh:84:27:dot"
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
// "./index.rsh:84:27:dot"
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
// "reach standard library:68:7:dot"
// "[at ./index.rsh:86:59:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:86:59:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
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
// "./index.rsh:96:27:dot"
// "[]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:96:27:dot"
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
// "[at ./index.rsh:98:40:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
gtxna 0 ApplicationArgs 7
gtxna 0 ApplicationArgs 12
gtxna 0 ApplicationArgs 13
concat
keccak256
==
assert
int 0
itob
int 1
itob
concat
int 2
itob
concat
int 3
itob
concat
int 4
itob
concat
store 254
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
store 253
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
load 253
int 1
==
select
dup
store 252
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
load 252
int 1
==
select
dup
store 251
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
load 251
int 1
==
select
dup
store 250
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
load 250
int 1
==
select
dup
store 249
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
load 249
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
// "[at ./index.rsh:97:59:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:97:59:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp)]"
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
// Just "pay amount correct"
// "./index.rsh:110:39:dot"
// "[at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:110:39:dot"
// "[at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "./index.rsh:118:40:dot"
// "[at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:118:40:dot"
// "[at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "./index.rsh:124:39:dot"
// "[at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:124:39:dot"
// "[at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxna 0 ApplicationArgs 7
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
// "reach standard library:65:17:application"
// "[at ./index.rsh:126:48:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:132:75:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "./index.rsh:110:39:dot"
// "[at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:110:39:dot"
// "[at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "./index.rsh:118:40:dot"
// "[at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:118:40:dot"
// "[at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "./index.rsh:124:39:dot"
// "[at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "./index.rsh:124:39:dot"
// "[at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// "reach standard library:65:17:application"
// "[at ./index.rsh:126:48:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
// Just "pay amount correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
gtxn 3 Amount
gtxna 0 ApplicationArgs 3
btoi
-
int 0
==
assert
// Just "sender correct"
// "reach standard library:68:7:dot"
// "[at ./index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:67:8:function exp),at ./index.rsh:136:76:application call to \"doRound\" (defined at: ./index.rsh:103:80:function exp)]"
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
                "name": "v41",
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
                "name": "v51",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
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
                "name": "v208",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v208",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
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
                "name": "v218",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v219",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v208",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v391",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
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
                "name": "v402",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v402",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
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
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v413",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v402",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
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
                "name": "v48",
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
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v56",
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
                "name": "v48",
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
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v56",
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
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v51",
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
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v51",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v197",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v41",
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
                "name": "v51",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
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
                "name": "v208",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v202",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v203",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v208",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
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
                "name": "v218",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v219",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v208",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v214",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v391",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
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
                "name": "v402",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v396",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v397",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v402",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
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
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v413",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v391",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v402",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v407",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v408",
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
                "name": "v48",
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
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v56",
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
                "name": "v48",
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
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v55",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v56",
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
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v51",
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
                "name": "v48",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v50",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v51",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
                "name": "v197",
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
                "name": "v48",
                "type": "address"
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
                "internalType": "uint256",
                "name": "v68",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v173",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v636",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v637",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055612ac9806100826000396000f3fe6080604052600436106101025760003560e01c80637bb6c55a11610095578063b4ee70da11610064578063b4ee70da146101f4578063b537725c14610207578063d22bdb581461021a578063d6f2b29e1461022d578063df3ceab41461024057610109565b80637bb6c55a146101a8578063888b17ac146101bb5780639cb841e4146101ce578063b14757a1146101e157610109565b8063386ba45a116100d1578063386ba45a1461015c5780633c9b9af01461016f5780633ef9c7d6146101825780636a2d4f691461019557610109565b80630caf0ab41461010e57806325a98d59146101235780632aa6c51d146101365780632bf4f8731461014957610109565b3661010957005b600080fd5b61012161011c366004612304565b610253565b005b610121610131366004612304565b61042c565b6101216101443660046122e8565b61054c565b610121610157366004612374565b610665565b61012161016a36600461233c565b6107ea565b61012161017d366004612320565b610b61565b6101216101903660046122e8565b610c72565b6101216101a33660046122d6565b610e08565b6101216101b6366004612358565b611113565b6101216101c9366004612385565b61122c565b6101216101dc36600461233c565b611396565b6101216101ef366004612358565b6116a7565b610121610202366004612304565b6117ba565b610121610215366004612320565b6118d1565b610121610228366004612397565b6119e8565b61012161023b3660046122e8565b611af9565b61012161024e366004612304565b611c8c565b60405161026790600690839060200161284e565b6040516020818303038152906040528051906020012060001c6000541461028d57600080fd5b600080805560408051602081019091529081526102b2602083013560c0840135612a0f565b43106102bd57600080fd5b34156102c857600080fd5b336102d660208401846122b5565b6001600160a01b0316146102e957600080fd5b6102f73460a0840135612a0f565b81526040517f6645f134722f09472cf0828d081bdc1c9fd608f2695ff21eb1322f1779b11b1a90610329908490612720565b60405180910390a161038b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b61039860208401846122b5565b6001600160a01b03168152602080840135908201526103bd60608401604085016122b5565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c90600e9083906020016128da565b60408051601f198184030181529190528051602090910120600055505050565b60405161044090600690839060200161284e565b6040516020818303038152906040528051906020012060001c6000541461046657600080fd5b6000805561047c602082013560c0830135612a0f565b4310158015610489575060015b61049257600080fd5b341561049d57600080fd5b336104ab60208301836122b5565b6001600160a01b0316146104be57600080fd5b6104cb60208201826122b5565b6001600160a01b03166108fc6104e53460a0850135612a0f565b6040518115909202916000818181858888f1935050505015801561050d573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec58160405161053d919061273d565b60405180910390a16000805533ff5b604051610560906002908390602001612982565b6040516020818303038152906040528051906020012060001c6000541461058657600080fd5b6000805561059d6020820135610140830135612a0f565b43101580156105aa575060015b6105b357600080fd5b34156105be57600080fd5b336105cf60808301606084016122b5565b6001600160a01b0316146105e257600080fd5b6105f260808201606083016122b5565b6001600160a01b03166108fc61060d34610120850135612a0f565b6040518115909202916000818181858888f19350505050158015610635573d6000803e3d6000fd5b507f84606dd8aa7a944a019509c8d173de0673af125ea2335128823b183fd58ac9b28160405161053d91906126ed565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146106a257600080fd5b60008080556040805160208101909152908152346020830135146106c557600080fd5b6106d0346000612a0f565b815260408051833581526020808501359082015283820135818301526060808501359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a16107646040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b338152602083810135818301908152604080860135818501908152606080880135818701908152875160808089019182524360a0808b01918252875160019a81019a909a528a516001600160a01b0316978a019790975296519388019390935292519186019190915251918401919091525160c08301525160e08201526101000161040c565b6040516107fe906010908390602001612958565b6040516020818303038152906040528051906020012060001c6000541461082457600080fd5b600080819055506108566040518060800160405280600081526020016000815260200160008152602001600081525090565b6108696020830135610180840135612a0f565b431061087457600080fd5b341561087f57600080fd5b3361088d60208401846122b5565b6001600160a01b0316146108a057600080fd5b6040516108bc906101a0840135906101c0850190602001612834565b60408051601f19818403018152919052805160209091012060a0830135146108e357600080fd5b60036108f460c08401356004612a46565b610903906101c0850135612a0f565b61090d9190612a5d565b80825260011461091e578051610948565b600361092f60e08401356004612a46565b61093e906101e0850135612a0f565b6109489190612a5d565b6020820181905260011461096057806020015161098b565b60036109726101008401356004612a46565b61098190610200850135612a0f565b61098b9190612a5d565b604082018190526001146109a35780604001516109ce565b60036109b56101208401356004612a46565b6109c490610220850135612a0f565b6109ce9190612a5d565b60608201526040517fdfb849c5f273733a39dfd860be80c8bc88140960e86644f0ef7ceebac92b4f6f90610a03908490612792565b60405180910390a1610a1361207e565b610a2060208401846122b5565b81516001600160a01b0390911690528051602080850135910152610a4a60608401604085016122b5565b81516001600160a01b039091166040918201528151606080860135910152805160a0818101909252906101c0850190600590839083908082843760009201919091525050506020820151526040805160a08181019092529060c08501906005908390839080828437600092019190915250505060208083015101526060820151600114610adb578160600151610b0e565b6003610aed6101408501356004612a46565b6101c0850160045b6020020135610b049190612a0f565b610b0e9190612a5d565b602082015160400152610b2660016080850135612a0f565b602082015160600152610b3e34610160850135612a0f565b60208201805160800191909152514360a090910152610b5c81611e48565b505050565b604051610b7590600e9083906020016128c5565b6040516020818303038152906040528051906020012060001c60005414610b9b57600080fd5b60008055610bb1602082013560e0830135612a0f565b4310158015610bbe575060015b610bc757600080fd5b3415610bd257600080fd5b33610be060208301836122b5565b6001600160a01b031614610bf357600080fd5b610c0060208201826122b5565b6001600160a01b03166108fc610c1a3460c0850135612a0f565b6040518115909202916000818181858888f19350505050158015610c42573d6000803e3d6000fd5b507f45ebc520699ff172c712e9500a8125d4de36a9450b99d8c5ba7490b0dff7fa698160405161053d9190612783565b604051610c8690600e9083906020016128c5565b6040516020818303038152906040528051906020012060001c60005414610cac57600080fd5b60008080556040805160208101909152908152610cd1602083013560e0840135612a0f565b4310610cdc57600080fd5b3415610ce757600080fd5b33610cf860608401604085016122b5565b6001600160a01b031614610d0b57600080fd5b610d193460c0840135612a0f565b81526040517f644153cb00b5902ba0237e14ba781544b02196bdedd4a4c36929d9ad9d00c5b390610d4b90849061276e565b60405180910390a1610d5b6120ba565b610d6860208401846122b5565b6001600160a01b0316815260208084013590820152610d8d60608401604085016122b5565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c90601090839060200161296d565b604051610e1c906002908390602001612982565b6040516020818303038152906040528051906020012060001c60005414610e4257600080fd5b60008055610e4e61211e565b610e616020830135610140840135612a0f565b4310610e6c57600080fd5b3415610e7757600080fd5b33610e8560208401846122b5565b6001600160a01b031614610e9857600080fd5b604051610eb490610180840135906101a0850190602001612834565b6040516020818303038152906040528051906020012060001c826000016040013514610edf57600080fd5b8051600090528051600160209091015280516002604090910152805160036060909101819052815160046080918201819052610f1e9185013590612a46565b610f2d906101a0850135612a0f565b610f379190612a5d565b60208201819052600114610f4f578060200151610f79565b6003610f6060a08401356004612a46565b610f6f906101c0850135612a0f565b610f799190612a5d565b60408201819052600114610f91578060400151610fbb565b6003610fa260c08401356004612a46565b610fb1906101e0850135612a0f565b610fbb9190612a5d565b60608201819052600114610fd3578060600151610ffd565b6003610fe460e08401356004612a46565b610ff390610200850135612a0f565b610ffd9190612a5d565b60808201526040517f985f563580b925dd30b120f2473fe883c4c74039f091b0f47fe9b1e0b9bab45b906110329084906126c6565b60405180910390a161104261207e565b61104f60208401846122b5565b81516001600160a01b039091169052805160208085013591015261107960808401606085016122b5565b81516001600160a01b0390911660409091015280516101608401356060909101528151602080830180519290925283519151015260808201516001146110c35781608001516110ee565b60036110d56101008501356004612a46565b6110e490610220860135612a0f565b6110ee9190612a5d565b60208201805160400191909152516000606090910152610b3e34610120850135612a0f565b604051611127906010908390602001612958565b6040516020818303038152906040528051906020012060001c6000541461114d57600080fd5b600080556111646020820135610180830135612a0f565b4310158015611171575060015b61117a57600080fd5b341561118557600080fd5b3361119660608301604084016122b5565b6001600160a01b0316146111a957600080fd5b6111b960608201604083016122b5565b6001600160a01b03166108fc6111d434610160850135612a0f565b6040518115909202916000818181858888f193505050501580156111fc573d6000803e3d6000fd5b507f09c5ad06358a3e2f898ba0aef76151a9013aec5745ed85ef1ee0e81565c980be8160405161053d91906127b2565b604051611240906001908390602001612944565b6040516020818303038152906040528051906020012060001c6000541461126657600080fd5b600080805560408051808201825282815260208101929092526112909083013560a0840135612a0f565b431061129b57600080fd5b346020830135146112ab57600080fd5b6112b9346080840135612a0f565b81526112ca60208301356002612a27565b60208201526040517ff196eb766d2d8533f0df41b064e516bf7376911659bd46c361acef78536bf4bc906112ff9084906127c1565b60405180910390a161130f612153565b61131c60208401846122b5565b6001600160a01b031681526040808401356020830152606080850135828401523390830152805160a08181019092529060c0850190600590839083908082843760009201919091525050506080820152815160a08201524360c082015260208083015160e083015260405161040c91600291849101612997565b6040516113aa90600a908390602001612958565b6040516020818303038152906040528051906020012060001c600054146113d057600080fd5b600080819055506114026040518060800160405280600081526020016000815260200160008152602001600081525090565b6114156020830135610180840135612a0f565b431061142057600080fd5b341561142b57600080fd5b3361143c60608401604085016122b5565b6001600160a01b03161461144f57600080fd5b60405161146b906101a0840135906101c0850190602001612834565b60408051601f19818403018152919052805160209091012060a08301351461149257600080fd5b60036114a46101c08401356004612a46565b6114b29060c0850135612a0f565b6114bc9190612a5d565b8082526001146114cd5780516114f7565b60036114df6101e08401356004612a46565b6114ed9060e0850135612a0f565b6114f79190612a5d565b6020820181905260011461150f57806020015161153a565b60036115216102008401356004612a46565b61153090610100850135612a0f565b61153a9190612a5d565b6040820181905260011461155257806040015161157d565b60036115646102208401356004612a46565b61157390610120850135612a0f565b61157d9190612a5d565b60608201526040517f258efe6f6e995791e3c206c5f7508e6472977eefb4afb67101812a20af39aa9b906115b2908490612792565b60405180910390a16115c261207e565b6115cf60208401846122b5565b81516001600160a01b03909116905280516020808501359101526115f960608401604085016122b5565b81516001600160a01b039091166040918201528151606080860135910152805160a08181019092529060c0850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101c0850190600590839083908082843760009201919091525050506020808301510152606082015160011461168a578160600151610b0e565b600361169c6102408501356004612a46565b60c085016004610af5565b6040516116bb90600a908390602001612958565b6040516020818303038152906040528051906020012060001c600054146116e157600080fd5b600080556116f86020820135610180830135612a0f565b4310158015611705575060015b61170e57600080fd5b341561171957600080fd5b3361172760208301836122b5565b6001600160a01b03161461173a57600080fd5b61174760208201826122b5565b6001600160a01b03166108fc61176234610160850135612a0f565b6040518115909202916000818181858888f1935050505015801561178a573d6000803e3d6000fd5b507fe38eaeebe01f8fea2d39bfc35b82cb3697543788a548da0d97c4a704ce6ec2b18160405161053d91906127b2565b6040516117ce90600690839060200161284e565b6040516020818303038152906040528051906020012060001c600054146117f457600080fd5b6000805561180a602082013560c0830135612a0f565b4310158015611817575060015b61182057600080fd5b341561182b57600080fd5b3361183c60608301604084016122b5565b6001600160a01b03161461184f57600080fd5b61185f60608201604083016122b5565b6001600160a01b03166108fc6118793460a0850135612a0f565b6040518115909202916000818181858888f193505050501580156118a1573d6000803e3d6000fd5b507f6ce0b6368a969de24391cb6a77cee3c86b93b4c8da6963a920b1d95b44fbf0a28160405161053d919061273d565b6040516118e59060089083906020016128c5565b6040516020818303038152906040528051906020012060001c6000541461190b57600080fd5b60008055611921602082013560e0830135612a0f565b431015801561192e575060015b61193757600080fd5b341561194257600080fd5b3361195360608301604084016122b5565b6001600160a01b03161461196657600080fd5b61197660608201604083016122b5565b6001600160a01b03166108fc6119903460c0850135612a0f565b6040518115909202916000818181858888f193505050501580156119b8573d6000803e3d6000fd5b507f239047e7ecda813bd5d0deda901af2cfd51f309e8f9aa8f06ae255dc092fa8a48160405161053d9190612783565b6040516119fc906001908390602001612944565b6040516020818303038152906040528051906020012060001c60005414611a2257600080fd5b60008055611a38604082013560a0830135612a0f565b4310158015611a45575060015b611a4e57600080fd5b3415611a5957600080fd5b33611a6760208301836122b5565b6001600160a01b031614611a7a57600080fd5b611a8760208201826122b5565b6001600160a01b03166108fc611aa1346080850135612a0f565b6040518115909202916000818181858888f19350505050158015611ac9573d6000803e3d6000fd5b507f17040e3ed853a8df776cd092f1357f15488d98d460f66cd5e6b0cb07d5bc8ae38160405161053d9190612804565b604051611b0d9060089083906020016128c5565b6040516020818303038152906040528051906020012060001c60005414611b3357600080fd5b60008080556040805160208101909152908152611b58602083013560e0840135612a0f565b4310611b6357600080fd5b3415611b6e57600080fd5b33611b7c60208401846122b5565b6001600160a01b031614611b8f57600080fd5b611b9d3460c0840135612a0f565b81526040517fc5bf379625a42284cf436ae38bfbe777a1b3406a9e2eea51c37126337545d40090611bcf90849061276e565b60405180910390a1611bdf6120ba565b611bec60208401846122b5565b6001600160a01b0316815260208084013590820152611c1160608401604085016122b5565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c90600a90839060200161296d565b604051611ca090600690839060200161284e565b6040516020818303038152906040528051906020012060001c60005414611cc657600080fd5b60008080556040805160208101909152908152611ceb602083013560c0840135612a0f565b4310611cf657600080fd5b3415611d0157600080fd5b33611d1260608401604085016122b5565b6001600160a01b031614611d2557600080fd5b611d333460a0840135612a0f565b81526040517fee312f330bc747f7ed8a854ea245bb93733f831d3c4296b2fd99db1023ff8f4290611d65908490612720565b60405180910390a1611dc760405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b611dd460208401846122b5565b6001600160a01b0316815260208084013590820152611df960608401604085016122b5565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c9060089083906020016128da565b60018160200151604001511415611fa95760006002826020015160600151611e709190612a5d565b1415611f0f57611e7e6121b0565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051909101516080808601919091528151015160a0808601919091529051015160c08401529051611eee91600691849101612863565b60408051601f19818403018152919052805160209091012060005550611fa4565b611f176121b0565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051909101516080808601919091528151015160a0808601919091529051015160c08401529051611f8791600691849101612863565b60408051601f198184030181529190528051602090910120600055505b612017565b6040805160c081018252600081830181815260608084018381526080850184815260a086018581528487526020808801969096528851516001600160a01b039081169095528851880151909416909152865190910151905290840151909201519091526120158161201a565b505b50565b80516060015160021461203257805160200151612036565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f19350505050158015612076573d6000803e3d6000fd5b506000805533ff5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908152602081016120b56121ff565b905290565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161210a61221b565b815260200160008152602001600081525090565b6040518060a0016040528061213161221b565b8152602001600081526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200161219561221b565b81526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060c0016040528061221261221b565b81526020016121315b6040518060a001604052806005906020820280368337509192915050565b80356001600160a01b038116811461225057600080fd5b919050565b60006101a08284031215612267578081fd5b50919050565b60006101008284031215612267578081fd5b60006101208284031215612267578081fd5b60006102608284031215612267578081fd5b60006101c08284031215612267578081fd5b6000602082840312156122c6578081fd5b6122cf82612239565b9392505050565b60006102408284031215612267578081fd5b60006101a082840312156122fa578081fd5b6122cf8383612255565b60006101008284031215612316578081fd5b6122cf838361226d565b60006101208284031215612332578081fd5b6122cf838361227f565b6000610260828403121561234e578081fd5b6122cf8383612291565b60006101c0828403121561236a578081fd5b6122cf83836122a3565b600060808284031215612267578081fd5b60006101808284031215612267578081fd5b600060e08284031215612267578081fd5b8060005b60058110156123cb5781518452602093840193909101906001016123ac565b50505050565b8035825260a0602082016020840137600060c08301525050565b6001600160a01b03806123fd83612239565b168352602082013560208401528061241760408401612239565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b038061245c83612239565b168352602082013560208401528061247660408401612239565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b036124c482612239565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b038061250f83612239565b168352602082013560208401528061252960408401612239565b16604084015250606081013560608301526080810135608083015260a081013560a083015260a060c0820160c0840137610160818101359083015261018090810135910152565b80516001600160a01b0316825260208082015190830152604080820151906125a2908401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c08101516125d360c08401826123a8565b5060e0810151610160830152610100015161018090910152565b6125f7828261244a565b61010060a0818301828501375060006101a08301525050565b61261a828261244a565b6101008082013580151580821461263057600080fd5b80838601525050505050565b61264682826124fd565b6101a08082013580151580821461263057600080fd5b6001600160a01b038061266e83612239565b16835260208201356020840152604082013560408401528061269260608401612239565b1660608401525060a06080820160808401376101208181013590830152610140808201359083015261016090810135910152565b61024081016126d5828461265c565b6101806126e68184018286016123d1565b5092915050565b6101a081016126fc828461265c565b6101808084013580151580821461271257600080fd5b808386015250505092915050565b610100810161272f82846123eb565b60e092830135919092015290565b610100810161274c82846123eb565b60e083013580151580821461276057600080fd5b8060e0850152505092915050565b6101a0810161277d82846125ed565b92915050565b610120810161277d8284612610565b61026081016127a182846124fd565b6101a06126e68184018286016123d1565b6101c0810161277d828461263c565b61018081016127d082846124b3565b60a060c0840160c08401376000610160838101918252906001600160a01b036127fa868401612239565b1690525092915050565b60e0810161281282846124b3565b60c083013580151580821461282657600080fd5b8060c0850152505092915050565b82815260c0810160a0836020840137600081529392505050565b82815261010081016122cf60208301846123eb565b60006101008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015160c083015260c083015160e08301529392505050565b82815261012081016122cf602083018461244a565b82815261012081016122cf602083018460018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b82815260e081016122cf60208301846124b3565b8281526101c081016122cf60208301846124fd565b8281526101c081016122cf6020830184612570565b8281526101a081016122cf602083018461265c565b60006101a08201905083825260018060a01b0380845116602084015260208401516040840152604084015160608401528060608501511660808401525060808301516129e660a08401826123a8565b5060a083015161014083015260c083015161016083015260e08301516101808301529392505050565b60008219821115612a2257612a22612a7d565b500190565b6000816000190483118215151615612a4157612a41612a7d565b500290565b600082821015612a5857612a58612a7d565b500390565b600082612a7857634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220783e5f0f6f54806f317e8c760be3fd84a4b0c52b3592320fbdf65a5bb3e2d69a64736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

