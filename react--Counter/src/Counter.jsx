import React, {useState} from "react";
export default function Counter(){
    //useState Hook for updating variables or Statefull Variables
    const [count, setCount] = useState(0)
    //to increment count
    const incrementCount = () => {
        //previous state => new state
        setCount(c => c + 1)//count => count + 1
    }
    //to decrement
    const decrementCount = () => {
        setCount(c => c - 1)
    }
    //to reset the count
    const resetCount = () => {
        setCount(c => c = 0)
    }
     
    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick=
            {decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick=
            {resetCount}>Reset</button>
            <button className="button-container-increment" onClick=
            {incrementCount}>Increment</button>
           
        </div>    
    )
}