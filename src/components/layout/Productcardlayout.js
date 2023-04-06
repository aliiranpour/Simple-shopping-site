import Card from 'react-bootstrap/Card';

function Productcard(props) {
  return (
    <Card style={{ width: '18rem', padding: '20px'}}>
      <Card.Img variant="top" src={props.avatar} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text dir='ltr'>
          {props.price}  تومان
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Productcard;