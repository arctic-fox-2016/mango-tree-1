"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = 0
    this.height = 0
    this.fruit = 0
    this.MAX_FRUIT_NUM = 30
    this.harvested = 0
    this.healthy = true
    this.quality = "good"
  }

  // Get current states here
  getAge(){
    return this.age
  }
  getHeight(){
    return this.height
  }
  getFruits(){
    return this.fruit
  }
  getHealthyStatus(){
    return this.healthy
  }
  // Grow the tree
  grow() {
    this.age++
      if(this.age <=10){
          this.height +=  Math.round(getRandomNumber()*10)/10
    } else{
      let deceaseIndex =  this.age * Math.round(getRandomNumber()*100)/100
      if(deceaseIndex > 10){
        this.healthy = false
      }
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this.age <= 2){
      this.fruit = 0
    } else {
      this.fruit = (Math.round(getRandomNumber()*10)/10) * this.MAX_FRUIT_NUM
    }
    if(this.fruit > 0) this.harvest()
  }

  // Get some fruits
  harvest() {
    this.harvested = this.fruit
    this.fruits = 0;
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
  return Math.random()
}

var tree = new MangoTree()
console.log("The tree is Alive! :smile:")

do {
  tree.grow()
  tree.produceMangoes()

  console.log('[Year' + tree.age+'Report] height = '+tree.height+'| fruits harvest ='+tree.harvested)
}while (tree.healthy !=false)

console.log(`the tree has met its end. :sad:`);
