import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand>
          📚 Librería
        </Navbar.Brand>

        <Nav className="ms-auto">

          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>

          <Nav.Link as={Link} to="/catalogo">
            Catálogo
          </Nav.Link>

          <Nav.Link as={Link} to="/libros/nuevo">
            Nuevo Libro
          </Nav.Link>

        </Nav>

      </Container>
    </Navbar>
  )
}

export default NavbarComponent