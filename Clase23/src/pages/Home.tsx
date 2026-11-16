
import Hero from '../components/Hero'
import BookCard from '../components/BookCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {
  const libros = [
    {
      id: 1,
      titulo: 'Harry Potter',
      autor: 'J.K Rowling',
      imagen: 'https://covers.openlibrary.org/b/id/10523338-L.jpg'
    },
    {
      id: 2,
      titulo: '1984',
      autor: 'George Orwell',
      imagen: 'https://covers.openlibrary.org/b/id/8228691-L.jpg'
    },
    {
      id: 3,
      titulo: 'El Hobbit',
      autor: 'J.R.R Tolkien',
      imagen: 'https://covers.openlibrary.org/b/id/8231996-L.jpg'
    }
  ]

  return (
    <>
      <Hero />

      <Container className="mt-5">
        <h2 className="text-center mb-4">
          Libros destacados
        </h2>

        <Row>
          {libros.map((libro) => (
            <Col md={4} key={libro.id} className="mb-4">
              <BookCard
                id={libro.id}
                titulo={libro.titulo}
                autor={libro.autor}
                imagen={libro.imagen}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
