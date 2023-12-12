//  Static Methods in javascript OOP --> static keywords




class Computer {


    constructor(name, value) {

        this.name = name ;
        this.value = value ;
    }

    
   static aboutComputer = function(){
        console.log(`this is a ${this.name}, values of this compuiter ${this.value}`)
    }


}



const dell = new Computer("dell", "4200")

console.log(dell)
console.log(Computer.aboutComputer())




