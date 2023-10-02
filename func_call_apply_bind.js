// let user1={
// name:'Yash',
// age:24,
// printInfo:function(){
//     console.log(this.name+" "+this.age);
    
// }
// }
// user1.printInfo();
// //call method functin borrow
// let user2={
//     name:'kashyap',
//     age:24,
// }
// user1.printInfo.call(user2);

// case2.

let user1={
    name:'Yash',
    age:24,
    
    }
    let printInfo=function( state,city){
        console.log(this.name+" "+this.age+" "+state+" "+city);
        
    }
    printInfo.call(user1,'UP','VRNS');

    //Appy method

    printInfo.apply(user1,['UK','JNP']);

    //call method functin borrow
    let user2={
        name:'kashyap',
        age:24,
    }
    printInfo.call(user2,'UK','JNP');

    //Appy method
    printInfo.apply(user2,['UK','JNP']);

    //bind method
    let printDetails=printInfo.bind(user2,'UK','JNP');
    printDetails();
    console.log(printDetails);

