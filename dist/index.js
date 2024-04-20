"use strict";
// console.log('hello world');
// string
let str = 'Hello World';
console.log(str);
// string Propety
console.log(str.length);
// string Method
let strUpper = str.toUpperCase();
console.log(strUpper);
let strLower = str.toLowerCase();
console.log(strLower);
let strSlice = str.slice(6, 11);
console.log(strSlice);
let strOne = 'Ahmed';
let strTwo = 'Raza';
let strThree = strOne.concat(strTwo);
console.log(strThree);
let str2 = '    Pakistan      ';
let str2Trim = str2.trim();
console.log(str2Trim);
let strInclude = str.includes('E'.toLowerCase());
console.log(strInclude);
let strStartWith = str.startsWith('o');
console.log(strStartWith);
let strEndWith = str.endsWith('d');
console.log(strEndWith);
let strIndexOf = str.indexOf('o');
console.log(strIndexOf);
let strLastIndexOf = str.lastIndexOf('o');
console.log(strLastIndexOf);
