import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'

import BookCard from '../components/BookCard'
import useFetch from '../hooks/useFetch'

function Catalogo() {
  const { data: libros, loading, error } = useFetch('/libros.json')

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Cargando libros...</p>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error al cargar los libros.
        </Alert>
      </Container>
    )
  }

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">
        Catálogo de libros
      </h1>

      <Row>
        {libros.map((libro: any) => (
          <Col md={4} key={libro.id} className="mb-4">
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