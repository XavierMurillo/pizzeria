import { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

function PizzaCard() {
  const { setPizza, cartPizza, setCartPizza, setTotal, total } =
    useContext(PizzaContext);
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    pizzaData();
  }, []);

  const pizzaData = async () => {
    const data = await fetch("src/pizzas.json");
    const pizzas = await data.json();
    setPizzas(pizzas);
  };
  const navigate = useNavigate();
  const verDetalle = (id, pizza) => {
    setPizza(pizza);
    navigate(`/pizza/${id}`);
  };

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
      <Container>
        <Row>
          {pizzas.map((pizza) => (
            <Col className="col-md-3 my-3" key={pizza.id}>
              <Card>
                <Card.Img src={pizza.img} />
                <Card.Body>
                  <Card.Title>{pizza.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <p>Ingredientes:</p>
                    {pizza.ingredients.map((ingredient) => (
                      <p key={ingredient}>🍕{ingredient}</p>
                    ))}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Container>
                      <Col className="col-md-12">
                        <h1>$ {pizza.price}</h1>
                      </Col>
                      <Row>
                        <Col>
                          <Button
                            variant="info"
                            style={{ color: "white" }}
                            onClick={() => verDetalle(pizza.id, pizza)}
                          >
                            Ver Mas 👀
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            variant="danger"
                            onClick={() => addPizza(pizza)}
                          >
                            Añadir 🛒
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PizzaCard;
