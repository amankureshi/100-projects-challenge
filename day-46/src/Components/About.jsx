import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Country Explorer</h2>
      <p>
        Country Explorer is a simple and interactive React application that
        helps users explore countries around the world. With features like
        search, detail view, and responsive design, it provides useful
        information such as flags, population, capital, region, and more.
      </p>
      <p>
        This project uses the <strong>REST Countries API</strong> to fetch
        real-time data and displays it in a clean, card-based layout.
      </p>
    </div>
  );
};

export default About;
