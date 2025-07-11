import "../css/itemsincart.css";
import { useItemContext } from "../contexts/CartContext";
function CartItems({ item }) {
    const {incrementQuantity,decrementQuantity}=useItemContext();
    function increment(){
        incrementQuantity(item)
    }
    function decrement(){
        decrementQuantity(item)
    }
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={item.thumbnail} alt={item.name}></img>
      </div>
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
      <button onClick={decrement} className="quantity-button">-</button>
      <p>{item.quantity}</p>
      <button onClick={increment} className="quantity-button">+</button>
    </div>
  );
}

export default CartItems;
