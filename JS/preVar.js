var fullName="tony stark";
var fullName="prathamesh";
/*VAR-variable can be re-decleared & updated.a global scope variable*/
console.log(fullName);    
/* LAT-variable can't be re-declared but can be update .a block scope"{}"" variable    */  
let age=25;
age=22;
age=20;
age=19;    
console.log(age);   
/* CONST-variable can not be re-decleared or updated.a block scope variable.*/
const rollNo=37;
/*rollNo=35;///error on console///
let a;///valid gives undefined///
/*const b;///Error-missing decleration*/
{
    let c=10;
    console.log(c);
}