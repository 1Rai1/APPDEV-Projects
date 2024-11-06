import React from 'react';
import './App.css';

export default function GroceryList({ items, updateItemQuantity }) {
  return (
    <div className='Fruits'>
      <h2>Items</h2>
      {items.map((item, index) => (
        <div key={index}>
          <span>{item.name} - ₱{item.price.toFixed(2)}</span>
          <input
            type="number"
            min="0"
            value={item.quantity}
            onChange={(e) => updateItemQuantity(index, Number(e.target.value))}
            placeholder="Quantity"
          />
        </div>
      ))}
    </div>
  )
}
