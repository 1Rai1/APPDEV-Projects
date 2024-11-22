import { Link } from "react-router-dom"
export default function Games(){
    const games = [
        { 
            id: 1, 
            name: "Teamfight Tactics", 
            description: "Teamfight Tactics (TFT) is an auto-battler strategy game where players place units on a grid to battle automatically against other players. Players manage a pool of champions and aim to outsmart and outlast their opponents.", 
            publisher: "Riot Games", 
            developer: "Riot Games", 
            reviews: [
                "Incredible depth for a strategy game. Always keeps me coming back!",
                "Fun but sometimes feels too random. The strategic elements are still great!",
                "It’s fun, but I’m still learning the mechanics. The matchmaking could be better."
            ]
        },
        { 
            id: 2, 
            name: "Valorant", 
            description: "Valorant is a tactical first-person shooter (FPS) where players take on the role of an Agent with unique abilities, and compete in teams of five to plant or defuse a bomb (Spike) or eliminate the enemy team.", 
            publisher: "Riot Games", 
            developer: "Riot Games", 
            reviews: [
                "One of the best tactical shooters out there! The unique abilities make it so much fun.",
                "Great game overall, but the matchmaking can be frustrating at times.",
                "The gameplay is solid, but it feels like the meta shifts too often."
            ]
        },
        { 
            id: 3, 
            name: "League of Legends", 
            description: "League of Legends is a multiplayer online battle arena (MOBA) game where two teams of five players each control a unique champion with special abilities and battle against each other to destroy the enemy team's Nexus, located in their base.", 
            publisher: "Riot Games", 
            developer: "Riot Games", 
            reviews: [
                "An iconic MOBA with fantastic team dynamics and skill-based gameplay.",
                "Challenging, but the community can be toxic. Still, an amazing game!",
                "It’s fun, but the learning curve is huge. You need a lot of time to get good at it."
            ]
        },
        { 
            id: 4, 
            name: "Legends of Runeterra", 
            description: "Legends of Runeterra is a collectible card game (CCG) set in the League of Legends universe, where players build decks of cards representing champions, spells, and creatures to battle opponents in strategic card duels.", 
            publisher: "Riot Games", 
            developer: "Riot Games", 
            reviews: [
                "A fantastic card game with deep mechanics and a great collection system.",
                "Love the variety of champions and deck types, but the grind can be a bit slow.",
                "Good game, but I find it hard to get into the meta. Could use more tutorials for new players."
            ]
        },
        { 
            id: 5, 
            name: "Ruined King: A League of Legends Story", 
            description: "Ruined King: A League of Legends Story is a single-player, turn-based RPG set in the League of Legends universe. Players control a team of iconic champions to uncover the mystery behind the events leading to the rise of the Ruined King.", 
            publisher: "Riot Games", 
            developer: "Riot Games (overall universe), Airship Syndicate (game-specific)", 
            reviews: [
                "A perfect RPG for League of Legends fans. The combat system is engaging and the story is excellent.",
                "Great game with a compelling story, but the pacing felt a bit slow at times.",
                "I’m not a big RPG fan, but it was enjoyable. The game has a lot of good mechanics, though."
            ]
        }
    ]
    return(
        <>
        <div className="GameList">
            <h1>Games List:</h1>
            <ul>
                {games.map((game)=>(
                    <li key={game.id}>
                        <Link to ={`/games/${game.id}`} state={{game}}> {game.name.toUpperCase()}</Link>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}