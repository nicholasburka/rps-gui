// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    batchSize: stdlib.checkedBigNumberify('./reach/index.rsh:9:19:decimal', stdlib.UInt_max, 5)
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
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
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc1, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc3, ctc0, ctc0, ctc2, ctc0]);
  
  
  const v53 = await ctc.creationTime();
  
  const v52 = stdlib.protect(ctc1, interact.firstHands, null);
  
  
  
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc2], false, false));
  const [v62, v63, v64] = txn1.data;
  const v67 = txn1.time;
  const v61 = txn1.from;
  const v66 = stdlib.add(stdlib.checkedBigNumberify('./reach/index.rsh:compileDApp', stdlib.UInt_max, 0), v62);
  ;
  const v69 = ctc.selfAddress('Attacher', false, stdlib.checkedBigNumberify('./reach/index.rsh:78:31:application', stdlib.UInt_max, 68));
  
  
  const txn2 = await (ctc.sendrecv(2, 2, stdlib.checkedBigNumberify('./reach/index.rsh:84:27:dot', stdlib.UInt_max, 5), [ctc3, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc3], [v61, v62, v63, v64, v66, v67, v52, v69], [v62, []], [ctc1, ctc3], true, true, v63, (async (txn2) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./reach/index.rsh:84:27:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66, v67]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./reach/index.rsh:84:27:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66]);
    const [v72, v73] = txn2.data;
    const v76 = txn2.time;
    const v71 = txn2.from;
    
    const v75 = stdlib.add(v66, v62);
    sim_r.txns.push({
      amt: v62,
      kind: 'to',
      tok: undefined
      });
    const v78 = stdlib.mul(stdlib.checkedBigNumberify('./reach/index.rsh:90:46:decimal', stdlib.UInt_max, 2), v62);
    sim_r.nextSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./reach/index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v76, v78]);
    sim_r.nextSt_noTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./reach/index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v78]);
    sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:88:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.recv(3, 0, [], false, false));
    const [] = txn3.data;
    const v623 = txn3.time;
    const v619 = txn3.from;
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
    const v75 = stdlib.add(v66, v62);
    ;
    const v78 = stdlib.mul(stdlib.checkedBigNumberify('./reach/index.rsh:90:46:decimal', stdlib.UInt_max, 2), v62);
    
    
    const txn3 = await (ctc.recv(4, 2, [ctc0, ctc1], false, v63));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), [ctc3, ctc0, ctc2, ctc3, ctc1, ctc0, ctc0, ctc0], [v61, v63, v64, v71, v72, v75, v76, v78], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn4) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v76, v78]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v78]);
        const [] = txn4.data;
        const v602 = txn4.time;
        const v598 = txn4.from;
        
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
        sim_r.nextSt = stdlib.digest(ctc9, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
        sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = true;
        
        return sim_r;
        })));
      const [] = txn4.data;
      const v602 = txn4.time;
      const v598 = txn4.from;
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
            sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
            const [v205] = txn4.data;
            const v209 = txn4.time;
            const v204 = txn4.from;
            
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
            sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207, v209]);
            sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207]);
            sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn4.didTimeout) {
            
            const txn5 = await (ctc.recv(9, 0, [], false, false));
            const [] = txn5.data;
            const v284 = txn5.time;
            const v280 = txn5.from;
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
                sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207, v209]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207]);
                const [] = txn6.data;
                const v262 = txn6.time;
                const v258 = txn6.from;
                
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
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = true;
                
                return sim_r;
                })));
              const [] = txn6.data;
              const v262 = txn6.time;
              const v258 = txn6.from;
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
                sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217, v219]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217]);
                const [v224, v225] = txn6.data;
                const v229 = txn6.time;
                const v223 = txn6.from;
                
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
                      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
                    sim_r.nextSt = stdlib.digest(ctc9, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                    sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:145:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                })));
              if (txn6.didTimeout) {
                
                const txn7 = await (ctc.recv(13, 0, [], false, false));
                const [] = txn7.data;
                const v240 = txn7.time;
                const v236 = txn7.from;
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
              sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
              const [] = txn5.data;
              const v475 = txn5.time;
              const v471 = txn5.from;
              
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
              sim_r.nextSt = stdlib.digest(ctc9, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
              sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn5.data;
            const v475 = txn5.time;
            const v471 = txn5.from;
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
              sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398, v400]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398]);
              const [v406] = txn5.data;
              const v410 = txn5.time;
              const v405 = txn5.from;
              
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
              sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408, v410]);
              sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408]);
              sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn5.didTimeout) {
              
              const txn6 = await (ctc.recv(17, 0, [], false, false));
              const [] = txn6.data;
              const v453 = txn6.time;
              const v449 = txn6.from;
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
                  sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408, v410]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408]);
                  const [] = txn7.data;
                  const v431 = txn7.time;
                  const v427 = txn7.from;
                  
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
                  sim_r.nextSt = stdlib.digest(ctc9, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                  sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  })));
                const [] = txn7.data;
                const v431 = txn7.time;
                const v427 = txn7.from;
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
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc1, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc4, ctc0, ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0]);
  const ctc15 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0]);
  const ctc16 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0, ctc0]);
  const ctc17 = stdlib.T_Tuple([ctc0, ctc4, ctc0, ctc0, ctc3, ctc0]);
  const ctc18 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
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
    sim_r.prevSt = stdlib.digest(ctc18, [stdlib.checkedBigNumberify('./reach/index.rsh:72:27:dot', stdlib.UInt_max, 0), v53]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:72:27:dot', stdlib.UInt_max, 0)]);
    const [v62, v63, v64] = txn1.data;
    const v67 = txn1.time;
    const v61 = txn1.from;
    
    const v66 = stdlib.add(stdlib.checkedBigNumberify('./reach/index.rsh:compileDApp', stdlib.UInt_max, 0), v62);
    sim_r.txns.push({
      amt: v62,
      kind: 'to',
      tok: undefined
      });
    sim_r.nextSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('./reach/index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v61, v62, v63, v64, v66, v67]);
    sim_r.nextSt_noTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('./reach/index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 1), v61, v62, v63, v64, v66]);
    sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:74:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
    sim_r.isHalt = false;
    
    return sim_r;
    })));
  const [v62, v63, v64] = txn1.data;
  const v67 = txn1.time;
  const v61 = txn1.from;
  const v66 = stdlib.add(stdlib.checkedBigNumberify('./reach/index.rsh:compileDApp', stdlib.UInt_max, 0), v62);
  ;
  
  
  const txn2 = await (ctc.recv(2, 2, [ctc1, ctc4], false, v63));
  if (txn2.didTimeout) {
    
    const txn3 = await (ctc.sendrecv(3, 0, stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 5), [ctc4, ctc0, ctc0, ctc3, ctc0, ctc0], [v61, v62, v63, v64, v66, v67], [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []], [], true, true, false, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc16, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66, v67]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc17, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 1), v61, v62, v63, v64, v66]);
      const [] = txn3.data;
      const v623 = txn3.time;
      const v619 = txn3.from;
      
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
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      
      return sim_r;
      })));
    const [] = txn3.data;
    const v623 = txn3.time;
    const v619 = txn3.from;
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
    const v75 = stdlib.add(v66, v62);
    ;
    const v78 = stdlib.mul(stdlib.checkedBigNumberify('./reach/index.rsh:90:46:decimal', stdlib.UInt_max, 2), v62);
    stdlib.protect(ctc5, await interact.informOpponent(v73), {
      at: './reach/index.rsh:93:56:application',
      fs: ['at ./reach/index.rsh:92:31:application call to [unknown function] (defined at: ./reach/index.rsh:92:35:function exp)'],
      msg: 'informOpponent',
      who: 'Deployer'
      });
    
    
    const txn3 = await (ctc.sendrecv(4, 2, stdlib.checkedBigNumberify('./reach/index.rsh:96:27:dot', stdlib.UInt_max, 6), [ctc4, ctc0, ctc3, ctc4, ctc1, ctc0, ctc0, ctc0, ctc0, ctc1], [v61, v63, v64, v71, v72, v75, v76, v78, v58, v50], [stdlib.checkedBigNumberify('./reach/index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc1], true, true, v63, (async (txn3) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./reach/index.rsh:96:27:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v76, v78]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc15, [stdlib.checkedBigNumberify('./reach/index.rsh:96:27:dot', stdlib.UInt_max, 2), v61, v63, v64, v71, v72, v75, v78]);
      const [v84, v85] = txn3.data;
      const v89 = txn3.time;
      const v83 = txn3.from;
      
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
          sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
          sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
          sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          }
        else {
          sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
          sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
          sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
        sim_r.nextSt = stdlib.digest(ctc7, []);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
        sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:145:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
        sim_r.isHalt = true;
        }
      return sim_r;
      })));
    if (txn3.didTimeout) {
      
      const txn4 = await (ctc.recv(5, 0, [], false, false));
      const [] = txn4.data;
      const v602 = txn4.time;
      const v598 = txn4.from;
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
              sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
              const [] = txn5.data;
              const v284 = txn5.time;
              const v280 = txn5.from;
              
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
              sim_r.nextSt = stdlib.digest(ctc7, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
              sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = true;
              
              return sim_r;
              })));
            const [] = txn5.data;
            const v284 = txn5.time;
            const v280 = txn5.from;
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
              sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207, v209]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:118:40:dot', stdlib.UInt_max, 8), v61, v63, v71, v78, v182, v205, v207]);
              const [v215] = txn5.data;
              const v219 = txn5.time;
              const v214 = txn5.from;
              
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
              sim_r.nextSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217, v219]);
              sim_r.nextSt_noTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217]);
              sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:120:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
              sim_r.isHalt = false;
              
              return sim_r;
              })));
            if (txn5.didTimeout) {
              
              const txn6 = await (ctc.recv(11, 0, [], false, false));
              const [] = txn6.data;
              const v262 = txn6.time;
              const v258 = txn6.from;
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
                  sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217, v219]);
                  sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 10), v61, v63, v71, v78, v182, v205, v215, v217]);
                  const [] = txn7.data;
                  const v240 = txn7.time;
                  const v236 = txn7.from;
                  
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
                  sim_r.nextSt = stdlib.digest(ctc7, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                  sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  })));
                const [] = txn7.data;
                const v240 = txn7.time;
                const v236 = txn7.from;
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
            sim_r.prevSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:110:39:dot', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
            const [v396] = txn4.data;
            const v400 = txn4.time;
            const v395 = txn4.from;
            
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
            sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398, v400]);
            sim_r.nextSt_noTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398]);
            sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:112:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            
            return sim_r;
            })));
          if (txn4.didTimeout) {
            
            const txn5 = await (ctc.recv(15, 0, [], false, false));
            const [] = txn5.data;
            const v475 = txn5.time;
            const v471 = txn5.from;
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
                sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398, v400]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('reach standard library:209:7:dot', stdlib.UInt_max, 14), v61, v63, v71, v78, v182, v396, v398]);
                const [] = txn6.data;
                const v453 = txn6.time;
                const v449 = txn6.from;
                
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
                sim_r.nextSt = stdlib.digest(ctc7, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                sim_r.view = [ctc6, [stdlib.checkedBigNumberify('reach standard library:211:11:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = true;
                
                return sim_r;
                })));
              const [] = txn6.data;
              const v453 = txn6.time;
              const v449 = txn6.from;
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
                sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408, v410]);
                sim_r.prevSt_noPrevTime = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./reach/index.rsh:124:39:dot', stdlib.UInt_max, 16), v61, v63, v71, v78, v182, v396, v406, v408]);
                const [v415, v416] = txn6.data;
                const v420 = txn6.time;
                const v414 = txn6.from;
                
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
                      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                      sim_r.isHalt = false;
                      }
                    else {
                      sim_r.nextSt = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v639, v641]);
                      sim_r.nextSt_noTime = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 6), v61, v63, v71, v78, v182, v641]);
                      sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:104:41:after expr stmt semicolon', stdlib.UInt_max, 0)]];
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
                    sim_r.nextSt = stdlib.digest(ctc7, []);
                    sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
                    sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./reach/index.rsh:145:33:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                    sim_r.isHalt = true;
                    }})();
                return sim_r;
                })));
              if (txn6.didTimeout) {
                
                const txn7 = await (ctc.recv(19, 0, [], false, false));
                const [] = txn7.data;
                const v431 = txn7.time;
                const v427 = txn7.from;
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
gtxna 0 ApplicationArgs 5
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
byte base64(dg==)
gtxna 0 ApplicationArgs 2
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
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
byte base64(dg==)
byte base64()
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
  stepargs: [null, {
    count: 9,
    size: 137
    }, {
    count: 13,
    size: 249
    }, {
    count: 11,
    size: 177
    }, {
    count: 15,
    size: 297
    }, {
    count: 13,
    size: 249
    }, null, null, {
    count: 13,
    size: 217
    }, {
    count: 12,
    size: 185
    }, {
    count: 14,
    size: 257
    }, {
    count: 13,
    size: 217
    }, {
    count: 16,
    size: 305
    }, {
    count: 14,
    size: 257
    }, {
    count: 13,
    size: 217
    }, {
    count: 12,
    size: 185
    }, {
    count: 14,
    size: 257
    }, {
    count: 13,
    size: 217
    }, {
    count: 16,
    size: 305
    }, {
    count: 14,
    size: 257
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
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
int 9
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
int 0
load 255
+
store 252
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
gtxna 0 ApplicationArgs 4
btoi
-
load 255
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 1
int 1
itob
gtxn 0 Sender
concat
load 255
itob
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
store 249
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
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
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
load 251
load 254
+
store 248
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
gtxna 0 ApplicationArgs 4
btoi
-
load 254
==
assert
int 2
load 254
*
store 247
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 253
itob
concat
load 252
concat
gtxn 0 Sender
concat
load 250
concat
load 248
itob
concat
load 247
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 253
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
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
// compute state in HM_Check 1
int 1
itob
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:86:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 251
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 253
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
store 247
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
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
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
load 250
int 0
+
store 246
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:96:27:dot"
// "[]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./reach/index.rsh:98:40:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp)]"
load 253
load 248
itob
load 247
concat
keccak256
==
assert
load 247
substring 0 8
btoi
int 4
load 251
substring 0 8
btoi
-
+
int 3
%
dup
store 245
load 247
substring 8 16
btoi
int 4
load 251
substring 8 16
btoi
-
+
int 3
%
load 245
int 1
==
select
dup
store 244
load 247
substring 16 24
btoi
int 4
load 251
substring 16 24
btoi
-
+
int 3
%
load 244
int 1
==
select
dup
store 243
load 247
substring 24 32
btoi
int 4
load 251
substring 24 32
btoi
-
+
int 3
%
load 243
int 1
==
select
dup
store 242
load 247
substring 32 40
btoi
int 4
load 251
substring 32 40
btoi
-
+
int 3
%
load 242
int 1
==
select
dup
store 241
int 1
==
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 252
concat
load 249
itob
concat
int 0
itob
concat
load 246
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
load 252
load 255
load 241
int 2
==
select
==
assert
gtxn 4 Amount
load 249
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
store 252
gtxna 0 ApplicationArgs 10
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
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
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
concat
load 251
concat
load 250
itob
concat
load 249
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:97:59:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 252
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 252
==
assert
gtxn 4 Amount
load 250
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
store 249
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
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
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
load 250
int 0
+
store 248
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 253
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 249
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
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
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 250
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
store 248
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
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
itob
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
load 249
int 0
+
store 247
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 248
concat
load 247
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
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
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 249
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
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
int 16
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
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
concat
load 248
itob
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
load 248
int 0
+
store 245
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 253
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./reach/index.rsh:126:48:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 250
load 247
itob
load 246
concat
keccak256
==
assert
load 249
substring 0 8
btoi
int 4
load 246
substring 0 8
btoi
-
+
int 3
%
dup
store 244
load 249
substring 8 16
btoi
int 4
load 246
substring 8 16
btoi
-
+
int 3
%
load 244
int 1
==
select
dup
store 243
load 249
substring 16 24
btoi
int 4
load 246
substring 16 24
btoi
-
+
int 3
%
load 243
int 1
==
select
dup
store 242
load 249
substring 24 32
btoi
int 4
load 246
substring 24 32
btoi
-
+
int 3
%
load 242
int 1
==
select
dup
store 241
load 249
substring 32 40
btoi
int 4
load 246
substring 32 40
btoi
-
+
int 3
%
load 241
int 1
==
select
store 240
load 251
int 1
+
store 239
load 240
int 1
==
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 239
itob
concat
load 245
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
load 253
load 255
load 240
int 2
==
select
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
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
// compute state in HM_Check 10
int 10
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
concat
load 248
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:132:75:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 248
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
gtxna 0 ApplicationArgs 12
store 249
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
// compute state in HM_Check 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
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
load 250
int 0
+
store 248
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:110:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 255
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 14
int 14
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 249
concat
load 248
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
btoi
store 250
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
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:111:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 250
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
gtxna 0 ApplicationArgs 13
store 248
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
// compute state in HM_Check 14
int 14
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
itob
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
load 249
int 0
+
store 247
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:118:40:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 253
gtxn 0 Sender
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 16
int 16
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 248
concat
load 247
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
btoi
store 249
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
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:119:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 255
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 255
==
assert
gtxn 4 Amount
load 249
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
gtxna 0 ApplicationArgs 14
btoi
store 247
gtxna 0 ApplicationArgs 15
store 246
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
int 16
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
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
concat
load 248
itob
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
load 248
int 0
+
store 245
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "./reach/index.rsh:124:39:dot"
// "[at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 255
gtxn 0 Sender
==
assert
// Nothing
// "reach standard library:65:17:application"
// "[at ./reach/index.rsh:126:48:application call to \"checkCommitment\" (defined at: reach standard library:64:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 250
load 247
itob
load 246
concat
keccak256
==
assert
load 246
substring 0 8
btoi
int 4
load 249
substring 0 8
btoi
-
+
int 3
%
dup
store 244
load 246
substring 8 16
btoi
int 4
load 249
substring 8 16
btoi
-
+
int 3
%
load 244
int 1
==
select
dup
store 243
load 246
substring 16 24
btoi
int 4
load 249
substring 16 24
btoi
-
+
int 3
%
load 243
int 1
==
select
dup
store 242
load 246
substring 24 32
btoi
int 4
load 249
substring 24 32
btoi
-
+
int 3
%
load 242
int 1
==
select
dup
store 241
load 246
substring 32 40
btoi
int 4
load 249
substring 32 40
btoi
-
+
int 3
%
load 241
int 1
==
select
store 240
load 251
int 1
+
store 239
load 240
int 1
==
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 6
int 6
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 239
itob
concat
load 245
itob
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
load 253
load 255
load 240
int 2
==
select
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
gtxna 0 ApplicationArgs 6
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
store 253
gtxna 0 ApplicationArgs 9
btoi
store 252
gtxna 0 ApplicationArgs 10
btoi
store 251
gtxna 0 ApplicationArgs 11
store 250
gtxna 0 ApplicationArgs 12
store 249
gtxna 0 ApplicationArgs 13
btoi
store 248
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
// compute state in HM_Check 16
int 16
itob
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
concat
load 248
itob
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
gtxna 0 ApplicationArgs 4
btoi
==
assert
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./reach/index.rsh:125:67:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp),at ./reach/index.rsh:136:76:application call to \"doRound\" (defined at: ./reach/index.rsh:103:80:function exp)]"
load 253
gtxn 0 Sender
==
assert
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 248
int 0
+
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
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
gtxna 0 ApplicationArgs 3
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
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
gtxn 5 Fee
+
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
load 254
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556129e0806100826000396000f3fe6080604052600436106101025760003560e01c80637bb6c55a11610095578063b4ee70da11610064578063b4ee70da146101f4578063b537725c14610207578063d22bdb581461021a578063d6f2b29e1461022d578063df3ceab41461024057610109565b80637bb6c55a146101a8578063888b17ac146101bb5780639cb841e4146101ce578063b14757a1146101e157610109565b8063386ba45a116100d1578063386ba45a1461015c5780633c9b9af01461016f5780633ef9c7d6146101825780636a2d4f691461019557610109565b80630caf0ab41461010e57806325a98d59146101235780632aa6c51d146101365780632bf4f8731461014957610109565b3661010957005b600080fd5b61012161011c36600461227d565b610253565b005b61012161013136600461227d565b61042c565b610121610144366004612261565b610543565b6101216101573660046122ed565b610653565b61012161016a3660046122b5565b6107dc565b61012161017d366004612299565b610b54565b610121610190366004612261565b610c5c565b6101216101a336600461224f565b610df2565b6101216101b63660046122d1565b611144565b6101216101c93660046122fe565b611254565b6101216101dc3660046122b5565b6113c2565b6101216101ef3660046122d1565b6116d3565b61012161020236600461227d565b6117dd565b610121610215366004612299565b6118eb565b610121610228366004612310565b6119f9565b61012161023b366004612261565b611b01565b61012161024e36600461227d565b611c94565b6040516102679060069083906020016127c7565b6040516020818303038152906040528051906020012060001c6000541461028d57600080fd5b600080805560408051602081019091529081526102b2602083013560a0840135612926565b43106102bd57600080fd5b6102cc600060c0840135612926565b815234156102d957600080fd5b336102e7602084018461222e565b6001600160a01b0316146102fa57600080fd5b7f6645f134722f09472cf0828d081bdc1c9fd608f2695ff21eb1322f1779b11b1a826040516103299190612699565b60405180910390a161038b60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b610398602084018461222e565b6001600160a01b03168152602080840135908201526103bd606084016040850161222e565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c90600e9083906020016127f1565b60408051601f198184030181529190528051602090910120600055505050565b6040516104409060069083906020016127c7565b6040516020818303038152906040528051906020012060001c6000541461046657600080fd5b6000805561047c602082013560a0830135612926565b43101561048857600080fd5b341561049357600080fd5b336104a1602083018361222e565b6001600160a01b0316146104b457600080fd5b6104c1602082018261222e565b6001600160a01b03166108fc6104dc600060c0850135612926565b6040518115909202916000818181858888f19350505050158015610504573d6000803e3d6000fd5b507fd942081c00e0783013599d1067e28627907deb698319705d718c4f8638cceec58160405161053491906126b6565b60405180910390a16000805533ff5b604051610557906002908390602001612899565b6040516020818303038152906040528051906020012060001c6000541461057d57600080fd5b600080556105946020820135610140830135612926565b4310156105a057600080fd5b34156105ab57600080fd5b336105bc608083016060840161222e565b6001600160a01b0316146105cf57600080fd5b6105df608082016060830161222e565b6001600160a01b03166108fc6105fb6000610120850135612926565b6040518115909202916000818181858888f19350505050158015610623573d6000803e3d6000fd5b507f84606dd8aa7a944a019509c8d173de0673af125ea2335128823b183fd58ac9b2816040516105349190612666565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461069057600080fd5b600080805560408051602081019091529081526106b260208301356000612926565b8152346020830135146106c457600080fd5b60408051833581526020808501359082015283820135818301526060808501359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a16107566040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b338152602083810135818301908152604080860135818501908152606080880135818701908152875160808089019182524360a0808b01918252875160019a81019a909a528a516001600160a01b0316978a019790975296519388019390935292519186019190915251918401919091525160c08301525160e08201526101000161040c565b6040516107f090601090839060200161286f565b6040516020818303038152906040528051906020012060001c6000541461081657600080fd5b600080819055506108486040518060800160405280600081526020016000815260200160008152602001600081525090565b61085b6020830135610180840135612926565b431061086657600080fd5b341561087157600080fd5b3361087f602084018461222e565b6001600160a01b03161461089257600080fd5b6040516108ae906101a0840135906101c08501906020016127ad565b60408051601f19818403018152919052805160209091012060a0830135146108d557600080fd5b60036108e660c0840135600461295d565b6108f5906101c0850135612926565b6108ff9190612974565b80825260011461091057805161093a565b600361092160e0840135600461295d565b610930906101e0850135612926565b61093a9190612974565b6020820181905260011461095257806020015161097d565b6003610964610100840135600461295d565b61097390610200850135612926565b61097d9190612974565b604082018190526001146109955780604001516109c0565b60036109a7610120840135600461295d565b6109b690610220850135612926565b6109c09190612974565b60608201526040517fdfb849c5f273733a39dfd860be80c8bc88140960e86644f0ef7ceebac92b4f6f906109f590849061270b565b60405180910390a1610a05612055565b610a12602084018461222e565b81516001600160a01b0390911690528051602080850135910152610a3c606084016040850161222e565b81516001600160a01b039091166040918201528151606080860135910152805160a08181019092529060c0850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101c08501906005908390839080828437600092019190915250505060208083015101526060820151600114610acd578160600151610b00565b6003610adf610140850135600461295d565b6101c0850160045b6020020135610af69190612926565b610b009190612974565b602082015160400152610b1860016080850135612926565b602082018051606001919091525143608090910152610b3d6000610160850135612926565b602082015160a00152610b4f81611e50565b505050565b604051610b6890600e9083906020016127dc565b6040516020818303038152906040528051906020012060001c60005414610b8e57600080fd5b60008055610ba4602082013560e0830135612926565b431015610bb057600080fd5b3415610bbb57600080fd5b33610bc9602083018361222e565b6001600160a01b031614610bdc57600080fd5b610be9602082018261222e565b6001600160a01b03166108fc610c04600060c0850135612926565b6040518115909202916000818181858888f19350505050158015610c2c573d6000803e3d6000fd5b507f45ebc520699ff172c712e9500a8125d4de36a9450b99d8c5ba7490b0dff7fa698160405161053491906126fc565b604051610c7090600e9083906020016127dc565b6040516020818303038152906040528051906020012060001c60005414610c9657600080fd5b60008080556040805160208101909152908152610cbb602083013560e0840135612926565b4310610cc657600080fd5b610cd5600060c0840135612926565b81523415610ce257600080fd5b33610cf3606084016040850161222e565b6001600160a01b031614610d0657600080fd5b7f644153cb00b5902ba0237e14ba781544b02196bdedd4a4c36929d9ad9d00c5b382604051610d3591906126e7565b60405180910390a1610d45612091565b610d52602084018461222e565b6001600160a01b0316815260208084013590820152610d77606084016040850161222e565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c906010908390602001612884565b604051610e06906002908390602001612899565b6040516020818303038152906040528051906020012060001c60005414610e2c57600080fd5b60008081905550610e5e6040518060800160405280600081526020016000815260200160008152602001600081525090565b610e716020830135610140840135612926565b4310610e7c57600080fd5b3415610e8757600080fd5b33610e95602084018461222e565b6001600160a01b031614610ea857600080fd5b604051610ec490610180840135906101a08501906020016127ad565b6040516020818303038152906040528051906020012060001c826000016040013514610eef57600080fd5b6003610f006080840135600461295d565b610f0f906101a0850135612926565b610f199190612974565b808252600114610f2a578051610f54565b6003610f3b60a0840135600461295d565b610f4a906101c0850135612926565b610f549190612974565b60208201819052600114610f6c578060200151610f96565b6003610f7d60c0840135600461295d565b610f8c906101e0850135612926565b610f969190612974565b60408201819052600114610fae578060400151610fd8565b6003610fbf60e0840135600461295d565b610fce90610200850135612926565b610fd89190612974565b60608201526040517f985f563580b925dd30b120f2473fe883c4c74039f091b0f47fe9b1e0b9bab45b9061100d90849061263f565b60405180910390a161101d612055565b61102a602084018461222e565b81516001600160a01b0390911690528051602080850135910152611054608084016060850161222e565b81516001600160a01b039091166040918201528151610160850135606090910152805160a0818101909252906080850190600590839083908082843760009201919091525050506020820151526040805160a0818101909252906101a085019060059083908390808284376000920191909152505050602080830151015260608201516001146110e8578160600151611113565b60036110fa610100850135600461295d565b61110990610220860135612926565b6111139190612974565b60208201805160400191909152805160006060909101819052905143608090910152610b3d90610120850135612926565b60405161115890601090839060200161286f565b6040516020818303038152906040528051906020012060001c6000541461117e57600080fd5b600080556111956020820135610180830135612926565b4310156111a157600080fd5b34156111ac57600080fd5b336111bd606083016040840161222e565b6001600160a01b0316146111d057600080fd5b6111e0606082016040830161222e565b6001600160a01b03166108fc6111fc6000610160850135612926565b6040518115909202916000818181858888f19350505050158015611224573d6000803e3d6000fd5b507f09c5ad06358a3e2f898ba0aef76151a9013aec5745ed85ef1ee0e81565c980be81604051610534919061272b565b60405161126890600190839060200161285b565b6040516020818303038152906040528051906020012060001c6000541461128e57600080fd5b600080805560408051808201825282815260208101929092526112b89083013560a0840135612926565b43106112c357600080fd5b6112d560208301356080840135612926565b8152346020830135146112e757600080fd5b6112f66020830135600261293e565b60208201526040517ff196eb766d2d8533f0df41b064e516bf7376911659bd46c361acef78536bf4bc9061132b90849061273a565b60405180910390a161133b6120f5565b611348602084018461222e565b6001600160a01b031681526040808401356020830152606080850135828401523390830152805160a08181019092529060c0850190600590839083908082843760009201919091525050506080820152815160a08201524360c082015260208083015160e083015260405161040c916002918491016128ae565b6040516113d690600a90839060200161286f565b6040516020818303038152906040528051906020012060001c600054146113fc57600080fd5b6000808190555061142e6040518060800160405280600081526020016000815260200160008152602001600081525090565b6114416020830135610180840135612926565b431061144c57600080fd5b341561145757600080fd5b33611468606084016040850161222e565b6001600160a01b03161461147b57600080fd5b604051611497906101a0840135906101c08501906020016127ad565b60408051601f19818403018152919052805160209091012060a0830135146114be57600080fd5b60036114d06101c0840135600461295d565b6114de9060c0850135612926565b6114e89190612974565b8082526001146114f9578051611523565b600361150b6101e0840135600461295d565b6115199060e0850135612926565b6115239190612974565b6020820181905260011461153b578060200151611566565b600361154d610200840135600461295d565b61155c90610100850135612926565b6115669190612974565b6040820181905260011461157e5780604001516115a9565b6003611590610220840135600461295d565b61159f90610120850135612926565b6115a99190612974565b60608201526040517f258efe6f6e995791e3c206c5f7508e6472977eefb4afb67101812a20af39aa9b906115de90849061270b565b60405180910390a16115ee612055565b6115fb602084018461222e565b81516001600160a01b0390911690528051602080850135910152611625606084016040850161222e565b81516001600160a01b039091166040918201528151606080860135910152805160a0818101909252906101c0850190600590839083908082843760009201919091525050506020820151526040805160a08181019092529060c085019060059083908390808284376000920191909152505050602080830151015260608201516001146116b6578160600151610b00565b60036116c8610240850135600461295d565b60c085016004610ae7565b6040516116e790600a90839060200161286f565b6040516020818303038152906040528051906020012060001c6000541461170d57600080fd5b600080556117246020820135610180830135612926565b43101561173057600080fd5b341561173b57600080fd5b33611749602083018361222e565b6001600160a01b03161461175c57600080fd5b611769602082018261222e565b6001600160a01b03166108fc6117856000610160850135612926565b6040518115909202916000818181858888f193505050501580156117ad573d6000803e3d6000fd5b507fe38eaeebe01f8fea2d39bfc35b82cb3697543788a548da0d97c4a704ce6ec2b181604051610534919061272b565b6040516117f19060069083906020016127c7565b6040516020818303038152906040528051906020012060001c6000541461181757600080fd5b6000805561182d602082013560a0830135612926565b43101561183957600080fd5b341561184457600080fd5b33611855606083016040840161222e565b6001600160a01b03161461186857600080fd5b611878606082016040830161222e565b6001600160a01b03166108fc611893600060c0850135612926565b6040518115909202916000818181858888f193505050501580156118bb573d6000803e3d6000fd5b507f6ce0b6368a969de24391cb6a77cee3c86b93b4c8da6963a920b1d95b44fbf0a28160405161053491906126b6565b6040516118ff9060089083906020016127dc565b6040516020818303038152906040528051906020012060001c6000541461192557600080fd5b6000805561193b602082013560e0830135612926565b43101561194757600080fd5b341561195257600080fd5b33611963606083016040840161222e565b6001600160a01b03161461197657600080fd5b611986606082016040830161222e565b6001600160a01b03166108fc6119a1600060c0850135612926565b6040518115909202916000818181858888f193505050501580156119c9573d6000803e3d6000fd5b507f239047e7ecda813bd5d0deda901af2cfd51f309e8f9aa8f06ae255dc092fa8a48160405161053491906126fc565b604051611a0d90600190839060200161285b565b6040516020818303038152906040528051906020012060001c60005414611a3357600080fd5b60008055611a49604082013560a0830135612926565b431015611a5557600080fd5b3415611a6057600080fd5b33611a6e602083018361222e565b6001600160a01b031614611a8157600080fd5b611a8e602082018261222e565b6001600160a01b03166108fc611aa960006080850135612926565b6040518115909202916000818181858888f19350505050158015611ad1573d6000803e3d6000fd5b507f17040e3ed853a8df776cd092f1357f15488d98d460f66cd5e6b0cb07d5bc8ae381604051610534919061277d565b604051611b159060089083906020016127dc565b6040516020818303038152906040528051906020012060001c60005414611b3b57600080fd5b60008080556040805160208101909152908152611b60602083013560e0840135612926565b4310611b6b57600080fd5b611b7a600060c0840135612926565b81523415611b8757600080fd5b33611b95602084018461222e565b6001600160a01b031614611ba857600080fd5b7fc5bf379625a42284cf436ae38bfbe777a1b3406a9e2eea51c37126337545d40082604051611bd791906126e7565b60405180910390a1611be7612091565b611bf4602084018461222e565b6001600160a01b0316815260208084013590820152611c19606084016040850161222e565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260a0808501358184015281518082019092526101008501906005908390839080828437600092019190915250505060c0820152815160e08201524361010082015260405161040c90600a908390602001612884565b604051611ca89060069083906020016127c7565b6040516020818303038152906040528051906020012060001c60005414611cce57600080fd5b60008080556040805160208101909152908152611cf3602083013560a0840135612926565b4310611cfe57600080fd5b611d0d600060c0840135612926565b81523415611d1a57600080fd5b33611d2b606084016040850161222e565b6001600160a01b031614611d3e57600080fd5b7fee312f330bc747f7ed8a854ea245bb93733f831d3c4296b2fd99db1023ff8f4282604051611d6d9190612699565b60405180910390a1611dcf60405180610100016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b611ddc602084018461222e565b6001600160a01b0316815260208084013590820152611e01606084016040850161222e565b6001600160a01b0316604080830191909152606080850135908301526080808501359083015260e08085013560a0840152835160c084015243908301525161040c9060089083906020016127f1565b60018160200151604001511415611f8057611eb36040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015181840190815284516040908101518416818601908152865160609081015181880190815285890180518301516080808b01918252825181015160a0808d01918252935184015160c0808e0191825289516006818e01529d518d168e8b01529951968d01969096529551909916988a0198909852905190880152945192860192909252905160e0850152915161010080850191909152825180850390910181526101209093019091528151910120600055611fee565b6040805160c081018252600081830181815260608084018381526080850184815260a086018581528487526020808801969096528851516001600160a01b03908116909552885188015190941690915286519091015190529084015190920151909152611fec81611ff1565b505b50565b8051606001516002146120095780516020015161200d565b8051515b6001600160a01b03166108fc8260000151604001519081150290604051600060405180830381858888f1935050505015801561204d573d6000803e3d6000fd5b506000805533ff5b6040805160c0810182526000918101828152606082018390526080820183905260a08201929092529081526020810161208c612152565b905290565b60405180610120016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016120e1612194565b815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001612137612194565b81526020016000815260200160008152602001600081525090565b6040518060c00160405280612165612194565b8152602001612172612194565b8152602001600081526020016000815260200160008152602001600081525090565b6040518060a001604052806005906020820280368337509192915050565b80356001600160a01b03811681146121c957600080fd5b919050565b60006101a082840312156121e0578081fd5b50919050565b600061010082840312156121e0578081fd5b600061012082840312156121e0578081fd5b600061026082840312156121e0578081fd5b60006101c082840312156121e0578081fd5b60006020828403121561223f578081fd5b612248826121b2565b9392505050565b600061024082840312156121e0578081fd5b60006101a08284031215612273578081fd5b61224883836121ce565b6000610100828403121561228f578081fd5b61224883836121e6565b600061012082840312156122ab578081fd5b61224883836121f8565b600061026082840312156122c7578081fd5b612248838361220a565b60006101c082840312156122e3578081fd5b612248838361221c565b6000608082840312156121e0578081fd5b600061018082840312156121e0578081fd5b600060e082840312156121e0578081fd5b8060005b6005811015612344578151845260209384019390910190600101612325565b50505050565b8035825260a0602082016020840137600060c08301525050565b6001600160a01b0380612376836121b2565b1683526020820135602084015280612390604084016121b2565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c08301525050565b6001600160a01b03806123d5836121b2565b16835260208201356020840152806123ef604084016121b2565b16604084015250606081013560608301526080810135608083015260a081013560a083015260c081013560c083015260e081013560e08301525050565b6001600160a01b0361243d826121b2565b1682526020810135602083015260408101356040830152606081013560608301526080810135608083015260a081013560a08301525050565b6001600160a01b0380612488836121b2565b16835260208201356020840152806124a2604084016121b2565b16604084015250606081013560608301526080810135608083015260a081013560a083015260a060c0820160c0840137610160818101359083015261018090810135910152565b80516001600160a01b03168252602080820151908301526040808201519061251b908401826001600160a01b03169052565b50606081015160608301526080810151608083015260a081015160a083015260c081015161254c60c0840182612321565b5060e0810151610160830152610100015161018090910152565b61257082826123c3565b61010060a0818301828501375060006101a08301525050565b61259382826123c3565b610100808201358015158082146125a957600080fd5b80838601525050505050565b6125bf8282612476565b6101a0808201358015158082146125a957600080fd5b6001600160a01b03806125e7836121b2565b16835260208201356020840152604082013560408401528061260b606084016121b2565b1660608401525060a06080820160808401376101208181013590830152610140808201359083015261016090810135910152565b610240810161264e82846125d5565b61018061265f81840182860161234a565b5092915050565b6101a0810161267582846125d5565b6101808084013580151580821461268b57600080fd5b808386015250505092915050565b61010081016126a88284612364565b60e092830135919092015290565b61010081016126c58284612364565b60e08301358015158082146126d957600080fd5b8060e0850152505092915050565b6101a081016126f68284612566565b92915050565b61012081016126f68284612589565b610260810161271a8284612476565b6101a061265f81840182860161234a565b6101c081016126f682846125b5565b6101808101612749828461242c565b60a060c0840160c08401376000610160838101918252906001600160a01b036127738684016121b2565b1690525092915050565b60e0810161278b828461242c565b60c083013580151580821461279f57600080fd5b8060c0850152505092915050565b82815260c0810160a0836020840137600081529392505050565b82815261010081016122486020830184612364565b828152610120810161224860208301846123c3565b8281526101208101612248602083018460018060a01b038082511683526020820151602084015280604083015116604084015250606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e08301525050565b82815260e08101612248602083018461242c565b8281526101c081016122486020830184612476565b8281526101c0810161224860208301846124e9565b8281526101a0810161224860208301846125d5565b60006101a08201905083825260018060a01b0380845116602084015260208401516040840152604084015160608401528060608501511660808401525060808301516128fd60a0840182612321565b5060a083015161014083015260c083015161016083015260e08301516101808301529392505050565b6000821982111561293957612939612994565b500190565b600081600019048311821515161561295857612958612994565b500290565b60008282101561296f5761296f612994565b500390565b60008261298f57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fdfea264697066735822122077dd86abe953944d2b0527f8a9bdc0ea0738c9c873eca9fd7d58cf4000c3c6a864736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

