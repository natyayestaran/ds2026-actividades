import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BookCard from '../components/BookCard'

interface Libro {
  titulo: string
  autor: string
  imagen: string
}

interface Props {
  libros: Libro[]
}

function Catalogo({ libros }: Props) {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">
        Catálogo de libros
      </h1>

      <Row>
        {libros.map((libro, index) => (
          <Col md={4} key={index} className="mb-4">
            <BookCard
              titulo={libro.titulo}
              autor={libro.autor}
              imagen={libro.imagen}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Catalogo