function createAnimals(location, numberOfLegs) {
    let animals = Object.create(animalsMethods);
    animals.location = location;
    animals.numberOfLegs = numberOfLegs;
    return animals;
}
let animalsMethods = {
    eat: function() {
        console.log(`I live in ${location} and I can eat`);
    },
    changeLocation: function(newLocation) {
        this.location = newLocation;
        return this.location;
    },
    summary: function() {
        return `I live in ${location} and I have ${numberOfLegs}`;
        
    }
}