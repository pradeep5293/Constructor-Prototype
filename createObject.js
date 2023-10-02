// const student1={
//     name:"pk",
//     rollNo:24,
//     marks:98,
// }
// const student22={
//     name:"sk",
//     rollNo:34,
//     marks:89,
// }

//template of creating object
function studentDetails(name,rollNo,marks){
    var student={};  //new object
    student.name=name,
    student.rollNo=rollNo;
    student.marks=marks;
    return student;
}
var student1=studentDetails('pk',29,98);
console.log(student1);
let student2=studentDetails('sk',9,78);
console.log(student2);

