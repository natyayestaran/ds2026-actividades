import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function SinPermiso() {
  return (
    <div className="container mt-4">
      <Alert variant="danger">
        <Alert.Heading>Acceso Denegado</Alert.Heading>
        <p>No tenés los permisos necesarios para acceder a esta sección.</p>
        <hr />
        <Link to="/catalogo" className="btn btn-outline-danger">
          Volver al catálogo
        </Link>
      </Alert>
    </div>
  );
}