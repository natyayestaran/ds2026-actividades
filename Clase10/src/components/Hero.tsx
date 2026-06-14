import { Container, Button } from 'react-bootstrap'

function Hero() {

    return (

        <div className="hero-section text-center text-white p-5">

            <Container>

                <h1>
                    Bienvenidos a Mi Librería
                </h1>

                <p>
                    Descubrí los mejores libros y autores
                </p>

                <Button variant="light">
                    Ver catálogo
                </Button>

            </Container>

        </div>
    )
}

export default Hero