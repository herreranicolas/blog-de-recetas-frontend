import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section
      style={{
        paddingLeft: 0,
        backgroundImage: "url('../src/assets/kitchen-illustration.jpg')",
      }}
      className="seccionPrincipal p-5 text-center bg-image"
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
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
