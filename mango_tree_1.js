"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
        this.age = 0
        this.height = 0
        this.fruits = 0
        this.harvested = 0
        this.healthy = true;
        this.maxHeight = 5;
        this.maxAge = 20;
  }

  getAge(){
    return this.age
  }

  getHeight(){
    return this.height;
  }

  getFruits(){
    return this.fruits;
  }

  getHealthyStatus(){
    return this.healthy;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this.age +=1;
    this.height += 0.8;

    //this.capacity += Math.floor((Math.random()*5))+1;

    if(this.age == 20) this.healthy = false;
  }

  // Produce some mangoes
  produceMangoes() {
      this.fruits += Math.floor((Math.random()*5))+1;
  }

  // Get some fruits
  harvest() {
    if(this.fruits > 0)
    {
      this.harvested++;
    }else if(this.fruits <= 0){
      this.harvested = 0;
    }
  }
}

function getRandomNumber() {
}

var tree = new MangoTree()
console.log(`Tree is alive! :smile:`);

do {

  tree.grow()
  tree.produceMangoes()

  console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits
    harvested = ${tree.harvested}`);
}while (tree.healthy != false)

console.log(`The tree has met its end :sad:`);
