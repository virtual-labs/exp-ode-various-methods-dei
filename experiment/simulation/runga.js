console.log("hello")
let  input1 =document.querySelector("#input1")
let  input2 =document.querySelector("#input2")
let  input3 =document.querySelector("#input3")
let  input4 =document.querySelector("#input4")
let  input5 =document.querySelector("#input5")
let  box =document.querySelector(".box")
let  btn =document.querySelector(".btn")
function quesAppend()
{
let p= document.createElement("p")
let markup=`
 find y2(${input4.value})
  for y=${input1.value}, with y<sub>o</sub>=${input3.value}   x<sub>o</sub>=${input2.value}
using the runga Kutta method 4(1st order derivative)
`
box.style.height="fit-content" 
box.style.width="fit-content" 
box.style.border="1px solid" 
box.style.padding="20px"
 box.style.margin="40px"
box.style.fontSize="30px"
p.innerHTML=markup;
box.appendChild(p) 
}


function solveEquestion()
{
var k1;
var k2;
var k3;
 var k4;
var x;
var x1;
if(input2.value == 0)
{
let p =document.createElement("p")
let markup= `runga Kutta formula is y<sub>1</sub> =>y<sub>o</sub>+k<br>
k is =>1/6[k<sub>1</sub>+2k<sub>2</sub>+2k<sub>3</sub>+k<sub>4</sub>]<br>
find the k1,k2,k3,k4 in this formula <br>

k1 =>h.f(x<sub>o</sub>,y<sub>o</sub>)<br>
k2=>h.f(x<sub>o</sub>+h/2,y<sub>o</sub>+k1/2)<br>
k3=>h.f(x<sub>o</sub>+h/2,y<sub>o</sub>+k2/2)<br>
k4=>h.f(x<sub>o</sub>+h,y<sub>o</sub>+k3)

 

`

p.innerHTML=markup;
 box.appendChild(p)
 if(input1.value.includes("x") && input1.value.includes("y") )
{
var num=Number(input2.value)
var num1 =Number(input3.value)
var num2 =Number(input4.value)
let c= input1.value.replaceAll("x",num)
let c1= c.replaceAll("y",num1)
console.log(c,c1)

 k1=num2*eval(c1)
 x=num+num2/2
 x1=num1+k1/2

console.log(typeof num,typeof num1)
let markup2=`
  k1 =${input4.value}.f(${input2.value},${input3.value})=>${k1.toFixed(2)}<br>
 
`
let p1 = document.createElement("p")
p1.innerHTML=markup2;
box.appendChild(p1)

console.log("first",x,x1)
}	
if(input1.value.includes("x") && input1.value.includes("y"))
{
 c=input1.value.replaceAll("x",x);
 c1 = c.replaceAll("y",x1)
console.log(c,c1)
k2= num2*eval(c1).toFixed(3)
 x=num+num2/2
 x1=num1+k2/2

let p1 = document.createElement("p")
 let markup3=`
k2 = ${num2}.f(${x},${x1})=>${num2}.(${c1})=>${k2}<br>


`
p1.innerHTML=markup3;
box.appendChild(p1)
console.log("secound",x,x1)
}
if(input1.value.includes("x") && input1.value.includes("y"))
{

  c=input1.value.replaceAll("x",x);
 c1 = c.replaceAll("y",x1)
let p1 = document.createElement("p")
 k3= num2*eval(c1).toFixed(3)
 let markup4=`
k3 = ${num2}.f(${x},${x1})=>${num2}.(${c1})=>${k3}<br>


`
 x=num+num2;
 x1=num1+k3
p1.innerHTML=markup4;
box.appendChild(p1)
console.log("third",x,x1)
}
if(input1.value.includes("x") && input1.value.includes("y"))
{

  c=input1.value.replaceAll("x",x);
 c1 = c.replaceAll("y",x1)
let p1 = document.createElement("p")
  k4= num2*eval(c1).toFixed(3)
let d=eval(k1+2*k2)
console.log(d,typeof d)
let d2=eval(2*k3+k4)
console.log(d2,typeof d2)
let d3=eval(d+d2)
console.log(d3,typeof d3)
let d4=eval(1+1/6*d3)

 let markup5=`
k4 = ${num2}.f(${x},${x1.toFixed(3)})=>${num2}.(${c1})=>${k4}<br>
y1=y<sub>o</sub>+1/6[k1+2k2+2k3+k4]<br>
=> ${input3.value}+1/6[${k1.toFixed()}+2(${k2})+2(${k3})+${k4}]<br>
=>y<sub>1</sub>=>${d4}<br>
<br>
y(${input4.value})=>${d4.toFixed(4)}
`
p1.innerHTML=markup5;
box.appendChild(p1)

}

}

else
{
 
 var n=Number(input4.value)
 var n1 =Number(input2.value)
 var n2= Number(input3.value)
 var n3=Number(input5.value)
 var h=n-n1
 var t1
 var t2;
console.log(n,n1,n2 ,typeof n ,typeof n1 ,typeof n2,h)
let p =document.createElement("p")
let markup= `runga Kutta formula is y<sub>1</sub> =>y<sub>o</sub>+k<br>
k is =>1/6[k<sub>1</sub>+2k<sub>2</sub>+2k<sub>3</sub>+k<sub>4</sub>]<br>
find the k1,k2,k3,k4 in this formula <br>

k1 =>h.f(x<sub>o</sub>,y<sub>o</sub>)<br>
k2=>h.f(x<sub>o</sub>+h/2,y<sub>o</sub>+k1/2)<br>
k3=>h.f(x<sub>o</sub>+h/2,y<sub>o</sub>+k2/2)<br>
k4=>h.f(x<sub>o</sub>+h,y<sub>o</sub>+k3)
`
p.innerHTML=markup;
 box.appendChild(p)
 if(input1.value.includes("x") && input1.value.includes("y") )
{

let c= input1.value.replaceAll("x",n1)
let c1= c.replaceAll("y",n2)
console.log(c,c1)

 k1=n3*eval(c1)
 t1 = n1+n3/2;
 t2 =n2+k1/2
let p1 = document.createElement("p")

let markup2=`
  k1 =${n2}.f(${n1},${n2})=>${k1.toFixed(2)}<br>
 `
p1.innerHTML=markup2;
box.appendChild(p1)
}
if(input1.value.includes("x") && input1.value.includes("y"))
{
 c=input1.value.replaceAll("x",t1);
 c1 = c.replaceAll("y",t2)
console.log(c,c1)
k2= n3*eval(c1).toFixed(3)
 

let p1 = document.createElement("p")
 let markup3=`
k2 = ${n2}.f(${t1},${t2})=>${n3}.(${c1})=>${k2}<br>


`
t1=n1+n3/2;
t2=n2+k2/2;
p1.innerHTML=markup3;
box.appendChild(p1)
console.log("secound",x,x1)
}
if(input1.value.includes("x") && input1.value.includes("y"))
{

  c=input1.value.replaceAll("x",t1);
 c1 = c.replaceAll("y",t2)
let p1 = document.createElement("p")
 k3= n3*eval(c1).toFixed(3)
 let markup4=`
k3 = ${n2}.f(${t1},${t2})=>${n3}.(${c1})=>${k3}<br>


`

p1.innerHTML=markup4;
box.appendChild(p1)
t1 =n1+n3;
t2 =n2+k3;
}
if(input1.value.includes("x") && input1.value.includes("y"))
{

  c=input1.value.replaceAll("x",t1);
 c1 = c.replaceAll("y",t2)
let p1 = document.createElement("p")
  k4= n3*eval(c1).toFixed(3)
let d=eval(k1+2*k2)
console.log(d,typeof d)
let d2=eval(2*k3+k4)
console.log(d2,typeof d2)
let d3=eval(d+d2)
console.log(d3,typeof d3)
let d4=eval(n2+1/6*d3)

 let markup5=`
k4 = ${n2}.f(${t1},${t2.toFixed(3)})=>${n3}.(${c1})=>${k4}<br>
y1=y<sub>o</sub>+1/6[k1+2k2+2k3+k4]<br>
=> ${n2}+1/6[${k1}+2(${k2})+2(${k3})+${k4}]
<br>
<br>
y<sub>${1}</sub>=${d4}
`
p1.innerHTML=markup5;
box.appendChild(p1)

}


}

}

 btn.addEventListener("click",()=>{

box.innerHTML=""
  quesAppend()
solveEquestion()

})
