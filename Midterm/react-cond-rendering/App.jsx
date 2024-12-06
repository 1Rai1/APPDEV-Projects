import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import LOF from './ListOfFruits'
function App() {
  //array of fruits => fruit.objects 
  const fruits =[
    { id: 1,
      name: "apple",//apple object
      color: "red"},
    { id: 2,
      name: "banana",//banana object
      color: "yellow"},
    { id: 3,
      name: "orange",//orange object
      color: "orange"},
    { id: 4,
      name: "grape",//grape object
      color: "purple"},
    { id: 5,
      name: "kiwi",//kiwi object
      color: "green"},
    { id: 6,
      name: "Rainier",//kiwi object
      color: "brown"},
  ]
  //desserts object
  const desserts = [
    {id: 1, name: "cake", color: "red"},
    {id: 2, name: "ice cream", color: "blue"},
    {id: 3, name: "pie", color: "green"},
  ]
  return (
    <>
     <Header />
     {/*{fruits.length > 0 {<LOF items = {fruits} catefory = "My Favorite Fruits"}} */}
    {fruits.length > 0 ?   (<LOF items = {fruits} category = "My Favorite Fruits"/>) : (<p>No Fruits</p>)}
    {desserts.length > 0 ?   (<LOF items = {desserts} category = "My Favorite Desserts"/>) : (<p>I Do Not Like Desserts</p>)}
     <Footer />
    </>
  )
}

export default App
