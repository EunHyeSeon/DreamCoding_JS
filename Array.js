'use strict';

//Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]); //console.log(fruits.length - 1);

console.clear();
//3. Looping over an array
//print all fruits
//a. for loop
for (let i=0; i<fruits.length; i++) {
  console.log(fruits[i]);
}
//b. For of
for (let fruit of fruits) {
  console.log(fruit);
}
//c. forEach
fruits.forEach((fruit) => console.log(fruit));

//4. Addition, delection, copy
//push: add an item to the end
fruits.push('🍊');
console.log(fruits);

//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//add an item to the beginning 


