import { Button } from "react-bootstrap";
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
          style={{ maxWidth: 250 }}
        >
          https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80
        </span>
      </td>
      <td>
        <Button className="btn btn-warning">Editar</Button>
        <Button variant="danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
