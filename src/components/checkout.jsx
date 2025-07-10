import { useItemContext } from "../contexts/CartContext";
import "../css/checkout.css"
function ProceedToCheckout() {
  const { cartContains } = useItemContext();
  const total =
    cartContains && cartContains.length > 0
      ? cartContains.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;

  return (
    <div className="checkout-container">
      <p>Total: {total.toFixed(2)}</p> 
      <button disabled={total === 0}>Proceed to Checkout</button>
    </div>
  );
}
export default ProceedToCheckout;
