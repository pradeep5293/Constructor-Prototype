// let a=10;
// function b(){
//     var x=12;
// }
// console.log(a);
// console.log(x);
//  console.log(window.a);  //it is valid in browser
//  console.log(this.a); //this===window

//case2.

let laptop2={
    cpu:'i7',
    ram:12,
    brand:'HP',
    getProp:function(){
        console.log(laptop1.cpu);
        console.log(this.brand);
        // console.log(window.ram);


    }

}
// laptop1.getProp();

let laptop1={
    cpu:'i9',
    ram:12,
    brand:'HP',
    getProp:function(){
        console.log(laptop1.cpu);
        console.log(this.brand);
        // console.log(window.ram);


    }

}
laptop1.getProp();

if(laptop1.cpu>laptop2.cpu){
    console.log("fast one"+laptop1)
}else{
    console.log("fast one"+laptop2)

}