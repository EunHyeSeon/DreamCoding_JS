//JSON = JavaScript Object Notation
//Object {key : value}
//independent programming language and platform

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const cat = {
  name: 'meonji',
  color: 'gray',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump`);
  },
};

json = JSON.stringify(cat);
console.log(json);

json = JSON.stringify(cat, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'nemo' : value;
});
console.log(json);

//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(cat);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
cat.jump();

console.log(cat.birthDate.getDate());
console.log(obj.birthDate.getDate());