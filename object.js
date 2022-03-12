//Objects
// object = {key:value};
//1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = 'wendy';
const age = 27;
print (name, age);
function print (name, age) {
    console.log(name);
    console.log(age);
}

const wendy = {name: 'Wendy', age: 27};
function print(person) {
    console.log(person.name);
    console.log(person.age);
}
print(wendy);

//2.Computed properties
//key should be always string
console.log(wendy.name);
console.log(wendy['name']);

//3.Property value shorthand
//반복 작성을 function을통해 값만 넣어주는 것으로. or class 사용
const person1 = {name: 'bob', age: 25};
const person2 = makePerson('john', 30);
console.log(person2);

//4. Constructor function
function makePerson(name, age) {
          this.name = name;
        this.age = age; 
}

//5. in Operator: property existence check (key in object)
console.log('name' in wendy);

//6. for..in vs for..of
//for(key in object)

//for (value of iterable)
const array = [1, 2, 3, 5];
for (value of array) {
    console.log(value);
}

//7. Fun cloning
//Object.assign (dest, [obj1, obj2, obj3..])
const user = {name: 'tony', age: 45};
const user2 = user;
user2.name = 'harry';
console.log(user);//harry

const user3 = {};
Object.assign(user3, user) //user3에 user objest 할당
console.log(user3); // user

//another example
const fruit1 = {color: 'red'};
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
//뒤 dbj가 앞 obj에 덮음