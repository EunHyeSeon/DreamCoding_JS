//Ternary Operator
//Bad Code
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result;
}
//=>
function getResult2(score){
  return score > 5 ? '👍' : '👎';
}

//Nullish coalescing operator ??
//leftExpr ?? rightExpr
//left가 null이거나 undefined일때 rightExpr 실행
//bad code
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display';
  }
  console.log(message);
}
//=>
//Default parameter is only for undefined
function printMessage2 (text) {
  const message = text ?? 'Nothing to display';
  console.log(message);
}

//Logical OR operator ||
//leftExpr || rightExpr
//left == false => right console
function printMessage3 (text) {
  const message = text || 'Nothing to display';
  console.log(message);
}

//Object Destructuring
const person = {
 name: 'romeo',
 age: 18,
 phone: '0100001111',
};

//bad code
function displayPerson (person) {
  displayAvatar (person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}
//good code
function displayPerson2 (person) {
  const { name, age} = person;
  displayAvatar (name);
  displayName(name);
  displayProfile(name, age);
}

//Spread Syntax - Object 
// Object + Object = Object
const item = {type: 'shirt', size: 'M'};
const detail = {price: 20, made: 'Korea', gender: 'M'};

//bad code
item['price'] = detail.price;

const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

const newObject2 = {
type : item.type,
size : item.size,
price : detail.price,
made : detail.made,
gender : detail.gender,
};

//good code
const shirt0 = Object.assign(item, detail);

const shirt = { ...item, ...detail, price: 40};//enable update

//Spread Syntax - Array
let fruits = ['🍎', '🍐', '🍊'];
//fruits.push('🍓');
fruits = [...fruits, '🍓']; 
//fruits.unshift('🍇');
fruits = ['🍇', ...fruits];

const fruits2 = ['🥝', '🫐'];
let combined = fruits.concat(fruits2);
combined = [...fruits, '🍒', ...fruits2]; //중간 값 더하기 가능

//Optional Chaining
const bob = {
  name: 'bob',
  age: 20,
};
const anna = {
  name: 'anna',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

//bad code
function displayJobTitle (person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

//good code
function displayJobTitle2 (person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

function displayJobTitle2 (person) {
  const title = person.job?.title ?? 'No Job Yet';
  console.log(title);
}

//Template Literals (Template String)
const perso_n = {
  name: 'john',
  score: 5, 
};

//Bad code
console.log('Hello' + perso_n.name + ', Your current score is: ' + perso_n.score);

//good code
console.log(`Hello ${perso_n.name}, Your current score is: ${perso_n.score}`);
//2
const {name, score } = perso_n;
console.log(`Hello ${name}, Your current score is: ${score}`);
//3
function greetings (person) {
  const {name, score } = perso_n;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}

//Looping
const items = [1, 2, 3, 4, 5, 6];
const result = items
  .filter((num) => num % 2 ===0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);

//Promise -> Async/await

//bad code
function displayUser() {
  fetchUser ()
    .then((user) => {
      fetchProfile (user)
       .then((profile) => {
         updateUI(user, profile);
       });
    });
}

//good code
async function displayUser2 () {
  const user = await fetchUser();
  const profile = await fetchProfile();
  updateUI(user, profile);
}