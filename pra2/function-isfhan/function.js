"use strict";
//basic function 
//keyword functionName
//  |       |    /peranthesis
function ahmed() {
    //code of body
    console.log(2 * 2, 'this is even number');
}
ahmed(); //invoking function or calling function 
ahmed(); //hum is ko multiple time run kara sakte he 
console.log('---------------------------');
//function parameter 
function myIntroduvctionWithParamerter(name, country, job) {
    console.log('my Name is', name); //Argument pass log 
    console.log(`I am from  in${country}`); //template string
    console.log('I am a ' + job); //concatenation
    console.log('---------------------------');
}
myIntroduvctionWithParamerter('ahmed', 'pakistan', 'Ai enginer'); //invoking function or argument function
//function with default
function myIntroduvctionWithDefaultParamerter(name, country = "pakistan", job = "software enginer") {
    console.log('hi my Name is ', name); //argument pass log 
    console.log(`I am from in ${country}`); //template string
    console.log('i am a ' + job); //concatination
    console.log('---------------------------');
}
;
myIntroduvctionWithDefaultParamerter('moiz');
myIntroduvctionWithDefaultParamerter('ashar');
//function eith optional 
function myIntroduvctionWithOptionalParamerter(name, country, job) {
    console.log(`hi my Name is ${name}`); //template string
    if (country === "pakistan") {
        console.log("I am from in karachi"); //argument log
    }
    if (job) {
        console.log("I am a " + job); //concatination
    }
    console.log('---------------------------');
}
myIntroduvctionWithOptionalParamerter('ashar', 'pakistan');
