let helloHull = document.querySelector('#helloHull');
let helloFirepower = document.querySelector('#helloFirepower');
let helloAccuracy = document.querySelector('#helloAccuracy');
let alienHull = document.querySelector('#alienHull');
let alienFirepower = document.querySelector('#alienFirepower');
let alienAccuracy = document.querySelector('#alienAccuracy');

const helloWorld(name, hull, firepower, accuracy) {
  name = ["USS HelloWorld"],
  hull = ["20"],
  firepower = ['5'],
  accuracy = ['.7'],
}

const alienFleet = {
  name: ["Alien #1", "Alien #2", "Alien #3", "Alien #4", "Alien #5", "Alien #6"]
  hull: [3, 4, 5, 6],
  firePower: [2, 3, 4],
  accuracy: [.6, .7, .8]
}

class alienFleet {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}

class HelloWorld() {
  constructor(name, hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracty = accuracy;
  }
}

randomName = alienFleet.name[Math.floor(Math.random() * alienFleet.name.length)]
randomHull = alienFleet.hull[Math.floor(Math.random() * alienFleet.hull.length)];
randomFirepower = alienFleet.firepower[Math.floor(Math.random() * alienFleet.firepower.length)]
randomAccuracy = alienFleet.Accuracy[Math.floor(Math.random() * alienFleet.accuracy.length)]

const helloWorldShip = new HelloWorld(20, 5, .7)
console.log(helloWorldShip)

// //example of use of accuracy to determine a hit:
// if(Math.random() < alien[0].accuracy) { 
//   console.log('You have been hit!');