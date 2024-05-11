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
let numSort2 = [1, 2, 3, 4, 11, 5, 6, 7, 8, 9, 10];
numSort2.sort(function (a, b) {
    return b - a;
});
console.log(numSort2);
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
let mixValue = ['Ahmed', 'moiz', 1, 5, 66, true, false];
let filterArr1 = mixValue.filter(function (e) {
    return typeof e === 'string';
});
console.log(filterArr1);
let arrMap = [3, 4, 2, 9, 4,];
let retFun = arrMap.map(function (e) {
    return e ** 3;
});
console.log(retFun);
let arrReduce = [2, 3, 2, 56, 53];
let funReduce = arrReduce.reduce(function (prev, curr) {
    return prev + curr;
}, 0);
let arrmul = [2, 4, 3, 3, 3, 22];
let multReduce = arrmul.reduce(function (prev, curr) {
    return prev * curr;
}, 1);
console.log(multReduce);
let arrDivi = [20, 4, 4, 3, 4, 99];
let diviReduce = arrDivi.reduce(function (prev, curr) {
    return curr / prev;
}, 1);
console.log(diviReduce);
let arrsub = [20, 33, 4, 3, 18, 22];
let subRedue = arrsub.reduce(function (prev, curr) {
    if (prev < 0) {
        return prev + curr;
    }
    else {
        return -prev + curr;
    }
}, 0);
console.log(subRedue);
let arrsub1 = [33, 22, 11, 21, 32];
let retSub = arrsub1.reduce(function (prev, curr) {
    if (prev < 0) {
        return prev + curr;
    }
    else {
        return -prev + curr;
    }
}, 0);
console.log(retSub);
