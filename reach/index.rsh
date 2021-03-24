'reach 0.1'

const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, A_WINS, DRAW, D_WINS] = makeEnum(3);

const winner = (handD, handA) => 
	((handD + (4 - handA)) % 3);

const metawinner = (winsD, winsA) => {
	if (winsD > winsA) {
		return D_WINS;
	} else if (winsA > winsD) {
		return A_WINS;
	} else {
		return DRAW;
	}
};

assert(winner(ROCK, PAPER) == A_WINS);
assert(winner(PAPER, ROCK) == D_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handD =>
	forall(UInt, handA =>
		assert(isOutcome(winner(handD, handA)))));

forall(UInt, (hand) =>
	assert(winner(hand,hand) == DRAW));

const batch_size = 5;

const Player = {
	...hasRandom,
	getHands: Fun([], Array(UInt, batch_size)),
	seeOutcome: Fun([UInt], Null), //Array(UInt, batch_size), Array(UInt, batch_size)], Null),
	informTimeout: Fun([UInt], Null),
	informDraw: Fun([], Null)
};

const deployer = {
	...Player,
	informOpponent: Fun([Address], Null),
	wager: UInt,
	deadline: UInt
	//batch_size: UInt
};
const attacher = {
	...Player,
	acceptGame: Fun([UInt, UInt], Null)
};
/*const tax_collector = {
not currently generalizable / generable to multiple chains with pre-set addresses in code
}*/

const parseString = (str) => {
	const 
}

const batchWinner = (DHands, AHands) =>
  true ?
  Array.iota(batch_size).map((i) =>
    winner(DHands[i], AHands[i])).reduce(DRAW, (x, y) =>
      x == DRAW ? y : x)
  : DHands.zip(AHands).reduce(DRAW, ((o, [hA, hB]) =>
    o == DRAW ? winner(hA, hB) : o));


