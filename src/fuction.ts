//Function Decralation

import { addEmitHelper } from "typescript";

// function nameCall():void{
//     console.log("Ahmed");
//     console.log("Ahmed");
//     console.log("Ahmed");
//     console.log("Ahmed");
//     console.log("Ahmed");
//     console.log("Ahmed");
//     console.log("Ahmed");
//     console.log("Ahmed");

// };
// nameCall();
// nameCall();
// nameCall();

// funtion with parameter and argument
                 //Parameter
function name1(a:number,b:number):void{
    console.log(a+b);
} ; //Argumnt
console.log(name1(5,5));

//funtion with return keyword
function returnValue(a:number,b:number):string{
if(a>b){
    return `${a} greater than ${b}`;
}else if(a<b){
    return `${b} greater than ${a}`;
}else{
    return `${a} is equal to ${b}`
}
};
let savValue = returnValue(5,6);
console.log(savValue);
 function retNum(a:number,b:number):number{
    return a+b;
 }let savNum =retNum(5,6);
 let savNum2 = retNum(8,8)
 console.log(savNum);
console.log(savNum2);


 function retStr(a:string,b:string,):string{
    return a+b;
 }
 let savStr=retStr('hello','world')
 console.log(savStr);

function retArr(a:string[],b:string[]):string[]{
    return a.concat(b);
};
let savArr=retArr(["ahmed",'razaa'],['abdul moiz'])
console.log(savArr);
function retArr1(a:string[],b:string[]):void{
     console.log(a.concat(b));
};
retArr1(["ahmed",'razaa'],['abdul moiz']);
// console.log(savArr1);

let mixTypeArr=['moiz',2,true]
function anyArr(a:any[]):any[]{
    return a
}
let anyArr1:any[] = anyArr(mixTypeArr)
console.log(anyArr1);



let retNumA:number[] =[2,3,4,1];
function retNumA1(a:number[]):number[]{
    return a
}
let retNumA2:number[]=retNumA1(retNumA)
console.log(retNumA2);



let retBol:boolean[]=[true,false]
function funBol(a:boolean[]):boolean[]{
    return a
}
let savFun:boolean[]=funBol(retBol)
console.log(savFun);