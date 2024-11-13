import React,{useState} from 'react';

export default function Counter(){

    const [count, setCount] = useState(0)

    const Increment2 = () => {
        setCount(c => c + 2)
    }

    const Decrement2 = () => {
        setCount(c => c - 2)
    }
       
    return(
        <>
        <p>
            Counter: {count}
        </p>

        <button onClick={Increment2}>Add 2</button>
        <button onClick={Decrement2}>Minus 2</button>
        </>
    )

    
}