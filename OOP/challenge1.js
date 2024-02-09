'use strict';
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
// 'speed' property. The 'speed' property is the current speed of the car in 
// km/h

const Car = function(make, speed){
     this.make = make;
     this.speed = speed
}

const BMW = new Car('BMW', 120);
console.log(BMW)

const Mercedes = new Car('Mercedes', 95)
console.log(Mercedes)

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, 
// and log the new speed to the console

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
// the new speed to the console

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

BMW.accelerate();
Mercedes.accelerate()
BMW.brake();
Mercedes.brake()