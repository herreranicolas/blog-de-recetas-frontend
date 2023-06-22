import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemReceta = () => {
  return (
    <tr>
      <td>Spaghetti a la bolognesa</td>
      <td>
        Un clásico plato de pasta italiano con una salsa bolognesa rica y
        sabrosa.
      </td>
      <td>Spaghetti, carne molida, tomates, cebolla, ajo</td>
      <td>Spaghetti, carne molida, tomates, cebolla, ajo</td>
      <td>
        <span
          className="d-inline-block text-truncate"
          style={{ maxWidth: 200 }}
        >
          https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
        </span>
      </td>
      <td>
        <div className="d-flex gap-2">
          <Button
            as={Link}
            className="btn btn-warning"
            to="/administrador/editar-receta"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Button>
          <Button variant="danger">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
