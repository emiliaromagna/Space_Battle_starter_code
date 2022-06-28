import Fleet from './fleet.js'

const fleet = new Fleet()
fleet.shuffleAlienFleet() 
console.log(fleet.ships)

startGame()
function startGame() {
  
}


// //example of use of accuracy to determine a hit:
// if(Math.random() < alien[0].accuracy) { 
//   console.log('You have been hit!');
// }


// git add .
// git commit -m    MESSAGETKINQUOTES
// git push origin main