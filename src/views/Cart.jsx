import React, { useContext, useEffect } from "react";
import { NavbarComponent } from "../components/NavbarComponent";
import { PizzaContext } from "../context/PizzaContext";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const { setCartPizza, cartPizza, setTotal, total } = useContext(PizzaContext);

  const reducePizza = (pizza) => {
    setTotal(total - pizza.price);
    setCartPizza((prevCartPizza) =>
      prevCartPizza
        .map((opizza) =>
          opizza.id === pizza.id
            ? { ...opizza, numberOfPizza: opizza.numberOfPizza - 1 }
            : opizza
        )
        .filter((pizza) => pizza.numberOfPizza > 0)
    );
  };

  const addPizza = (pizza) => {
    console.log(pizza);
    setTotal(total + pizza.price);
    setCartPizza((prevCartPizza) =>
      prevCartPizza.map((opizza) =>
        opizza.id === pizza.id
          ? { ...opizza, numberOfPizza: opizza.numberOfPizza + 1 }
          : opizza
      )
    );
  };
  return (
    <div>
      <NavbarComponent />
      <div
        style={{
          backgroundColor: "#d8d8d8",
          padding: "2rem",
          marginTop: "2rem",
          marginLeft: "2rem",
          width: "96%",
        }}
      >
        <p>Detalles del pedido:</p>
        <div style={{ backgroundColor: "white", padding: "2rem" }}>
          {cartPizza.map((pizza) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "1rem",
                borderBottom: "1px solid #d8d8d8",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
              key={pizza.id}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img src={pizza.img} style={{ width: "10%" }} />
                <p
                  style={{
                    marginLeft: "1rem",
                    fontWeight: "bolder",
                    width: "10vw",
                  }}
                >
                  {pizza.name}
                </p>
              </div>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    color: "green",
                    fontWeight: "bold",
                    marginRight: "1rem",
                  }}
                >
                  ${pizza.price * pizza.numberOfPizza}
                </p>
                <Button
                  variant="danger"
                  style={{ marginRight: "1rem" }}
                  onClick={() => reducePizza(pizza)}
                >
                  -
                </Button>
                <p style={{ marginRight: "1rem" }}>{pizza.numberOfPizza}</p>
                <Button variant="primary" onClick={() => addPizza(pizza)}>
                  +
                </Button>
              </div>
            </div>
          ))}
          <h1>Total: ${total}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
