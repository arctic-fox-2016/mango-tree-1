"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.MAX_HEIGHT = 5;
    this.MAX_GROWTH = 1;
    this._healthy = true;
    this._age = 0;
    this._height = 0;
    this._harvested = 0;
    this._fruitsBeginning = 0;
    this._fruitsEnd = 0;
    this._produce = 0;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age++;

    this._height += getRandomNumber() * this.MAX_GROWTH;
    if (this._height >= this.MAX_HEIGHT) {
      this._height = this.MAX_HEIGHT;
      this._healthy = false;
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruitsBeginning = this._fruitsEnd;

    if (this._height >= this.MAX_HEIGHT) {
      this._produce = 0;
    } else {
      this._produce = Math.ceil(getRandomNumber() * 1000);
    }
  }

  // Get some fruits
  harvest() {
    this._harvest = Math.floor(getRandomNumber() * 900);

    if (this._harvest >= this._fruitsBeginning + this._produce) {
      this._harvest = this._fruitsBeginning + this._produce;
    }

    this._fruitsEnd = this._fruitsBeginning + this._produce - this._harvest;
  }

  // Get tree age
  getAge() {
    return this._age;
  }

  // Get tree height
  getHeight() {
    return this._height;
  }

  // Get fruits
  getFruits() {
    return this._fruitsEnd;
  }

  // Get tree health status
  getHealthyStatus() {
    return this._healthStatus;
  }
}

class Mango {
  // Produce a mango
  constructor() {
    this._quality = "";
  }

  // Qualitas buah mangga
  getMangoQuality() {
    var qs = getRandomNumber();

    if (qs < 1/4) {
      this._quality = "Shit";
    } else if (qs < 1/2) {
      this._quality = "Average";
    } else if (qs < 3/4) {
      this._quality = "Great";
    } else if (qs <= 1) {
      this._quality = "TASTEY";
    }
  }
}

function getRandomNumber() {
  return Math.random();
}

// Test case
var tree = new MangoTree();
var mango = new Mango();
var fruitsHarvested = 0;
console.log(`The tree is alive! :smile:`);

do {
  tree.grow();
  tree.produceMangoes();
  mango.getMangoQuality();
  tree.harvest();

  console.log(`[Year ${tree._age} Report] Height = ${Number(tree._height, 2).toFixed(2)} m | Produced = ${tree._produce} | Quality = ${mango._quality} | Harvested = ${tree._harvest} | Left = ${tree._fruitsEnd}`);

  fruitsHarvested += tree._harvest;

} while (tree._healthy == true || tree._fruitsEnd > 0);

console.log(`The tree has met its end. :sad:`);
console.log(`You harvested ${fruitsHarvested} mangoes. :happy:`);
