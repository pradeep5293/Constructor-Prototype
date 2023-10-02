function Student(name,rollNo,marks){
    // console.log(this);
    this.name=name;
    this.rollNo=rollNo;
    this.marks=marks;
}
var student1=new Student('pk',22,87);
student1.name='Yash';
console.log(student1);

var student2= new Student('sk1',29,90);
console.log(student2);
