import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from "./Sdata";
import "./style.css";
const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slide">
        <Slider {...settings}>
          {Sdata.map((value) => {
            return (
              <div className="box" key={value.id}>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
                <div className="text">
                  <span>{value.category}</span>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Slide;
