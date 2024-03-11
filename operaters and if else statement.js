//use logical operater to find whether the age of a person lies between 10 & 20.
let age =10;
if(age>10 || age<20){
    console.log("age is between 10 and 20");
}
else {
    console.log("age is not between 10 and 20");
}

//2nd problem 
let num =10;
if( num %2==0 && num % 3 == 0){
    console.log("Number is divisble by 2 and 3");
}else{
    console.log("Number is not divisble by 2 and 3");
}

//3rd problem: using teranary operator to check the age
age = 3;
( age >= 18 ) ? console.log("You can drive") : console.log("You cannot drive");

//4th problem: using switch case statements 
let a = 3; 
switch(a){
    case 1: console.log("we are in case 1");
    break;
    case 2: console.log("we are in case 2");
    break;
    case 3: console.log("we are in case 3");
    break;
    default: console.log("we are in case default case"); 
}
