import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef([]);
  const data = [
    {
      label: "First Background",
      style: {
        width: "100%",
        height: "600px",
        backgroundImage:
          "url('https://images.pexels.com/photos/364086/pexels-photo-364086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",

        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      label: "Second Background",
      style: {
        width: "100%",
        height: "600px",
        backgroundImage:
          "url('https://images.pexels.com/photos/17845104/pexels-photo-17845104/free-photo-of-kanchanjunga-mountain-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      label: "Third Background",
      style: {
        width: "100%",
        height: "600px",
        backgroundImage:
          "url('https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    {
      label: "Second Background",
      style: {
        width: "100%",
        height: "600px",
        backgroundImage:
          "url('https://images.pexels.com/photos/18286414/pexels-photo-18286414/free-photo-of-silhouettes-of-trees-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;

    window.scroll({
      top: pos,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="top-section">
        <h1>Scroll to a particular section</h1>
        <button onClick={handleScrollToSection} className="btn">
          Click to scroll
        </button>
      </div>
      <div>
        {data.map((dataItem, index) => {
          return (
            <div
              key={index}
              ref={index === 2 ? ref : null}
              style={dataItem.style}
            >
              <h3>{data.label}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScrollToSection;
