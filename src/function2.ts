function hello1(){
    console.log('hello world');
};
hello1()
// console.log("Void Function");
// function callHello():void{
//     console.log("hello World");
// };
// callHello();
// callHello();
// //parameter
// function funcWithParam(a:number,b:string):void{
//     console.log(a+b);
// };
// funcWithParam(5,"5"); //argument
// function notReturn():void{
//     console.log("hello");
// };
// console.log(notReturn());
//  //return in function
//  console.log("return in function");
//  function returnValue(a:number,b:number):number{
//     return a+b;
//  };
// let saveFunc:number =  returnValue(5,10);
// console.log(saveFunc);
// console.log(returnValue(6,0));
// console.log(returnValue(6,20));
// console.log(returnValue(6,20));
// console.log(returnValue(6,20));
// console.log(returnValue(6,20));
// console.log(returnValue(6,20));

// global scope
// local scope
// let name8:string ="Abdul Moiz"; //global scope
// function scope(){
//     debugger;
//     let name = "Ahmed"; //local scope
//     console.log(name)
// };
// debugger;
// scope();
// let globlScpe= "Global";
// function scope(){
//     debugger;
//     let lcalScpe= "Local";
//     console.log(globlScpe);
//     return lcalScpe;
// };
// debugger;
// scope();
// console.log(lcalScpe);


// let globlScope1='Ahmed';
// function Scope1(){
//     debugger;
//     let localScope1="local";
//     console.log(globlScope1);
//     return localScope1;
// }
// debugger;
// Scope1();

let outOfCountry=6+8;
function Scope2(a:number,b:number):void{
    debugger;
    let pakistani1 ="Ahmed";
    console.log(pakistani1);
    console.log(a+b);
}
console.log(outOfCountry);
debugger
Scope2(4,5);