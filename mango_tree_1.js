"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0.2
    this._harvested = 0
    this._healthy = true
    this._fruit = 0
    this._maxGrowAge = 15
  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this.getHealthyStatus() == true) {
        if (this._age < this._maxGrowAge) {
          this._height += getRandomNumber()
        }

        this._harvested = this.harvest()

        if (this._age == 19 ) {
          this._healthy = false
        }
        this._age += 1


      }
  }

  // Produce some mangoes
  produceMangoes() {
    return this._fruit = getRandomNumber() * 10;
  }

  // Get some fruits
  harvest() {
    this._harvested = getRandomNumber() * 10

    if (this._harvested > this.getFruit()) {
      this._harvested = this.getFruit()
    }

    return this._harvested
  }

  getAge() {
    return this._age
  }

  getHeight() {
    return this._height
  }

  getFruit() {
    return this._fruit
  }

  getHealthyStatus() {
    if (this._age == 20) {
      this._healthy = false
    } else {
      this._healthy = true
    }
    return this._healthy;
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
  return Math.floor(Math.random()*10);
}


var tree = new MangoTree()
console.log(`The tree is alive! :smile:`);


 do {
   tree.grow()
   tree.produceMangoes()

   console.log(`[Year ${tree._age} Report] Height = ${tree._height} | Fruits harvested = ${tree._harvested}`)
 } while (tree._healthy != false)

console.log(`The tree has med its end. :sad:`)
