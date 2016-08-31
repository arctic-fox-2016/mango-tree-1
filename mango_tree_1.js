"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age = 0;
    this._height = 0.8;
    this._fruits = 0;
    this._harvested = 0;
    this._health = true;
  }

  // Get current states here

  getAge(){
    return this._age + 1;
  }

  getHeight(){
    return (this._age % 2 == 0) ? this._height += getRandomNumber() : this._height;
  }

  getFruits(){
    return this._fruits;
  }

  getHealtyStatus(){
    if(this._age >= 20) return false;
    return true;
  }

  // Grow the tree
  grow() {
    this._age = this.getAge();
    this._height = this.getHeight();
    this._healty = this.getHealtyStatus() ? true : false;
    this._height = this.getHeight();

    this.produceMangoes();
    this.harvest();
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruits += getRandomNumber();
  }

  // Get some fruits
  harvest() {
    this._harvested = getRandomNumber(this._fruits);
    this._fruits -= this._harvested;
  }
}

class Mango {
  // Produce a mango
  constructor() {
    var tree = new MangoTree();
    console.log(`The tree is alive! :smile:`);

    do {
      tree.grow();
      tree.produceMangoes();

      console.log(`[Year ${tree._age} Report] Height = ${tree._height} m | Fruits harvested = ${tree._harvested}`);
    } while (tree._healty != false);

    console.log(`The tree has met its end. :sad:`);
  }
}

function getRandomNumber(number_max = 5) {
  return Math.floor(Math.random() * number_max) + 1;
}

var arum_manis = new Mango();
