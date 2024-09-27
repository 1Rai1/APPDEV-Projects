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
    const randomSeneca = () => {
        let random
        const randomIndex = Math.floor(Math.random() * quotesSeneca.length);
        setQuote(quotesSeneca[randomIndex])
    }
    const randomMarcus = () => {
        const randomIndex = Math.floor(Math.random() * quotesMarcus.length);
        setQuote(quotesMarcus[randomIndex])
    }
    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * allQuotes.length);
        setQuote(allQuotes[randomIndex])
    }

    return (
        <div className="container">

            <h2>{quote}</h2>
            &nbsp;
            <div className="button-container">
                <button className="btn-hero" onClick={randomSeneca}>Seneca Quote</button>
                <button className="btn-hero" onClick={randomMarcus}>Marcus Quote</button>
            </div>
            <div className="button-container">
            <button className="btn-hero" onClick={getRandomQuote}>Get Random Quote</button>
        </div>
        </div>
    );
}
