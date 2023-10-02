
//prototype=>blueprint

var User = function (name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function () {
        console.log('Info is:$(this.info');
    };
};

//creating new object
var yash = new User('yash', 23);
console.log(yash);

var pk=new User('pk',23);
console.log(pk);

// case3

var person=new Object();
person.name='sk';
person.age=23;
console.log(person.name+person.age);

// case4.

function Student(name){
    this.name='Yash1';
    age=24;
    console.log(this.name);
}
var Student1=new Student('Yash');
console.log(Student1.name);


var joe={
    name:'joe',
};
    function print(){
        console.log(this);
}
print.bind(joe)();
print.call(joe);
print.apply(joe);
print(joe);

