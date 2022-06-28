import Fleet from './fleet.js'

const fleet = new Fleet()
fleet.shuffleAlienFleet() 
console.log(fleet.ships)
const textElement = document.getElementById('text')
const optionsButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {

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
        setState: { }

      }
    ]
  }, 
  {
    id: 2,
    text: 
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