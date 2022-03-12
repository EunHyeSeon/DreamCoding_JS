//Function
//fundmental building block in the program

//1. Function declaration
//function name (param1, param2) {body...return;}
//one function === one thing
//function os Object in JS => function.method possible
function printHello() {
    console.log('Hello');
}
printHello();

//2.Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
} 
const HyeSeon = {_name : 'Eun'};
changeName(HyeSeon);
console.log(HyeSeon);

//3. Default parameters (added in ES6)
function showMessage (message, from = 'default') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4.Rest parameters 
// ...args = array type
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'with', 'coding');

// 5.Local scope
let globalMessage = 'global'; // global variable
function printMessage() {  //부모함수
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother () {
        console.log(message);
        let childMessage = 'hello';// child 는 child에서만 
    }
}
printMessage();

//6. return a value
// no return = return undefined;
function sum (a,b) {
    return a + b;
}
const result = sum (2, 3); //5
console.log(`sum: ${sum(2, 3)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic..
    }
}
//good
function upgradeUser(user) {
    if (user.point > 10) {
        return;
    }
}

//First-class function
//functions are treated like any other variable

//1. Function expression
// a function declaration can be called earlier than it is defiend.(hoisting)
// a function expression is created when the execution reaches it.
const print = function() { //=> anonymous function => no name
    console.log('print');
};
print();
const printAgain = print ;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else{
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
};

//named function 
//better debugging in debugger's stack traces
const printNo = function print() {
    console.log('no..');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint1 = function () {
    console.log('simplePrint');
};
const simplePrint2 = () => console.log('simplePrint'); 

//IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
}) (); //바로 호출

