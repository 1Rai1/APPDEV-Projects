import React, { useState } from "react";

export default function QuotesGenerator() {
    const quotes= ["You have power over your mind not outside events. Realize this, and you will find strenth."
    ,"The happiness of your life depends upon the quality of your thoughts","He who lives in harmony with himself lives in harmony with the universe"
    ,"Waste no more time arguing about what a good man should be. Be one","Our life what our thoughts make it."
    ]

    const [quote, setQuote] = useState(quotes[0]); // Initialize with the first quote

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]); // Update the quote state with a random quote
    }

    return (
        <div>
            <nav>
                <div className="nav-center">
                    <h4>Quote Generator</h4>
                    <ul className="nav-links"> 
                        <li>
                            <a href="index.html">Marcus Aurelius</a>
                        </li>
                        <li>
                            <a href="hex.html">Seneca</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <button id="back">Back</button>
            <main>
                <div className="container">
                    <h1>Seneca</h1>
                    <h2>Quote:
                        <span className="color">
                            {quote}  {/* Display the current quote */}
                        </span>
                    </h2>
                    <button className="btn btn-hero" id="btn" onClick={getRandomQuote}>
                        New Quote
                    </button>
                </div>
            </main>
        </div>
    );
}
