// curring function 
function currying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
       
    }
}
var result=currying(10)(20)(0)
console.log(result)