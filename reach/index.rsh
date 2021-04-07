'reach 0.1'

const [isHand, ROCK, PAPER, SCISSORS] = makeEnum(3);
const [isOutcome, A_WINS, DRAW, D_WINS] = makeEnum(3);

const winner = (handD, handA) => 
	((handD + (4 - handA)) % 3);

const batchSize = 5;

const batchWinner = (DHands, AHands) =>
  true ?
  Array.iota(batchSize).map((i) =>
    winner(DHands[i], AHands[i])).reduce(DRAW, (x, y) =>
      x == DRAW ? y : x)
  : DHands.zip(AHands).reduce(DRAW, ((o, [hA, hB]) =>
    o == DRAW ? winner(hA, hB) : o));

assert(winner(ROCK, PAPER) == A_WINS);
assert(winner(PAPER, ROCK) == D_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handD =>
	forall(UInt, handA =>
		assert(isOutcome(winner(handD, handA)))));

forall(UInt, (hand) =>
	assert(winner(hand,hand) == DRAW));

const Player = {
	...hasRandom,
	firstHands: Array(UInt, batchSize),
	getHands: Fun([], Array(UInt, batchSize)),
	seeOutcome: Fun([UInt, Array(UInt, batchSize), Array(UInt, batchSize)], Null), //Array(UInt, batchSize), Array(UInt, batchSize)], Null),
	informTimeout: Fun([UInt], Null),
	informDraw: Fun([], Null)
};

const deployer = {
	...Player,
	informOpponent: Fun([Address], Null),
	wager: UInt,
	deadline: UInt
};
const attacher = {
	...Player
};
/*const tax_collector = {
}*/

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
				const _DFirstHands = interact.firstHands;// interact.getHands();
				const [_DFirstHandsCommitment, _DFirstHandsSalt] = makeCommitment(interact, _DFirstHands);
				const DFirstCommit = declassify(_DFirstHandsCommitment);
			});

			D.publish(wager, deadline, DFirstCommit)
			  .pay(wager);
			commit();

			unknowable(A, D(_DFirstHandsSalt, _DFirstHands));

			A.only(() => {
				const _AFirstHands = interact.firstHands;//interact.getHands();
				const AFirstHands = declassify(_AFirstHands);
				const addrA = this;
				assume(is(AFirstHands, Array(UInt, batchSize)));
			});
			A.publish(AFirstHands, addrA)
			  .pay(wager)
			  .timeout(deadline, () => closeTo(D, () => {informTimeout(1)}));

			commit();

			assert(balance() == (2*wager));

			D.only(() => {
				interact.informOpponent(addrA);
				const [DFirstHandsSalt, DFirstHands] = declassify([_DFirstHandsSalt, _DFirstHands]);
			});
			D.publish(DFirstHandsSalt, DFirstHands)
			  .timeout(deadline, () => closeTo(A, () => {informTimeout(0)}));
			checkCommitment(DFirstCommit, DFirstHandsSalt, DFirstHands);

			var [outcome, round, DHands, AHands] = [batchWinner(DFirstHands, AFirstHands), 0, DFirstHands, AFirstHands];
			invariant( balance() == 2 * wager && isOutcome(outcome) );
			while ( outcome == DRAW ) {
			  const doRound = (first, second, firstNum, secondNum) => {
			  	commit();

			  	first.only(() => {
			  	  const _firstHands = interact.getHands(); //(interact.getHand);
			  	  const [_firstCommit, _firstSalt] = makeCommitment(interact, _firstHands);
			  	  const firstCommit = declassify(_firstCommit); });
			  	first.publish(firstCommit)
			  	  .timeout(deadline, () => closeTo(second, () => {informTimeout(firstNum)}));
			  	commit();

			  	unknowable(second, first(_firstHands, _firstSalt));

			  	second.only(() => {
			  	  const secondHands = declassify(interact.getHands()); });
			  	second.publish(secondHands)
			  	  .timeout(deadline, () => closeTo(first, () => informTimeout(secondNum)));
			  	commit();

			  	first.only(() => {
			  	  const [firstSalt, firstHands] = declassify([_firstSalt, _firstHands]); });
			  	first.publish(firstSalt, firstHands)
			  	  .timeout(deadline, () => closeTo(second, () => informTimeout(firstNum)));
			  	checkCommitment(firstCommit, firstSalt, firstHands);

			  	return [firstHands, secondHands]
			  }
			  	
			  if (round % 2 == 0) {
			  	const [roundAHands, roundDHands] = doRound(A,D,1,0);
			  	[outcome, round, DHands, AHands] = [batchWinner(roundDHands, roundAHands), round + 1, roundDHands, roundAHands];
			  	continue;
			  } else {
			  	const [roundDHands, roundAHands]  = doRound(D,A,0,1);
			  	[outcome, round, DHands, AHands] = [batchWinner(roundDHands, roundAHands), round + 1, roundDHands, roundAHands];
			  	continue;
			  }

			}

			assert(outcome == D_WINS || outcome == A_WINS);
			transfer(2 * wager).to(outcome == D_WINS ? D : A);
			commit();

			assert(balance() == 0);

			each([D,A], () => {
				interact.seeOutcome(outcome, DHands, AHands);
			});

			exit();
		}
	);
export {batchSize};
