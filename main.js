'use strict';
//Object-oriented programming
//class: template
//object: instance of a class
 // 1. Class declaration
 class Person {
     constructor(name, age){
         //fields
         this.name = name;
         this.age = age;
     }
//methods
speak () {
    console.log(`${this.name}: hello!`);
 }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();
//2. Getter setter
class User {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age; 
    }
    get age() {
     return this._age;   
    }
    set age (value){
      
        this._age = value < 0 ? 0 : value;
    }
}

//예시 const user1 = new User('Steve', 'Job', -1);

