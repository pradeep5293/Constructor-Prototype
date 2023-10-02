const CN={
    name:'coding'
};
function print(){
    console.log(this);
}
print.bind(CN)();


// case2.
var joe={
    name:'joe',
    hello:function(){
        console.log('hi,i am '+this.name);
    }
}
var globalHello1=joe.hello.bind(joe);
var globalHello2=joe.hello;
globalHello1();
globalHello2.bind(joe)();
// new(joe.hello.bind(joe));
