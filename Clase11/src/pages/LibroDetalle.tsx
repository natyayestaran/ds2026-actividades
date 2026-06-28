import { useParams } from 'react-router-dom'

function LibroDetalle() {
  const { id } = useParams()

  return (
    <div className="container mt-5">
      <h1>Detalle del libro</h1>
      <p>ID del libro: {id}</p>
    </div>
  )
}

export default LibroDetalle