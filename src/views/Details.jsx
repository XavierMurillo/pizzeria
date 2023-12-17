import React, { useContext } from "react";
import { NavbarComponent } from "../components/NavbarComponent";
import { PizzaContext } from "../context/PizzaContext";
import Button from "react-bootstrap/Button";

const Details = () => {
  const { pizza, cartPizza, setCartPizza, setTotal, total } =
    useContext(PizzaContext);
  console.log(Object.keys(pizza));
  const addPizza = (pizza) => {
    const match = cartPizza.filter((cpizza) => cpizza.id === pizza.id);
    if (match.length > 0) {
      const otherPizza = cartPizza.filter((opizza) => opizza.id !== pizza.id);
      if (otherPizza.length > 0) {
        setCartPizza([
          ...otherPizza,
          { ...pizza, numberOfPizza: match[0].numberOfPizza + 1 },
        ]);
      } else {
        setCartPizza([{ ...pizza, numberOfPizza: match[0].numberOfPizza + 1 }]);
      }
    } else {
      setCartPizza([...cartPizza, { ...pizza, numberOfPizza: 1 }]);
    }
    setTotal(total + pizza.price);
  };
  return (
    <>
      <NavbarComponent />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "3rem",
          marginLeft: "5rem",
          maxWidth: "90%",
          border: "1px solid #d8d8d8",
        }}
      >
        <img style={{ minWidth: "35vw" }} src={pizza.img} />
        <div style={{ marginLeft: "1rem" }}>
          <h1 style={{ width: "98%", borderBottom: "1px solid #d8d8d8" }}>
            {pizza.name}
          </h1>
          <p style={{ width: "98%" }}>{pizza.desc}</p>
          <p style={{ fontWeight: "bolder" }}>Ingredientes:</p>
          {Object.keys(pizza).length > 0 ? (
            pizza.ingredients.map((ingredient) => (
              <p key={ingredient}>🍕{ingredient}</p>
            ))
          ) : (
            <></>
          )}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h1>Precio ${pizza.price}</h1>
            <Button
              variant="danger"
              style={{ marginLeft: "60%" }}
              onClick={() => addPizza(pizza)}
            >
              Añadir 🛒
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
