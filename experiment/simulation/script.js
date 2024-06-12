	
let input1 = document.querySelector(".inp1") 
let input2 = document.querySelector(".inp2") 
let input3 = document.querySelector(".inp3") 
let input4 = document.querySelector(".inp4")
let input5 = document.querySelector(".num") 
let div = document.querySelector(".div") 
let div1 = document.querySelector(".div2") 

let btn =document.querySelector(".btn")

console.log("hello")


function printRatio(val1,val2,val3,val4,val5)
{


  if(val2==0)
{
 
let f=Number(val4) 
let f1=Number(val2)
 let f2=Number(val5)
let a =f-f1
let a1 =a/f2

a3=math.fraction(a1)
var a4=math.format(a3, { fraction: 'ratio' })
var x1 =eval(f1+a4)
	
console.log(typeof a4,typeof f1 ,a4,f1,typeof x1,x1)
 


let p =document.createElement("h2")

p.innerHTML=`User Input<br>
 the step size is h =${a3} <br>
eular method is  y<sub>1</sub>=y<sub>0</sub>+h[f(x<sub>o</sub>,y<sub>o</sub>)]<br>
we have that h=${val5}, x<sub>o</sub> =${val2},y<sub>o</sub>=${val3},and f(x,y)=${val1}
<br>



`
p.style.position="relative";
p.style.left="200px";
div1.appendChild(p)
div1.style.height="600px"
div1.style.width="740px"
div1.style.border="1px solid black";
div1.style.position="relative";
 div1.style.top="300px"
div1.style.left="300px"
div1.style.overflow="auto"

document.body.appendChild(div1)
var c;
 var c1;
var res1;
var res2;
 var res3;
var res4;
for(i=1;i<=val5;i++)

{
 if(i==val5)
{
if(val1.includes("x") && val1.includes("y"))
{
 let p1=document.createElement("p")
  c =val1.replaceAll("x",val2)
c1 = c.replaceAll("y",val3)

res1=math.evaluate(Number(val3)+eval(a4)*eval(c1))


let markup =` solution<br>step1<br> 
=> y<sub>o</sub>+h[f(x<sub>o</sub>,y<sub>o</sub>)]
=>${val3}+${a4}[${c1}]=${val3}+${a4}*${eval(c1)}
=>${math.round(math.evaluate(Number(val3)+eval(a4)*eval(c1)),2) } 

`
p1.innerHTML=markup
p1.style.fontSize="25px";
div1.appendChild(p1)
div1.style.height="600px"
div1.style.width="740px"
div1.style.border="1px solid black"
div1.style.position="relative";
 div1.style.top="300px"
div1.style.left="300px"
div1.style.overflow="auto"

document.body.appendChild(div1)



}
}
if(i==val5)
{
if(val1.includes("x") && val1.includes("y"))
{
 let p1=document.createElement("p")
  c =val1.replaceAll("x",x1)
c1 = c.replaceAll("y",res1)

res2=math.evaluate(Number(res1)+eval(a4)*eval(c1))
 var x2=eval(a4+x1)
let markup =` step2<br>
<br>
=> y<sub>1</sub>+h[f(x<sub>1</sub>,y<sub>1</sub>)]
=>${res1}+${a4}[${c1}]=>${res1}+${eval(a4)}*${eval(c1)}
=>${math.round(math.evaluate(Number(res1)+eval(a4)*eval(c1)),2) } 

`
p1.innerHTML=markup
p1.style.fontSize="25px";
div1.appendChild(p1)
div1.style.height="600px"
div1.style.width="740px"
div1.style.border="1px solid black"
div1.style.position="relative";
 div1.style.top="300px";
div1.style.left="300px"
div1.style.overflow="auto" 
document.body.appendChild(div1)




}
}
if(i==val5)
{  
if(val1.includes("x") && val1.includes("y"))
{
 var x3=eval(a4+x2)
  c =val1.replaceAll("x",x2)
c1 = c.replaceAll("y",res2)
 let p1=document.createElement("p")
res3 = math.evaluate(Number(res2)+eval(a4)*eval(c1))


let markup =` step3<br>
<br>
=> y<sub>2</sub>+h[f(x<sub>2</sub>,y<sub>2</sub>)]
=>${res2}+${a4}[${c1}]=>${res2}+${eval(a4)}*${eval(c1)}
=>${math.round(math.evaluate(Number(res2)+eval(a4)*eval(c1)),2)} 

`
p1.innerHTML=markup
div1.appendChild(p1)
div1.style.height="600px"
div1.style.width="740px"
div1.style.border="1px solid black"
div1.style.position="relative";
 div1.style.top="300px"
div1.style.left="300px"
div1.style.overflow="auto"

document.body.appendChild(div1)
p1.style.fontSize="25px";




}
}
if(i==val5)
{  
if(val1.includes("x") && val1.includes("y"))
{
 var x4=eval(a4+x3)
  c =val1.replaceAll("x",x3)
c1 = c.replaceAll("y",res3)
 let p1=document.createElement("p")
res4= math.evaluate(Number(res3)+eval(a4)*eval(c1))


let markup =` step4<br>
<br>
=>  y<sub>3</sub>+h[f(x<sub>3</sub>,y<sub>3</sub>)]
=>${res3}+${a4}[${c1}]=>${res3}+${eval(a4)}*${eval(c1)}
=>${math.round(math.evaluate(Number(res3)+eval(a4)*eval(c1)),2)} 

`
p1.innerHTML=markup
div1.appendChild(p1)
div1.style.height="600px";
div1.style.width="740px";
div1.style.border="1px solid black";
div1.style.position="relative";
 div1.style.top="300px"
div1.style.left="700px"
div1.style.overflow="auto"
 
document.body.appendChild(div1)
p1.style.fontSize="25px";

}
}

if(i==val5)
{  
if(val1.includes("x") && val1.includes("y"))
{
 var x5=eval(a4+x4)
  c =val1.replaceAll("x",x4)
c1 = c.replaceAll("y",res4)
 let p1=document.createElement("p")
res5= math.round(math.evaluate(Number(res4)+eval(a4)*eval(c1)),2)


let markup =` step5<br>
<br>
=>  y<sub>4</sub>+h[f(x<sub>4</sub>,y<sub>4</sub>)]
=>${res4}+${a4}[${c1}]=>${res4}+${eval(a4)}*${eval(c1)}
=>${math.round(math.evaluate(Number(res4)+eval(a4)*eval(c1)),2)} 

`
p1.innerHTML=markup
p1.style.fontSize="25px"; 

div1.appendChild(p1)
div1.style.height="600px";
div1.style.width="740px";
div1.style.border="1px solid black";
div1.style.position="relative";
 div1.style.top="300px"
 div1.style.left="300px"
div1.style.overflow="auto"
 
document.body.appendChild(div1)

}
}


}
}
else
{
let f=Number(val4) 
let f1=Number(val2)
 let f2=Number(val5)
let a =f-f1
let a1 =a/f2

let a2=math.fraction(a1)
var a3=math.format(a2, { fraction: 'ratio' })
var x1 =a3+Number(f1)
var div2=document.createElement("div")
 let p =document.createElement("h2")
p.innerHTML=`User Input<br>
 the step size is h =${a3} <br>
eular method is  y<sub>1</sub>=y<sub>0</sub>+h[f(x<sub>o</sub>,y<sub>o</sub>)]<br>
we have that h=${a3}, x<sub>o</sub> =${val2},y<sub>o</sub>=${val3},and f(x,y)=${val1}
<br>

`
div2.appendChild(p)
document.body.appendChild(div2)

if(val1.includes("x") && val1.includes("y"))
{
 let p1=document.createElement("p")
  c =val1.replaceAll("x",val2)
c1 = c.replaceAll("y",val3)

res1=math.evaluate(Number(val3)+eval(a3)*eval(c1))


let markup =` solution<br>step1<br> 
=> y<sub>1</sub>+h[f(x<sub>o</sub>,y<sub>o</sub>)]
=>${val3}+${a3}[${c1}]=${val3}+${a3}*${eval(c1)}
=>${math.round(math.evaluate(Number(val3)+eval(a3)*eval(c1)),2) } 
<br>

`
p1.innerHTML=markup
p1.style.fontSize="25px";
div2.appendChild(p1)
div2.style.height="600px"
div2.style.width="740px"
div2.style.border="1px solid black"
div2.style.position="relative";
 div2.style.top="300px"
div2.style.left="300px"
div2.style.overflow="auto"

document.body.appendChild(div2)



}
if(val1.includes("x") && val1.includes("y"))
{
 let p1=document.createElement("p")
  c =val1.replaceAll("x",eval(x1))
c1 = c.replaceAll("y",res1)

res2=math.evaluate(Number(res1)+eval(a3)*eval(c1))
 var x2=x1+a4
let markup =` step2<br>
<br>
=> y<sub>2</sub>+h[f(x<sub>1</sub>,y<sub>1</sub>)]
=>${res1}+${a3}[${c1}]=>${res1}+${eval(a3)}*${math.round(eval(c1))}
=>${math.round(eval(Number(res1)+eval(a3)*eval(c1)),2) } 

`
p1.innerHTML=markup
p1.style.fontSize="25px";
div2.appendChild(p1)
div2.style.height="600px"
div2.style.width="740px"
div2.style.border="1px solid black"
div2.style.position="relative";
 div2.style.top="300px";
div2.style.left="300px"
div2.style.overflow="auto" 
document.body.appendChild(div2)




}

}


}


btn.addEventListener("click",()=>{
 div1.innerHTML='';

printRatio(input1.value,input2.value,input3.value,input4.value,input5.value)
 });
	