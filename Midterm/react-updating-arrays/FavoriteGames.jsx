import React, {useState} from 'react'
export default function FavGames(){
    const [games,setgames] = useState(["Hades", "Risk of Rain","Doomsday Hunters", "Sekiro" ])
   //function to add game
function handleAddGame(){
    //referencing our text box
    const newGame = document.getElementById("gameInput").value;
    setgames(g =>[...games, newGame])
    //reset textbox
    document.getElementById("gameInput").value = "";
}
//function to remove a game
function handleRemoveGame(index){
    const newGame = games.filter((game, i) => i !== index)
    setgames(newGame)
}
    return(
        <>
        <div>
            <h2>These are my favorite games in 2024:</h2>
            <ul>
                {
                    games.map((game, index) =>
                    <li key = {index} 
                    onClick = {() => handleRemoveGame(index)}>
                    {game}</li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput" />
            <button type="button" onClick={handleAddGame}>Add Game</button>  
        </div>    
        </>
    )
}