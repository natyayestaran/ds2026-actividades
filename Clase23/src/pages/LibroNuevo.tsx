import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '../services/api'
import type { Libro } from '../types/libro'

export default function LibroNuevo() {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [imagen, setImagen] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await apiFetch<Libro>('/libros', {
        method: 'POST',
        body: JSON.stringify({ titulo, autor, imagen }),
      })
      navigate('/libros')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Agregar Nuevo Libro</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            required
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="autor">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            required
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>URL de Imagen</Form.Label>
          <Form.Control
            type="url"
            required
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? 'Guardando...' : 'Crear Libro'}
        </Button>
      </Form>
    </Container>
  )
}