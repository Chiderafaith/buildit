import React, { useState, useEffect } from "react";
//import { device } from "./media";

import Card from "./card";
import CarouselR from "./carousel";

function Testimonial() {
  const [tablet, setTablet] = useState( window.innerWidth >= 768);

  const updateMedia = ( ) => {
    setTablet(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia)
    };
  });

  return(
    <div>
      {tablet ? (
        <Card />
      ) : (
        <CarouselR />
      )}
    </div>
  );

}


export default Testimonial;
