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
    const plus5 = () => {
        setCount(c => c + 5)
    }
    const minus5 = () => {
        setCount(c => c - 5)
    }
     const randomize = () => {
        if(count > 0){
            setCount(c => c = Math.floor(Math.random() * -100))
        }
        else if(count <0){
            setCount(c => c = Math.floor(Math.random() * 100))
        }
        else{
            setCount(c => c = Math.floor(Math.random() * 100))

        }
     }
    return(
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <div className="upper">
            <button className="button-container-decrement" onClick=
            {decrementCount}>Decrement</button>
            <button className="button-container-reset" onClick=
            {resetCount}>Reset</button>
            <button className="button-container-increment" onClick=
            {incrementCount}>Increment</button>
            </div>

            <div className="lower">
            <button className="button-container-minus5" onClick=
            {minus5}>Minus 5</button>
            <button className="button-container-randomize" onClick=
            {randomize}>Random</button>
            <button className="button-container-minus5" onClick=
            {plus5}>Add 5</button>
            </div>

           
        </div>    
    )
}