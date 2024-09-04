
const quotes = [
"It is not that we spend five days at a time with a friend, but that we are constantly thinking of him.",
"The greatest remedy for anger is delay.",
"To be everywhere is to be nowhere.",
"If you wish to be rich, do not add to your money, but subtract from your desire.",
"He who is brave is free."
]
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

let quotess = 0; 

btn.addEventListener("click", () => {
    color.textContent = quotes[quotess]
    document.body.style.backgroundColor = colors[quotess]
    quotess = (quotess + 1) % quotes.length
});