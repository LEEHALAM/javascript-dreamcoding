console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1+2=${1 + 2}`);

/* 실행결과
my cat
12
string literals: 1+2=3 */

console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

/* 실행결과
 2
 0
 1
 1
 1
 8 */

let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

/* 실행결과
preIncrement: 3, counter: 3 */

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

/* 실행결과 
postIncrement: 3, counter: 4 */

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

/* 실행결과 
preDecrement: 3, counter: 3 */

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

/* 실행결과 
postDecrement: 3, counter: 2 */

let x = 3;
let y = 6;
x += y; // x=x+y;
x -= y;
x *= y;
x /= y;

console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

/* 실행결과
false
false
true
true */

const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

console.log(!value1);
/* 실행결과
 true */

const stringFive = "5";
const numberFive = 5;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

/* 실행결과
true
false */

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

/* 실행결과
false
true */

const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

/* 실행결과 
false
false
true */

console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

/* 실행결과 
true
false
true
false
true
false */

const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

/* 실행결과
Welcome, Ellie! */

console.log(name === "ellie" ? "yes" : "no");

const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

/* 실행결과 
go away! */

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

/* 실행결과
while: 3
while: 2
while: 1 */
let a = 2;
do {
  console.log(`do while: ${a}`);
  a--;
} while (a > 0);

/* 실행결과
do while: 2
do while: 1 */

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

/* 실행결과
for: 3
for: 2
for: 1 */

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

/* 실행결과
inline variable for: 3
inline variable for: 1 */

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
/* 실행결과
i: 0, j: 0
i: 0, j: 1
i: 0, j: 2
i: 1, j: 0
i: 1, j: 1
i: 1, j: 2
i: 2, j: 0
i: 2, j: 1
i: 2, j: 2 */

for (i = 0; i < 11; i++) {
  if (i % 2 == 1) {
    continue;
  }
  console.log(`i: ${i}`);
}

/* 실행결과
i: 0
i: 2
i: 4
i: 6
i: 8
i: 10 */

for (i = 0; i < 11; i++) {
  if (i === 8) {
    break;
  }
  console.log(`i: ${i}`);
}

/* 실행결과
i: 0
i: 1
i: 2
i: 3
i: 4
i: 5
i: 6
i: 7 */
