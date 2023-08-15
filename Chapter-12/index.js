/* pass by value */
function incRef(numberRef){
   numberRef[0]++
}
var n=[7]
incRef(n)
console.log(n[0]);