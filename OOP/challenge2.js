// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

class CarCl {
     constructor(make , speed){
        this.make = make;
        this.speed = speed;
     }

     accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
      }
    
      brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);}

//      2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
//         by 1.6)

    get speeUS() {
        return this.speed/1.6;
    } 
    // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
    //     converts it to km/h before storing the value, by multiplying the input by 1.6)
    set speeUS(speed){
        this.speed = speed * 1.6;
    }
    
 }

const ford = new CarCl('Ford', 120)
console.log(CarCl.speeUS)
console.log(ford)
ford.accelerate();
ford.brake();
ford.speeUS = 50;
console.log(ford)