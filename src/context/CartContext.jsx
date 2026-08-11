import { createContext, useState, useContext, useEffect } from "react";

// 1. create the context
export const CartContext = createContext();

// 2. create the provider
export function CartProvider({ children }) {

  // load cart from localStorage on first render
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // save cart to localStorage every time it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add to cart
  function addToCart(product) {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      // product already in cart → just increase quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      ));
    } else {
      // new product → add to cart
      setCart([...cart, product]);
    }
  }

  // remove from cart
  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }

  // update quantity
  function updateQuantity(id, quantity) {
    if (quantity < 1) return;  // can't go below 1
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  }

  // calculate total
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. custom hook for easy access
export function useCart() {
  return useContext(CartContext);
}