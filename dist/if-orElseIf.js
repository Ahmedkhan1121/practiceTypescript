"use strict";
//  const isCarPuncher: string ="no"
//  if(isCarPuncher === "yes"){
//     console.log('i will be late for class');
//  }else{
//     console.log('i will be on time');
//  }
//elseif
//  const isRainig: boolean = false;
//  const isTherePostFromDaniyal: boolean =true;
//  if(isRainig && isTherePostFromDaniyal){
//     console.log('there is no class line on 15');
//  }
// else if(isTherePostFromDaniyal){
//     console.log('there is no class line on 18');
//  }
//  else{
//     console.log("there is class");
//  }
//  console.log("------");
// let day ='mOndaY'
// if(day.toLowerCase()==="monday"){
//     console.log("there is my class");
// }else if(day.toLowerCase()==="tuesday"){
//     console.log("there is sammer class");
// }
// else if(day.toLowerCase()==="wednesday"){
//     console.log("there is isfhan class");
// }
// else if(day.toLowerCase()==="thurday"){
//     console.log("there is shahzaib class");
// }
// else if(day.toLowerCase()==="friday"){
//     console.log("there is shan class");
// }
// else if(day.toLowerCase()==="saturday"){
//     console.log("there is ashar class");
// }
// else if(day.toLowerCase()==="sunday"){
//     console.log("there is zain class");
// }
// else{
//     console.log('there is no class');
// }
// var percentage:number =1000
// if(percentage >=80 &&percentage<=100){
//     console.log('A+');
// }else if(percentage>=70 && percentage<80){
//     console.log('A');
// }else if(percentage>=60 &&percentage<70){
//     console.log('B');
// }else if(percentage>=50 &&percentage<60){
//     console.log('C');
// }else if(percentage>=40 && percentage<50){
//     console.log("D");
// }else if(percentage>=33 && percentage<40){
//     console.log('E');
// }else if(percentage<33){
//     console.log('fail');
// }else{
//     console.log('invalid grade');
// }
// let isEven:number=4686;
// if(isEven % 2===0){
//     console.log("even");
// }else{
//     console.log('odd');
// }
let num1 = 25;
let two = 2;
let three = 3;
let five = 5;
if (num1 % two === 0 && num1 % three === 0) {
    console.log(`${num1} are available in both ${two} and ${three} table`);
}
else if (num1 % two === 0) {
    console.log(`${num1} are available in ${two} table`);
}
else if (num1 % three === 0) {
    console.log(`${num1} are available in ${three} table`);
}
else if (num1 % five === 0) {
    console.log(`${num1} are available in ${five} table`);
}
else {
    console.log(`${num1} are not available in both ${two} and ${three} table`);
}
let year = 2017;
if (year % 4 === 0) {
    console.log('leap Year');
}
else {
    console.log('Not a Leap Year');
}
// function main() {
//     try {
//         const inputYear: string = ("2033");
//         const year: number = parseInt(inputYear);
//         if (isNaN(year) || year < 0) {
//             console.log("Invalid input! Please enter a valid positive year.");
//         } else {
//             if (isLeapYear(year)) {
//                 console.log(`${year} is a leap year.`);
//             } else {
//                 console.log(`${year} is not a leap year.`);
//             }
//         }
//     } catch (error) {
//         console.log("An error occurred:", error);
//     }
// }
// main();
