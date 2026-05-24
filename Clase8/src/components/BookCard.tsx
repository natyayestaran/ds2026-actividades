import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'

interface Props {

    titulo: string
    autor: string
    imagen: string
}

function BookCard({ titulo, autor, imagen }: Props) {

    const [likes, setLikes] = useState(0)

    return (

        <Card className="h-100 shadow">

            <Card.Img
                variant="top"
                src={imagen}
            />

            <Card.Body>

                <Card.Title>
                    {titulo}
                </Card.Title>

                <Card.Text>
                    {autor}
                </Card.Text>

                <Button
                    variant="primary"
                    onClick={() => setLikes(likes + 1)}
                >
                    💖 Me gusta ({likes})
                </Button>

            </Card.Body>

        </Card>
    )
}

export default BookCard