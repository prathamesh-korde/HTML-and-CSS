const student = {
    fullName:"prathamesh korde",                 
    age:19,
    cgpa:8.6,
    isPass:true,
}
///how to change value inside the object///
student["age"]=student["age"]+1;
console.log(student["age"]);
student.age=student.age+1;
console.log(student.age);
student.fullName="rahul sharma";
console.log(student.fullName);
///for acces the item in object("ket-value pair")///
console.log(student["fullName"]);
console.log(student.fullName);