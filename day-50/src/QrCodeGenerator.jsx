import React, { useState } from "react";

const QrCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>QR Code Generator in React JS</h1>
        <input
          type="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL to generate QR code"
        />
        <input type="submit" value={"Generate QR Code"} />{" "}
      </form>
      {show && (
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${url}`}
          alt="QR Code"
        />
      )}
    </div>
  );
};

export default QrCodeGenerator;
