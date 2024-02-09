// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.



const markW = 78;
const markH = 1.69;
const johnW = 95;
const johnH = 1.88;

const markBMI = markW / (markH ** 2);
const johmBMI = johnW / (johnH ** 2)

// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

const markHigherBMI = markBMI > johmBMI;
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

console.log(`Mark's BMI (${markBMI}) is higher than john's (${johmBMI})`)