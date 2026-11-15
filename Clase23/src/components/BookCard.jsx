import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function BookCard({ titulo, autor, imagen }) {
    const [likes, setLikes] = useState(0);
    const nombreAutor = typeof autor === 'string' ? autor : autor?.nombre ?? 'Sin autor';
    return (<Card className="h-100 shadow">
      <Card.Img variant="top" src={imagen}/>

      <Card.Body>
        <Card.Title>
          {titulo}
        </Card.Title>

        <Card.Text>
          {nombreAutor}
        </Card.Text>

        <Button variant="primary" onClick={() => setLikes(likes + 1)}>
          💖 Me gusta ({likes})
        </Button>

        <Button as={Link} to="/libros/1" variant="success" className="ms-2">
          Ver más
        </Button>
      </Card.Body>
    </Card>);
}
export default BookCard;
