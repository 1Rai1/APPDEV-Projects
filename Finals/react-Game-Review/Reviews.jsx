import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [game, setGame] = useState("");
    const [rating, setRating] = useState(0); 
    const [reviewText, setReviewText] = useState(""); 

    function handleGameChange(event) {
        setGame(event.target.value);
    }

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    function handleReviewChange(event) {
        setReviewText(event.target.value);
    }

    function addReview() {
        const currentDate = new Date().toLocaleDateString();
        const newReview = {
            name: game,
            rate: rating,
            review: reviewText,
            date: currentDate
        };
        setReviews([...reviews, newReview]);
        setGame('');
        setRating(0);
        setReviewText('');

        alert('Review added!');
    }

    return (
        <>
            <h1><center>Review Game:</center></h1>
            <div className="form-container">
                Name: <input type="text" value={game} onChange={handleGameChange} /><br /><br />
                Rating: <input type="number" value={rating} onChange={handleRatingChange} min="0" max="5" /><br /><br />
                Review:<input type="text" value={reviewText} onChange={handleReviewChange} /><br /><br />

                <div className="card-container">
                    <h2>Review to be added:</h2>
                    <p>Game Name: <strong>{game}</strong></p>
                    <p>Game Rating: <strong>{rating}</strong> Stars</p>
                    <p>Game Review: <strong>{reviewText}</strong></p>
                </div>

                <button onClick={addReview}>Submit</button>
            </div>

            <center>
                {reviews.length > 0 ? (<ReviewCard reviews={reviews} />) : (<p>No reviews.</p>)}
            </center>
        </>
    )
}
