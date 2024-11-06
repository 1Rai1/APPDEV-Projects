import React, { useState } from 'react';
import './App.css';

export default function Checkout({ totalPrice, isCheckedOut, handleCheckout, payment, purchasedItems }) {
  const [paymentAmount, setPaymentAmount] = useState(0)

  const handlePayment = () => {
    handleCheckout(Number(paymentAmount))
  }

  const change = payment - totalPrice

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ₱{totalPrice.toFixed(2)}</p>
      {!isCheckedOut ? (
        <div>
          <input
            type="number"
            min="0"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
            placeholder="Enter Payment"
          />
          <button onClick={handlePayment}>Pay</button>
        </div>
      ) : (
        <div>
          <h3>Receipt</h3>
          <p>Items Purchased:</p>
          <ul>
            {purchasedItems.map((item, index) => (
              <li key={index}>
                {item.name} x {item.quantity} = ₱{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Total Price: ₱{totalPrice.toFixed(2)}</p>
          <p>Payment: ₱{payment.toFixed(2)}</p>
          <p>Change: ₱{change.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}
