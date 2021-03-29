In this section, we'll make the cost distribution more equal between participants, by modifying our while loop. The first player in any round has two transactions, in order to commit their hand secretly and reveal it after the second player's hand has published. It would be more fair if the first person to play rotated, to distribute these costs. We can do this using if/else blocks, and rotating who goes first based on whether it's an even or odd round.

var [outcome, round] = [batchWinner(AFirstBatch, BFirstBatch), 0];
invariant(balance() == 2 * wager && isOutcome(outcome) );
while ( outcome == DRAW ) {
  if (round % 2 == 0) {
    commit();

    B.only(() => {
      const _BatchB = interact.getBatch();
      const [_commitB, _saltB] = makeCommitment(interact, _BatchB);
      const commitB = declassify(_commitB); });
    B.publish(commitB)
      .timeout(DEADLINE, () => closeTo(A, informTimeout));
    commit();

    unknowable(A, B(_BatchB, _saltB));
    A.only(() => {
      const BatchA = declassify(interact.getBatch()); });
    A.publish(BatchA)
      .timeout(DEADLINE, () => closeTo(B, informTimeout));
    commit();

    B.only(() => {
      const [saltB, BatchB] = declassify([_saltB, _BatchB]); });
    B.publish(saltB, BatchB)
      .timeout(DEADLINE, () => closeTo(A, informTimeout));
    checkCommitment(commitB, saltB, BatchB);

    outcome = batchWinner(AFirstBatch, BFirstBatch);
    continue; 
  } else {
    commit();

    A.only(() => {
      const _BatchA = interact.getBatch();
      const [_commitA, _saltA] = makeCommitment(interact, _BatchA);
      const commitA = declassify(_commitA); });
    A.publish(commitA)
      .timeout(DEADLINE, () => closeTo(B, informTimeout));
    commit();

    unknowable(B, A(_BatchA, _saltA));
    B.only(() => {
      const BatchB = declassify(interact.getBatch()); });
    B.publish(BatchB)
      .timeout(DEADLINE, () => closeTo(A, informTimeout));
    commit();

    A.only(() => {
      const [saltA, BatchA] = declassify([_saltA, _BatchA]); });
    A.publish(saltA, BatchA)
      .timeout(DEADLINE, () => closeTo(B, informTimeout));
    checkCommitment(commitA, saltA, BatchA);

    outcome = batchWinner(AFirstBatch, BFirstBatch);
    continue; 
  }
 }

Bob goes first in the loop, because Alice paid an extra transaction already. We initialize the round number at 0, and determine if a round is even or odd by calculating the remainder when divided by 2 using the modulo % operator. 

The code is long, because we simply copy and pasted the logic for each round and changed the participant ordering. It's more concise to define a function doRound within our while loop, which we pass each participant in within the if/else blocks:

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

We defined a function doRound which takes a Participant Interface First, Participant Interface Second, and the roundNumber. Once these participant variables are available to the function, all we need to do is write the logic for a round of RPS. Then we take the result of the round and input it in the correct order to batchWinner to compute the outcome.

We don't have to modify our CLI. If we wanted to, we could inform each player that there is a draw, to clarify the contract state. To do this, we'd add a function informDraw to our Player interface in Reach and our CLI, and call informDraw at the beginning of doRound (after commit(), which establishes contract state such that local steps can be called).

Now we have a rock paper scissors program that is efficient and fair. Hooray! 

If you'd like to try the author's version of optimized, "serious" Rock Paper Scissors on a live net, with a complete backend & game search functionality, visit ____.