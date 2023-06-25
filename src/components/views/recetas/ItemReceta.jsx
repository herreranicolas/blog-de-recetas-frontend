import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({ receta }) => {
  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-outline-danger",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estas seguro?",
        text: "¡No podrás revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, borrar receta!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          borrarReceta(receta.id).then((respuesta) => {
            if (respuesta.status === 200) {
              Swal.fire({
                title: "¡Receta eliminada!",
                text: "¡La receta fue eliminada!",
                icon: "success",
                confirmButtonColor: "#fa8072",
              });
            } else {
              Swal.fire({
                title: "Oops! Lo siento!",
                text: "La receta no pudo ser eliminada.",
                icon: "error",
                confirmButtonColor: "#fa8072",
              });
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "¡Operación cancelada!",
            "La receta no fue eliminada",
            "error"
          );
        }
      });
  };
  return (
    <tr>
      <td>{receta.nombre}</td>
      <td>{receta.descripcion}</td>
      <td className="text-capitalize">{receta.ingredientes.join(", ")}</td>
      <td>{receta.pasos.join(", ")}</td>
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
          <Button variant="danger" onClick={handleDelete}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemReceta;
