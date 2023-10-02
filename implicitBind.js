var juliet={
    name:"juliate",
    hello:function(){
        console.log("hi i am "+this.name);
    }
}
var globalHello=juliet.hello;
//var globalHello=juliet.hello.bind(juliet);
globalHello();
juliet.hello();

// case2

const billy={
    name:'Bill joe',
     outer:function(){
        function inner(){
        console.log(this);
        }
        inner();
    }
}
billy.outer();