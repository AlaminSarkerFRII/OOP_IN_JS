
function Computer(name, model) {

    this.name = name;
    this.model = model;

    this.getProperties = function () {
        console.log(`The Computer Name is ${this.name} the model of Comoputer is ${this.model}`)
    }
}



const dell = new Computer("Dell ", "Vostro4200")
const hp = new Computer("Dell ", "Vostro4200")

console.log(dell.getProperties())

console.log(dell)
console.log(hp)