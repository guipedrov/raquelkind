"use client";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem("state");
    return savedState ? JSON.parse(savedState) : { cart: [] };
  });

  const addToCart = (item) => {
    setState((prev) => {
      const isReplaceable = item.id >= 1 && item.id <= 3;
      const isPremium = item.id === 4;
  
      let updatedCart = prev.cart;
  
      if (isReplaceable) {
        updatedCart = updatedCart.filter((cartItem) => cartItem.id < 1 || cartItem.id > 3);
      }
  
      if (isPremium) {
        updatedCart = updatedCart.filter((cartItem) => cartItem.id !== 4);
      }
  
      updatedCart.push(item);
  
      return { ...prev, cart: updatedCart };
    });
  };

  const removeFromCart = (itemId) => {
    setState((prev) => {
      const updatedCart = prev.cart.filter((cartItem) => cartItem.id !== itemId);
      return { ...prev, cart: updatedCart };
    });
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ state, addToCart, removeFromCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

/*
API_URL=https://api.easypay.pt
TEST_ACCOUNT_ID="8ce71651-36e6-4361-9c46-c44ae4603f3c"
TEST_API_KEY="b0205239-13fe-4d8f-ab4f-a119800726e2"
IFRAME_URL=https://checkout.easypay.pt/iframe
*/

export const useGlobalContext = () => useContext(GlobalContext);
