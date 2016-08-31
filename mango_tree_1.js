"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor(age, h,kapasitas,fruits,healthyStatus) {
    this._age  = 0
    this._h = 0
    this._kapasitas = kapasitas
    this._fruits = fruits
    this._healthyStatus = healthyStatus
  }

  // Get current states here
  getAge(){
    return this._age
  }

  getHeight(){
    return this._h
  }

  getKapasitas(){
    return this._kapasitas
  }

  getFruits(){
    return this._fruits
  }

  getHealthyStatus(){
    return this._healthyStatus
  }
  // Grow the tree
  grow() {
    let tinggi=0
    let buah=0
    var status=true
    var statusFix = true;
    for(var i = 0 ; i<20 ; i++){
      tinggi = getRandomHeight()
      buah   = getRandomNumber()
      this._h = eval(this._h+ '+' +tinggi.toFixed(2))
      this._fruits = buah
      tree._age++
      console.log(`[Year ${tree._age}] Report] Height = ${tree._h} m | Fruits harvested = ${tree._fruits}`)
    }
  }

  // Produce some mangoes
  produceMangoes() {
  }

  // Get some fruits
  harvest() {
  }
}

class Mango {
  // Produce a mango
  constructor(kualitas) {
    this.kualitas = kualitas
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 20) + 1
}

function getRandomHeight(){
  var num = Math.random() * (2 - 0) + 0
  return num;
}

function randomStatusPohon()
{
    return(Math.floor(Math.random() * 10) + 1==1)
}

var tree = new MangoTree()
console.log(`The tree is alive! :smile:`)

//do{

  tree.grow()
console.log(`The tree has met its end! :sad:`)
  tree.produceMangoes()

//}while(tree._healthyStatus==true)
