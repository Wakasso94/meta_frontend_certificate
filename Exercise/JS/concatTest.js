// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i, arr[i])
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);

// var family = {
//     father: "Wakasso",
//     mother: "Saliha",
//     son: "Ahmed"
// };
// console.log(family.mother);
// console.log(family);
// family.doter = "Farida";

// console.log(family.doter);

// function myDream(build, work, success) {
//     var myLife = [];
//     myLife.push(build);
//     myLife.push(work);
//     myLife.push(success);
//     myLife.pop();
//     return(myLife);
// }
// var help = myDream("My Feature", "work at Meta", "before 2024");
// console.log(help);

// console.log(help);

// var decimal = Math.random() * 10;

// var rounded = Math.ceil(decimal);
// console.log(rounded);
// var rounded = Math.floor(decimal);
// console.log(rounded);

// var Wakasso = "Bro ";
// var Ahmed = "where are you";
// console.log(Wakasso + Ahmed);
// console.log(Wakasso.concat(Ahmed));

// function addTwoNums(a, b) {
//     try{
//         if (typeof(a)!== "number"){
//             throw new ReferenceError("the first argument is not a number");
//         }
//         else if (typeof(b)!== "number"){
//             throw new ReferenceError("the second argument is not a number");
//         }
//         else {
//             console.log(a + b);
//         }
//     } catch(err) {
//         console.log("Error!",err);
//         console.log("It continuions");
//     }
// }
// addTwoNums("5", 5);

// var me = null;
// console.log(me);

// try {
//     Number(5).toPrecision(300)
// } catch(e) {
//     console.log("There was an error")
// }



// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//         console.log('Lights change to:', this.lightsOn)
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }
// let train3 = new Train('blue', false);
// train3.lightsStatus();
// train3.toggleLights();


// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLigths();
//         super.lightsStatus();
//         console.log('Lights are 100% operational.');
//     }
// }

// let highSpeedTrain1 = new HighSpeedTrain("Wakasso", 24, 'blue', true);
// highSpeedTrain1.toggleHighSpeed();
// console.log(highSpeedTrain1);
// highSpeedTrain1.getPrototype();



// class Animal {

// }

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

function concatStrings(strA, strB) {
  return strA + strB;
}

module.exports = concatStrings;