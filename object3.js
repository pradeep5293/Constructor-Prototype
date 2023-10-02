let object1=new Object();
object1.property=42;
console.log(Object());
console.log(object1);

//case2  use of prototype chain
function A(){
this.name='A';
}
Object.prototype.color='red';
var d=new A();
console.log(d.color);