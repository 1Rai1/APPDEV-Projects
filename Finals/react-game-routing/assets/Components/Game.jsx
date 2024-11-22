import { useLocation } from "react-router-dom";
export default function Game() {
    const location = useLocation()
    const game = location.state.game
    return (
        <>
            <div className="Identification">
                <h1>{game.name}</h1>
                <p><strong>Description: </strong>{game.description}</p>
                <p><strong>Publisher: </strong>{game.publisher}</p>
                <p><strong>Developer: </strong>{game.developer}</p>
            </div>
            <div className="Reviews">
                <h2>Reviews:</h2>
                    <ul>
                        {game.reviews.map((review, index) => (
                            <li key={index}>{review}</li>
                        ))}
                    </ul>
            </div>
        </>
    )
}
