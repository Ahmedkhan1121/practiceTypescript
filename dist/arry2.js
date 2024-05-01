"use strict";
//sort
// let arrSort = ["Banana","Orange","Kiwi","Mango","Apple"];
// arrSort.sort();
// console.log(arrSort);
let numSort = [1, 2, 3, 5, 6, 4, 11, 22, 55, 10, 44];
numSort.sort(function (a, b) {
    return a - b;
});
console.log(numSort);
// let numSort2= [1,2,3,4,11,5,6,7,8,9,10];
// numSort2.sort(function(a:number,b:number):number{
//     return b-a;
// });
// console.log(numSort2);
let revr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10];
revr.reverse();
console.log(revr);
//toSorted
let strArr3 = ['d', 'e', 'i', 'a', 'c', 'm', 's', 'b'];
let strArr3Sorted = strArr3.toSorted();
console.log(strArr3Sorted);
//toreversed
let strArr5 = ['d', 'e', 'i', 'a', 'c', 'm', 's', 'b'];
let strArr4revesd = strArr5.toReversed();
console.log(strArr4revesd);
console.log(strArr5.includes('I'.toLowerCase()));
