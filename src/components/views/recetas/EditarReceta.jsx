import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { editarReceta, obtenerReceta } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarReceta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    obtenerReceta(id).then((respuesta) => {
      if (respuesta) {
        setValue("nombre", respuesta.nombre);
        setValue("descripcion", respuesta.descripcion.normalize("NFD"));
        setValue("ingredientes", respuesta.ingredientes);
        setValue("pasos", respuesta.pasos);
        setValue("imagen", respuesta.imagen);
      }
    });
  }, []);

  const onSubmit = (recetaEditada) => {
    editarReceta(recetaEditada, id).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire({
          title: "¡Excelente!",
          text: "¡La receta fue modificada con exito!",
          icon: "success",
          confirmButtonColor: "#fa8072",
        });
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "La receta no pudo ser modificada",
          icon: "error",
          confirmButtonColor: "#fa8072",
        });
      }
    });
  };

  return (
    <section className="seccionPrincipal font-poppins">
      <Container className="py-5">
        <h1 className="display-5">Editar receta</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Torta de chocolate"
              {...register("nombre", {
                required: "El nombre de la receta es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debes ingresar como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "No puedes ingresar más de 50 caracteres",
                },
                pattern: {
                  value:
                    /^[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+(?:,\s*[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+)*$/,
                  message: "No puedes ingresar simbolos o números",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label>Descripcion*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Un delicioso pastel"
              {...register("descripcion", {
                required: "La descripción de la receta es obligatorio",
                minLength: {
                  value: 3,
                  message: "Debes ingresar como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 200,
                  message: "No puedes ingresar más de 50 caracteres",
                },
                pattern: {
                  value:
                    /^[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+(?:,\s*[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+)*$/,
                  message: "No puedes ingresar simbolos o números",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.descripcion?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIngredientes">
            <Form.Label>Ingredientes*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Chocolate, harina, azucar, manteca"
              {...register("ingredientes", {
                required: "Los ingredientes de la receta son obligatorios",
                minLength: {
                  value: 3,
                  message: "Debes ingresar como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 200,
                  message: "No puedes ingresar más de 50 caracteres",
                },
                pattern: {
                  value:
                    /^[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+(?:,\s*[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+)*$/,
                  message: "No puedes ingresar simbolos o números",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.ingredientes?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPasos">
            <Form.Label>Pasos*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Mezclar ingredientes, agregar huevos y manteca, etc. "
              {...register("pasos", {
                required: "Los pasos de la receta son obligatorios",
                minLength: {
                  value: 3,
                  message: "Debes ingresar como mínimo 3 caracteres",
                },
                maxLength: {
                  value: 200,
                  message: "No puedes ingresar más de 50 caracteres",
                },
                pattern: {
                  value:
                    /^[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+(?:,\s*[a-zA-Z\sáéíóúÁÉÍÓÚüÜñÑ]+)*$/,
                  message: "No puedes ingresar simbolos o números",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.pasos?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
              {...register("imagen", {
                required: "La imagen de la receta es obligatoria",
                pattern: {
                  value: /^https?:\/\/\S+\.(jpg|jpeg|png|gif)$/i,
                  message: "El link ingresado no es válido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>
          <Button className="gradient-custom-2" type="submit">
            Editar receta
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default EditarReceta;
