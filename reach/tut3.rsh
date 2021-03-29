'reach 0.1';

const [ isHand, ROCK, PAPER, SCISSORS ] = makeEnum(3);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (handA, handB) =>
      ((handA + (4 - handB)) % 3);

assert(winner(ROCK, PAPER) == B_WINS);
assert(winner(PAPER, ROCK) == A_WINS);
assert(winner(ROCK, ROCK) == DRAW);

forall(UInt, handA =>
  forall(UInt, handB =>
    assert(isOutcome(winner(handA, handB)))));

forall(UInt, (hand) =>
  assert(winner(hand, hand) == DRAW));

const batchSize = 5;

// This program shows two different ways to get a batch: either have the
// backend call the frontend many times (what Bob does) with this function, or
// add a new function to the frontend that returns many results (what Alice
// does). The advantage of Bob's approach is that the frontend doesn't need to
// know the size of the input, but the downside is that is that it is harder to
// make a coherent interface, because each request for input stands alone.
const getBatch = (getHand) =>
  Array.iota(batchSize).map((_) => getHand());

// Similarly, we have two different approaches for calculating the winner. The
// first uses a loop over the batchSize and then combines the results after,
// while the second uses zip and reduce to do it all at once. I suspect that
// most C-style programmers would try the first thing and most functional-style
// programmers would try to second. Reach supports both styles.
const batchWinner = (handsA, handsB) =>
  true ?
  Array.iota(batchSize).map((i) =>
    winner(handsA[i], handsB[i])).reduce(DRAW, (x, y) =>
      x == DRAW ? y : x)
  : handsA.zip(handsB).reduce(DRAW, ((o, [hA, hB]) =>
    o == DRAW ? winner(hA, hB) : o));

const Player =
      { ...hasRandom,
        firstBatch: Array(UInt, batchSize),
        getHand: Fun([], UInt),
        getBatch: Fun([], Array(UInt, batchSize)),
        seeOutcome: Fun([UInt], Null),
        informTimeout: Fun([], Null) };
const Alice =
      { ...Player,
        wager: UInt,
        DEADLINE: UInt,
         };
const Bob =
      { ...Player,
        acceptWager: Fun([UInt], Null) };

//const DEADLINE = 150;
export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      const informTimeout = () => {
        each([A, B], () => {
          interact.informTimeout(); }); };

      A.only(() => {
        const wager = declassify(interact.wager); 
        const DEADLINE = declassify(interact.DEADLINE);
        const _AFirstBatch = interact.firstBatch;
        const [_AFirstBatchCommitment, _AFirstBatchSalt] = makeCommitment(interact, _AFirstBatch);
        const AFirstCommit = declassify(_AFirstBatchCommitment);
      });

      A.publish(wager, DEADLINE, AFirstCommit)
        .pay(wager);
      commit();

      unknowable(B, A(_AFirstBatchSalt, _AFirstBatch))
      B.only(() => {
        interact.acceptWager(wager); 
        const BFirstBatch = declassify(interact.firstBatch);
      });
      B.publish(BFirstBatch)
       .pay(wager)
        .timeout(DEADLINE, () => closeTo(A, informTimeout));
      commit();

      A.only(() => {
        const [AFirstBatchSalt, AFirstBatch] = declassify([_AFirstBatchSalt, _AFirstBatch]);
      });
      A.publish(AFirstBatchSalt, AFirstBatch)
       .timeout(DEADLINE, () => closeTo(B, informTimeout));
      checkCommitment(AFirstCommit, AFirstBatchSalt, AFirstBatch);

      var [outcome, round] = [batchWinner(AFirstBatch, BFirstBatch), 0];
      invariant(balance() == 2 * wager && isOutcome(outcome) );
      while ( outcome == DRAW ) {
        const doRound = (First, Second, roundNumber) => {
          commit();

          First.only(() => {
            const _BatchFirst = interact.getBatch();
            const [_commitFirst, _saltFirst] = makeCommitment(interact, _BatchFirst);
            const commitFirst = declassify(_commitFirst); });
          First.publish(commitFirst)
            .timeout(DEADLINE, () => closeTo(Second, informTimeout));
          commit();

          unknowable(Second, First(_BatchFirst, _saltFirst));
          Second.only(() => {
            const BatchSecond = declassify(interact.getBatch()); });
          Second.publish(BatchSecond)
            .timeout(DEADLINE, () => closeTo(First, informTimeout));
          commit();

          First.only(() => {
            const [saltFirst, BatchFirst] = declassify([_saltFirst, _BatchFirst]); });
          First.publish(saltFirst, BatchFirst)
            .timeout(DEADLINE, () => closeTo(Second, informTimeout));
          checkCommitment(commitFirst, saltFirst, BatchFirst);

          return [BatchFirst, BatchSecond]
        }
        if (round % 2 == 0) {
          const [first, second] = doRound(B,A,round);
          outcome = batchWinner(second, first);
          continue; 
        } else {
          const [first, second] = doRound(B,A,round);
          outcome = batchWinner(first, second);
          continue; 
        }
       }

      assert(outcome == A_WINS || outcome == B_WINS);
      transfer(2 * wager).to(outcome == A_WINS ? A : B);
      commit();

      each([A, B], () => {
        interact.seeOutcome(outcome); });
      exit(); });