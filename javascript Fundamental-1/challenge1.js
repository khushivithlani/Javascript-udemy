// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).


// 1. Store Mark's and John's mass and height in variables
let markW = 78;
let markH = 1.69;

let johnW = 95;
let johnH = 1.88;

// 2. Calculate both their BMIs using the formula 
let markBMI = markW / markH ** 2;
let johmBMI = johnW / johnH ** 2

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markHigherBMI = markBMI > johmBMI;
console.log(markHigherBMI);