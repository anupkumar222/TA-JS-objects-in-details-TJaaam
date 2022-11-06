// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.


// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 8. Convert the `createUser` function into `User` class.

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// your code goes here

// 1, 2

// function createUser(name, age) {
//     let user = {};
//         user.name = name;
//         user.age = age;
//         user.sayHello = function (){
//             alert(`Welcome ${user.name}`);
//         }
//    return user;
// }

// 3
// let personOne = createUser('anup', 27);
// let personTwo = createUser('GuRu', 26);

// 4 prototypal pattern

// function createUser(name, age) {
//     let user = Object.create(userMethod);
//         user.name = name;
//         user.age = age;
        
//    return user;
// }

// let userMethod = {
//     sayHello: function (){
//         alert(`Welcome ${user.name}`);
//     }
// }

// let personOne = createUser('anup', 27);
// let personTwo = createUser('GuRu', 26);


// let personOne = createUser('anup', 27);
// let personTwo = createUser('GuRu', 26);

//5 Pseudoclassical pattern

// function createUser(name, age) {
   
//         this.name = name;
//         this.age = age;
        
 
// }

// createUser.prototype = {
//     sayHello: function (){
//         alert(`Welcome ${this.name}`);
//     }
// }

// let personOne = createUser('anup', 27);
// let personTwo = createUser('GuRu', 26);

// 6 new
// function CreateUser(name, age) {

//       this.name = name;
//       this.age = age;
        
//     }

//     CreateUser.prototype = {
//     sayHello: function (){
//         alert(`Welcome ${this.name}`);
//     }
//         }

// let personOne = new CreateUser('anup', 27);
// let personTwo = new CreateUser('GuRu', 26);

// class

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert(`Welcome ${this.name}`);
    }
}

let personOne = new user('anup', 27);
let personTwo = new user('GuRu', 26);