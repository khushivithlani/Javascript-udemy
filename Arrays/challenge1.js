// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
// about their dog's age, and stored the data into an array (one array for each). For 
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
// old.

let dogsJulia =  [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];

// 1. Julia found out that the owners of the first and the last two dogs actually have 
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
// ages from that copied array (because it's a bad practice to mutate function 
// parameters)

const checkDogs = function(ddogsJulia,dogsKate ) {
    
   console.log(dogs.slice(1, -2))

   dogs.forEach(function(dog, i){
    if(dog >= 3){
        console.log(`Dog number ${i+1} is an adult, and is ${dog} year old`);
    }else{
        console.log(`Dog number ${i+1} is still puppy 🐶`)
    }
   });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])

// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
// �
// ")