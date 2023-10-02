// function myClass(){
//     const obj1=new myClass();   //myclass() for using new key word
//     const obj2= myClass();   //undefined

// }
// console.log(obj1);
// console.log(obj2);

class myClass{
    constructor(x){
        console.log("contructor is called");
        this.x=x;
    }
}
var obj=new myClass();
console.log(obj.x);