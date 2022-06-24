// hull=hitpoints. If hull <= 0, spaceship is destroyed.

//firepower=amount of damage done to hull with a hit

//accuracy=chance (0-1) that the ship will hit its target


const spaceship{
  name: "USS HelloWorld"
  hull: "20"
  firepower: "5"
  accuracy: "".7"
}

const alien{
  constructor(
  this.hull = hull
  this.firepower = firepower
  this.accuracy = accuracy
  )
}

//example of use of accuracy to determine a hit:
if(Math.random() < alien[0].accuracy) { 
  console.log('You have been hit!');
}