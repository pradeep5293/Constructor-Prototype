var joe={
    hello:function(){
        console.log(this);

    }
}
new(joe.hello.bind(joe))();