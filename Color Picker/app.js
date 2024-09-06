const colors= ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
document.getElementById('back').onclick = function() {
    window.location.href = 'http://127.0.0.1:5500/NavBar/index.html';}
//functions for changing the color of the HTM file
btn.addEventListener("click", () =>{
    //Targeting the document body
    console.log(document.body)//not required
    //Getting random num fron getRandomNumber
    const randomNumber = getRandomNumber()
    //Referencing the background color of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //Change the text color for the span tag
    color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}