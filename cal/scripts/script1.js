"use strict";

function provideforsum(){
    let n1=document.getElementById("n1");
    let n2=document.getElementById("n2");
    let res=add(+n1.value,+n2.value);
    let myanswer=document.getElementById("answer");    
    myanswer.textContent="sum = "+res;
}
function provideforsub(){
    let n1=document.getElementById("n1");
    let n2=document.getElementById("n2");
    let res=sub(+n1.value,+n2.value);
    let myanswer=document.getElementById("answer");    
    myanswer.textContent="sub = "+res;
}
function provideformul(){
    let n1=document.getElementById("n1");
    let n2=document.getElementById("n2");
    let res=mul(+n1.value,+n2.value);
    let myanswer=document.getElementById("answer");    
    myanswer.textContent="multiplye = "+res;
}
function providefordiv(){
    let n1=document.getElementById("n1");
    let n2=document.getElementById("n2");
    let res=div(+n1.value,+n2.value);
    let myanswer=document.getElementById("answer");    
    myanswer.textContent="division = "+res;
}

function add(a1,a2){
    let add=a1+a2;
    return add;
}
function sub(a1,a2){
    let sub=a1-a2;
    return sub;
}
function mul(a1,a2){
    let mul=a1*a2;
    return mul;
}
function div(a1,a2){
    let div=a1/a2;
    return div;
}