import { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

export const NavbarComponent = () => {
  const { total } = useContext(PizzaContext);
  return (
    <Navbar bg="info">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bolder",
          marginLeft: "2rem",
        }}
      >
        🍕 Pizzeria Mamma Mia!
      </Link>
      <Link
        to="/carrito"
        style={{
          textDecoration: "none",
          color: "white",
          fontWeight: "bolder",
          marginLeft: "80%",
        }}
      >
        🛒 ${total}
      </Link>
    </Navbar>
  );
};
