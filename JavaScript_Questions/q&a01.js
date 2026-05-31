/*
console.log("Hello JavaScript");

var name = "Aryan Saini";
var age = 22;
var city = "Sikar";
console.log("My name is,", name, "My age is,", age, "and I am from", city, ".");

console.warn("Beware coder!");

console.table([1, 2, 3, 4, 5]);
*/

// ----------------------------------------

// var studentName = "Aryan";
// console.log(studentName);

// var age = 22;
// console.log(age);

/*
// swapping two variables using a temporary variable
var a = 1;
var b = 2;
var temp;

temp = b;

b = a;
a = temp;

console.log(a);
console.log(b);

// using array destructuring
[a,b] = [b,a]
*/

/*
const PI = 3.14;
console.log(PI);

var dec;
console.log(dec);

var score=0;

score += 10;
console.log(score)

var firstName = "Aryan";
var lastName = "Saini";
var fullName = firstName+" "+lastName
console.log(fullName)
*/

/*
var str = "sheryians";

var num = 100;

var bol = true; // or false

var intentionalEmpty = null;

var onlyDeclareation; // gives undefined

console.log(
  typeof str,
  typeof num,
  typeof bol,
  typeof intentionalEmpty,
  typeof onlyDeclareation,
);

var mobileNumber = 9784109875;
console.log(mobileNumber);

var noValue = null;
console.log(noValue);

var bigNum = 123456789000000000111111111000n;
console.log(bigNum);
*/

/*
var strToNum = Number("50");
console.log(strToNum);

var numToStr = String(100);
console.log(numToStr);

var strtoBol = Boolean("true");
console.log(strtoBol);
console.log(typeof strtoBol);

console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

var value = "123abc";
console.log(Number(value)); // gives NaN
console.log(parseInt(value));

var px = "500px";
console.log(parseInt(px));
*/

/*
var num1 = 1;
var num2 = 2;
console.log(num1 + num2);

var remainder = 25 % 4;
console.log(remainder);

var anyNum = 5;
var squareOfAnyNUm = anyNum ** 2;
console.log(squareOfAnyNUm);

var digit = 1;
digit++;
console.log(digit);
digit--;
console.log(digit);

var a = 1;
var b = (a += 20);
console.log(b);

var c = 11;
var d = 22;
console.log(c > d);
console.log(c < d);
console.log(c >= d);
console.log(c <= d);

var value1 = "9";
var value2 = 9;
console.log(value1 === value2);

console.log("10" == 10); // type coercion takes place
console.log("10" === 10); // check value as well as data type too

var x = true;
var y = false;

console.log(x || y); // either one is true
console.log(x && y); // both must be true

console.log(!x); // revert the boolean value
*/

/*
var str = "Sheryians Coding School";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes("JavaScript"));

var word = "Hello World";

console.log(word.slice(6));
console.log(word.substring(6));

console.log(word.slice(-5));
console.log(word.substring(-5)); // treats -ve index as 0

var sentance = "apple is a fruit";
var replaceSentance = sentance.replace("apple", "mango");
console.log(replaceSentance);

var str2 = "HTML.CSS.JS";
console.log(str2.split("."));

var extraSpaces = "  abc  ";
console.log(extraSpaces.trim());

var rept = "Hi";
console.log(rept.repeat(5));

var str3 = "sheryians";
console.log(str3.charAt(0));

var name = "Aman";
var age = 21;

console.log(`My name is ${name} and I am ${age} years old`);
*/

var num = 4.7;
// console.log(Math.round(4.7));

var sqRoot = Math.sqrt(81);
// console.log(sqRoot);

var findMax = Math.max(10, 20, 5, 99);
// console.log(findMax);

var randomNum = Math.floor(Math.random() * (10-1+1)) + 1;
console.log(randomNum);

var integer = parseInt("99.99", 10);
// console.log(integer)

// console.log(Number.isInteger(25));

// console.log(+(3.141592).toFixed(2));
