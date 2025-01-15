import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container">
      <div className="tab-list">
        <button onClick={() => setActiveTab(0)}>Tab 1</button>
        <button onClick={() => setActiveTab(1)}>Tab 2</button>
        <button onClick={() => setActiveTab(2)}>Tab 3</button>
      </div>
    </div>
  );
};

export default Tabs;
