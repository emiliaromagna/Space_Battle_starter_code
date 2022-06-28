const SIDES = ["USS", "Alien"]

// const hullUss = ["15"]
// const firepowerUss = ['5']
// const accuracyUss = ['.7']


class Fleet { //flexible enough to handle any grouping/bunch/pile of ships
  constructor(ships = battleFormation()) {
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

function battleFormation() {
  return 
}