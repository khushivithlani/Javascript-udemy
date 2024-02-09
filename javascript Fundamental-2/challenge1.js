// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (first, second, third) => {
    const teamAverage = (first + second + third) / 3;
    return teamAverage;
}

let dolphinsScore = calcAverage(85, 54, 41);
let koalasScore = calcAverage(23, 34, 27);

// Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

const checkWinner = (dolphinsScore, koalasScore) => {
    if (dolphinsScore >= koalasScore * 2) {
        console.log(`winner is dolphins ${dolphinsScore} vs. ${koalasScore}`);
    } else if (koalasScore >= dolphinsScore * 2) {
        console.log(`winner is koala ${koalasScore} vs. ${dolphinsScore}`);
    } else {
        console.log('No team wins...')
    }

}

checkWinner(dolphinsScore, koalasScore)