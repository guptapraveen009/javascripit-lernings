//chapter 3 //

const prompt = require("prompt-sync")()

//question no 1//
let marks={
    praveen:90,
    ravi:50,
    tarun:20
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("marks of" + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
}

//question no 2//
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("name of student:"+Object.keys(marks)[i]+ "are" +Object.values(marks)[i] )
}

//question no=3//
let b=20;
let i=prompt("enter the number");
while(i!=b){
  
    }
    console.log("you have enterd the correct number");
    
    //question no=4//
    let k=10,h=20,j=30,l=40,m=50;
    function mean(k,h,j,l,m){
        return (k+h+j+l+m)/5
}
console.log("the mean of 5 values are="+mean(k,h,j,l,m))