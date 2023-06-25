import { Link } from "react-router-dom";
import error from "../../assets/kitchen-illustration.jpg";

const Error404 = () => {
  return (
    <section
      style={{
        paddingLeft: 0,
        backgroundImage: `url(${error})`,
      }}
      className="seccionPrincipal p-5 d-flex justify-content-center align-items-center text-center"
    >
      <div className="mask bg-dark opacity-75 p-3">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="display-3 font-ds fw-bold">Error 404</h1>
            <h4 className="mb-3 fw-bold">
              Oops! No encontramos la página que estás buscando.
            </h4>
            <Link
              className="btn btn-danger btn-lg fw-bold"
              to="/"
              role="button"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
