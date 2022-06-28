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

// //example of use of accuracy to determine a hit:
// if(Math.random() < alien[0].accuracy) { 
//   console.log('You have been hit!');
// }


// git add .
// git commit -m    MESSAGETKINQUOTES
// git push origin main