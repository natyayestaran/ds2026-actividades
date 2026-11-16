
import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Autor } from '../types/libro'

interface Props {
  id: number
  titulo: string
  autor?: Autor | string
  imagen?: string
}

function BookCard({ id, titulo, autor, imagen }: Props) {
  const [likes, setLikes] = useState(0)

  const nombreAutor =
    typeof autor === 'string' ? autor : autor?.nombre ?? 'Sin autor'

  return (
    <Card className="h-100 shadow">
      {imagen && (
        <Card.Img variant="top" src={imagen} alt={titulo} />
      )}

      <Card.Body>
        <Card.Title>{titulo}</Card.Title>

        <Card.Text>{nombreAutor}</Card.Text>

        <Button
          variant="primary"
          onClick={() => setLikes(likes + 1)}
        >
          💖 Me gusta ({likes})
        </Button>

        <Button
          as={Link as any}
          to={`/libros/${id}`}
          variant="success"
          className="ms-2"
        >
          Ver más
        </Button>
      </Card.Body>
    </Card>
  )
}

export default BookCard
