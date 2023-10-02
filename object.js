//creating a object

var a = {
    fname: 'Yash',
    lname: 'Kashyap',
    age: 24,
    email: 'abc@gmail.com',
favMOvies: ['dhoom1', 'dhoom2', 'dhoom3'],   //we can create in arr in object
salary:function(){
    return 25000;
},

//creating new object in object
address:{
    state:'UP',
    city:'VRNS'
},

fullName:function(){
    return this.fname+' '+this.lname;
}

}
console.log(a);
console.log(a.age);
console.log(a.age);
console.log(a.favMOvies[2]);
console.log(a.salary());
console.log(a.fullName());
console.log(a.address.city);   //access by object chaining




