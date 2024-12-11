import React from "react";
import Slider from "../Slider/Slide";
import Card from "./Card";
import Footer from "../Footer/Footer";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "Latest Fashion Trends",
      titletwo: "Strong Style",
      paraOne: "How women are redirecting hollywood",
      paraTwo: "New ways to wear denim belst bags make a comeback",
      name: "By Anamat",
      subTitle: "How to Shop Mindfully",
      qrCode: "/images/qr.png",
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
                  <h1>A</h1>
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
                  <img src={value.qrCode} alt="qr-code" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-content">
          <h2>Fashion Trends</h2>
          <Slider />
          <Card />
          <Footer />
        </div>
      </section>
    </>
  );
};

export default BlogHome;
