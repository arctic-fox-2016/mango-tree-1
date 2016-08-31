"use strict"


class MangoTree {

  // Initialize a new MangoTree

    constructor(age,height,produce,harvested,healthy){
      this.age = age;
      this.height = height;
      this.produce = produce;
      this.harvested = harvested;
      this.healthy = healthy;

  }

  // Get current states here

  // Grow the tree
  grow(age,height) {

    this.age += age
    this.height += height
    return age, height
  }

  // Produce some mangoes
  produceMangoes(produce) {
    this.produce += Math.floor((Math.random()*5))+1
  }

  // Get some fruits
  harvest(harvested) {
    this.harvested += harvested
    return harvested
  }

  getAge() {
    return this.age;
  }
  getHeight() {
    return this.height;
  }
  getFruits() {
    return this.produce;
  }
  getHealthyStatus() {
    return this.healthy;
  }


}

class Mango {
  // Produce a mango
  constructor(quality) {
      this.quality = quality
  }
}


var tree1 = new MangoTree(1,30,0,0,false)
var manggo = new Mango("good");
console.log(`The tree is alive!:smile:`);

do {
  tree1.grow(1,2)
  tree1.produceMangoes()
  console.log(`[Year ${tree1.age}] Height = ${tree1.height} | Fruits harvested = ${tree1.produce}`)
}
while (tree1.healthy != false)
console.log(`the tree has met its end :sad:`)
