import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container">
      <div className="tab-list">
        <button
          className={`tab-button ${activeTab === 0 ? "active" : ""}`}
          onClick={() => setActiveTab(0)}
        >
          Tab 1
        </button>
        <button
          className={`tab-button ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          Tab 2
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && (
          <div>
            <h1>Tab 1 - Introduction to React</h1>
            <ul>
              <li>
                React is a JavaScript library for building user interfaces. It
                allows you to create reusable UI components and efficiently
                update the DOM using a virtual DOM. React is a JavaScript
                library for building dynamic and interactive user interfaces
                using reusable components.
              </li>
              <li>
                With React, you can create single-page applications (SPAs) that
                dynamically update content without needing to reload the entire
                page, making the user experience faster and smoother.
              </li>
            </ul>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <h1>Tab 2 - JSX Syntax</h1>
            <ul>
              <li>
                JSX (JavaScript XML) is a syntax extension for JavaScript that
                allows you to write HTML-like code within JavaScript. It makes
                writing React components easier and more intuitive.
              </li>
              <li>
                It allows you to combine HTML structure and JavaScript logic in
                a single file, which helps in creating a declarative user
                interface. With JSX, it becomes easier to manage the UI since
                you can directly embed dynamic content inside your HTML code
                using curly braces.
              </li>
            </ul>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h1>Tab 3 - State and Props</h1>
            <ul>
              <li>
                In React, state allows you to store data that can change over
                time, while props are used to pass data from one component to
                another. Together, they make React components dynamic and
                interactive.
              </li>
              <li>
                Together, state and props give React components the ability to
                be dynamic and flexible, leading to the creation of interactive
                web applications.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
