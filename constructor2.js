function User(name){
    this.name=name;
    this.isAdmin=false;
    return;
}
var user=User('Julie');
// var user=new User('Julie');

console.log(user);

// case2
function User1(name){
    // this.name=name;
    this.isAdmin=false;
}
var user=new User1('james');
console.log(user);