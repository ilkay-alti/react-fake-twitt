import React from "react";

const LeftBar = ({
  setBackground,
  setName,
  setUsername,
  setText,
  setDate,
  setClock,
  setLikes,
  setRetweets,
  setCommend,
  setImg,
}) => {
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="bar-container">
      <div className="background">
        <div className="title">Background Color </div>
        <select
          className="input-area"
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

      <div className="title">Name </div>
      <div className="input-area">
        <input
          maxlength="20"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="title">Username </div>
      <div className="input-area">
        <input
          maxlength="20"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="title">Tweet Content </div>
      <div className="input-area">
        <input
          maxlength="120"
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="title">Date </div>
      <div className="input-area">
        <input
          type="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="title">Clock</div>
      <div className="input-area">
        <input
          type="time"
          onChange={(e) => {
            setClock(e.target.value);
          }}
        />
      </div>
      <div className="title">Likes Count </div>
      <div className="input-area">
        <input
          max="999"
          type="number"
          onChange={(e) => {
            setLikes(e.target.value);
          }}
        />
      </div>
      <div className="title">Comments Count </div>
      <div className="input-area">
        <input
          max="999"
          type="number"
          onChange={(e) => {
            setCommend(e.target.value);
          }}
        />
      </div>
      <div className="title">Retweets Count </div>
      <div className="input-area">
        <input
          max="999"
          type="number"
          onChange={(e) => {
            setRetweets(e.target.value);
          }}
        />
      </div>
      <div className="title">Profile Photo </div>
      <div className="input-area">
        <input
          type="file"
          id="input"
          name="image-upload"
          accept="image/*"
          onChange={imageHandler}
        />
      </div>
    </div>
  );
};

export default LeftBar;
