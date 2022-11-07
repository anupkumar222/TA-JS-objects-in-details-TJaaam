function createAnimals(location, numberOfLegs) {
    let animals = Object.create(animalsMethods);
    animals.location = location;
    animals.numberOfLegs = numberOfLegs;
    return animals;
}
let animalsMethods = {
    eat: function() {
        console.log(`I live in ${this.location} and I can eat`);
    },
    changeLocation: function(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberOfLegs}`;

    }
}
// for dog
function createDog(location, numberOfLegs, name, color) {
    let animals = createAnimals(location, numberOfLegs);
    Object.setPrototypeOf(animals, dogMethods);
    animals.name = name;
    animals.color = color;
    return animals;
}

let dogMethods = {
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColor(newColor) {
        this.color = newColor;
    },
    summary() {
      return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    },
};
Object.setPrototypeOf(dogMethods, animalsMethods);

// for cat
function createCat(location, numberOfLegs, name, colorOfEyes) {
    let animals = createAnimals(location, numberOfLegs);
    Object.setPrototypeOf(animals, catMethods);
    animals.name = name;
    animals.colorOfEyes = colorOfEyes;
    return animals;
}

let catMethods = {
    meow() {
        alert(`I am ${this.name} and I can do mewo meow 😹`);
    },
    changeName(name) {
        this.name = name;
        return this.name;
    },
    changeColorOfEyes(newColor) {
        this.colorOfEyes = newColor;
    },
    summary() {
      return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
      ;
    },
};
Object.setPrototypeOf(catMethods, animalsMethods);