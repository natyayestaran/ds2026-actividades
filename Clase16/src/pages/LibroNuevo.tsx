import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { z } from 'zod'

const libroSchema = z.object({
  titulo: z.string().trim().min(1, 'El título es obligatorio'),
  autor: z.string().trim().min(1, 'El autor es obligatorio'),
  precio: z.coerce.number().positive('El precio debe ser mayor a 0'),
})

interface Props {
  onAgregar: (libro: {
    titulo: string
    autor: string
    precio: number
  }) => void
}

function LibroNuevo({ onAgregar }: Props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    precio: '',
  })

  const [errores, setErrores] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const resultado = libroSchema.safeParse(form)

    if (!resultado.success) {
      const nuevosErrores: Record<string, string> = {}

      resultado.error.issues.forEach((issue) => {
        const campo = String(issue.path[0])

        if (!nuevosErrores[campo]) {
          nuevosErrores[campo] = issue.message
        }
      })

      setErrores(nuevosErrores)
      return
    }

    onAgregar(resultado.data)

    navigate('/catalogo')
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="container py-4"
      style={{ maxWidth: '500px' }}
    >
      <h2>Nuevo Libro</h2>

      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>

        <Form.Control
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          isInvalid={!!errores.titulo}
        />

        <Form.Control.Feedback type="invalid">
          {errores.titulo}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>

        <Form.Control
          name="autor"
          value={form.autor}
          onChange={handleChange}
          isInvalid={!!errores.autor}
        />

        <Form.Control.Feedback type="invalid">
          {errores.autor}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio</Form.Label>

        <Form.Control
          type="number"
          name="precio"
          value={form.precio}
          onChange={handleChange}
          isInvalid={!!errores.precio}
        />

        <Form.Control.Feedback type="invalid">
          {errores.precio}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">
        Agregar libro
      </Button>
    </Form>
  )
}

export default LibroNuevo