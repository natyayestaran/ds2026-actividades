
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Spinner, Alert, Card } from 'react-bootstrap'
import { apiFetch } from '../services/api'
import type { Libro } from '../types/libro'

function LibroDetalle() {
  const { id } = useParams()

  const [libro, setLibro] = useState<Libro | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) {
      setError('No se encontró el ID del libro')
      setLoading(false)
      return
    }

    apiFetch<Libro>(`/libros/${id}`)
      .then((data) => {
        setLibro(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Cargando libro...</p>
      </Container>
    )
  }

  if (error || !libro) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">
          {error ?? 'No se encontró el libro'}
        </Alert>
      </Container>
    )
  }

  return (
    <Container className="mt-5 mb-5">
      <Card className="p-3 shadow-sm">
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Card.Img
              variant="top"
              src={libro.imagen}
              alt={libro.titulo}
              style={{ maxHeight: '350px', objectFit: 'contain' }}
            />
          </Col>

          <Col md={8}>
            <Card.Body>
              <h2>{libro.titulo}</h2>

              <p>
                <strong>Autor:</strong> {libro.autor.nombre}
              </p>

              <p>
                <strong>Nacionalidad:</strong>{' '}
                {libro.autor.nacionalidad}
              </p>

              <h4>Precio: ${libro.precio}</h4>

              <p>
                <strong>Disponibilidad:</strong>{' '}
                {libro.disponible ? 'Disponible' : 'No disponible'}
              </p>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default LibroDetalle
