const quotes= ["You have power over your mind not outside events. Realize this, and you will find strenth."
,"The happiness of your life depends upon the quality of your thoughts","He who lives in harmony with himself lives in harmony with the universe"
,"Waste no more time arguing about what a good man should be. Be one","Our life what our thoughts make it."
]
const colors= ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () =>{
    console.log(document.body)
    const randomNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = quotes[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
}
