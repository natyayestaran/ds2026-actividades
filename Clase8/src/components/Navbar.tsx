import { Navbar, Nav, Container } from 'react-bootstrap'

function NavbarComponent() {

    return (

        <Navbar bg="dark" variant="dark" expand="lg">

            <Container>

                <Navbar.Brand>
                    📚 Librería
                </Navbar.Brand>

                <Nav className="ms-auto">

                    <Nav.Link>
                        Inicio
                    </Nav.Link>

                    <Nav.Link>
                        Catálogo
                    </Nav.Link>

                    <Nav.Link>
                        Contacto
                    </Nav.Link>

                </Nav>

            </Container>

        </Navbar>
    )
}

export default NavbarComponent