"use strict";

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

/* 실행결과
value: hellobrendan, type: string
value: hi brendan!, type: string */

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

/* 실행결과
value: true, type: boolean
value: false, type: boolean */

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

/* 실행결과
value: null, type: object */

let x;
let y = undefined;
console.log(`value: ${x}, type: ${typeof x}`);
console.log(`value: ${y}, type: ${typeof y}`);

/* 실행결과
value: undefined, type: undefined
value: undefined, type: undefined */

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

/* 실행결과
false */

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);

/* 실행결과
true */

const symbol3 = Symbol("id");
console.log(`value: ${symbol3.description}, type: ${typeof symbol3}`);

/* 실행결과
value: id, type: symbol */

let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);

/* 실행결과
value: hello, type: string
value: 1, type: number
value: 75, type: string
value: 4, type: number */

const Lee = { name: "Lee", age: 20 };
Lee.age = 22;
console.log(Lee);

/* 실행결과
{name: "Lee", age: 22} */
