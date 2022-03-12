'use strict';
//Class: template, declare once, no data in
//object: instance of a class

//1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak () {
        console.log(`${this.name}: hello!`);
    }
}

const Dullie = new Person('Dullie', 25);
console.log(Dullie.name);
console.log(Dullie.age);
Dullie.speak();

//2.Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this.a_ge;
    }
    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this.ag_e = value; // get 과 set 변수 값 다르게
    }
}

const user1 = new User('Steve', 'jobs', -1);//사용자의 실수로  잘못된 값 잡기

//3.Fields (public, private) // 사용 시 babel 
class Experiment {
    publicField = 2;
    #privateFeild = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateFeild); // undefined

//4.Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor (articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher () {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//5. Inheritance
//a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw () {
        console.log(`drawing ${this.color} color of`);
    }
    getArea () {
        return width * this.height;
    }    
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
      console.log('ㅅ');  
    }
    getArea () {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class chechking: instanceOf 앞 Object가 뒤에 class를 통해 만들어졌는지 아닌지를 판단, True, False
console.log(rectangle instanceof Rectangle);//True
console.log(triangle instanceof Rectangle);//False
console.log(triangle instanceof Triangle);//True
console.log(triangle instanceof Shape);//True
console.log(triangle instanceof Object);//True /all class = object