// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is 
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
// humanAge = 16 + dogAge * 4
let humanAge = [];
const calcAverageHumanAge = function(ages){
    const humanAge =  ages.map( age => (age <=2 ? 2*age : 16+age*4))
    console.log(humanAge);  
    const eighteen = humanAge.filter(age => age >= 18)
    console.log(eighteen)
    let sum = 0;
    const avg = eighteen.reduce((acc, age, i, arr) => acc+ age/ arr.length, 0)
    console.log(avg)
}

console.log(calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]))
console.log(calcAverageHumanAge(  [16, 6, 10, 5, 6, 1, 4]))