// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// 1. Calculate the average score for each team, using the test data below

const dolphinAVG = (98 + 108 + 89) / 3;
const koalasAVG = (88 + 91 + 110) / 3;


// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// if (dolphinAVG > koalasAVG) {
//     console.log("The winner is Dolphin");
// } else if (dolphinAVG < koalasAVG) {
//     console.log("The winner is koala");
// } else {
//     console.log("match is draw");
// }

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.

// const dolphinAVG2 = (97 + 112 + 101) / 3;
// const koalasAVG2 = (109 + 95 + 123) / 3;

// console.log(dolphinAVG, koalasAVG2)

// if (dolphinAVG2 > koalasAVG2 && dolphinAVG2 >= 100) {
//     console.log("the winner is Dolphin");
// } else if (dolphinAVG2 < koalasAVG2 && koalasAVG2 >= 100) {
//     console.log("the winner is koala")
// }


// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

const dolphinAVG2 = (97 + 112 + 101) / 3;
const koalasAVG2 = (109 + 95 + 106) / 3;

if (dolphinAVG2 == koalasAVG2 && dolphinAVG2 >= 100 && koalasAVG2 >= 100) {
    console.log("match is draw")
}