import { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'
import BookCard from '../components/BookCard'
import { apiFetch } from '../services/api'
import type { Libro } from '../types/libro'

export default function Catalogo() {
  const [libros, setLibros] = useState<Libro[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const portadas: Record<number, string> = {
    1: 'https://covers.openlibrary.org/b/title/The%20Aleph%20Jorge%20Luis%20Borges-L.jpg'
  }

  useEffect(() => {
    apiFetch<Libro[]>('/libros')
      .then((data) => {
        setLibros(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          Error al cargar el catálogo: {error}
        </Alert>
      </Container>
    )
  }

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Catálogo de Libros</h2>

      <Row>
        {libros.map((libro) => (
          <Col md={4} key={libro.id} className="mb-4">
            <BookCard
              id={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              imagen={portadas[libro.id]}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}