export const main =
	Reach.App(
		{verifyPerConnector: true, 
			//verifyArithmetic: true, 
			connectors: [ETH, ALGO]},
		[Participant('Deployer', deployer), Participant('Attacher', attacher)],
		(D, A) => {
			const informTimeout = (who) => {
				each([D,A], () => {
					interact.informTimeout(who);
				});
			};

			
			
			D.only(() => {
				const wager = declassify(interact.wager);
				const deadline = declassify(interact.deadline);
				const _DFirstHands = interact.getHands(); //interact.firstHands; 

				//commitment to multiple Hands
				const [_DFirstHandsCommitment, _DFirstHandsSalt] = makeCommitment(interact, _DFirstHands);
				const DFirstCommit = declassify(_DFirstHandsCommitment);
			});

			D.publish(wager, deadline, DFirstCommit)
			  .pay(wager);
			commit();

			unknowable(A, D(_DFirstHandsSalt, _DFirstHands));

			A.only(() => {
				interact.acceptGame(wager,deadline);
				const _AFirstHands = interact.getHands();//interact.firstHands//interact.getHands();
				const AFirstHands = declassify(_AFirstHands);
				const addrA = this;
				assume(is(AFirstHands, Array(UInt, batch_size)));
			});
			A.publish(AFirstHands, addrA)
			  .pay(wager);
			  //.timeout(deadline, () => closeTo(D, () => {informTimeout(1)}));
			commit();

			assert(balance() == (2*wager));

			//declassify player 1 Hands
			D.only(() => {
				interact.informOpponent(addrA);
				const [DFirstHandsSalt, DFirstHands] = declassify([_DFirstHandsSalt, _DFirstHands]);
			});
			D.publish(DFirstHandsSalt, DFirstHands)
			  .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			checkCommitment(DFirstCommit, DFirstHandsSalt, DFirstHands);

			//calculate outcome 
			//const outcomes = Array.iota(batch_size).map(i => winner(DHands[i], AHands[i]));
			//const DWins = outcomes.count(outcome => outcome == D_WINS);
			//const AWins = outcomes.count(outcome => outcome == A_WINS);
			/*const doRound = (first, second, round) => {
				first.only(() => {
				  const _firstHands = interact.getHands(); //(interact.getHand);
				  const [_firstCommit, _firstSalt] = makeCommitment(interact, _firstHands);
				  const firstCommit = declassify(_firstCommit); });
				first.publish(firstCommit)
				  .timeout(deadline, () => closeTo(second, informTimeout));
				commit();

				unknowable(second, first(_firstHands, _firstSalt));
				second.only(() => {
				  const secondHands = declassify(interact.getHands()); });
				second.publish(secondHands)
				  .timeout(deadline, () => closeTo(first, informTimeout));
				commit();

				first.only(() => {
				  const [firstSalt, firstHands] = declassify([_firstSalt, _firstHands]); });
				first.publish(firstSalt, firstHands)
				  .timeout(deadline, () => closeTo(second, informTimeout));
				checkCommitment(firstCommit, firstSalt, firstHands);
				if (round % 2 == 0) {
					return batchWinner(secondHands,firstHands);
				} else {
					return batchWinner(firstHands,secondHands);
				}
			};*/

			var [outcome, round] = [batchWinner(DFirstHands, AFirstHands), 0];
			invariant( balance() == 2 * wager && isOutcome(outcome) );
			while ( outcome == DRAW ) {
			  commit();

			  each([D, A], () => {
			  	interact.informDraw();
			  });

			  /*if (round % 2 == 0) {
			  	A.only(() => {
			  	  const _AHands = interact.getHands(); //(interact.getHand);
			  	  const [_ACommit, _ASalt] = makeCommitment(interact, _AHands);
			  	  const ACommit = declassify(_ACommit); });
			  	A.publish(ACommit)
			  	  .timeout(deadline, () => closeTo(D, () => {informTimeout(1)}));
			  	commit();

			  	unknowable(D, A(_AHands, _ASalt));
			  	D.only(() => {
			  	  const DHands = declassify(interact.getHands()); });
			  	D.publish(DHands)
			  	  .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			  	commit();

			  	A.only(() => {
			  	  const [ASalt, AHands] = declassify([_ASalt, _AHands]); });
			  	A.publish(ASalt, AHands)
			  	  .timeout(deadline, () => closeTo(D, () => {informTimeout(1)}));
			  	checkCommitment(ACommit, ASalt, AHands);
			  	outcome = batchWinner(DHands, AHands);
			  	//const newOutcome = doRound(A, D, round);
			  	//outcome = newOutcome;
			  	continue;
			  } else {
			  	
			  	D.only(() => {
			  	  const _DHands = interact.getHands(); //(interact.getHand);
			  	  const [_DCommit, _DSalt] = makeCommitment(interact, _DHands);
			  	  const DCommit = declassify(_DCommit); });
			  	D.publish(DCommit)
			  	  .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			  	commit();

			  	unknowable(A, D(_DHands, _DSalt));
			  	A.only(() => {
			  	  const AHands = declassify(interact.getHands()); });
			  	A.publish(AHands)
			  	  .timeout(deadline, () => closeTo(D, () => {informTimeout(1)}));
			  	commit();

			  	D.only(() => {
			  	  const [DSalt, DHands] = declassify([_DSalt, _DHands]); });
			  	D.publish(DSalt, DHands)
			  	  .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			  	checkCommitment(DCommit, DSalt, DHands);
			  	outcome = batchWinner(DHands, AHands);
			  
			  	//const newOutcome = doRound(D, A, round);
			  	//outcome = newOutcome;
			  	continue;
			  }*/

			  D.only(() => {
			    const _DHands = interact.getHands(); //(interact.getHand);
			    const [_DCommit, _DSalt] = makeCommitment(interact, _DHands);
			    const DCommit = declassify(_DCommit); });
			  D.publish(DCommit)
			    .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			  commit();

			  unknowable(A, D(_DHands, _DSalt));
			  A.only(() => {
			    const AHands = declassify(interact.getHands()); });
			  A.publish(AHands)
			    .timeout(deadline, () => closeTo(D, () => {informTimeout(1)}));
			  commit();

			  D.only(() => {
			    const [DSalt, DHands] = declassify([_DSalt, _DHands]); });
			  D.publish(DSalt, DHands)
			    .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			  checkCommitment(DCommit, DSalt, DHands);

			  outcome = batchWinner(DHands, AHands);
			  //outcome = batchWinner(DHands, AHands);
			  continue; }


			assert(outcome == D_WINS || outcome == A_WINS);
			transfer(2 * wager).to(outcome == D_WINS ? D : A);
			commit();


			assert(balance() == 0);

			each([D,A], () => {
				interact.seeOutcome(outcome);//, DHands, AHands);
			});


			exit();
		}
	);
export {batch_size};
