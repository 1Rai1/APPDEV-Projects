import React,{useState} from 'react';
export default function Function(){
    const [count, setCount] = useState(0)
    
    function DetermineOddEven(){
        if(count % 2 == 0 || count == 0){
            setCount(c => c + 1) * 2
        }
        else if (count % 2 == 1){
            setCount(c => c + 1 + 1)
        }
    }
 return(
    <>
    <p>
        Counter: {count}
    </p>

    <button onClick={DetermineOddEven}>Update</button>

    </>
 )
}