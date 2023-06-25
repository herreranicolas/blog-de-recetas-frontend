import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { iniciarSesion } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    iniciarSesion(usuario).then((respuesta) => {
      if (respuesta) {
        localStorage.setItem(
          "usuario",
          JSON.stringify(respuesta.nombreUsuario)
        );
        setUsuarioLogueado(respuesta.nombreUsuario);
        reset();
        navegacion("/administrador");
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "Los datos ingresados son incorrectos",
          icon: "error",
          confirmButtonColor: "#fa8072",
        });
      }
    });
  };

  return (
    <Container className="seccionPrincipal d-flex justify-content-center align-items-center">
      <Form
        className="w-75 border border-3 border-danger rounded-3 p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h5 className="text-center fs-2 pb-1 fw-bolder border-bottom border-2 border-danger">
          Iniciar sesión
        </h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-dark">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: "El email es un dato obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "El email debe tener el siguiente formato mail@dominio.com",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="text-dark">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es un dato obligatorio",
              pattern: {
                value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                message:
                  "La contraseña debe contener entre 8 y 16 caracteres, al menos un digito, al menos una minúscula y al menos una mayúscula. No puede tener otros simbolos.",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-center ">
          <Button variant="danger" type="submit" className="fw-bold">
            Ingresar
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
