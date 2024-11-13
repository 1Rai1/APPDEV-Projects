export default function FavoriteFood(props){
    const listItems = props.items.map(item => 
        <li key = {item.id}>{item.name}: {item.color}({item.rating} stars)
        </li>) 
         return(
            <>
            <p>{props.category}</p>
            <ul className="Ah">{listItems}</ul>
            </>
        )
    }
FavoriteFood.defaultProps = {
    category: "Category",
    items: []
    }