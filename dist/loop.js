"use strict";
// for(let i=1; i<=10; i++){
//     console.log(i);
// };
// for(let i=1; i<=10; i++){
//     console.log(i**2);
// }
// for(let i=1; i<=10; i++){
//     console.log(`2*${i} =${i*2}`);}
// for(let i=1; i<=10000; i++){
//     if(i > 10){
//         break;
//     }else{
//         console.log(`10*${i}=${i * 10}`);
//     }
// };
// for(let i=1; i<=10; i++){
//     if(i===3){
//         continue;
//     }else{
//         console.log(i);
//     }
// };
// let i = 1;
// while(i<10){
//     if(i===6){
//         break;
//     }else if(i===3){
//         i++;
//         continue;
//     }
//     else{
//         console.log(i);
//     };
//     i++;
// };
// let arr = [1,2,3,4,5,6,7,8,9];
// while(arr.length > 2){
//     arr.pop();
// }
// console.log(arr);
// let arr1:string[]=['ahmed','moiz','ashar','sameer']
// while(arr1.length<7){
//     arr1.push('aazim');
// };
// console.log(arr1);
// let i =0;
// do{
//     console.log(i);
//     i++;
// }while(i>10);
// let i=1;
// do{
//     if(i===6){
//         break;
//     }else if (i===3){
//         i++;
//         continue;
//     }else{
//         console.log(i);
//     }
//     i++;
// }while(i<=10)
let arrOf = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let x of arrOf){
//     console.log(x);
// } 
let strOf = 'hello world';
// for(let x of strOf){
//     console.log(x);
// // };
// for(let x in arrOf){
//     console.log(x);
// }
// for(let a in strOf){
//     console.log(strOf[a]);
// }
let arrOf1 = ['ahmed', 'moiz', 'ashar',];
// for (let myName1 of arrOf1 ){
//     console.log(myName1);
// }
// for(let myFriend of arrOf1 ){
//     console.log(arrOf1);
// }
let myFriend1 = ['ahmed', 'moiz', 'sammer', 'ashar'];
let friendName = 'moiz';
if (friendName.toLowerCase() === 'moiz') {
    console.log('he is a ahmed B.F');
}
else {
    console.log('he is not a ahmed friend');
}
let rollNo = 100;
for (let i = 1; i <= rollNo; i++) {
    console.log(`roll no ${i}`);
}
