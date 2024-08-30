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

let gas = parseFloat(document.getElementById("gas").value)
let miles = parseFloat(document.getElementById("miles").value)
let MPG = miles / gas

let a = `Your car has an MPG of ${MPG.toFixed(2)}`
document.getElementById("output4").innerHTML = a
})
//no. 5 JavaScript
const btn5 = document.getElementById("btn5");
const output5 = document.getElementById("output5");
btn5.addEventListener("click", () => {
    let celsius =  parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (9/5) * celsius + 32;
    //&#8451 is degree Celsius sign and &#8457 is Fahrenheit sign.
    let x = `<strong>Answer:</strong> ${celsius} &#8451; is converted to ${fahrenheit} &#845A7.`;
    document.getElementById("output5").innerHTML = x;
})

//no. 6 JavaScript
const btn6 = document.getElementById("btn6");
const output6 = document.getElementById("output6");
btn6.addEventListener("click", () => {
    let cookiesEaten = parseInt(document.getElementById("cookiesEaten").value);
    let totalCalories = (cookiesEaten / 40) * 10 * 300;
    let c = `Result:You eat ${cookiesEaten} cookies and consumed
    ${totalCalories.toFixed(0)} calories.`;
    output6.innerHTML = c;
})

//no.7 JavaScript
function calculatePercentage() {
    let Males = document.getElementById("numMales").value;
    let Females = document.getElementById("numFemales").value;
    let totalStudents = parseInt(Males) + parseInt(Females);
    let maleP = (parseInt(Males) / totalStudents) * 100;
    let femaleP = (parseInt(Females) / totalStudents) * 100;
    let b = `Percentage of males: ${maleP.toFixed(2)}%<br>
    Percentage of females: ${femaleP.toFixed(2)}%`;
    document.getElementById("result").innerHTML = b;
    return false;
}

