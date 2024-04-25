let str : string ='Ahmed Raza';
console.log(str);
//toUpperCase
let strupCase =str.toUpperCase();
console.log(strupCase);
//toLowerCase
let strLowerCase =str.toLowerCase();
console.log(strLowerCase);
//slice
let strslice =str.slice(5,10);
console.log(strslice);

let oneConcat='Ahmed';
let twoConcat='Raza';
let threeConcst=oneConcat.concat(twoConcat)
console.log(threeConcst);

let myConutName:string='         pakistan       ';
console.log(myConutName.trim());

// replace
let name4 = 'javascript ';
let name4Rep = name4.replace('javascript','typescript')
console.log(name4Rep);

console.log(name4.slice(0,1).toUpperCase()+name4.slice(1).toLowerCase());
console.log();