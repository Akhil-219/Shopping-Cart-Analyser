import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ItemContext = createContext();
export const useItemContext = () => useContext(ItemContext);
export const ItemProvider = ({ children }) => {


const [cartContains, setCartContains] = useState(() => {
  const savedCart = localStorage.getItem("my-cart");
  return savedCart ? JSON.parse(savedCart) : [];
});


//  persist cart on change
useEffect(() => {
  localStorage.setItem("my-cart", JSON.stringify(cartContains));
}, [cartContains]);

  function addToCart(item) {
    setCartContains((prevcartContains) => {
      const existingItem = prevcartContains.find((i) => i.id === item.id);

      if (existingItem) {
        // item exists → increase quantity
        return prevcartContains.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // item doesn't exist → add with quantity 1
        return [...prevcartContains, { ...item, quantity: 1 }];
      }
    });
  }

  function incrementQuantity(item) {
    setCartContains((prevcartContains) => {
      const existingItem = prevcartContains.find((i) => i.id === item.id);
      return prevcartContains.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    });
  }

  function decrementQuantity(item) {
    if (item.quantity > 1) {
      setCartContains((prevcartContains) => {
        const existingItem = prevcartContains.find((i) => i.id === item.id);
        return prevcartContains.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
      });
    } else {
      setCartContains((prevcartContains) =>
        prevcartContains.filter((i) => i.id !== item.id)
      );
    }
  }

  return (
    <ItemContext.Provider
      value={{ cartContains, addToCart, incrementQuantity, decrementQuantity }}
    >
      {children}
    </ItemContext.Provider>
  );
};
