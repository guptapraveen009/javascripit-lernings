// console.dir
// console.dir(document.body.firstElementChild);



// //node name
// let a=document.body.firstElementChild.nodeName;
// console.log(a);

// let b=document.body.firstElementChild.tagName;
// console.log(b);

//class name/class list
// let c=btn.className="bttn-tags";
// console.log(c)

// let v=document.getElementsByTagName("btn");
// let d=btn.classList.add("red");
// console.log(d);

// btn.classList.remove("red");

// let g=btn.classList.toggle("red");

// let f=btn.classList.contains("bttn-tags");
// console.log(f);

//set timeout set intrevel
// let h=setTimeout(function(){
//     alert("this me praveen")
// },10);

// setInterval(function(){
//     confirm("do you know me")
// }, 10000);

// let random=function(){
//     let input=prompt("what is your age");
//     if(input>=10&&input<=20){
//         alert("your age is between 10 and 20");
//     }
//     else{
//         alert("no your age is not between 10 and 20");
//     }
    
// }
// setInterval(random,1000);
// clearInterval();

//attributes
// let btn=document.getElementById('btn')
// let p=btn.getAttribute("class");
// console.log(p);

// let p=btn.hasAttribute("class");
// console.log(p);
// let p=btn.removeAttribute("class");
// console.log(p);

//own attribute
// console.log(btn.dataset.game);

// inseration method
let container=document.getElementById('container')
container.insertAdjacentHTML("beforeBegin","<p>this is me i am praveen<p>")
container.insertAdjacentHTML("afterBegin","<p>are you praveen<p>")
container.insertAdjacentHTML("afterEnd","<p>are you praveen<p>")
container.insertAdjacentHTML("beforeEnd","<p>are you praveen<p>")








