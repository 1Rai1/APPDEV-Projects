const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//#f15025 #AA0123 #ADF000 sample outputs
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
document.getElementById('back').onclick = function() {
    window.location.href = 'http://127.0.0.1:5500/NavBar/index.html';}
//control the button
btn.addEventListener("click", () =>{
    let hexColor = "#"
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor
    //changes the bacground color to the hexColor value
    document.body.style.backgroundColor = hexColor
})
getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}