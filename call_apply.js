var ninja={
    name:'ninjas',
getName:function(){
var name=this.name
return name;
}
};
var funcName=function(snack,hobby){
    console.log(this.getName()+' loves '+snack+' and '+hobby);
}
funcName.call(ninja,'sushi','algorithm');
funcName.apply(ninja,['sushi','algorithm']);

