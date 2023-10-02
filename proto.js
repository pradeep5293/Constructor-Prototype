function Person(name){
    this.name=name;
}
var p1=new Person('joy');
var p2=new Person('julie');
Person.prototype.getName=function(){
    return this.name;
}
p1.getName=function(){
    return 'john';
}
// p2.getName=function(){
//     return 'johnson';
// }

console.log(p1.getName()+" is friend with "+p2.getName());
p2.getName=function(){
    return 'johnson';
}

