function CreateAnimals(location, numberOfLegs) { 
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

 CreateAnimals.prototype = {
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

function CreateDog(location, numberOfLegs, name, color) { 
    CreateAnimals.call(this, location, numberOfLegs);
    this.name = name;
    this.color = color;
}
 CreateDog.prototype.bark = function() {
    alert(`I am ${this.name} and I can bark 🐶`);
};
CreateDog.prototype.changeName = function(name) {
    this.name = name;
    return this.name;
},
CreateDog.prototype.changeColor = function(newColor) {
    this.color = newColor;
},
CreateDog.prototype.summary = function() {
  return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
}

Object.setPrototypeOf(CreateDog.prototype, CreateAnimals.prototype);

let maggie = new CreateDog('India', 4, 'maggie', 'black');

// using class

class CreateAnimals {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
   
        eat() {
            console.log(`I live in ${this.location} and I can eat`);
        }
        changeLocation(newLocation) {
            this.location = newLocation;
            return this.location;
        }
        summary() {
            return `I live in ${this.location} and I have ${this.numberOfLegs}`;
        }
}

class CreateDog extends CreateAnimals{
    constructor(location, numberOfLegs, name, color){
        super(location, numberOfLegs);
        this.name = name;
        this.color = color;
}  
    // CreateAnimals.call(this, location, numberOfLegs);
    bark() {
        alert(`I am ${this.name} and I can bark 🐶`);
    }
    changeName(name) {
        this.name = name;
        return this.name;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
    summary() {
      return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
    }
}
