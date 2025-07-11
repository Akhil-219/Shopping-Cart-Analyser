import "../css/itemscard.css";
import { useItemContext } from "../contexts/CartContext";
function ItemsCard({ item }) {
  const { addToCart } = useItemContext();
  return (
    <div className="item-card">
      <div className="item-img">
        <img src={item.thumbnail} alt={item.name}></img>
      </div>
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
      <div className="item-actions">
        <button className="add-to-cart" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemsCard;
