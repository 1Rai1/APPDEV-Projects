import React,{useState} from 'react'

export default function MyCart(){
    const [myCart, setMyCart] = useState([])

    const handleAddCItem = () => {
        const NewCart = document.getElementById("CartInput").value
        setMyCart(g =>[...games, NewCart])

        setMyCart = document.getElementById("CartInput").value = ""
    }
    const handleRemoveItem = () => {
        
    }
}