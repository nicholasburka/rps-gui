In the Reach tutorial, a basic RPS program is developed. In this workshop we take RPS to the next level and get Serious (Grime JME sample/vid), by generalizing Rock Paper Scissors to be as cheap and equitable as possible in transaction costs for each player.

Problem Analysis

Let's answer these questions:
- what are the transactions in a game of rock paper scissors?
- are there any conditions that increase the number of transactions?
- are the transaction costs distributed evenly between participants?
- does the distribution of transaction costs between participants vary, given different logical paths through the game program?


Stop & write your answers.

- The transactions in the basic RPS program are - 1. Alice's creation of the game and payment of the wager, 2. Bob's acceptance of the game wager & payment 3. Alice plays a hand 4. Bob plays a hand, and finally 5. Alice publishes their hand
- If the players draw, then steps 3-5 repeat, adding an additional 3 transactions per round
- Alice is responsible for 3/5 of the transactions, and if there's a draw, Alice is responsible for 2/3 of each round's transactions

The first two questions reflect different potential optimizations on the cost structure of our dApp. The second two questions reflect the structure of cost distribution.

As dApp programmers, we can minimize transactions, both by eliminating unnecessary transactions and optimizing our logic to make less likely any branch of our program that requires further transactions. By removing transactions, users experience the dual benefit of having both cheaper costs and quicker outcomes.

Cost distribution analysis, like memory or runtime analysis, can be analyzed in a program piece by piece to understand the overall distribution.

Let's focus on cost optimization before we move onto cost equity.

Cost Optimization Analysis
- Can any transactions can be combined into a single transaction/consensus step?
- How can we design a round of rock paper scissors to make a draw less likely?

Stop & write your answers.

- The first cost optimization we make through submitting the firstHand of each player as they join the game. By simultaneously paying the wager and submitting a hand, one transaction is eliminated for each player.
- One could force a player to randomly choose a different hand if they draw, but this isn't fun or really a proper game of rock paper scissors. Instead, we can ask each player to submit a batch of hands. Then, we can prioritize picking a winner in as few hands as possible from the batch of hands, by deciding our outcome from the first pairing of Alice's hands[x] against Bob's hands[x] that doesn't create a draw. This minimizes the likelihood of a draw, as there's a 6/9 chance in each round deciding a winner, whereas in a "best-of-x" schema there are additional possibilities for an overall draw round by round (using naive probabilistic models that don't factor in that rocks are the primeval basis of human tooling, thus affectively compelling a >1/3 probability across the human population and significantly complicating our models). [insert accurate probabilistic analyses here]

Data definitions:
- how and where will we have to modify the program to allow batch submissions? 
- how will the participant interfaces change?
- how will the reach program logic change? will any other functions need modification?

Stop and write your answers.
- the participant interfaces will need a function getHands, returning a UInt array of size x
- we will need a function batchWinner that determines an outcome from the batches submitted by each player.

Try rewriting the program using these optimizations.

Now our program both uses fewer transactions and is less likely to have additional transactions. But it's not quite fair. Alice pays significantly more, to begin the program and if the game results in a draw. Alice proportionally pays more upfront and down the road than Bob.

 - Can any transactions be switched to more evenly distribute costs upfront?
 - Can transactions be switched to more evenly distribute costs down the road?
 - Where else can we consider equalizing costs?

 Write your answers.

 - Since one player's hands have to be hidden while the other player submits, there will necessarily be a 2/1 ratio for each round. So, Alice will have to pay an additional transaction fee upfront. We could balance this by asking an additional half gas fee from Bob that we transfer to Alice.
 - Down the road, we can have Bob pay 2/3 of the second round trnasactions, and alternate the extra transaction every subsequent round. If we wanted to be extra funky, we could make Bob pay for both the 2nd and 3rd rounds, since a draw is already unlikely and is increasingly unlikely as the game continues.

 Data definitions:
 - How can you alternate who pays the extra transaction each round?

Stop and write your answer.

- An if/else block will get us there. We'll test if it's an even or odd round and use that condition to determine who pays first. Note that as an extra elegancy, instead of simply copy pasting a big code block inside each branch of if and else and changing which participant goes first, we can write a doRound()

Program


Assertions
If you haven't already, what assertions will you include in the doRound() function? Are there any other assertions? Stop and write your answer.


- Like in our initial round of gameplay, we assert the unknowability of the first hands submitted per round to the second player.
- We also keep the assertion that, before the final transfer, the outcome must be that either player 1 or player 2 wins.

Interaction Introduction
Are there any pieces of contract state that would be useful to communicate to the front-ends that aren't already? (To some extent, this is a matter of personal preference and design).

- I implemented an informDraw function to precede further calls to getHands:
- I also added a UInt Who to informTimeout, to communicate who timed out:
- and I provided the hands from the winning round to seeOutcome:


Deployment decision

Now we have a fairer, cheaper Rock Paper Scissors! Congrats. To test, we simply modify index.mjs to get our modified user input (an array of hands instead of a single hand) and communicate our new parameters:

If you'd like to try the author's version of optimized, "serious" Rock Paper Scissors on a live net, with a complete backend & game search functionality, visit ____.