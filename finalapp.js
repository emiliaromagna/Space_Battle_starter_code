//Defining ALL our global variables pointing to the different divs we need reference to
var topRow = document.getElementById('topRow');
var statRow = document.getElementById("statRow");
var playerStats = document.getElementByClassName("playerStats");
var enemyStats = document.getElementByClassName('enemyStats');
var buttonRow2 = document.getElementById('buttonRow2');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

//Define battle variables
let helloHull = document.querySelector('#helloHull');
let helloFirepower = document.querySelector('#helloFirepower');
let helloAccuracy = document.querySelector('#helloAccuracy');
let alienHull = document.querySelector('#alienHull');
let alienFirepower = document.querySelector('#alienFirepower');
let alienAccuracy = document.querySelector('#alienAccuracy');


function beginning(){
}

function startGame(){
   topRow.innerHTML = "You are faced with an alien ship. <br><br>Attack or Retreat? <br><br>Click below and decide your destiny.";
  buttonRow2.style.visibility = 'visible';
  btn2.style.visibility = 'visible';
}

function attack(){
  if //buttonAttack
  topRow.innerHTML = ;
  buttonRow2.style.visibility = 'visible';
  btn2.style.visibility = 'visible';
}

//If For Loops Attempt
function attack(){
    var attackChoice = Math.ceil(Math.random()*3);
    if attackChoice == 1 {
      var hitChance = Math.round(Math.random()*10);
      if (hitChance > 3) {
       var damage = Math.round(Math.random()*10)+10;
       enemyStats -= damage;
       //can't go negative
       if (playerStats < 0){
         playerStats = 0
       }
       topRow.innterHTML += "<br>Alien hit you with a blast of " + damage + "damage. Alien now has " +  playerStats + "hp."
       //change stats here
       playerStats.style.width = playerStats + 'px';
  
    } else if (attackChoice == 2){
      var hitChance = Math.round(Math.random()*10);
      if (hitChance > 3//TK) {
       var damage = Math.round(Math.random()*10)+10;
       enemyStats -= damage;
       //can't go negative
       if (playerStats < 0){
         playerStats = 0
       }
       topRow.innterHTML += "<br>You hit the Alien with your blast " + damage + "damage. Alien now has " +  enemyStats + "hp."
       //change stats here
  
    } else {
        topRow.innerHTML += "<br>Alien missed";
    }
    if (playerStats == 0) {
      topRow.innerHTML += "<br>The Alien has defeated you!!!!!!!<br><button onclick = 'restartGame()'>Play Again</button>";

    }
  }
  
}

function alienAttack(){
  
}

//ATTEMPT WITH MOREJAVASCRIPT

let helloHull = document.querySelector('#helloHull');
let helloFirepower = document.querySelector('#helloFirepower');
let helloAccuracy = document.querySelector('#helloAccuracy');
let alienHull = document.querySelector('#alienHull');
let alienFirepower = document.querySelector('#alienFirepower');
let alienAccuracy = document.querySelector('#alienAccuracy');

const helloWorld(name, hull, firepower, accuracy) => {
  name = ["USS HelloWorld"],
  hull = ["20"],
  firepower = ['5'],
  accuracy = ['.7'],
}

class Alienship{
  constructor(name, hull, firepower, accuracy) {
    this.name = name
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
}

// console.log(helloWorld)

const alienFleet = {
  name: ["Alien #1", "Alien #2", "Alien #3", "Alien #4", "Alien #5", "Alien #6"]
  hull: ["3", "4", "5", "6"],
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

class HelloWorld() => {
  constructor(name, hull, firepower, accuracy), {
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


//ATTEMPT WITH TEXTNODES ALA DECK OF CARDS

const fleet = new Fleet()
fleet.shuffleAlienFleet() 
console.log(fleet.ships)
const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')
const NAME = ["Alien" + "[i]"]
const HULL = ['15'] //TK USS vs Alien range?
const FIREPOWER = ['5'] //TK range?
const ACCURACY = ['.7'] //TK range?

const HelloWorld() {
  namehw = ["USS HelloWorld"]
  hullhw = ["15"]
  firepowerhw = ['5']
  accuracyhw = ['.7']
}

//flexible enough to handle any grouping/bunch/pile of ships
export default class AlienFleet { 
  constructor(Alienship = newBattle()) {
    this.ships = ships
  }

  get numberOfShips() {
    return this.ships.length;
  }

//   shuffleAlienFleet() {
//     for (let i = this.numberOfShips - 1; i > 0; i--){
//       const newIndex = Math.floor(Math.random() * (i + 1))
//       const oldValue = this.ships[newIndex]
//       this.ships[newIndex] = this.ships[i]
//       this.ships[i] = oldValue
//     }
//   }
// }



//not 100% accurate in creating a real sort; can't include Math.random insie of .sort
//   shuffle(){ 
//     this.cards.sort((a, b) => Math.random() - .5)
//   }
// }

class Alienship{
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}

function newBattle() {
  return NAME.flatMap(name => { 
        return new Alienship(NAME, HULL, FIREPOWER, ACCURACY)
      })
        }

        // where the textNode begins

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if(showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.textbutton.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.
}

function selectOption(option) {

}

const textNodes = []

const textNodes = [
  {
    id: 1,
    text: 'The alien approaches. Will you attack or retreat?',
    options: [
      {
        text: 'Attack!'
        setState: { attack: true },
        nextText: 2
      },
      {
        text: 'Retreat!',
        nextText: 2

      }
    ]
  }, 
  {
    id: 2,
    text: "Round 2"
    options: [
      {
        text: 'AOPTION',
        requiredState: (currentState) => currentState.attack
        setState: { }
        nextText: 3
      },
    ]
  }
]

startGame()