const { filter } = require("lodash");

let prompt=require("prompt-sync")()
let array=[10,20,30,60];
let array2=[10,20,30,40]
//push an element
// let input=prompt("enter the number");
// input=Number.parseInt(input);
// array.push(input);
// console.log(array);

//pop an element
// let a=array.pop();
// console.log(a);
// console.log(array)


// with while loop
// while(array!=0){
//     let input=prompt("enter the number");
// input=Number.parseInt(input);

// if(input==0){
//     console.log(array);
    
// }
// else{
//     array.push(input);
// }
// }
// console.log(array)


//with do while loop
// do{
//     input=prompt("enter the number");
//     input=Number.parseInt(input);
//     array.push(input); 
// }while(input!=0)
// console.log(array);

//filter

// let a=array.filter((x)=>{
//     return x%10==0;
// })
// console.log(array)
// let a1=array.map((s)=>{
//     return s*s;
// })
// console.log(a1);

// let a2=array.reduce((h1,h2)=>{
//     return  h1*h2
// })
// console.log(a2)

let result=[];
let addresult=[];
for(i=0;i<array.length;i++){
    result.push(array[i]*array2[i])
addresult.push(array[i]+array2[i])
}
console.log(result);
console.log(addresult);







