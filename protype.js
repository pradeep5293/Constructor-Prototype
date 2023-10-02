function Person(name){
    this.name=name;
}
var p1=new Person('Julie');
var p2=new Person('Joy');

Person.prototype.getName=function(){
    return this.name;
}

console.log(p1.getName()+" is friend with "+p2.getName());

//case2..

var a=new Boolean();
console.log(Object.getPrototypeOf(a));

//case4.


function Student(id,name,club){
    this.id=id;
    this.name=name;
    this.club=club;

this.printDetails=function(){
    console.log(this.id,this.name,this.club);
}
}
//creating a student object
let student1=new Student(1,'bcc','cxs');
let student2=new Student(2,'cv','sd');
let student3=new Student(3,'pol','xxx');
let student4=new Student(4,'dfr','awq');

let studentArr=[student1,student2,student3,student4];
for(let i=0;i<studentArr.length;i++){
    studentArr[i].printDetails();
}

