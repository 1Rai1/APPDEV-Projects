import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Identification from './Identification'
import Counter from './Counter'
import Function from './Function'
import FavoriteFood from './FavoriteFood'
import Paragraph from './Paragrapgh'
function App() {
  const Fruits = [
    {id: 1, name: "Apple",color: "Red", rating: 5},
    {id: 2, name: "Orange",color: "Orange", rating: 5},
    {id: 3, name: "Kiwi",color: "Green", rating: 5},
    {id: 4, name: "Grape",color: "Purple", rating: 5},
    {id: 5, name: "Banana",color: "Yellow", rating: 5},]
  
    const Porky = []

  return (
    <>
      <Header/>
      {Fruits.length > 0 ?   (<FavoriteFood items = {Fruits} category = "My Favorite Fruits"/>) : (<p>I have no favorite fruits</p>)}
      {Porky.length > 0 ?   (<FavoriteFood items = {Porky} category = "My Favorite Pork Dishes"/>) : (<p>I have no favorite Pork Dishes</p>)}
      <Identification/>
      <Counter/>
      <Function/>
      <Paragraph/>
      <Footer/>
    </>
  )
}

export default App
