import React, { useState } from "react";

export default function QuotesGenerator() {
    const quotesSeneca = [
        "It is not that we spend five days at a time with a friend, but that we are constantly thinking of him.",
        "The greatest remedy for anger is delay.",
        "To be everywhere is to be nowhere.",
        "If you wish to be rich, do not add to your money, but subtract from your desire.",
        "He who is brave is free."
    ];
    const quotesMarcus = [
        "You have power over your mind not outside events. Realize this, and you will find strength.",
        "The happiness of your life depends upon the quality of your thoughts.",
        "He who lives in harmony with himself lives in harmony with the universe.",
        "Waste no more time arguing about what a good man should be. Be one.",
        "Our life is what our thoughts make it."
    ];

    const allQuotes = [...quotesSeneca, ...quotesMarcus]
    const [quote, setQuote] = useState("")
    const [prevQuote, setPrevQuote] = useState("")

    const getRandom = (quotes) => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let newQuote = quotes[randomIndex];
        while (newQuote === prevQuote) { 
            randomIndex = Math.floor(Math.random() * quotes.length);
            newQuote = quotes[randomIndex];
        }
        setPrevQuote(newQuote);  
        return newQuote;
    }
    const randomSeneca = () => {
        setQuote(getRandom(quotesSeneca))
    }
    const randomMarcus = () => {
        setQuote(getRandom(quotesMarcus))
    }
    const getRandomQuote = () => {
        setQuote(getRandom(allQuotes))
    }

    return (
        <div className="container">

            <h2>{quote}</h2>
            &nbsp;
            <div className="button-container">
                <button className="btn-hero" onClick={randomSeneca}>Seneca Quote</button>
                <button className="btn-hero" onClick={randomMarcus}>Marcus Quote</button>
                <hr />
            </div>
            <div className="button-container">
            <button className="btn-hero" onClick={getRandomQuote}>Get Random Quote</button>
        </div>
        </div>
    );
}
