// while loop
// example-1
// var i=0;

// while(i<10){
// console.log("eyasin ali")
// i++;
// }
// example-2
var isRunning=true;
while(isRunning){
    var rand=Math.floor(Math.random()*10+1)
    if(rand==9){
        console.log("Winner Winner Chieken Winner")
        isRunning=false;
    }else{
        console.log("You have got ")+rand;
    }
}
