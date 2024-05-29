"use strict";
// console.log('hello world');
// string
let str = 'Hello World'; // koi bhi kam double ya single cotation me hu us ko string khate he//
console.log(str);
// 2) string Propety       ...  lenght ko poroperty khatehe// 
console.log(str.length); //lenght string ke ander ke lenght malum karta he space bhi include huta he//
// string Method
//toUppercase
let strUpper = str.toUpperCase(); //all words capital kar deta he      
console.log(strUpper);
//toLowerCase
let strLower = str.toLowerCase(); //all word small kar deta he
console.log(strLower);
//slice
let strSlice = str.slice(6, 11); //copy karta he or new string la kar deta he
console.log(strSlice);
//concat
let strOne = 'Ahmed';
let strTwo = 'Raza';
let strThree = strOne.concat(strTwo);
console.log(strThree); //do variable ko mela kar deta he 
//trim
let str2 = '    Pakistan      ';
let str2Trim = str2.trim();
console.log(str2Trim); //string me left right se space remove kar deta he 
//includes
let strInclude = str.includes('E'.toLowerCase());
console.log(strInclude); //user upperCase me ya LowerCase me lekha par machine
// check LowerCase me karege
//startsWith                                       
let strStartWith = str.startsWith('o');
console.log(strStartWith); // ya check karta he ke ju value user ne lekhi he wo "0" inder par hu tu " true "
//dega nahi tu false
//endWith                                                   
let strEndWith = str.endsWith('d');
console.log(strEndWith); // ya check karta he ke ju value user ne lekhi he wo last par hu tu " true "
//dega nahi tu false
//indexOf                               
let strIndexOf = str.indexOf('o');
console.log(strIndexOf); //string ke ander start me wo value huge ju user ne lekhi he tu us ke lenght bata dega
//lastIndexOf
let strLastIndexOf = str.lastIndexOf('o');
console.log(strLastIndexOf); //string ke ander last me wo value huge  ju user ne lekhi he tu us ke lenght bata dega
let indexOf = 'shahzaib';
let strIndexOf2 = indexOf.indexOf(9);
console.log(strIndexOf2);
