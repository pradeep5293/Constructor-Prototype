function User(name){
    this.isAdmin=false;
    return name;
}
var user = new User('jack');
console.log(user);

//case2.
class Person{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this._name;
    }
    setName(name){
        this._name=name;
    }
}
var person=new Person('james');
console.log(person);