//Thyis is the component for the first item
btn1 = document.getElementById("btn1")
//For displaying the information
btn1.addEventListener("click", () =>{
//create and initialize our variable
let name = document.getElementById("name").value            
let address = document.getElementById("address").value        
let telephone = document.getElementById("telephone").value        
let major = document.getElementById("major").value 
    
let x = `Hello! ${name}, I see that you are from ${address} and you are also pursuing ${major} and you can be contacted using ${telephone}.`
document.getElementById("output1").innerHTML = x
})

btn2 = document.getElementById("btn2")
btn2.addEventListener("click",() =>{

let totalSales = document.getElementById("sales").value;
let profit = totalSales * .23;
let message = `The Total Profit of the company is ${profit}.`;
document.getElementById("output2").innerHTML = message;
})

let speed = 60
let hour1 = 5 * speed
let hour2 = 8 * speed
let hour3 = 12 * speed

let y = `The distance the car will travel in 5 hours is ${hour1}.<br>
The distance the car will travel in 8 hours is ${hour2}.<br>
The distance the car will travel in 12 hours is ${hour3}.`
document.getElementById("output3").innerHTML = y;

btn4 = document.getElementById("btn4")
btn4.addEventListener("click",() =>{

let gas = document.getElementById("gas").value
let miles = document.getElementById("miles").value
let MPG = miles / gas

let a = `Your car has an MPG of ${MPG}`
document.getElementById("output4").innerHTML = a
})
