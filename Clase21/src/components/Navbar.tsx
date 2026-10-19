import { Nav, Navbar as BsNavbar, Container } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { usuario, logout, tieneRol } = useAuth()
  const navigate = useNavigate()

  const manejarLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand as={NavLink} to="/catalogo">Librería</BsNavbar.Brand>
        <BsNavbar.Toggle />
        <BsNavbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>

            {tieneRol('ADMIN') && (
              <Nav.Link as={NavLink} to="/libros/nuevo">Nuevo Libro</Nav.Link>
            )}
          </Nav>
          <Nav>
            {usuario ? (
              <BsNavbar.Text className="me-3">
                Hola, {usuario.nombre} ({usuario.rol}) ·{' '}
                <button 
                  className="btn btn-link nav-link d-inline p-0" 
                  onClick={manejarLogout}
                  style={{ textDecoration: 'underline' }}
                >
                  Salir
                </button>
              </BsNavbar.Text>
            ) : (
              <Nav.Link as={NavLink} to="/login">Ingresar</Nav.Link>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}