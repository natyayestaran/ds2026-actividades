import { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { apiFetch } from '../services/api'
import { guardarToken } from '../services/sesion'
import { loginSchema } from '../schemas/loginSchema'

interface LoginRespuesta {
  token: string
  usuario: {
    id: number
    email: string
    nombre: string
    rol: string
  }
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // 1. Validar los campos con Zod en el frontend
    const validacion = loginSchema.safeParse({ email, password })
    if (!validacion.success) {
      setError(validacion.error.issues[0]?.message ?? 'Error de validación')
      return
    }

    setLoading(true)

    try {
      // 2. Llamar al backend real vía apiFetch (/api/auth/login)
      const res = await apiFetch<LoginRespuesta>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(validacion.data),
      })

      // 3. Guardar el token resultante en localStorage
      guardarToken(res.token)

      // 4. Redirigir al catálogo
      navigate('/libros')
    } catch (err: any) {
      // 5. Mostrar el mensaje de error REAL devuelto por el backend
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="admin@libreria.test"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? 'Ingresando...' : 'Iniciar Sesión'}
        </Button>
      </Form>
    </Container>
  )
}