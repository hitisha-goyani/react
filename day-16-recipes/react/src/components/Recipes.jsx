import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Cards from "./Cards";
const Recipes = () => {
  const [data, setData] = useState([]);

  const fetUsers = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    console.log(data.recipes);
    setData(data.recipes);
  };

  useEffect(() => {
    fetUsers();
  }, []);

  return (
    <Container>
      <Row className="row-cols-4 g-3 justify-content-center">
        {data.map((ele) => (
          <Col >
            <Cards {...ele} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recipes;
