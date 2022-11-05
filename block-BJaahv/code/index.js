// Using function to create object

function  User(yourName, id, noOfProjects) {
    let series = {};
    series.name = yourName;
    series.id = id;
    series.projects = noOfProjects;
    series.getProjects = function() {
        return this.projects; 
          },
      series.changeName = function(newName) {
        this.name = newName;
          },
      series.incrementProject = function(val) {
          return this.projects += val; 
           },
      series.decrementProject = function(val) {
          return this.projects -= val; 
           }
    return series;
}



// prototypal pattern

function  User(yourName, id, noOfProjects) {
    let series = Object.create(userSeries);
    series.name = yourName;
    series.id = id;
    series.projects = noOfProjects;
    return series;
}

let userSeries = {
    getProjects: function() {
      return this.projects; 
        },
    changeName: function(newName) {
      this.name = newName;
        },
    incrementProject: function(val) {
        return this.projects += val; 
         },
    decrementProject: function(val) {
        return this.projects -= val; 
         },
            
}

// Using Pseudoclassical Way

function  User(yourName, id, noOfProjects) {
    this.name = yourName;
    this.id = id;
    this.projects = noOfProjects;
}

User.prototype = {
    getProjects: function() {
      return this.projects; 
        },
    changeName: function(newName) {
      this.name = newName;
        },
    incrementProject: function(val) {
        return this.projects += val; 
         },
    decrementProject: function(val) {
        return this.projects -= val; 
         },
            
}

// Using function to create object

class user  {
    constructor(yourName, id, noOfProjects) {
        this.name = yourName;
        this.id = id;
        this.projects = noOfProjects;
    }
    getProjects() {
        return this.projects;
    }
    changeName(newName) {
        this.name = newName;
    }
    incrementProject(val) {
        return this.projects += val; 
    }
    decrementProject(val) {
        return this.projects -= val; 
    }
    
}

let test1 = User("anup", 2587, 10);
let test2 = User("guru", "master", 22);