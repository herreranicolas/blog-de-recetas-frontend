import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const SliderInicio = () => {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://images.pexels.com/photos/1435894/pexels-photo-1435894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://images.pexels.com/photos/1487510/pexels-photo-1487510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="..."
      />
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://images.pexels.com/photos/1435897/pexels-photo-1435897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="..."
      />
    </MDBCarousel>
  );
};

export default SliderInicio;
