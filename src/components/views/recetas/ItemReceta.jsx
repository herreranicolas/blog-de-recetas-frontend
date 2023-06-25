import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemReceta = ({ receta }) => {
  return (
    <tr>
      <td>{receta.nombre}</td>
      <td>{receta.descripcion}</td>
      <td>{receta.ingredientes}</td>
      <td>{receta.pasos}</td>
      <td>
        <span
          className="d-inline-block text-truncate"
          style={{ maxWidth: 200 }}
        >
          {receta.imagen}
        </span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <Button
            as={Link}
            className="btn btn-warning"
            to={"/administrador/editar-receta/" + receta.id}
          >
            <i className="bi bi-pencil-square"></i>
          </Button>
          <Button variant="danger">
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
