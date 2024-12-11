import React from "react";
import Slider from "../Slider/Slide";
import Card from "./Card";
// import Slide from "../Slider/Slide";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "You Can Change The world",
      titletwo: "Strong Style",
      paraOne: "How women are redirecting hollywood",
      paraTwo: "New ways to wear denim belst bags make a comeback",
      name: "By Hina",
      qrCode: "/images/qr-code.png",
      cover: "/images/bg.jpg",
    },
  ];
  return (
    <>
      <section id="home">
        <div className="left-content">
          {data.map((value) => {
            return (
              <div className="content">
                <div className="logo">
                  <h1>Logo</h1>
                </div>
                <div className="home-img">
                  <img src={value.cover} alt="cover-image" />
                </div>
                <div className="text">
                  <h1>{value.titleOne}</h1>
                  <p>{value.paraOne}</p>
                  <span>{value.name}</span>
                </div>
                <div className="text text2">
                  <h1>{value.titletwo}</h1>
                  <p>{value.paraTwo}</p>
                  <span>{value.subTitle}</span>
                </div>
                <div className="qr-code">
                  <img src={value.qrCode} alt="tow-image" width={300} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <h2>Right content here</h2>
          <Slider />
          <Card />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
