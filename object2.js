let person=new Object();
person.fname='ram';
person.lname='kashyap';
person.age=25;
console.log(person.fname);   //or
console.log(person['age']);

//object under array
let student=[
    {name:'skk',age:23},
    {name:'pkk',age:22},
    {name:'mkk',age:21},
    {name:'xkk',age:25}

]
console.log(student);

for(let i=0;i<student.length;i++){
    // console.log(student[i].name);
    
    console.log(student[i].name+" "+student[i].age)
}


