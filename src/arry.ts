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
//     console.log(`invalid`);
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

