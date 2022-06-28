const SIDES = ["USS", "Alien"]
const HULL = ['15'] //TK USS vs Alien range?
const FIREPOWER = ['5'] //TK range?
const ACCURACY = ['.7'] //TK range?
// const hullUss = ["15"]
// const firepowerUss = ['5']
// const accuracyUss = ['.7']

//flexible enough to handle any grouping/bunch/pile of ships
export default class Fleet { 
  constructor(ships = newBattle()) {
    this.ships = ships
  }

  get numberOfShips() {
    return this.ships.length;
  }

  shuffleAlienFleet() {
    for (let i = this.numberOfShips - 1; i > 0; i--){
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.ships[newIndex]
      this.ships[newIndex] = this.ships[i]
      this.ships[i] = oldValue
    }
  }
}



//not 100% accurate in creating a real sort; can't include Math.random insie of .sort
//   shuffle(){ 
//     this.cards.sort((a, b) => Math.random() - .5)
//   }
// }

class Ship{
  constructor(side, hull, firepower, accuracy) {
    this.side = side
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
}

function newBattle() {
  return SIDES.flatMap(side => { 
        return new Ship(side, HULL, FIREPOWER, ACCURACY)
      })
        }

        // //example of use of accuracy to determine a hit:
// if(Math.random() < alien[0].accuracy) { 
//   console.log('You have been hit!');

// // git add .
// git commit -m    MESSAGETKINQUOTES
// git push origin main