//CHAPTER 2//
//Q1//
let age1 = 20;
if(age1>10 && age1<20){
    console.log("age lies between 10 and 20");
}
else{
    console.log("age does not lies between 10 and 20");
}

//2Q//
let age=18;
switch (age){
    case 18: console.log("you can drive");
    break;
    case 16: console.log("you are minnor you can get learning licence");
    break;
    case 15:console.log("no you cannot  drive");
    break;
   default:console.log("you are not old enough to  drive");
    break;

}

//3Q//
let num=10;
if(num%2 && num%3){
   console.log(true);
}
else{
   console.log(false);
}

//4Q//
let num1=20;
if(num1%2 || num1%3){
   console.log(true);
}
else{
   console.log(false);
}

//5Q//
let age2=10;
(age2>=18) ? console.log("you can drive"): console.log("you cannot drive");