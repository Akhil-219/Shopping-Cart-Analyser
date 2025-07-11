import "../css/Cart.css";
import { useItemContext } from "../contexts/CartContext";
import CartItems from "../components/itemsincart";
import ProceedToCheckout from "../components/checkout";

function Cart() {
  const { cartContains } = useItemContext();

  return (
    <div>
      {!cartContains || cartContains.length === 0 ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        cartContains.map((item) => <CartItems key={item.id} item={item} />)
      )}
    <ProceedToCheckout/>
    </div>
  );
}

export default Cart;
