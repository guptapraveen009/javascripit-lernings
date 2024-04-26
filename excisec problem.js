//execise problem:gusse the number 
const prompt = require("prompt-sync")()
let a=Math.floor((Math.random()*100)+1);
let score=100;
let num;
while(num!=a){
    score=score-1;
    num=prompt("enter the number");
if(a==num){
    console.log("you have done it");
    console.log(`you have done it in ${100 - score} chances`);
}
else if(num>a){
    console.log("the number you entered is greater than original number")
}
else if(num<a){
    console.log("the number you entered is lesser than original number")
}
}



