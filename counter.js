/*let a=[1,2,3,4,5,6,7,8,9,10];
console.log(a);

// initial value,condition,increment/decrement
for(let i=0; i<a.length; i++){
    
    console.log('2*${a[i]}=',a[i]);
}




let aa=40;
if(a==4){
    console.log("value is same");
}else if (a===40) {
    console.log("value is 40")
}else if(a==90){
    console.log("value is 90")
}else{
    console,log("value is not same")
}

let mark=60;
if(marks>=90){
    console.log("bike")
}else if(marks>=80){
    console.log(" party")
}else if(marks>=70){
    console.log(" game")
}else{
    console.log("nothing")
}


let A=45;
if(A%2==0){
    console.log("A is even number")
}else{
    console.log("A is not a even number")
}
//condition? true value: false value

marks>70 ? table(3):table(5);
let a =[1,2,3];
let b =[1,2,3];
console.log([]==[]);
console.log([] === []);



let a = [1,2,3,4,5,6,7,8,9,10];


let b=a.filter((el) =>el >= 5 ).map((el) => el *7);
let c=b.map((el) => el *5);

console.log(b);

let b =a.reduce((acc,cur,index) => {

    return acc+cur;

});

console.log(b);

let acc = 10;
acc = acc + 1;
acc = acc + 2;
acc = acc + 3;
acc = acc + 4;
acc = acc + 5;
acc = acc + 6;

const evensum = a.filter((el) => el % 2 == 0).reduce((a,e) => a+e);
const oddsum = a.filter((el) => el % 2 == 1).reduce((a,e) => a+e);

console.log(evensum,oddsum);


const aa =[0,0,0,0,0,0,0,0,0,0,0,0,]

const s0=aa.Map((el,i) => el + 1).filter((el) => el % 2 == 1).reduce((a,e) => a +e);

console.log(se ,so);
//tag selectors
let body=document.getElementsByTagName("h1");
console.log(body[0]);

// class selector

let classes=document.getElementsByClassName("a");
console.log(classes[0]);

// id selector
let val=document.getElementById("val");
console.log(val);

//query selector
let varr=document.querySelector("h1");
console.log(varr);

//query selectorall
let as=document.querySelectorAll("#val");
console.log(as[0])

let text=classes[0].innerHTML;
console.log(text);
classes[0].textContent="entering from js";

let node=document.getElementsByClassName("a");

let text1=node[0].textContent;
console.log(text1);

let sty=document.querySelectorAll("h1");
console.log(sty);

sty[0].style.color="red";

sty[1].style.color="blue";


sty[1].classList.toggle("hiden");

sty[1].classList.toggle("body");

const v=document.createElement("h3");

v.textContent="added from js";

const h3=document.getElementsByClassName("cnt");


h3(0).appendChild(v);

const div=document.createElement("div");
const h2=document.createElement("h2");

h2.textContent="Anything";
h2.classList.add="sd";
div.appendChild(h2);

document.body.appendChild(div);

const img=document.createElement("img");
img.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/020/934/645/small_2x/doraemon-illustration-free-free-vector.jpg");
img.setAttribute("alt","Doraemon");
img.setAttribute("id","my doraemon");
img.setAttribute("height",100);
img.setAttribute("weight",200);

document.body.appendChild(img);
const incButton=document.querySelector("button");

console.log(incButton);

incButton.addEventListener("click", () => {
    console.log("button clicked");
});
const btn=document.getElementsByTagName("button");
const incbn=btn[0];
const decbtn=btn[1];
const resetbtn=btn[2];
const p=document.querySelector("#val");
let val=0;

let inc=true;

let pause=()=>{
    if(val>=10){
        inc=false;
    }
};
const handler=(vall) =>{
    if(inc){
   vall?(val=val+1) :(val=val-1);
   val>=0?(p.style.color="green"):(p.style.color="blue");
    p.textContent=val;
    }
    pause();
};

const init=() => {
    val=0;
    p.textContent=val;
    inc=true;
};

incButton.addEventListener("click",()=>handler(true));

decbtn.addEventListener("click",()=> handler(false));

resetbtn.addEventListener("click",init);*/


