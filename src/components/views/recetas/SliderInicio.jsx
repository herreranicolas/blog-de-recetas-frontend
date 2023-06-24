import React from "react";
import Carousel from "react-bootstrap/Carousel";

const SliderInicio = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Verduras surtidas en sarten negra"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1487510/pexels-photo-1487510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Verduras surtidas en olla"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1435897/pexels-photo-1435897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Verduras surtidas en olla"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SliderInicio;
