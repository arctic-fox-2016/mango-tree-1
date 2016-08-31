"use strict"

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.age = Math.floor(Math.random()*10)
    this.height = Math.floor(Math.random()*100)
    this.fruits = Math.floor(Math.random()*40)
    this.healthy = Math.random()
    this.panen = Math.floor(this.fruits*0.5)
    if (this.healthy<0.5){
      this.healthyStatus = "Bagus"
    } else {
      this.healthyStatus = "Jelek"
    }
  }

  // Get current states here
  getAge(){
    return this.age
  }
  getHeight(){
    return this.height
  }
  getFruits(){
    return this.fruits
  }
  getHealthyStatus(){
    return this.healthyStatus
  }

  // Grow the tree
  grow() {
    this.age = this.age +1
    if (this.age<20){
      this.height = this.height + Math.floor(Math.random()*10)
    } else {

    }
    this.produceMangoes()
    this.harvest()
  }

  // Produce some mangoes
  produceMangoes() {
    this.fruits = this.fruits + Math.floor(Math.random()*10)
  }

  // Get some fruits
  harvest() {
    this.panen = Math.floor(this.fruits *0.5)
    this.fruits = this.fruits - this.panen
  }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}

function getRandomNumber() {
}

let manggaku = new MangoTree()
for (let i=0;i<=20;i++){
  console.log("Year ",i," report. Umur pohon: ", manggaku.age, ". Tinggi pohon: ", manggaku.height, ". Kualitas Buah: ", manggaku.healthyStatus, "Jumlah yang berbuah: ",manggaku.fruits, "Jumlah yg di panen: ", manggaku.panen)
  manggaku.grow()
}
