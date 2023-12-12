

class Home {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    aboutHome() {
        console.log(`The Home is ${this.name} ,  address is ${this.address}`)
    }
}

// Extands Home 


class Contact extends Home {

    constructor(name, address, number,) {
        super()
        this.number = number;
        this.name = name;
        this.address = address;
    }
}



const home = new Home("AT", "Rangpur");
const contact = new Contact("TA", "ADING", 120);



console.log(home.aboutHome())
console.log(contact)