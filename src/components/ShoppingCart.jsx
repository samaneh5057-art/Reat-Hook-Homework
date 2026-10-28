
import { useState } from "react";

function ShoppingCart() {
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState("");

  const price = 5;
  const total = quantity * price;

  function increase() {
    setQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addToCart() {
    if (quantity > 0) {
      setMessage(
        `${quantity} notebook(s) added to cart!`
      );
    } else {
      setMessage("Please select a quantity first.");
    }
  }

  return (
    <div className="card">
      <h2>Shopping Cart</h2>

      <h3>Notebook</h3>
      <p>Price: $5</p>

      <button onClick={decrease}>−</button>
      <span className="quantity">{quantity}</span>
      <button onClick={increase}>+</button>

      <p>Total: ${total}</p>

      <button onClick={addToCart}>Add to Cart</button>

      <p>{message}</p>
    </div>
  );
}

export default ShoppingCart;
