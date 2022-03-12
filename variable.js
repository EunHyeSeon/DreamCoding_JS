console.log('Hello World!');
/*asyn => head안에 script 불리언 속성, 설정은 True, 병렬로 HTML로 진행,, 다운로드 시간 절약,, 
다만 자바스크립트 보다 html이 오래 걸릴 수 있음 javascript가 순서에 의존적일 경우 순서가 안 지켜질 수 있음*/
/* defer =>head 에서 script 병렬로 fetching 후 실행, */

/* 1. 'use strict'; 사용 시 ECMAScript 5에 포함,,상식 범위 안에 사용가능, 실수를 잡아줌 */
'use strict';
// 2. Variable
//let (added in ES6)
//{} Block scope
let globalName = 'gloabal name';//어디서나 접근 용이
{
    let name = 'HS';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

/*Hoisting 어디에 선언하든 상관없이 선언을 끌어올려 주는 것. ex) var, not: let, const*/
//var(don't use this!) has nno block scope
{
    age = 24;
    var age;
}
    console.log(age);

/* 3. constants => 값을 선언함과 동시에 잠겨서 변경 불가능, Imuutable Data, 보안상 안전*/
    const daysInWeek = 7;
    const maxNumber = 5;
//Note
//Immutable data types : primitive types, frozen objects
//Muyable data types: all objects by defalt ane mutable in JS
//Favor immutable data type always for a few reasons:
//- security - thread safety - reduce human mistakes

/* 4. Varuable data Type: 
primitive, single item : number, string, bollian, null, undefiend, symbol
object, box container
function, first-class function-변수에 할당 가능*/

/* Data types for number : => number ex: let a:number = 2;, */


const count = 15; //integer
const size = 15.3 //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN
//infinity =  number/0;, negativeInfinity= -number/0;
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a nimber' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigint = number+n ;.. chrome only
const bigInt = 2324634864314854615464646341363n; // over(-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;


//String, ``사용 시 연달아 사용 가능
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//Boolian 
// false: 0, null, undefined, NaN, '' 
//True: any other value.
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//Symol : 우선순위 정할 때, symbol.description을 사용하여 string으로 변환하여 사용.
//create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);//true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//Dynamic typing: => Type Script 사용(browser과 호환 시 별도 앱 필요)
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//Typescript 필요

//Object, real-life object, data structure
const hey = {name: 'HS', age: 20}; //hey unchandable, name, age changable.

0.38095238095238093