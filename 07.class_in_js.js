
class Computer {
    constructor(name, model) {

        this.name = name;
        this.model = model;

    }

    aboutComputer(){
        console.log(`this is ${this.name} computer thats moels is ${this.model}`)
    }
}

const dell = new Computer("dell", "4200");

dell.aboutComputer()

console.log(dell)