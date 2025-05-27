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

const User = () => {
  const [sdata, setSdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { userId } = useParams();

  console.log(userId);

  const fetUsers = async () => {
    try {
      const res = await fetch(`https://api.github.com/users?${userId}`);
      const data = await res.json();
      console.log(data);
      setSdata(data);
      setLoading(false);

    
    } catch (error) {

      setError(true);
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetUsers();
  }, [userId]);

  return (
    <>
      {loading ? (
        <Container className="text-center my-5 py-5">
          <Spinner animation="border" />
        </Container>
      ) : error  || sdata ? (
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
                   <Card.Img
                  variant="top"
                  className="rounded-circle"
                  src={sdata.avatar_url}
                />
                <Col className="col-8">
                  <Card.Body>
                    <Card.Title>
                      {sdata.login}
                    </Card.Title>
                   
                    <Card.Text>GitHub URL: <a href={sdata.html_url}>{sdata.html_url}</a></Card.Text>
                    <Card.Subtitle>user_view_type:{sdata.user_view_type}</Card.Subtitle>
                    <Card.Subtitle>Type:{sdata.type}</Card.Subtitle>
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

export default User;
