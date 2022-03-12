//1. String concatenation
console.log('my'+'cat');
console.log('1' +2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);//``줄바꿈 가능
console.log('ellie\'s book'); // 중간에 ' 넣는 법 \', \n = 줄바꿈 /t = tab
//2. Numeric operators
console.log(1+1);//add
console.log(1-1);//substract
console.log(1/1);//divide
console.log(1*1);//multiply
console.log(5%2);//remainder
console.log(2**3);//exponentitation 제곱

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
//  counter = counter + 1;
//  preIncrement = counter;
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement = counter; 3
// counter = counter + 1; 4
const preDcrement = --counter;
console.log(`preDcrement: ${preDcrement}, counter: ${counter}`);
const postDcrment = counter--;
console.log(`postDcrement: ${postDcrment}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y;
x /= y;

//5.Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: || (or), && (and), !(not)
const value1 = false;
const value2 = 4 < 2;

//|| (or) 앞에서 참이면 진행 안함.
console.log(`or: ${value1 || value2 || check()}`); //function같이 무거움 아이는 맨 뒤에
                                                    //작성하는 것이 효율
function check() {
for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('ㅠㅠ');
    }
    return true;
}

// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) { 
    nullableObject.somthing;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);// True
console.log(stringFive !== numberFive);// False

// === strict equality, no type conversion
console.log(stringFive === numberFive); //False
console.log(stringFive !== numberFive); // True

//object equality by reference
const HS1 = {name: 'HS'};
const HS2 = { name: 'HS'};
const HS3 = HS1;
console.log(HS1 == HS2); //False
console.log(HS1 === HS2); //False
console.log(HS1 === HS3); //True

// equality = puzzler
console.log(0 == false); //True
console.log(0 === false); // False
console.log('' == false); // True
console.log('' === false); //False
console.log(null == undefined); // True
console.log(null === undefined); // False

//8. Conditional operators: if
// if, else if, else
const n_ame = 'EHS'; // EHS=welcome, coder=You are amaxing coder, etc = unknown
if (n_ame === 'EHS') {
    console.log('Welcome');
} else if (n_ame === 'coder') {
    console.log('You are amaxing coder');
} else {
    console.log('unknown');
}

//9. Ternary operator: ?
//simple 
// condition ? value1 : value2;
console.log(n_ame === 'EHS' ? 'yes' : 'no'); // True - value1, False - value2

//10 Switch statement
// use for multiple if checks
//use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all');
        break;
}
//11. Loops
//while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
} 

//do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // 이떄 멈춤

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}
//nested loops
for(let i =0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers(use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1.${i}`);
}

//Q2. iterate from 0 to 10 and print numbers until reching 8 (use break)
for ( let i = 0; i < 11; i++) {
    if (i <= 8) {
        console.log(`q2: ${i}`);
    } 
        break;
}