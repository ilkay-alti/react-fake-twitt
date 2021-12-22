import React from "react";

const LeftBar = ({ setBackground, setName, setUsername, setText }) => {
  return (
    <div className="bar-container">
      <div className="backgroun">
        <div>Background color</div>
        <select
          onChange={(e) => {
            setBackground(e.target.value);
          }}
        >
          <option value="light">Light</option>
          <option value="dim">Dim</option>
          <option selected value="dark">
            Dark
          </option>
        </select>
      </div>
      <div className="name">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="username">
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="text">
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default LeftBar;
