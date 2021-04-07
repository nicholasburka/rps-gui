// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export const getExports = (s) => {
  const stdlib = s.reachStdlib;

 return ({
    batchSize : stdlib.checkedBigNumberify('./index.rsh:9:19:decimal', stdlib.UInt_max, 5),})
 
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
  const txn1 = await (ctc.recv('Attacher', 1, 3, [ctc0, ctc0, ctc2], false, false));
  const [v61, v62, v63] = txn1.data;
  const v64 = txn1.value;
  const v68 = txn1.time;
  const v60 = txn1.from;
  const v65 = stdlib.eq(v64, v61);
  stdlib.assert(v65, {
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
  const v67 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v64);
  const v69 = ctc.selfAddress('Attacher', false, stdlib.checkedBigNumberify('./index.rsh:78:31:application', stdlib.UInt_max, 0));
  stdlib.assert(true, {
    at: './index.rsh:82:39:application',
    fs: ['at ./index.rsh:78:31:application call to [unknown function] (defined at: ./index.rsh:78:35:function exp)'],
    msg: null,
    who: 'Attacher'
     });
  const txn2 = await (ctc.sendrecv('Attacher', 2, 2, stdlib.checkedBigNumberify('./index.rsh:84:27:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc3], [v60, v61, v62, v63, v67, v68, v52, v69], v61, [ctc1, ctc3], true, true, v62, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:84:27:dot', stdlib.UInt_max, 1), v60, v61, v62, v63, v67, v68]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:84:27:dot', stdlib.UInt_max, 1), v60, v61, v62, v63, v67]);
    const [v72, v73] = txn2.data;
    const v74 = txn2.value;
    const v78 = txn2.time;
    const v71 = txn2.from;
    
    const v75 = stdlib.eq(v74, v61);
    stdlib.assert(v75, {
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
    const v77 = stdlib.add(v67, v74);
    const v80 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 2), v61);
    sim_r.nextSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v60, v62, v63, v71, v72, v77, v78, v80]);
    sim_r.nextSt_noTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v60, v62, v63, v71, v72, v77, v80]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv('Attacher', 3, 0, [], false, false));
    const [] = txn3.data;
    const v627 = txn3.value;
    const v632 = txn3.time;
    const v626 = txn3.from;
    const v628 = stdlib.eq(v627, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v628, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Attacher'
       });
    const v629 = stdlib.addressEq(v60, v626);
    stdlib.assert(v629, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Attacher'
       });
    const v631 = stdlib.add(v67, v627);
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
    const [v72, v73] = txn2.data;
    const v74 = txn2.value;
    const v78 = txn2.time;
    const v71 = txn2.from;
    const v75 = stdlib.eq(v74, v61);
    stdlib.assert(v75, {
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
    const v77 = stdlib.add(v67, v74);
    const v80 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 2), v61);
    const txn3 = await (ctc.recv('Attacher', 4, 2, [ctc0, ctc1], false, v62));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv('Attacher', 5, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0, ctc0], [v60, v62, v63, v71, v72, v77, v78, v80], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v60, v62, v63, v71, v72, v77, v78, v80]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 2), v60, v62, v63, v71, v72, v77, v80]);
        const [] = txn4.data;
        const v606 = txn4.value;
        const v611 = txn4.time;
        const v605 = txn4.from;
        
        const v607 = stdlib.eq(v606, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
        stdlib.assert(v607, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'pay amount correct',
          who: 'Attacher'
           });
        const v608 = stdlib.addressEq(v71, v605);
        stdlib.assert(v608, {
          at: 'reach standard library:68:7:dot',
          fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
           });
        const v610 = stdlib.add(v77, v606);
        sim_r.txns.push({
          amt: v610,
          to: v71
           });
        sim_r.nextSt = stdlib.digest(ctc8, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
        sim_r.isHalt = true;
        
        return sim_r;
         })));
      const [] = txn4.data;
      const v606 = txn4.value;
      const v611 = txn4.time;
      const v605 = txn4.from;
      const v607 = stdlib.eq(v606, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v607, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Attacher'
         });
      const v608 = stdlib.addressEq(v71, v605);
      stdlib.assert(v608, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
         });
      const v610 = stdlib.add(v77, v606);
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
      const [v85, v86] = txn3.data;
      const v87 = txn3.value;
      const v92 = txn3.time;
      const v84 = txn3.from;
      const v88 = stdlib.eq(v87, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v88, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Attacher'
         });
      const v89 = stdlib.addressEq(v60, v84);
      stdlib.assert(v89, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
         });
      const v91 = stdlib.add(v77, v87);
      const v94 = stdlib.digest(ctc4, [v85, v86]);
      const v95 = stdlib.eq(v63, v94);
      stdlib.assert(v95, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Attacher'
         });
      const v112 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v113 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v115 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v113);
      const v116 = stdlib.add(v112, v115);
      const v117 = stdlib.mod(v116, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v121 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v122 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v124 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v122);
      const v125 = stdlib.add(v121, v124);
      const v126 = stdlib.mod(v125, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v130 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v131 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v133 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v131);
      const v134 = stdlib.add(v130, v133);
      const v135 = stdlib.mod(v134, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v139 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v140 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v142 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v140);
      const v143 = stdlib.add(v139, v142);
      const v144 = stdlib.mod(v143, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v148 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v149 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
      const v151 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v149);
      const v152 = stdlib.add(v148, v151);
      const v153 = stdlib.mod(v152, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v166 = stdlib.eq(v117, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v167 = v166 ? v126 : v117;
      const v170 = stdlib.eq(v167, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v171 = v170 ? v135 : v167;
      const v174 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v175 = v174 ? v144 : v171;
      const v178 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v179 = v178 ? v153 : v175;
      let v182 = v72;
      let v183 = v86;
      let v184 = v179;
      let v185 = stdlib.checkedBigNumberify('./index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      let v646 = v91;
      let v647 = v92;
      
      while ((() => {
        const v195 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v195; })()) {
        const v196 = stdlib.mod(v185, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v197 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v197) {
          const v201 = stdlib.protect(ctc1, await interact.getHands(), {
            at: './index.rsh:107:72:application',
            fs: ['at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'getHands',
            who: 'Attacher'
             });
          const v203 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./index.rsh:108:84:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'random',
            who: 'Attacher'
             });
          const v204 = stdlib.digest(ctc4, [v203, v201]);
          const txn4 = await (ctc.sendrecv('Attacher', 8, 1, stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2], [v60, v62, v71, v80, v185, v646, v647, v204], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc2], true, true, v62, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
            const [v207] = txn4.data;
            const v208 = txn4.value;
            const v213 = txn4.time;
            const v206 = txn4.from;
            
            const v209 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v209, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v210 = stdlib.addressEq(v71, v206);
            stdlib.assert(v210, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v212 = stdlib.add(v646, v208);
            sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v60, v62, v71, v80, v185, v207, v212, v213]);
            sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v60, v62, v71, v80, v185, v207, v212]);
            sim_r.isHalt = false;
            
            return sim_r;
             })));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.recv('Attacher', 9, 0, [], false, false));
            const [] = txn5.data;
            const v287 = txn5.value;
            const v292 = txn5.time;
            const v286 = txn5.from;
            const v288 = stdlib.eq(v287, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v288, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v289 = stdlib.addressEq(v60, v286);
            stdlib.assert(v289, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v291 = stdlib.add(v646, v287);
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
            const [v207] = txn4.data;
            const v208 = txn4.value;
            const v213 = txn4.time;
            const v206 = txn4.from;
            const v209 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v209, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v210 = stdlib.addressEq(v71, v206);
            stdlib.assert(v210, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v212 = stdlib.add(v646, v208);
            const txn5 = await (ctc.recv('Attacher', 10, 1, [ctc1], false, v62));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv('Attacher', 11, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0], [v60, v62, v71, v80, v185, v207, v212, v213], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), v60, v62, v71, v80, v185, v207, v212, v213]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), v60, v62, v71, v80, v185, v207, v212]);
                const [] = txn6.data;
                const v265 = txn6.value;
                const v270 = txn6.time;
                const v264 = txn6.from;
                
                const v266 = stdlib.eq(v265, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v266, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v267 = stdlib.addressEq(v71, v264);
                stdlib.assert(v267, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v269 = stdlib.add(v212, v265);
                sim_r.txns.push({
                  amt: v269,
                  to: v71
                   });
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.isHalt = true;
                
                return sim_r;
                 })));
              const [] = txn6.data;
              const v265 = txn6.value;
              const v270 = txn6.time;
              const v264 = txn6.from;
              const v266 = stdlib.eq(v265, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v266, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v267 = stdlib.addressEq(v71, v264);
              stdlib.assert(v267, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v269 = stdlib.add(v212, v265);
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
              const [v218] = txn5.data;
              const v219 = txn5.value;
              const v224 = txn5.time;
              const v217 = txn5.from;
              const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v220, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v221 = stdlib.addressEq(v60, v217);
              stdlib.assert(v221, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v223 = stdlib.add(v212, v219);
              const txn6 = await (ctc.sendrecv('Attacher', 12, 2, stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 8), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0, ctc0, ctc1], [v60, v62, v71, v80, v185, v207, v218, v223, v224, v203, v201], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v62, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 10), v60, v62, v71, v80, v185, v207, v218, v223, v224]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 10), v60, v62, v71, v80, v185, v207, v218, v223]);
                const [v228, v229] = txn6.data;
                const v230 = txn6.value;
                const v235 = txn6.time;
                const v227 = txn6.from;
                
                const v231 = stdlib.eq(v230, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v231, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v232 = stdlib.addressEq(v71, v227);
                stdlib.assert(v232, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v234 = stdlib.add(v223, v230);
                const v237 = stdlib.digest(ctc4, [v228, v229]);
                const v238 = stdlib.eq(v207, v237);
                stdlib.assert(v238, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                   });
                const v321 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v322 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v324 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v322);
                const v325 = stdlib.add(v321, v324);
                const v326 = stdlib.mod(v325, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v330 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v331 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v333 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v331);
                const v334 = stdlib.add(v330, v333);
                const v335 = stdlib.mod(v334, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v339 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v340 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v342 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v340);
                const v343 = stdlib.add(v339, v342);
                const v344 = stdlib.mod(v343, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v348 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v349 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v351 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v349);
                const v352 = stdlib.add(v348, v351);
                const v353 = stdlib.mod(v352, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v357 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v358 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v360 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v358);
                const v361 = stdlib.add(v357, v360);
                const v362 = stdlib.mod(v361, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v375 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v376 = v375 ? v335 : v326;
                const v379 = stdlib.eq(v376, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v380 = v379 ? v344 : v376;
                const v383 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v384 = v383 ? v353 : v380;
                const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v388 = v387 ? v362 : v384;
                const v391 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv182 = v229;
                const cv183 = v218;
                const cv184 = v388;
                const cv185 = v391;
                const cv646 = v234;
                const cv647 = v235;
                
                (() => {
                  const v182 = cv182;
                  const v183 = cv183;
                  const v184 = cv184;
                  const v185 = cv185;
                  const v646 = cv646;
                  const v647 = cv647;
                  
                  if ((() => {
                    const v195 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v195; })()) {
                    const v196 = stdlib.mod(v185, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
                    const v197 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
                    if (v197) {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
                      sim_r.isHalt = false;
                       }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
                      sim_r.isHalt = false;
                       } }
                  else {
                    const v586 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v591 = v586 ? v60 : v71;
                    sim_r.txns.push({
                      amt: v80,
                      to: v591
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
                const v243 = txn7.value;
                const v248 = txn7.time;
                const v242 = txn7.from;
                const v244 = stdlib.eq(v243, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v244, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v245 = stdlib.addressEq(v60, v242);
                stdlib.assert(v245, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v247 = stdlib.add(v223, v243);
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
                const [v228, v229] = txn6.data;
                const v230 = txn6.value;
                const v235 = txn6.time;
                const v227 = txn6.from;
                const v231 = stdlib.eq(v230, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v231, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v232 = stdlib.addressEq(v71, v227);
                stdlib.assert(v232, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v234 = stdlib.add(v223, v230);
                const v237 = stdlib.digest(ctc4, [v228, v229]);
                const v238 = stdlib.eq(v207, v237);
                stdlib.assert(v238, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                   });
                const v321 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v322 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v324 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v322);
                const v325 = stdlib.add(v321, v324);
                const v326 = stdlib.mod(v325, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v330 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v331 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v333 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v331);
                const v334 = stdlib.add(v330, v333);
                const v335 = stdlib.mod(v334, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v339 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v340 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v342 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v340);
                const v343 = stdlib.add(v339, v342);
                const v344 = stdlib.mod(v343, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v348 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v349 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v351 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v349);
                const v352 = stdlib.add(v348, v351);
                const v353 = stdlib.mod(v352, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v357 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v358 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v360 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v358);
                const v361 = stdlib.add(v357, v360);
                const v362 = stdlib.mod(v361, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v375 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v376 = v375 ? v335 : v326;
                const v379 = stdlib.eq(v376, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v380 = v379 ? v344 : v376;
                const v383 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v384 = v383 ? v353 : v380;
                const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v388 = v387 ? v362 : v384;
                const v391 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv182 = v229;
                const cv183 = v218;
                const cv184 = v388;
                const cv185 = v391;
                const cv646 = v234;
                const cv647 = v235;
                
                v182 = cv182;
                v183 = cv183;
                v184 = cv184;
                v185 = cv185;
                v646 = cv646;
                v647 = cv647;
                
                continue; }
               }
             }
           }
        else {
          const txn4 = await (ctc.recv('Attacher', 14, 1, [ctc2], false, v62));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv('Attacher', 15, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0], [v60, v62, v71, v80, v185, v646, v647], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
              const [] = txn5.data;
              const v481 = txn5.value;
              const v486 = txn5.time;
              const v480 = txn5.from;
              
              const v482 = stdlib.eq(v481, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v482, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v483 = stdlib.addressEq(v71, v480);
              stdlib.assert(v483, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v485 = stdlib.add(v646, v481);
              sim_r.txns.push({
                amt: v485,
                to: v71
                 });
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn5.data;
            const v481 = txn5.value;
            const v486 = txn5.time;
            const v480 = txn5.from;
            const v482 = stdlib.eq(v481, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v482, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v483 = stdlib.addressEq(v71, v480);
            stdlib.assert(v483, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v485 = stdlib.add(v646, v481);
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
            const [v401] = txn4.data;
            const v402 = txn4.value;
            const v407 = txn4.time;
            const v400 = txn4.from;
            const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v403, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Attacher'
               });
            const v404 = stdlib.addressEq(v60, v400);
            stdlib.assert(v404, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
               });
            const v406 = stdlib.add(v646, v402);
            const v410 = stdlib.protect(ctc1, await interact.getHands(), {
              at: './index.rsh:117:83:application',
              fs: ['at ./index.rsh:116:44:application call to [unknown function] (defined at: ./index.rsh:116:48:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'getHands',
              who: 'Attacher'
               });
            const txn5 = await (ctc.sendrecv('Attacher', 16, 1, stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 7), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1], [v60, v62, v71, v80, v185, v401, v406, v407, v410], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc1], true, true, v62, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 14), v60, v62, v71, v80, v185, v401, v406, v407]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 14), v60, v62, v71, v80, v185, v401, v406]);
              const [v412] = txn5.data;
              const v413 = txn5.value;
              const v418 = txn5.time;
              const v411 = txn5.from;
              
              const v414 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v414, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v415 = stdlib.addressEq(v71, v411);
              stdlib.assert(v415, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v417 = stdlib.add(v406, v413);
              sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v60, v62, v71, v80, v185, v401, v412, v417, v418]);
              sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v60, v62, v71, v80, v185, v401, v412, v417]);
              sim_r.isHalt = false;
              
              return sim_r;
               })));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv('Attacher', 17, 0, [], false, false));
              const [] = txn6.data;
              const v459 = txn6.value;
              const v464 = txn6.time;
              const v458 = txn6.from;
              const v460 = stdlib.eq(v459, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v460, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v461 = stdlib.addressEq(v60, v458);
              stdlib.assert(v461, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v463 = stdlib.add(v406, v459);
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
              const [v412] = txn5.data;
              const v413 = txn5.value;
              const v418 = txn5.time;
              const v411 = txn5.from;
              const v414 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v414, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Attacher'
                 });
              const v415 = stdlib.addressEq(v71, v411);
              stdlib.assert(v415, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Attacher'
                 });
              const v417 = stdlib.add(v406, v413);
              const txn6 = await (ctc.recv('Attacher', 18, 2, [ctc0, ctc1], false, v62));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.sendrecv('Attacher', 19, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), [ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0], [v60, v62, v71, v80, v185, v401, v412, v417, v418], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn7) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 16), v60, v62, v71, v80, v185, v401, v412, v417, v418]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 16), v60, v62, v71, v80, v185, v401, v412, v417]);
                  const [] = txn7.data;
                  const v437 = txn7.value;
                  const v442 = txn7.time;
                  const v436 = txn7.from;
                  
                  const v438 = stdlib.eq(v437, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  stdlib.assert(v438, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'pay amount correct',
                    who: 'Attacher'
                     });
                  const v439 = stdlib.addressEq(v71, v436);
                  stdlib.assert(v439, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'sender correct',
                    who: 'Attacher'
                     });
                  const v441 = stdlib.add(v417, v437);
                  sim_r.txns.push({
                    amt: v441,
                    to: v71
                     });
                  sim_r.nextSt = stdlib.digest(ctc8, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                   })));
                const [] = txn7.data;
                const v437 = txn7.value;
                const v442 = txn7.time;
                const v436 = txn7.from;
                const v438 = stdlib.eq(v437, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v438, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v439 = stdlib.addressEq(v71, v436);
                stdlib.assert(v439, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v441 = stdlib.add(v417, v437);
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
                const [v422, v423] = txn6.data;
                const v424 = txn6.value;
                const v429 = txn6.time;
                const v421 = txn6.from;
                const v425 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v425, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Attacher'
                   });
                const v426 = stdlib.addressEq(v60, v421);
                stdlib.assert(v426, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Attacher'
                   });
                const v428 = stdlib.add(v417, v424);
                const v431 = stdlib.digest(ctc4, [v422, v423]);
                const v432 = stdlib.eq(v401, v431);
                stdlib.assert(v432, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Attacher'
                   });
                const v515 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v516 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v518 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v516);
                const v519 = stdlib.add(v515, v518);
                const v520 = stdlib.mod(v519, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v524 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v525 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v527 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v525);
                const v528 = stdlib.add(v524, v527);
                const v529 = stdlib.mod(v528, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v533 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v534 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v536 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v534);
                const v537 = stdlib.add(v533, v536);
                const v538 = stdlib.mod(v537, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v542 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v543 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v545 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v543);
                const v546 = stdlib.add(v542, v545);
                const v547 = stdlib.mod(v546, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v551 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v552 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v554 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v552);
                const v555 = stdlib.add(v551, v554);
                const v556 = stdlib.mod(v555, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v569 = stdlib.eq(v520, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v570 = v569 ? v529 : v520;
                const v573 = stdlib.eq(v570, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v574 = v573 ? v538 : v570;
                const v577 = stdlib.eq(v574, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v578 = v577 ? v547 : v574;
                const v581 = stdlib.eq(v578, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v582 = v581 ? v556 : v578;
                const v585 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv182 = v412;
                const cv183 = v423;
                const cv184 = v582;
                const cv185 = v585;
                const cv646 = v428;
                const cv647 = v429;
                
                v182 = cv182;
                v183 = cv183;
                v184 = cv184;
                v185 = cv185;
                v646 = cv646;
                v647 = cv647;
                
                continue; }
               }
             }
           } }
      const v586 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v591 = v586 ? v60 : v71;
      ;
      stdlib.protect(ctc5, await interact.seeOutcome(v184, v183, v182), {
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
  
  
  const v53 = await ctc.creationTime();
  const v49 = stdlib.protect(ctc0, interact.deadline, null);
  const v50 = stdlib.protect(ctc1, interact.firstHands, null);
  const v51 = stdlib.protect(ctc0, interact.wager, null);
  const v57 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:60:31:application',
    fs: ['at ./index.rsh:68:98:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:64:31:application call to [unknown function] (defined at: ./index.rsh:64:35:function exp)'],
    msg: 'random',
    who: 'Deployer'
     });
  const v58 = stdlib.digest(ctc2, [v57, v50]);
  const txn1 = await (ctc.sendrecv('Deployer', 1, 3, stdlib.checkedBigNumberify('./index.rsh:72:27:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc3], [v53, v51, v49, v58], v51, [ctc0, ctc0, ctc3], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./index.rsh:72:27:dot', stdlib.UInt_max, 0), v53]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./index.rsh:72:27:dot', stdlib.UInt_max, 0)]);
    const [v61, v62, v63] = txn1.data;
    const v64 = txn1.value;
    const v68 = txn1.time;
    const v60 = txn1.from;
    
    const v65 = stdlib.eq(v64, v61);
    stdlib.assert(v65, {
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
    const v67 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v64);
    sim_r.nextSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v60, v61, v62, v63, v67, v68]);
    sim_r.nextSt_noTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v60, v61, v62, v63, v67]);
    sim_r.isHalt = false;
    
    return sim_r;
     })));
  const [v61, v62, v63] = txn1.data;
  const v64 = txn1.value;
  const v68 = txn1.time;
  const v60 = txn1.from;
  const v65 = stdlib.eq(v64, v61);
  stdlib.assert(v65, {
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
  const v67 = stdlib.add(stdlib.checkedBigNumberify('./index.rsh:compileDApp', stdlib.UInt_max, 0), v64);
  const txn2 = await (ctc.recv('Deployer', 2, 2, [ctc1, ctc4], false, v62));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv('Deployer', 3, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v60, v61, v62, v63, v67, v68], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 1), v60, v61, v62, v63, v67, v68]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 1), v60, v61, v62, v63, v67]);
      const [] = txn3.data;
      const v627 = txn3.value;
      const v632 = txn3.time;
      const v626 = txn3.from;
      
      const v628 = stdlib.eq(v627, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v628, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v629 = stdlib.addressEq(v60, v626);
      stdlib.assert(v629, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v631 = stdlib.add(v67, v627);
      sim_r.txns.push({
        amt: v631,
        to: v60
         });
      sim_r.nextSt = stdlib.digest(ctc6, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
      sim_r.isHalt = true;
      
      return sim_r;
       })));
    const [] = txn3.data;
    const v627 = txn3.value;
    const v632 = txn3.time;
    const v626 = txn3.from;
    const v628 = stdlib.eq(v627, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
    stdlib.assert(v628, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'pay amount correct',
      who: 'Deployer'
       });
    const v629 = stdlib.addressEq(v60, v626);
    stdlib.assert(v629, {
      at: 'reach standard library:68:7:dot',
      fs: ['at ./index.rsh:86:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
      msg: 'sender correct',
      who: 'Deployer'
       });
    const v631 = stdlib.add(v67, v627);
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
    const [v72, v73] = txn2.data;
    const v74 = txn2.value;
    const v78 = txn2.time;
    const v71 = txn2.from;
    const v75 = stdlib.eq(v74, v61);
    stdlib.assert(v75, {
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
    const v77 = stdlib.add(v67, v74);
    const v80 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:90:46:decimal', stdlib.UInt_max, 2), v61);
    stdlib.protect(ctc5, await interact.informOpponent(v73), {
      at: './index.rsh:93:56:application',
      fs: ['at ./index.rsh:92:31:application call to [unknown function] (defined at: ./index.rsh:92:35:function exp)'],
      msg: 'informOpponent',
      who: 'Deployer'
       });
    const txn3 = await (ctc.sendrecv('Deployer', 4, 2, stdlib.checkedBigNumberify('./index.rsh:96:27:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1], [v60, v62, v63, v71, v72, v77, v78, v80, v57, v50], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v62, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:96:27:dot', stdlib.UInt_max, 2), v60, v62, v63, v71, v72, v77, v78, v80]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:96:27:dot', stdlib.UInt_max, 2), v60, v62, v63, v71, v72, v77, v80]);
      const [v85, v86] = txn3.data;
      const v87 = txn3.value;
      const v92 = txn3.time;
      const v84 = txn3.from;
      
      const v88 = stdlib.eq(v87, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v88, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v89 = stdlib.addressEq(v60, v84);
      stdlib.assert(v89, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v91 = stdlib.add(v77, v87);
      const v94 = stdlib.digest(ctc2, [v85, v86]);
      const v95 = stdlib.eq(v63, v94);
      stdlib.assert(v95, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Deployer'
         });
      const v112 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v113 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v115 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v113);
      const v116 = stdlib.add(v112, v115);
      const v117 = stdlib.mod(v116, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v121 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v122 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v124 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v122);
      const v125 = stdlib.add(v121, v124);
      const v126 = stdlib.mod(v125, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v130 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v131 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v133 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v131);
      const v134 = stdlib.add(v130, v133);
      const v135 = stdlib.mod(v134, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v139 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v140 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v142 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v140);
      const v143 = stdlib.add(v139, v142);
      const v144 = stdlib.mod(v143, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v148 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v149 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
      const v151 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v149);
      const v152 = stdlib.add(v148, v151);
      const v153 = stdlib.mod(v152, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v166 = stdlib.eq(v117, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v167 = v166 ? v126 : v117;
      const v170 = stdlib.eq(v167, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v171 = v170 ? v135 : v167;
      const v174 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v175 = v174 ? v144 : v171;
      const v178 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v179 = v178 ? v153 : v175;
      const v182 = v72;
      const v183 = v86;
      const v184 = v179;
      const v185 = stdlib.checkedBigNumberify('./index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      const v646 = v91;
      const v647 = v92;
      
      if ((() => {
        const v195 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v195; })()) {
        const v196 = stdlib.mod(v185, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v197 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v197) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
          sim_r.isHalt = false;
           }
        else {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
          sim_r.isHalt = false;
           } }
      else {
        const v586 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v591 = v586 ? v60 : v71;
        sim_r.txns.push({
          amt: v80,
          to: v591
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
      const v606 = txn4.value;
      const v611 = txn4.time;
      const v605 = txn4.from;
      const v607 = stdlib.eq(v606, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v607, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v608 = stdlib.addressEq(v71, v605);
      stdlib.assert(v608, {
        at: 'reach standard library:68:7:dot',
        fs: ['at ./index.rsh:97:59:application call to "closeTo" (defined at: reach standard library:67:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v610 = stdlib.add(v77, v606);
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
      const [v85, v86] = txn3.data;
      const v87 = txn3.value;
      const v92 = txn3.time;
      const v84 = txn3.from;
      const v88 = stdlib.eq(v87, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
      stdlib.assert(v88, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'pay amount correct',
        who: 'Deployer'
         });
      const v89 = stdlib.addressEq(v60, v84);
      stdlib.assert(v89, {
        at: './index.rsh:96:27:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
         });
      const v91 = stdlib.add(v77, v87);
      const v94 = stdlib.digest(ctc2, [v85, v86]);
      const v95 = stdlib.eq(v63, v94);
      stdlib.assert(v95, {
        at: 'reach standard library:65:17:application',
        fs: ['at ./index.rsh:98:40:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)'],
        msg: null,
        who: 'Deployer'
         });
      const v112 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
      const v113 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
      const v115 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v113);
      const v116 = stdlib.add(v112, v115);
      const v117 = stdlib.mod(v116, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v121 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
      const v122 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
      const v124 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v122);
      const v125 = stdlib.add(v121, v124);
      const v126 = stdlib.mod(v125, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v130 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
      const v131 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
      const v133 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v131);
      const v134 = stdlib.add(v130, v133);
      const v135 = stdlib.mod(v134, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v139 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
      const v140 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
      const v142 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v140);
      const v143 = stdlib.add(v139, v142);
      const v144 = stdlib.mod(v143, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v148 = v86[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
      const v149 = v72[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
      const v151 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v149);
      const v152 = stdlib.add(v148, v151);
      const v153 = stdlib.mod(v152, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
      const v166 = stdlib.eq(v117, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v167 = v166 ? v126 : v117;
      const v170 = stdlib.eq(v167, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v171 = v170 ? v135 : v167;
      const v174 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v175 = v174 ? v144 : v171;
      const v178 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      const v179 = v178 ? v153 : v175;
      let v182 = v72;
      let v183 = v86;
      let v184 = v179;
      let v185 = stdlib.checkedBigNumberify('./index.rsh:100:104:decimal', stdlib.UInt_max, 0);
      let v646 = v91;
      let v647 = v92;
      
      while ((() => {
        const v195 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v195; })()) {
        const v196 = stdlib.mod(v185, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
        const v197 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
        if (v197) {
          const txn4 = await (ctc.recv('Deployer', 8, 1, [ctc3], false, v62));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.sendrecv('Deployer', 9, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0], [v60, v62, v71, v80, v185, v646, v647], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
              const [] = txn5.data;
              const v287 = txn5.value;
              const v292 = txn5.time;
              const v286 = txn5.from;
              
              const v288 = stdlib.eq(v287, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v288, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v289 = stdlib.addressEq(v60, v286);
              stdlib.assert(v289, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v291 = stdlib.add(v646, v287);
              sim_r.txns.push({
                amt: v291,
                to: v60
                 });
              sim_r.nextSt = stdlib.digest(ctc6, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
              sim_r.isHalt = true;
              
              return sim_r;
               })));
            const [] = txn5.data;
            const v287 = txn5.value;
            const v292 = txn5.time;
            const v286 = txn5.from;
            const v288 = stdlib.eq(v287, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v288, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v289 = stdlib.addressEq(v60, v286);
            stdlib.assert(v289, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v291 = stdlib.add(v646, v287);
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
            const [v207] = txn4.data;
            const v208 = txn4.value;
            const v213 = txn4.time;
            const v206 = txn4.from;
            const v209 = stdlib.eq(v208, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v209, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v210 = stdlib.addressEq(v71, v206);
            stdlib.assert(v210, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v212 = stdlib.add(v646, v208);
            const v216 = stdlib.protect(ctc1, await interact.getHands(), {
              at: './index.rsh:117:83:application',
              fs: ['at ./index.rsh:116:44:application call to [unknown function] (defined at: ./index.rsh:116:48:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'getHands',
              who: 'Deployer'
               });
            const txn5 = await (ctc.sendrecv('Deployer', 10, 1, stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1], [v60, v62, v71, v80, v185, v207, v212, v213, v216], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc1], true, true, v62, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 8), v60, v62, v71, v80, v185, v207, v212, v213]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:118:40:dot', stdlib.UInt_max, 8), v60, v62, v71, v80, v185, v207, v212]);
              const [v218] = txn5.data;
              const v219 = txn5.value;
              const v224 = txn5.time;
              const v217 = txn5.from;
              
              const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v220, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v221 = stdlib.addressEq(v60, v217);
              stdlib.assert(v221, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v223 = stdlib.add(v212, v219);
              sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v60, v62, v71, v80, v185, v207, v218, v223, v224]);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v60, v62, v71, v80, v185, v207, v218, v223]);
              sim_r.isHalt = false;
              
              return sim_r;
               })));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.recv('Deployer', 11, 0, [], false, false));
              const [] = txn6.data;
              const v265 = txn6.value;
              const v270 = txn6.time;
              const v264 = txn6.from;
              const v266 = stdlib.eq(v265, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v266, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v267 = stdlib.addressEq(v71, v264);
              stdlib.assert(v267, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v269 = stdlib.add(v212, v265);
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
              const [v218] = txn5.data;
              const v219 = txn5.value;
              const v224 = txn5.time;
              const v217 = txn5.from;
              const v220 = stdlib.eq(v219, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v220, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v221 = stdlib.addressEq(v60, v217);
              stdlib.assert(v221, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v223 = stdlib.add(v212, v219);
              const txn6 = await (ctc.recv('Deployer', 12, 2, [ctc0, ctc1], false, v62));
              if (txn6.didTimeout) {
                const txn7 = await (ctc.sendrecv('Deployer', 13, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0], [v60, v62, v71, v80, v185, v207, v218, v223, v224], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn7) => {
                  const sim_r = { txns: [] };
                  sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 10), v60, v62, v71, v80, v185, v207, v218, v223, v224]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 10), v60, v62, v71, v80, v185, v207, v218, v223]);
                  const [] = txn7.data;
                  const v243 = txn7.value;
                  const v248 = txn7.time;
                  const v242 = txn7.from;
                  
                  const v244 = stdlib.eq(v243, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                  stdlib.assert(v244, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'pay amount correct',
                    who: 'Deployer'
                     });
                  const v245 = stdlib.addressEq(v60, v242);
                  stdlib.assert(v245, {
                    at: 'reach standard library:68:7:dot',
                    fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                    msg: 'sender correct',
                    who: 'Deployer'
                     });
                  const v247 = stdlib.add(v223, v243);
                  sim_r.txns.push({
                    amt: v247,
                    to: v60
                     });
                  sim_r.nextSt = stdlib.digest(ctc6, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                  sim_r.isHalt = true;
                  
                  return sim_r;
                   })));
                const [] = txn7.data;
                const v243 = txn7.value;
                const v248 = txn7.time;
                const v242 = txn7.from;
                const v244 = stdlib.eq(v243, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v244, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v245 = stdlib.addressEq(v60, v242);
                stdlib.assert(v245, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v247 = stdlib.add(v223, v243);
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
                const [v228, v229] = txn6.data;
                const v230 = txn6.value;
                const v235 = txn6.time;
                const v227 = txn6.from;
                const v231 = stdlib.eq(v230, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v231, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v232 = stdlib.addressEq(v71, v227);
                stdlib.assert(v232, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v234 = stdlib.add(v223, v230);
                const v237 = stdlib.digest(ctc2, [v228, v229]);
                const v238 = stdlib.eq(v207, v237);
                stdlib.assert(v238, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:132:75:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                   });
                const v321 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v322 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v324 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v322);
                const v325 = stdlib.add(v321, v324);
                const v326 = stdlib.mod(v325, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v330 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v331 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v333 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v331);
                const v334 = stdlib.add(v330, v333);
                const v335 = stdlib.mod(v334, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v339 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v340 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v342 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v340);
                const v343 = stdlib.add(v339, v342);
                const v344 = stdlib.mod(v343, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v348 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v349 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v351 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v349);
                const v352 = stdlib.add(v348, v351);
                const v353 = stdlib.mod(v352, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v357 = v218[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v358 = v229[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v360 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v358);
                const v361 = stdlib.add(v357, v360);
                const v362 = stdlib.mod(v361, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v375 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v376 = v375 ? v335 : v326;
                const v379 = stdlib.eq(v376, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v380 = v379 ? v344 : v376;
                const v383 = stdlib.eq(v380, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v384 = v383 ? v353 : v380;
                const v387 = stdlib.eq(v384, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v388 = v387 ? v362 : v384;
                const v391 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:133:116:decimal', stdlib.UInt_max, 1));
                const cv182 = v229;
                const cv183 = v218;
                const cv184 = v388;
                const cv185 = v391;
                const cv646 = v234;
                const cv647 = v235;
                
                v182 = cv182;
                v183 = cv183;
                v184 = cv184;
                v185 = cv185;
                v646 = cv646;
                v647 = cv647;
                
                continue; }
               }
             }
           }
        else {
          const v395 = stdlib.protect(ctc1, await interact.getHands(), {
            at: './index.rsh:107:72:application',
            fs: ['at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'getHands',
            who: 'Deployer'
             });
          const v397 = stdlib.protect(ctc0, await interact.random(), {
            at: 'reach standard library:60:31:application',
            fs: ['at ./index.rsh:108:84:application call to "makeCommitment" (defined at: reach standard library:59:8:function exp)', 'at ./index.rsh:106:43:application call to [unknown function] (defined at: ./index.rsh:106:47:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
            msg: 'random',
            who: 'Deployer'
             });
          const v398 = stdlib.digest(ctc2, [v397, v395]);
          const txn4 = await (ctc.sendrecv('Deployer', 14, 1, stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc3], [v60, v62, v71, v80, v185, v646, v647, v398], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc3], true, true, v62, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:110:39:dot', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
            const [v401] = txn4.data;
            const v402 = txn4.value;
            const v407 = txn4.time;
            const v400 = txn4.from;
            
            const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v403, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v404 = stdlib.addressEq(v60, v400);
            stdlib.assert(v404, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v406 = stdlib.add(v646, v402);
            sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v60, v62, v71, v80, v185, v401, v406, v407]);
            sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v60, v62, v71, v80, v185, v401, v406]);
            sim_r.isHalt = false;
            
            return sim_r;
             })));
          if (txn4.didTimeout) {
            const txn5 = await (ctc.recv('Deployer', 15, 0, [], false, false));
            const [] = txn5.data;
            const v481 = txn5.value;
            const v486 = txn5.time;
            const v480 = txn5.from;
            const v482 = stdlib.eq(v481, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v482, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v483 = stdlib.addressEq(v71, v480);
            stdlib.assert(v483, {
              at: 'reach standard library:68:7:dot',
              fs: ['at ./index.rsh:111:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v485 = stdlib.add(v646, v481);
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
            const [v401] = txn4.data;
            const v402 = txn4.value;
            const v407 = txn4.time;
            const v400 = txn4.from;
            const v403 = stdlib.eq(v402, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
            stdlib.assert(v403, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'pay amount correct',
              who: 'Deployer'
               });
            const v404 = stdlib.addressEq(v60, v400);
            stdlib.assert(v404, {
              at: './index.rsh:110:39:dot',
              fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
               });
            const v406 = stdlib.add(v646, v402);
            const txn5 = await (ctc.recv('Deployer', 16, 1, [ctc1], false, v62));
            if (txn5.didTimeout) {
              const txn6 = await (ctc.sendrecv('Deployer', 17, 0, stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 7), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v60, v62, v71, v80, v185, v401, v406, v407], stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), [], true, true, false, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 14), v60, v62, v71, v80, v185, v401, v406, v407]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:68:7:dot', stdlib.UInt_max, 14), v60, v62, v71, v80, v185, v401, v406]);
                const [] = txn6.data;
                const v459 = txn6.value;
                const v464 = txn6.time;
                const v458 = txn6.from;
                
                const v460 = stdlib.eq(v459, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v460, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v461 = stdlib.addressEq(v60, v458);
                stdlib.assert(v461, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v463 = stdlib.add(v406, v459);
                sim_r.txns.push({
                  amt: v463,
                  to: v60
                   });
                sim_r.nextSt = stdlib.digest(ctc6, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc6, []);
                sim_r.isHalt = true;
                
                return sim_r;
                 })));
              const [] = txn6.data;
              const v459 = txn6.value;
              const v464 = txn6.time;
              const v458 = txn6.from;
              const v460 = stdlib.eq(v459, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v460, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v461 = stdlib.addressEq(v60, v458);
              stdlib.assert(v461, {
                at: 'reach standard library:68:7:dot',
                fs: ['at ./index.rsh:119:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v463 = stdlib.add(v406, v459);
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
              const [v412] = txn5.data;
              const v413 = txn5.value;
              const v418 = txn5.time;
              const v411 = txn5.from;
              const v414 = stdlib.eq(v413, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
              stdlib.assert(v414, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'pay amount correct',
                who: 'Deployer'
                 });
              const v415 = stdlib.addressEq(v71, v411);
              stdlib.assert(v415, {
                at: './index.rsh:118:40:dot',
                fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                msg: 'sender correct',
                who: 'Deployer'
                 });
              const v417 = stdlib.add(v406, v413);
              const txn6 = await (ctc.sendrecv('Deployer', 18, 2, stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 8), [ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0, ctc0, ctc1], [v60, v62, v71, v80, v185, v401, v412, v417, v418, v397, v395], stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), [ctc0, ctc1], true, true, v62, (async (txn6) => {
                const sim_r = { txns: [] };
                sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 16), v60, v62, v71, v80, v185, v401, v412, v417, v418]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:124:39:dot', stdlib.UInt_max, 16), v60, v62, v71, v80, v185, v401, v412, v417]);
                const [v422, v423] = txn6.data;
                const v424 = txn6.value;
                const v429 = txn6.time;
                const v421 = txn6.from;
                
                const v425 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v425, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v426 = stdlib.addressEq(v60, v421);
                stdlib.assert(v426, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v428 = stdlib.add(v417, v424);
                const v431 = stdlib.digest(ctc2, [v422, v423]);
                const v432 = stdlib.eq(v401, v431);
                stdlib.assert(v432, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                   });
                const v515 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v516 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v518 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v516);
                const v519 = stdlib.add(v515, v518);
                const v520 = stdlib.mod(v519, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v524 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v525 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v527 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v525);
                const v528 = stdlib.add(v524, v527);
                const v529 = stdlib.mod(v528, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v533 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v534 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v536 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v534);
                const v537 = stdlib.add(v533, v536);
                const v538 = stdlib.mod(v537, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v542 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v543 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v545 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v543);
                const v546 = stdlib.add(v542, v545);
                const v547 = stdlib.mod(v546, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v551 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v552 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v554 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v552);
                const v555 = stdlib.add(v551, v554);
                const v556 = stdlib.mod(v555, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v569 = stdlib.eq(v520, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v570 = v569 ? v529 : v520;
                const v573 = stdlib.eq(v570, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v574 = v573 ? v538 : v570;
                const v577 = stdlib.eq(v574, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v578 = v577 ? v547 : v574;
                const v581 = stdlib.eq(v578, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v582 = v581 ? v556 : v578;
                const v585 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv182 = v412;
                const cv183 = v423;
                const cv184 = v582;
                const cv185 = v585;
                const cv646 = v428;
                const cv647 = v429;
                
                (() => {
                  const v182 = cv182;
                  const v183 = cv183;
                  const v184 = cv184;
                  const v185 = cv185;
                  const v646 = cv646;
                  const v647 = cv647;
                  
                  if ((() => {
                    const v195 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                    
                    return v195; })()) {
                    const v196 = stdlib.mod(v185, stdlib.checkedBigNumberify('./index.rsh:131:39:decimal', stdlib.UInt_max, 2));
                    const v197 = stdlib.eq(v196, stdlib.checkedBigNumberify('./index.rsh:131:44:decimal', stdlib.UInt_max, 0));
                    if (v197) {
                      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
                      sim_r.isHalt = false;
                       }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646, v647]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v60, v62, v71, v80, v185, v646]);
                      sim_r.isHalt = false;
                       } }
                  else {
                    const v586 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v591 = v586 ? v60 : v71;
                    sim_r.txns.push({
                      amt: v80,
                      to: v591
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
                const v437 = txn7.value;
                const v442 = txn7.time;
                const v436 = txn7.from;
                const v438 = stdlib.eq(v437, stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v438, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v439 = stdlib.addressEq(v71, v436);
                stdlib.assert(v439, {
                  at: 'reach standard library:68:7:dot',
                  fs: ['at ./index.rsh:125:67:application call to "closeTo" (defined at: reach standard library:67:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v441 = stdlib.add(v417, v437);
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
                const [v422, v423] = txn6.data;
                const v424 = txn6.value;
                const v429 = txn6.time;
                const v421 = txn6.from;
                const v425 = stdlib.eq(v424, stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0));
                stdlib.assert(v425, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'pay amount correct',
                  who: 'Deployer'
                   });
                const v426 = stdlib.addressEq(v60, v421);
                stdlib.assert(v426, {
                  at: './index.rsh:124:39:dot',
                  fs: ['at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: 'sender correct',
                  who: 'Deployer'
                   });
                const v428 = stdlib.add(v417, v424);
                const v431 = stdlib.digest(ctc2, [v422, v423]);
                const v432 = stdlib.eq(v401, v431);
                stdlib.assert(v432, {
                  at: 'reach standard library:65:17:application',
                  fs: ['at ./index.rsh:126:48:application call to "checkCommitment" (defined at: reach standard library:64:8:function exp)', 'at ./index.rsh:136:76:application call to "doRound" (defined at: ./index.rsh:103:80:function exp)'],
                  msg: null,
                  who: 'Deployer'
                   });
                const v515 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 0)];
                const v516 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 0)];
                const v518 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v516);
                const v519 = stdlib.add(v515, v518);
                const v520 = stdlib.mod(v519, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v524 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 1)];
                const v525 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 1)];
                const v527 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v525);
                const v528 = stdlib.add(v524, v527);
                const v529 = stdlib.mod(v528, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v533 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 2)];
                const v534 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 2)];
                const v536 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v534);
                const v537 = stdlib.add(v533, v536);
                const v538 = stdlib.mod(v537, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v542 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 3)];
                const v543 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 3)];
                const v545 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v543);
                const v546 = stdlib.add(v542, v545);
                const v547 = stdlib.mod(v546, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v551 = v423[stdlib.checkedBigNumberify('./index.rsh:14:18:array ref', stdlib.UInt_max, 4)];
                const v552 = v412[stdlib.checkedBigNumberify('./index.rsh:14:29:array ref', stdlib.UInt_max, 4)];
                const v554 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v552);
                const v555 = stdlib.add(v551, v554);
                const v556 = stdlib.mod(v555, stdlib.checkedBigNumberify('./index.rsh:7:34:decimal', stdlib.UInt_max, 3));
                const v569 = stdlib.eq(v520, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v570 = v569 ? v529 : v520;
                const v573 = stdlib.eq(v570, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v574 = v573 ? v538 : v570;
                const v577 = stdlib.eq(v574, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v578 = v577 ? v547 : v574;
                const v581 = stdlib.eq(v578, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                const v582 = v581 ? v556 : v578;
                const v585 = stdlib.add(v185, stdlib.checkedBigNumberify('./index.rsh:137:116:decimal', stdlib.UInt_max, 1));
                const cv182 = v412;
                const cv183 = v423;
                const cv184 = v582;
                const cv185 = v585;
                const cv646 = v428;
                const cv647 = v429;
                
                v182 = cv182;
                v183 = cv183;
                v184 = cv184;
                v185 = cv185;
                v646 = cv646;
                v647 = cv647;
                
                continue; }
               }
             }
           } }
      const v586 = stdlib.eq(v184, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v591 = v586 ? v60 : v71;
      ;
      stdlib.protect(ctc5, await interact.seeOutcome(v184, v183, v182), {
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
                "name": "v61",
                "type": "uint256"
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
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
                "name": "v218",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v218",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v224",
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
                "name": "v228",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v229",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v218",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v224",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v401",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
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
                "name": "v412",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v412",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v418",
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
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v423",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v412",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v418",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v60",
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
                "name": "v77",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
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
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v86",
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
                "name": "v60",
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
                "name": "v77",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v207",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v61",
                "type": "uint256"
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
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
                "name": "v218",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v218",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v224",
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
                "name": "v228",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v229",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v207",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v218",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v223",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v224",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v401",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
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
                "name": "v412",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v407",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v412",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v418",
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
                "name": "v422",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v423",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v412",
                "type": "uint256[5]"
              },
              {
                "internalType": "uint256",
                "name": "v417",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v418",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v61",
                "type": "uint256"
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
                "name": "v67",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v68",
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
                "name": "v60",
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
                "name": "v77",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
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
                "name": "v85",
                "type": "uint256"
              },
              {
                "internalType": "uint256[5]",
                "name": "v86",
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
                "name": "v60",
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
                "name": "v77",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v78",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v80",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
                "name": "v207",
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
                "name": "v60",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v62",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v71",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v80",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v646",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v647",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055612af5806100826000396000f3fe6080604052600436106101025760003560e01c80637bb6c55a11610095578063b4ee70da11610064578063b4ee70da146101f4578063b537725c14610207578063d22bdb581461021a578063d6f2b29e1461022d578063df3ceab41461024057610109565b80637bb6c55a146101a8578063888b17ac146101bb5780639cb841e4146101ce578063b14757a1146101e157610109565b8063386ba45a116100d1578063386ba45a1461015c5780633c9b9af01461016f5780633ef9c7d6146101825780636a2d4f691461019557610109565b80630caf0ab41461010e57806325a98d59146101235780632aa6c51d146101365780632bf4f8731461014957610109565b3661010957005b600080fd5b61012161011c366004612330565b610253565b005b610121610131366004612330565b61042c565b610121610144366004612314565b61054c565b6101216101573660046123a0565b610665565b61012161016a366004612368565b6107ea565b61012161017d36600461234c565b610b61565b610121610190366004612314565b610c72565b6101216101a3366004612302565b610e08565b6101216101b6366004612384565b61114e565b6101216101c93660046123b1565b611267565b6101216101dc366004612368565b6113d1565b6101216101ef366004612384565b6116e2565b610121610202366004612330565b6117f5565b61012161021536600461234c565b61190c565b6101216102283660046123c3565b611a23565b61012161023b366004612314565b611b34565b61012161024e366004612330565b611cc7565b60405161026790600690839060200161287a565b6040516020818303038152906040528051906020012060001c6000541461028d57600080fd5b600080805560408051602081019091529081526102b2602083013560c0840135612a3b565b43106102bd57600080fd5b34156102c857600080fd5b336102d660208401846122e1565b6001600160a01b0316146102e957600080fd5b6102f73460a0840135612a3b565b81526040517f6645f134722f09472cf0828d081bdc1c9fd608f2695ff21eb1322f1779b11b1a9061032990849061274c565b60405180910390a161038b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b61039860208401846122e1565b6001600160a01b03168152602080840135908201526103bd60608401604085016122e1565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c90600e908390602001612906565b60408051601f198184030181529190528051602090910120600055505050565b60405161044090600690839060200161287a565b6040516020818303038152906040528051906020012060001c6000541461046657600080fd5b6000805561047c602082013560c0830135612a3b565b4310158015610489575060015b61049257600080fd5b341561049d57600080fd5b336104ab60208301836122e1565b6001600160a01b0316146104be57600080fd5b6104cb60208201826122e1565b6001600160a01b03166108fc6104e53460a0850135612a3b565b6040518115909202916000818181858888f1935050505015801561050d573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec58160405161053d9190612769565b60405180910390a16000805533ff5b6040516105609060029083906020016129ae565b6040516020818303038152906040528051906020012060001c6000541461058657600080fd5b6000805561059d6020820135610140830135612a3b565b43101580156105aa575060015b6105b357600080fd5b34156105be57600080fd5b336105cf60808301606084016122e1565b6001600160a01b0316146105e257600080fd5b6105f260808201606083016122e1565b6001600160a01b03166108fc61060d34610120850135612a3b565b6040518115909202916000818181858888f19350505050158015610635573d6000803e3d6000fd5b507f84606dd8aa7a944a019509c8d173de0673af125ea2335128823b183fd58ac9b28160405161053d9190612719565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146106a257600080fd5b60008080556040805160208101909152908152346020830135146106c557600080fd5b6106d0346000612a3b565b815260408051833581526020808501359082015283820135818301526060808501359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a16107646040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b338152602083810135818301908152604080860135818501908152606080880135818701908152875160808089019182524360a0808b01918252875160019a81019a909a528a516001600160a01b0316978a019790975296519388019390935292519186019190915251918401919091525160c08301525160e08201526101000161040c565b6040516107fe906010908390602001612984565b6040516020818303038152906040528051906020012060001c6000541461082457600080fd5b600080819055506108566040518060800160405280600081526020016000815260200160008152602001600081525090565b6108696020830135610180840135612a3b565b431061087457600080fd5b341561087f57600080fd5b3361088d60208401846122e1565b6001600160a01b0316146108a057600080fd5b6040516108bc906101a0840135906101c0850190602001612860565b60408051601f19818403018152919052805160209091012060a0830135146108e357600080fd5b60036108f460c08401356004612a72565b610903906101c0850135612a3b565b61090d9190612a89565b80825260011461091e578051610948565b600361092f60e08401356004612a72565b61093e906101e0850135612a3b565b6109489190612a89565b6020820181905260011461096057806020015161098b565b60036109726101008401356004612a72565b61098190610200850135612a3b565b61098b9190612a89565b604082018190526001146109a35780604001516109ce565b60036109b56101208401356004612a72565b6109c490610220850135612a3b565b6109ce9190612a89565b60608201526040517fdfb849c5f273733a39dfd860be80c8bc88140960e86644f0ef7ceebac92b4f6f90610a039084906127be565b60405180910390a1610a136120b9565b610a2060208401846122e1565b81516001600160a01b0390911690528051602080850135910152610a4a60608401604085016122e1565b81516001600160a01b039091166040918201528151606080860135910152805160a08181019092529060c0850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101c08501906005908390839080828437600092019190915250505060208083015101526060820151600114610adb578160600151610b0e565b6003610aed6101408501356004612a72565b6101c0850160045b6020020135610b049190612a3b565b610b0e9190612a89565b602082015160400152610b2660016080850135612a3b565b602082015160600152610b3e34610160850135612a3b565b60208201805160800191909152514360a090910152610b5c81611e83565b505050565b604051610b7590600e9083906020016128f1565b6040516020818303038152906040528051906020012060001c60005414610b9b57600080fd5b60008055610bb1602082013560e0830135612a3b565b4310158015610bbe575060015b610bc757600080fd5b3415610bd257600080fd5b33610be060208301836122e1565b6001600160a01b031614610bf357600080fd5b610c0060208201826122e1565b6001600160a01b03166108fc610c1a3460c0850135612a3b565b6040518115909202916000818181858888f19350505050158015610c42573d6000803e3d6000fd5b507f45ebc520699ff172c712e9500a8125d4de36a9450b99d8c5ba7490b0dff7fa698160405161053d91906127af565b604051610c8690600e9083906020016128f1565b6040516020818303038152906040528051906020012060001c60005414610cac57600080fd5b60008080556040805160208101909152908152610cd1602083013560e0840135612a3b565b4310610cdc57600080fd5b3415610ce757600080fd5b33610cf860608401604085016122e1565b6001600160a01b031614610d0b57600080fd5b610d193460c0840135612a3b565b81526040517f644153cb00b5902ba0237e14ba781544b02196bdedd4a4c36929d9ad9d00c5b390610d4b90849061279a565b60405180910390a1610d5b6120f5565b610d6860208401846122e1565b6001600160a01b0316815260208084013590820152610d8d60608401604085016122e1565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c906010908390602001612999565b604051610e1c9060029083906020016129ae565b6040516020818303038152906040528051906020012060001c60005414610e4257600080fd5b60008081905550610e746040518060800160405280600081526020016000815260200160008152602001600081525090565b610e876020830135610140840135612a3b565b4310610e9257600080fd5b3415610e9d57600080fd5b33610eab60208401846122e1565b6001600160a01b031614610ebe57600080fd5b604051610eda90610180840135906101a0850190602001612860565b6040516020818303038152906040528051906020012060001c826000016040013514610f0557600080fd5b6003610f1660808401356004612a72565b610f25906101a0850135612a3b565b610f2f9190612a89565b808252600114610f40578051610f6a565b6003610f5160a08401356004612a72565b610f60906101c0850135612a3b565b610f6a9190612a89565b60208201819052600114610f82578060200151610fac565b6003610f9360c08401356004612a72565b610fa2906101e0850135612a3b565b610fac9190612a89565b60408201819052600114610fc4578060400151610fee565b6003610fd560e08401356004612a72565b610fe490610200850135612a3b565b610fee9190612a89565b60608201526040517f985f563580b925dd30b120f2473fe883c4c74039f091b0f47fe9b1e0b9bab45b906110239084906126f2565b60405180910390a16110336120b9565b61104060208401846122e1565b81516001600160a01b039091169052805160208085013591015261106a60808401606085016122e1565b81516001600160a01b039091166040918201528151610160850135606090910152805160a0818101909252906080850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101a085019060059083908390808284376000920191909152505050602080830151015260608201516001146110fe578160600151611129565b60036111106101008501356004612a72565b61111f90610220860135612a3b565b6111299190612a89565b60208201805160400191909152516000606090910152610b3e34610120850135612a3b565b604051611162906010908390602001612984565b6040516020818303038152906040528051906020012060001c6000541461118857600080fd5b6000805561119f6020820135610180830135612a3b565b43101580156111ac575060015b6111b557600080fd5b34156111c057600080fd5b336111d160608301604084016122e1565b6001600160a01b0316146111e457600080fd5b6111f460608201604083016122e1565b6001600160a01b03166108fc61120f34610160850135612a3b565b6040518115909202916000818181858888f19350505050158015611237573d6000803e3d6000fd5b507f09c5ad06358a3e2f898ba0aef76151a9013aec5745ed85ef1ee0e81565c980be8160405161053d91906127de565b60405161127b906001908390602001612970565b6040516020818303038152906040528051906020012060001c600054146112a157600080fd5b600080805560408051808201825282815260208101929092526112cb9083013560a0840135612a3b565b43106112d657600080fd5b346020830135146112e657600080fd5b6112f4346080840135612a3b565b815261130560208301356002612a53565b60208201526040517ff196eb766d2d8533f0df41b064e516bf7376911659bd46c361acef78536bf4bc9061133a9084906127ed565b60405180910390a161134a612159565b61135760208401846122e1565b6001600160a01b031681526040808401356020830152606080850135828401523390830152805160a08181019092529060c0850190600590839083908082843760009201919091525050506080820152815160a08201524360c082015260208083015160e083015260405161040c916002918491016129c3565b6040516113e590600a908390602001612984565b6040516020818303038152906040528051906020012060001c6000541461140b57600080fd5b6000808190555061143d6040518060800160405280600081526020016000815260200160008152602001600081525090565b6114506020830135610180840135612a3b565b431061145b57600080fd5b341561146657600080fd5b3361147760608401604085016122e1565b6001600160a01b03161461148a57600080fd5b6040516114a6906101a0840135906101c0850190602001612860565b60408051601f19818403018152919052805160209091012060a0830135146114cd57600080fd5b60036114df6101c08401356004612a72565b6114ed9060c0850135612a3b565b6114f79190612a89565b808252600114611508578051611532565b600361151a6101e08401356004612a72565b6115289060e0850135612a3b565b6115329190612a89565b6020820181905260011461154a578060200151611575565b600361155c6102008401356004612a72565b61156b90610100850135612a3b565b6115759190612a89565b6040820181905260011461158d5780604001516115b8565b600361159f6102208401356004612a72565b6115ae90610120850135612a3b565b6115b89190612a89565b60608201526040517f258efe6f6e995791e3c206c5f7508e6472977eefb4afb67101812a20af39aa9b906115ed9084906127be565b60405180910390a16115fd6120b9565b61160a60208401846122e1565b81516001600160a01b039091169052805160208085013591015261163460608401604085016122e1565b81516001600160a01b039091166040918201528151606080860135910152805160a0818101909252906101c0850190600590839083908082843760009201919091525050506020820151526040805160a08181019092529060c085019060059083908390808284376000920191909152505050602080830151015260608201516001146116c5578160600151610b0e565b60036116d76102408501356004612a72565b60c085016004610af5565b6040516116f690600a908390602001612984565b6040516020818303038152906040528051906020012060001c6000541461171c57600080fd5b600080556117336020820135610180830135612a3b565b4310158015611740575060015b61174957600080fd5b341561175457600080fd5b3361176260208301836122e1565b6001600160a01b03161461177557600080fd5b61178260208201826122e1565b6001600160a01b03166108fc61179d34610160850135612a3b565b6040518115909202916000818181858888f193505050501580156117c5573d6000803e3d6000fd5b507fe38eaeebe01f8fea2d39bfc35b82cb3697543788a548da0d97c4a704ce6ec2b18160405161053d91906127de565b60405161180990600690839060200161287a565b6040516020818303038152906040528051906020012060001c6000541461182f57600080fd5b60008055611845602082013560c0830135612a3b565b4310158015611852575060015b61185b57600080fd5b341561186657600080fd5b3361187760608301604084016122e1565b6001600160a01b03161461188a57600080fd5b61189a60608201604083016122e1565b6001600160a01b03166108fc6118b43460a0850135612a3b565b6040518115909202916000818181858888f193505050501580156118dc573d6000803e3d6000fd5b507f6ce0b6368a969de24391cb6a77cee3c86b93b4c8da6963a920b1d95b44fbf0a28160405161053d9190612769565b6040516119209060089083906020016128f1565b6040516020818303038152906040528051906020012060001c6000541461194657600080fd5b6000805561195c602082013560e0830135612a3b565b4310158015611969575060015b61197257600080fd5b341561197d57600080fd5b3361198e60608301604084016122e1565b6001600160a01b0316146119a157600080fd5b6119b160608201604083016122e1565b6001600160a01b03166108fc6119cb3460c0850135612a3b565b6040518115909202916000818181858888f193505050501580156119f3573d6000803e3d6000fd5b507f239047e7ecda813bd5d0deda901af2cfd51f309e8f9aa8f06ae255dc092fa8a48160405161053d91906127af565b604051611a37906001908390602001612970565b6040516020818303038152906040528051906020012060001c60005414611a5d57600080fd5b60008055611a73604082013560a0830135612a3b565b4310158015611a80575060015b611a8957600080fd5b3415611a9457600080fd5b33611aa260208301836122e1565b6001600160a01b031614611ab557600080fd5b611ac260208201826122e1565b6001600160a01b03166108fc611adc346080850135612a3b565b6040518115909202916000818181858888f19350505050158015611b04573d6000803e3d6000fd5b507f17040e3ed853a8df776cd092f1357f15488d98d460f66cd5e6b0cb07d5bc8ae38160405161053d9190612830565b604051611b489060089083906020016128f1565b6040516020818303038152906040528051906020012060001c60005414611b6e57600080fd5b60008080556040805160208101909152908152611b93602083013560e0840135612a3b565b4310611b9e57600080fd5b3415611ba957600080fd5b33611bb760208401846122e1565b6001600160a01b031614611bca57600080fd5b611bd83460c0840135612a3b565b81526040517fc5bf379625a42284cf436ae38bfbe777a1b3406a9e2eea51c37126337545d40090611c0a90849061279a565b60405180910390a1611c1a6120f5565b611c2760208401846122e1565b6001600160a01b0316815260208084013590820152611c4c60608401604085016122e1565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c90600a908390602001612999565b604051611cdb90600690839060200161287a565b6040516020818303038152906040528051906020012060001c60005414611d0157600080fd5b60008080556040805160208101909152908152611d26602083013560c0840135612a3b565b4310611d3157600080fd5b3415611d3c57600080fd5b33611d4d60608401604085016122e1565b6001600160a01b031614611d6057600080fd5b611d6e3460a0840135612a3b565b81526040517fee312f330bc747f7ed8a854ea245bb93733f831d3c4296b2fd99db1023ff8f4290611da090849061274c565b60405180910390a1611e0260405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b611e0f60208401846122e1565b6001600160a01b0316815260208084013590820152611e3460608401604085016122e1565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c906008908390602001612906565b60018160200151604001511415611fe45760006002826020015160600151611eab9190612a89565b1415611f4a57611eb96121b6565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051909101516080808601919091528151015160a0808601919091529051015160c08401529051611f299160069184910161288f565b60408051601f19818403018152919052805160209091012060005550611fdf565b611f526121b6565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051909101516080808601919091528151015160a0808601919091529051015160c08401529051611fc29160069184910161288f565b60408051601f198184030181529190528051602090910120600055505b612052565b6040805160c081018252600081830181815260608084018381526080850184815260a086018581528487526020808801969096528851516001600160a01b0390811690955288518801519094169091528651909101519052908401519092015190915261205081612055565b505b50565b80516060015160021461206d57805160200151612071565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f193505050501580156120b1573d6000803e3d6000fd5b506000805533ff5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908152602081016120f0612205565b905290565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001612145612247565b815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200161219b612247565b81526020016000815260200160008152602001600081525090565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b6040518060c00160405280612218612247565b8152602001612225612247565b8152602001600081526020016000815260200160008152602001600081525090565b6040518060a001604052806005906020820280368337509192915050565b80356001600160a01b038116811461227c57600080fd5b919050565b60006101a08284031215612293578081fd5b50919050565b60006101008284031215612293578081fd5b60006101208284031215612293578081fd5b60006102608284031215612293578081fd5b60006101c08284031215612293578081fd5b6000602082840312156122f2578081fd5b6122fb82612265565b9392505050565b60006102408284031215612293578081fd5b60006101a08284031215612326578081fd5b6122fb8383612281565b60006101008284031215612342578081fd5b6122fb8383612299565b6000610120828403121561235e578081fd5b6122fb83836122ab565b6000610260828403121561237a578081fd5b6122fb83836122bd565b60006101c08284031215612396578081fd5b6122fb83836122cf565b600060808284031215612293578081fd5b60006101808284031215612293578081fd5b600060e08284031215612293578081fd5b8060005b60058110156123f75781518452602093840193909101906001016123d8565b50505050565b8035825260a0602082016020840137600060c08301525050565b6001600160a01b038061242983612265565b168352602082013560208401528061244360408401612265565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b038061248883612265565b16835260208201356020840152806124a260408401612265565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b036124f082612265565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b038061253b83612265565b168352602082013560208401528061255560408401612265565b16604084015250606081013560608301526080810135608083015260a081013560a083015260a060c0820160c0840137610160818101359083015261018090810135910152565b80516001600160a01b0316825260208082015190830152604080820151906125ce908401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c08101516125ff60c08401826123d4565b5060e0810151610160830152610100015161018090910152565b6126238282612476565b61010060a0818301828501375060006101a08301525050565b6126468282612476565b6101008082013580151580821461265c57600080fd5b80838601525050505050565b6126728282612529565b6101a08082013580151580821461265c57600080fd5b6001600160a01b038061269a83612265565b1683526020820135602084015260408201356040840152806126be60608401612265565b1660608401525060a06080820160808401376101208181013590830152610140808201359083015261016090810135910152565b61024081016127018284612688565b6101806127128184018286016123fd565b5092915050565b6101a081016127288284612688565b6101808084013580151580821461273e57600080fd5b808386015250505092915050565b610100810161275b8284612417565b60e092830135919092015290565b61010081016127788284612417565b60e083013580151580821461278c57600080fd5b8060e0850152505092915050565b6101a081016127a98284612619565b92915050565b61012081016127a9828461263c565b61026081016127cd8284612529565b6101a06127128184018286016123fd565b6101c081016127a98284612668565b61018081016127fc82846124df565b60a060c0840160c08401376000610160838101918252906001600160a01b03612826868401612265565b1690525092915050565b60e0810161283e82846124df565b60c083013580151580821461285257600080fd5b8060c0850152505092915050565b82815260c0810160a0836020840137600081529392505050565b82815261010081016122fb6020830184612417565b60006101008201905083825260018060a01b03808451166020840152602084015160408401528060408501511660608401525060608301516080830152608083015160a083015260a083015160c083015260c083015160e08301529392505050565b82815261012081016122fb6020830184612476565b82815261012081016122fb602083018460018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b82815260e081016122fb60208301846124df565b8281526101c081016122fb6020830184612529565b8281526101c081016122fb602083018461259c565b8281526101a081016122fb6020830184612688565b60006101a08201905083825260018060a01b038084511660208401526020840151604084015260408401516060840152806060850151166080840152506080830151612a1260a08401826123d4565b5060a083015161014083015260c083015161016083015260e08301516101808301529392505050565b60008219821115612a4e57612a4e612aa9565b500190565b6000816000190483118215151615612a6d57612a6d612aa9565b500290565b600082821015612a8457612a84612aa9565b500390565b600082612aa457634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220f6c94009ac238a8853e5dabf50d862073307a6a8480741393ef4752ffafdacc264736f6c63430008020033`,
  deployMode: `DM_constructor`
   };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
   };

