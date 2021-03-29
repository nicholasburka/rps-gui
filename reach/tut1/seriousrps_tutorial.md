Over the course of this tutorial, we'll make rock paper scissors both more efficient and equitable, by reducing transactions, submitting moves in batches to reduce the likelihood of a round ending in a draw, and switching who goes first after a draw to balance transaction costs.

In this section, we make rock paper scissors less expensive by bundling each player's first hand choice with their first transaction commiting the game's wager, allowing us to compute a game outcome after two transactions from Alice and one transaction from Bob. This requires the extension of the Player interface to include a firstHand field. We'll also allow Alice to set the DEADLINE UInt, and Bob to view the DEADLINE as Bob joins.
```
const Player = {
	...hasRandom,
	firstHand: UInt,
	getHand: Fun([], UInt),
	seeOutcome: Fun([UInt], Null),
	informTimeout: Fun([UInt], Null),
	informDraw: Fun([], Null)
};
const Alice =
      { ...Player,
        wager: UInt,
        DEADLINE: UInt };
const Bob =
      { ...Player,
        acceptWager: Fun([UInt, UInt], Null) };

Once we've added this to the Player interface, we can modify each Alice's first transactions to include hand-handling. We'll also declassify and publish Alice's DEADLINE, and assert that Alice's hand is unknowable to Bob as per usual:

A.only(() => {
  const wager = declassify(interact.wager); 
  const DEADLINE = declassify(interact.DEADLINE);
  const _AFirstHand = interact.firstHand;
  const [_AFirstHandCommitment, _AFirstHandSalt] = makeCommitment(interact, _AFirstHand);
  const AFirstCommit = declassify(_DFirstHandsCommitment);
});

A.publish(wager, DEADLINE, AFirstCommit)
  .pay(wager);
commit();

unknowable(B, A(_AFirstHandsSalt, _AFirstHands))
```
Now we do add hand-handling and publishing to Bob's first transaction, declassify A's hand, and initialize the loop variable outcome with the result of the first round:
```
unknowable(B, A(_AFirstHandSalt, _AFirstHand))
B.only(() => {
  interact.acceptWager(wager, DEADLINE); 
  const BFirstHand = declassify(interact.firstHand);
});
B.publish(BFirstHand)
  pay(wager)
  .timeout(DEADLINE, () => closeTo(A, informTimeout));

A.only(() => {
const [AFirstHandSalt, AFirstHand] = declassify([_AFirstHandSalt, _AFirstHand]);
});
A.publish(AFirstHandSalt, AFirstHand)
.timeout(DEADLINE, () => closeTo(B, informTimeout));
checkCommitment(AFirstCommit, AFirstHandSalt, AFirstHand);

var outcome = winner(AFirstHand, BFirstHand);
```
And now our program requires one less transaction per player to compute a game outcome. To test it, we simply modify our command line interface (CLI) to initialize interact.firstHand to the value of await getHand(), for both Alice and Bob. We also allow Alice to enter a DEADLINE, and Bob to view the DEADLINE.
```
if (isAlice) {
  const amt = await ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  const deadline = await ask(
    'How many blocks until a timeout?', (x) => x);
  interact.DEADLINE = deadline;
  interact.firstHand = await getHand();
} else {
  interact.acceptGame = async (wager, deadline) => {
    const accepted = await ask(
      `Do you accept the wager of ${fmt(wager)}? with the deadline of ${deadline} blocks`,
      yesno
    );
    if (accepted) {
      interact.firstHand = await getHand();
      return;
    } else {
      process.exit(0);
    }
  };

```
In the next tutorial, we'll make draws, and thereby multiple transactions per player, significantly less likely by collecting hands in a batch and computing the winner based on the first non-draw sub-round.

https://github.com/nicholasburka/rps-gui/blob/vuecli/reach/tut2/seriousrps_tutorial2.md