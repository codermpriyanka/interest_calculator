let prinicipal =document.getElementById("prinicipal")
let rate =document.getElementById("rate")
let time=document.getElementById("time")
let ans =document.getElementById("ans")

function calculate(){
    let p=Number(prinicipal.value)
    let r=Number(rate.value)
    let t=Number(time.value)
    let ansss=Number((p*r*t)/100)
    ans.innerHTML=ansss
}
