"use strict";
// // Array Property
// let arr: string[] = ["Apple", "Banana", "Orange"];
// console.log(arr.length); // return the length of Array
// // Array Method
// // pop()
// let popArr = arr.pop();
// console.log(arr);
// console.log(popArr);
// // push()
// let pushArr = arr.push("Mango");
// console.log(arr);
// console.log(pushArr);
//shift
// let shiftArr =  arr.shift();
// console.log(arr);
// console.log(shiftArr);
// //unshift
// let unShiftArr =  arr.unshift('Guava');
// console.log(arr);
// console.log(unShiftArr);
// //splice
// arr.splice(1,2,'Pineapple','Lime');
// console.log(arr);
// //concat
// let arrOne = ['Bat','Ball','pads','gloves','helmet'];
// let arrTwo = ['Wicket','Stump'];
// let arrConcat =  arrOne.concat(arrTwo);
// console.log(arrConcat.length);
// for(let i=0; i<arrConcat.length; i++){
//     console.log(arrConcat[i]);
// }
// slice
// let sliceArr = arr.slice(1,3);
// console.log(sliceArr);
//toString
// let arrStr = arrConcat.toString();
// console.log(arrStr);
// for(let i=0; i<city.length; i++){
//     if(cityName.toLowerCase() === city[i]){
//         console.log(`${cityName} is the city of light`);
//         break;
//     }else if( cityName.toLowerCase() ===  city[i]){
//         console.log(`${cityName} is the city of sand `);
//         break;
//     }else if( cityName.toLowerCase() ===city[i]){
//         console.log(`${cityName} is the city of garden` );
//         break;
//     }else if ( cityName.toLowerCase() === city[i]){
//         console.log(`${cityName} is the city  of fruit gander`);
//         break;
//     }else if ( cityName.toLowerCase() === city[i]){
//         console.log(`${cityName} is the city of flower`);
//         break;
//     }else if( cityName.toLowerCase() === city[i] ){
//         console.log(`${cityName} is the most beutiful place`);
//         break;
//     }else{
//         console.log('invalid city');
//         break;
//     }
// };
// if(cityName.toLowerCase() === city[0]){
//     console.log(`${cityName} is the city of light`);
// }else if( cityName.toLowerCase() ===  city[1]){
//     console.log(`${cityName} is the city of sand `);
// }else if( cityName.toLowerCase() ===city[2]){
//     console.log(`${cityName} is the city of garden` );
// }else if ( cityName.toLowerCase() === city[3]){
//     console.log(`${cityName} is the city  of fruit garden`);
// }else if ( cityName.toLowerCase() === city[4]){
//     console.log(`${cityName} is the city of flower`);
// }else if( cityName.toLowerCase() === city[5] ){
//     console.log(`${cityName} is the most beutiful place`);
// }else{
//     console.log('invalid city');
// }
// let city: string[] = [
//   "karachi",
//   "multan",
//   "lahore",
//   "quetta",
//   "peshawar",
//   "abbottabad",
// ];
// let cityName: string = "quetta";
// let toLower = cityName.toLowerCase();
// city.forEach(function (element, index, arr) {
//   if (toLower === element) {
//     console.log(
//       `${element} is the city of ${element === "karachi" ? "light" : ""}${
//         element === "multan" ? "sand" : ""}${(element === 'lahore') ? 'garden' : ''}${(element === 'quetta') ? 'fruit garden' : ''}${(element === 'peshawar') ? 'flower' : ''}${(element === 'abbottabad') ? 'beautiful place' : ''}`
//     );
//   } else {
//     console.log(`invalid`);   //har ak ak value ko print karne ka leya use huta he
//   }
// });
// //map
// let numArr:number[] = [1,2,3,4,5,6,7,8,9];
// let numArrMap:number[] = numArr.map(function(e,i,a){
//     return e**2;
// });
// console.log(numArrMap);
// numArrMap.forEach(function(e,i,a){
//     console.log(e);
// })
// let city:string[] =['karachi','multan','lahour','quetta','peshawar','abbottabad'];
// let cityName:string ='multan';
// city.forEach(function(element,index,arr){
//     if(cityName.toLowerCase()=== element){
//         console.log(`${element} is the city of light`);
//     }else if(cityName.toLowerCase() === element){
//         console.log(`${element} is the city of sand`);
//     }else if (cityName.toLowerCase() === element){
//         console.log(`${element} is the city of garden`);
//     }else if( cityName.toLowerCase() === element){
//         console.log(`${element} is the city of fruit of garden`);
//     }else if(cityName.toLowerCase() === element){
//         console.log(`${element} is the city flower `);
//     }else if(cityName.toLowerCase() === element){
//         console.log(`${element} is the most beutiful place`);
//     }else{
//         console.log(`invalid`);
//     }
// });
// let city: string[] = [
//     "karachi",
//     "multan",
//     "lahore",
//     "quetta",
//     "peshawar",
//     "abbottabad",
//   ];
//   let cityName: string = "quetta";
//   let toLower = cityName.toLowerCase();
//   city.forEach(function (element, index, arr) {
//     if (toLower === element) {
//       console.log(
//         `${element} is the city of ${element === "karachi" ? "light" : ""}${
//           element === "multan" ? "sand" : ""}${(element === 'lahore') ? 'garden' : ''}${(element === 'quetta') ? 'fruit garden' : ''}${(element === 'peshawar') ? 'flower' : ''}${(element === 'abbottabad') ? 'beautiful place' : ''}`
//       );
//     } else {
//       console.log(`invalid`);
//     }
//   });
let busLocation = ['hyderabad', 'balochistan', 'punjab', 'lahore', 'islamabad', 'abbottabad'];
let busTicket = "hyderabad";
if (busTicket.toLowerCase() === busLocation[0]) {
    console.log('karachi se hyderabad tikcet 1500');
}
else if (busTicket.toLowerCase() === busLocation[1]) {
    console.log('karachi se balochistan ticket  2000');
}
else if (busTicket.toLowerCase() === busLocation[2]) {
    console.log('karachi se punjab ticket 2500');
}
else if (busTicket.toLowerCase() === busLocation[3]) {
    console.log('karachi se lahore ticket 3000');
}
else if (busTicket.toLowerCase() === busLocation[4]) {
    console.log('karachi se islamabad ticket 4000');
}
else if (busTicket.toLowerCase() === busLocation[5]) {
    console.log('karachi se abbotabad ticket 5500');
}
else {
    console.log('invalid place bus is not going this place');
}
let arrFruit = ["mango", 'banana', 'orange', 'kiwi'];
arrFruit.forEach(function (e, i) {
    console.log(`${i + 1}:${e} line number 187`); ///har ak ak value ko print karne ka leya use huta he
});
//map
// let mapArrFruit:string[]=arrFruit.map(function(e,i){
//     return `${i+1}: ${e}`;  map method array ki halat ko change krta ha or new Array return krta ha
// });
// console.log(mapArrFruit);
//filter
// let filterArrNum:number[] =arrNumF.filter(function(e){   //filter method array ko filter krta ha or new Array return krta ha
//     return e>5;
// });
// console.log(filterArrNum);
let arrNumF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //filter array using map method
let arrFilt = arrNumF.map(function (e) {
    if (e > 5) {
        return e;
    }
});
// let arrSlice:(number| undefined)[]=arrFilt.slice(5,10);
// console.log(arrSlice);
let ids = 3;
let sports = ["cricket", "football", "basketball", "hockey", "baseball"];
let sportsfilter = sports.filter(function (e, i) {
    return i === ids;
});
if (sportsfilter.length === 0) {
    console.log(`this ${ids} id is not available`);
}
else {
    console.log(sportsfilter);
}
//reduce
let reduNum = [40, 20, 30, 50, 60, 70, 600, 500, 450, 3400]; // curr value 
let reduceNumAdd = reduNum.reduce(function (prev, curr) {
    return prev + curr;
}, 0); //0 prev ha    //array ki jo element arahe ha wo curr ha for Addition
console.log(reduceNumAdd);
let reduceNumMulti = reduNum.reduce(function (prev, curr) {
    return prev * curr;
}, 1); //1 prev ha    //array ki jo element arahe ha wo curr ha for Multiply
console.log(reduceNumMulti);
let reduceNumDivi = reduNum.reduce(function (prev, curr) {
    return curr / prev;
}, 1); //1 prev ha    //array ki jo element arahe ha wo curr ha for Division
console.log(reduceNumDivi);
let reduceNumSubt = reduNum.reduce(function (prev, curr) {
    if (prev < 0) {
        return prev + curr; // agr prev value 0 sa choti ho
    }
    else {
        return -prev + curr; //  agr prev value 0 sa bari ho
    }
}, reduNum[0]); //array ki phlele prev ha    //baki jo element arahe ha wo curr ha for Subtract
console.log(reduceNumSubt);
