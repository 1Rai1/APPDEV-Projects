//Thyis is the component for the first item
const btn1 = document.getElementById("btn1")
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