'use strict';

//async & await
//clear style of using promise

//1. async 자동으로 Promise를 호출
async function fetchUser() {return 'Harry';}


const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await
//async가 붙은 함수 내에서만 사용가능
function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}
async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits () {
   const applePromise = getApple(); //Promise는 선언하자마자 시작
   const bananaPromise = getBanana(); //이를 통해 병렬적으로 
  const aplle = await getApple();
  const banana = await getBanana();
  return `${aplle} + ${banana}`;
}
 
pickFruits().then(console.log);

//3.useful Promise APIs
function pickAllFruits() {
  return Promise.all ([getApple(), getBanana()]).then (fruits => fruits.join(' + '));
}
pickFruits().then(console.log);

//먼저 return하는 값만 전달됨
function pickOnyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnyOne().then(console.log);