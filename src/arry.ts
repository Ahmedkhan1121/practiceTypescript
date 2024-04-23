// Array Property
let arr:string[] = ['Apple','Banana','Orange']; 
console.log(arr.length); // return the length of Array

// Array Method
// pop()
let popArr= arr.pop();
console.log(arr);
console.log(popArr);

// push()
let pushArr = arr.push('Mango');
console.log(arr);
console.log(pushArr);

//shift
let shiftArr =  arr.shift();
console.log(arr);
console.log(shiftArr);

//unshift
let unShiftArr =  arr.unshift('Guava');
console.log(arr);
console.log(unShiftArr);

//splice
arr.splice(1,2,'Pineapple','Lime');
console.log(arr);

//concat
let arrOne = ['Bat','Ball'];
let arrTwo = ['Wicket','Stump'];
let arrConcat =  arrOne.concat(arrTwo);
console.log(arrConcat);

// slice
// let sliceArr = arr.slice(1,3);
// console.log(sliceArr);

