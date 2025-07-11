import { useItemContext } from "../contexts/CartContext";
import { useBudgetContext } from "../contexts/BudgetContext";
import { useEffect } from "react";
import "../css/checkout.css";
function ProceedToCheckout() {
  const { cartContains } = useItemContext();
  const { budget } = useBudgetContext();

  const total =
    cartContains && cartContains.length > 0
      ? cartContains.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;
  const overBudget = total > budget && budget > 0;
  useEffect(() => {
    if (overBudget) {
      alert(
        "Your total items price exceeds your budget... Want to see some other options?"
      );
    }
  }, [overBudget]);

  return (
    <div className="checkout-container">
      <p>Total: ${total.toFixed(2)}</p>
      <p>Budget: ${budget}</p>
      <button disabled={total === 0}>Proceed to Checkout</button>
      <button disabled={!overBudget}>Suggestions</button>
    </div>
  );
}
export default ProceedToCheckout;
