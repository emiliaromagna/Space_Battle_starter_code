const SIDES = ["USS", "Alien"]
const HULL = ['15'] //TK USS vs Alien range?
const FIREPOWER = ['5'] //TK range?
const ACCURACY = ['.7'] //TK range?
// const hullUss = ["15"]
// const firepowerUss = ['5']
// const accuracyUss = ['.7']

export default class Fleet { //flexible enough to handle any grouping/bunch/pile of ships
  constructor(ships = newBattle()) {
    this.ships = ships
  }
}

class Ship {
  constructor(side, hull, firepower, accuracy) {
    this.side = side
    this.hull = hull
    this.firepower = firepower
    this.accuracy = accuracy
  }
}

function newBattle() {
  return SIDES.flatMap(side => {
    return HULL.map(hull => {
      return FIREPOWER.map(firepower => {
        return ACCURACY.map(accuracy => {
          return new Ship(side, hull, firepower, accuracy)
        })
      })
      
    })
  })
}