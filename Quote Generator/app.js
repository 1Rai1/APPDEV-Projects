const quotes= ["You have power over your mind not outside events. Realize this, and you will find strenth."
,"The happiness of your life depends upon the quality of your thoughts","He who lives in harmony with himself lives in harmony with the universe"
,"Waste no more time arguing about what a good man should be. Be one","Our life what our thoughts make it."
]
const colors= ["green", "red", "rgba(133,122,200)","#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")
//functions for changing the color of the HTM file
btn.addEventListener("click", () =>{
    //Targeting the document body
    console.log(document.body)//not required
    //Getting random num fron getRandomNumber
    const randomNumber = getRandomNumber()
    //Referencing the background color of the document body
    document.body.style.backgroundColor = colors[randomNumber]
    //Change the text color for the span tag
    color.textContent = quotes[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
}
