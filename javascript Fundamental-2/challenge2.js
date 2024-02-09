// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
let tips;
const calcTip = bill => {
    if (50 <= bill <= 300) {
        tips = bill * 15 / 100;
    } else {
        tips = bill * 20 / 100;
    }
    return tips;
}

console.log(calcTip(275));

// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
const bills = [125, 555, 44];

// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tip);

const total = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log(total);