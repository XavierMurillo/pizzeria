import { createContext, useContext, useState } from "react";
import React from "react";

export const PizzaContext = createContext();
const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState({});
  const [cartPizza, setCartPizza] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <PizzaContext.Provider
      value={{ pizza, setPizza, cartPizza, setCartPizza, total, setTotal }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
