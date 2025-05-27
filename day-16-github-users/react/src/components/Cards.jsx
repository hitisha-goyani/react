import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router';

function Cards({id,login, avatar_url}) {
  return (
    <Card className='text-center p-2 h-100' >
      <Card.Img
                  variant="top"
                  className="rounded-circle"
                  src={avatar_url}
                />
      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <Link to={`/user/${id.value}`}><Button variant="primary">More</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;