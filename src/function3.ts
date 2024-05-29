//function Expression
// let funcExp = function(a:number=45):string{
//     return "Hello World";
// }
// console.log(funcExp(30));

// Arrow Function
// single line of code
// let funcArrow = ():string => "Hello Arrow Function";  
// console.log(funcArrow());

// let copyArr = [1,2,3,4,5,6,7,8,9]; //global
// multiple line of code
// let funcArr = (a:string[]):string[] => {    
//     let copyArr = a.slice(1,3); //local
//     return copyArr;
// };
// console.log(funcArr(["Apple","Banana","Orange","Mango"]));


// Hoisting
// function Hoisting
// Function Decralation
hello()
function hello(){
    console.log('hello world');
};

//Hoisting is not working in Function Expression
// Function Expression
// funcExpre2()
// let funcExpre2 = function(){
//     console.log("Hello");
// }

//Hoisting is not working in Arrow Function
// Arrow Function
// arroFunc();
// let arroFunc = ():void => {
//     console.log("hello");
// };

// Variable Hoisting
console.log(hois);
var hois =15;

// arrow function rest parameter

function factor(num:number):number{
    if(num<1){
        return 1
    }else{
        return num * factor(num -1)
    }
}
console.log(factor(5));