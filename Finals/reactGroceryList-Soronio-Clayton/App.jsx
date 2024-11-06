import React, { useState } from 'react';
import GroceryList from './GroceryList';
import Checkout from './CheckOut';
import Footer from './Footer';
import './App.css'

const App = () => {
  const [items, setItems] = useState([
    { name: 'Grapes', price: 264.33, },
    { name: 'Oranges', price: 40.93, quantity: 0 },
    { name: 'Kiwis', price: 293.55, quantity: 0 },
    { name: 'Bananas', price:  77.10, quantity: 0 },
    { name: 'Cucumbers', price:  64.87 , quantity: 0 },
  ])
  const [totalPrice, setTotalPrice] = useState(0)
  const [payment, setPayment] = useState(0)
  const [isCheckedOut, setIsCheckedOut] = useState(false)
  const [purchasedItems, setPurchasedItems] = useState([])

  const updateItemQuantity = (index, quantity) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, quantity } : item
    )
    setItems(updatedItems)
    const newTotal = updatedItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setTotalPrice(newTotal)
  }

  const handleCheckout = (paymentAmount) => {
    setPayment(paymentAmount)
    setIsCheckedOut(true)
    const itemsBought = items.filter(item => item.quantity > 0)
    setPurchasedItems(itemsBought)
  }

  return (
    <>
    <div className='List'>
      <h1>Baguio City Market</h1>
      <GroceryList items={items} updateItemQuantity={updateItemQuantity} />
      <Checkout 
        totalPrice={totalPrice} 
        isCheckedOut={isCheckedOut} 
        handleCheckout={handleCheckout} 
        payment={payment}
        purchasedItems={purchasedItems}
      />
    </div>
    <Footer />
    </>
  )
}

export default App;
