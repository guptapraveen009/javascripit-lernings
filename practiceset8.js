//chapter8
//practice question 2 using events
// let google=document.getElementById('google').addEventListener('click',function(){
//     window.location="https://www.google.com/";
//     window.location();
// })

// let Code=document.getElementById('Code').addEventListener('click',function(){
//     window.location="https://www.codewithharry.com/";
//     window.location();
// })

// let Boot=document.getElementById('Boot').addEventListener('click',function(){
//     window.location="https://getbootstrap.com/";
//     window.location();
// })
setInterval( function(){
    document.querySelector("#bulb").classList.toggle("bulb");
},300)