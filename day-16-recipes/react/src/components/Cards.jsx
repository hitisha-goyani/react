import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Cards({id,name, image}) {
  return (
    <Card className='text-center p-2 h-100' >
      <Card.Img
                  variant="top"
                  className="rounded-circle"
                  src={image}
                />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Link to={`/recipe/${id}`}><Button variant="primary">More</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;