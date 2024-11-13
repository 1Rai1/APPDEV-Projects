export default function ReviewCard(props) {
    const listOfReviews = props.reviews;

    const reviewDisplay = listOfReviews.map((review, index) => (
        <div key={index} className="review-card">
            <h4>Game Name: {review.name}</h4>
            <p>Rating: {review.rate} Stars</p>
            <p>Review: {review.review}</p>
            <p>Reviewed on: {review.date}</p>
        </div>
    ));

    return (
        <>
            <div className="review-cards-container">
                {reviewDisplay}
            </div>
        </>
    );
}
