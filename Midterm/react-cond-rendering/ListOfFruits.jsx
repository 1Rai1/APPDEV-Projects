import PropTypes from 'prop-types'
export default function LOF(props){
    //javascript functions
    const listItems = props.items.map(item => 
    <li key = {item.id}><strong>{item.name}</strong>:
    &nbsp; {item.color}
    </li>) 
    return(
        //html elements
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    )
}
LOF.defaultProps = {
    category: "Category",
    items: []
}