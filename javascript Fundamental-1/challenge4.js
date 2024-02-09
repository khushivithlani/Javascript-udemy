// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 

const val = 275;
let tips;
50 <= val <= 300 ? tips = val * 15 / 100 : tips = val * 20 / 100;
console.log(tips);
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

console.log(`The bill was ${val}, the tip was ${tips}, and the total value ${val + tips}`);