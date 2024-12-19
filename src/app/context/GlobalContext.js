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

export const useGlobalContext = () => useContext(GlobalContext);
