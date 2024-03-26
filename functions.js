const prompt = require("prompt-sync")()

let a= prompt("enter the value of a=")
a=Number.parseInt(a)
let b= prompt("enter the value of b=");
b=Number.parseInt(b)
let c= prompt("enter the value of c=");
c=Number.parseInt(c)
function oneplusavg (a,b) {
    return (a+b)/2;
}

const sum=(p,q)=>{
    return p+q;
}
console.log("the average of a and b",oneplusavg(a,b))
console.log("the average of b and c",oneplusavg(b,c))
console.log("the average of c and a",oneplusavg(c,a))
console.log(sum(9,7))

