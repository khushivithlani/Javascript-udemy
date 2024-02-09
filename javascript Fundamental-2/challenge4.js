// // 1. Create an array 'bills' containing all 10 test bill values

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


// // 2. Create empty arrays for the tips and the totals ('tips' and 'totals')

// const tips = [];
// const totals = [];


// // 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// // tips and total values (bill + tip) for every bill value in the bills array. Use a for
// // loop to perform the 10 calculations!
// let tip;

// const calcTip = bill => {
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 15 / 100;
//     } else {
//         tip = bill * 20 / 100;
//     }
//     return tip;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     totals[i] = tips[i] + bills[i];
// }
// console.log(tips);
// console.log(totals);


// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
// an argument. This function calculates the average of all numbers in the given 
// array.
const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));