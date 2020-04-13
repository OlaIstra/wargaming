import React from "react";
import Slider from "react-slick";

import { Tank } from "../Tank/Tank";
import "./style/slick.css";
import "./style/slick-theme.css";

export const Carusel = React.memo(props => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const tanks = props.tanks ? props.tanks : [];

  return (
    <Slider {...settings}>
      {tanks.map(elem => {
        return (
          <div key={elem.id}>
            <Tank
              country={elem.nation}
              name={elem.name}
              tier={elem.tier}
              clicked={elem.clicked}
              id={elem.id}
              premium={elem.premium}
            />
          </div>
        );
      })}
    </Slider>
  );
});
