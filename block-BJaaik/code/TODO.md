## Create Class

Convert the given image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)
```js
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        return `${this.name} can eat`
    }
    sleep() {
        return `${this.name} can sleep`
    }
     walk() {
        return `${this.name} can walk`
    }
}
class Players extends Person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender);
        this.sportsName = sportsName;
    }
    play() {
        return `${this.name} plays ${sportsName}`;
    }
}
class Cricketer extends Players {
    constructor(name, age, gender, teamName) {
        super(name, age, gender);
        this.teamName = teamName;
    }
    playCricket() {
        return `${this.name} plays ${teamName}`;
    }
}
class Teacher extends Person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender);
        this.instituteName = instituteName;
    }
    teach() {
        return `${this.name} teaches in ${instituteName}`;
    }
}
class Artist extends Person {
    constructor(name, age, gender, kind) {
        super(name, age, gender);
        this.kind = kind;
    }
    creatArt() {
        return `${this.name} teaches in ${kind}`;
    }
}
```