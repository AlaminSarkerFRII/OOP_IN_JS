const HouseRent = function (amount) {

    this.amount = amount;

}

HouseRent.prototype.increment = function(){
    this.amount +=1000;

    console.log(`Amount Increase Yaerly by ${this.amount}`)
}

HouseRent.prototype.decrement = function(){
    this.amount -=500;

    console.log(`Amount Decrease Yaerly by ${this.amount}`)
}


const myHouse = new HouseRent(5000);

console.log(myHouse.increment())
console.log(myHouse.decrement())

console.log(myHouse)