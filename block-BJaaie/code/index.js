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