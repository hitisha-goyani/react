import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useParams } from "react-router";

const Recipe = () => {
  const [sdata, setSdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { reId } = useParams();

  console.log(reId);

  const fetUsers = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${reId}`);
      console.log(res);
      const data = await res.json();
      // console.log(data);
      setSdata(data);
      setLoading(false);
    } 
    catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetUsers();
  }, [reId]);

  console.log(sdata);

  return (
    <>
      {loading ? (
        <Container className="text-center my-5 py-5">
          <Spinner animation="border" />
        </Container>
      ) : error ? (
        <Container className="text-center my-5 py-5">
          <Alert variant="danger">
            Something went wrong
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click
            if you like.
          </Alert>
        </Container>
      ) : (
        <Container className="mt-5">
          <Card className="text-start p-2 h-100">
            <Row>
              <Col className="col-4">
                <Card.Img
                  variant="top"
                  className="rounded-circle "
                  src={sdata.image}
                />
              </Col>
              <Col className="col-8">
                <Card.Body>
                  <Card.Title>{sdata.name}</Card.Title>
                  <Card.Text>mealType: {sdata.mealType}</Card.Text>
                   <Card.Text>prepTimeMinutes: {sdata.prepTimeMinutes}</Card.Text>
                  <Card.Text>ingredients: {sdata.ingredients}</Card.Text>    
                  <Card.Subtitle>
                    instructions: {sdata.instructions}
                  </Card.Subtitle>
                  <Button variant="primary">More</Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Recipe;
