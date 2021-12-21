import React from "react";
import { ReactComponent as DownArrowIcon } from "../icons/DownArrowIcon.svg";

export const Twit = () => {
  return (
    <div className="container">
      <div className="container-header">
        <div className="container-header">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F10%2FNVIDIA_logo_black.png&f=1&nofb=1"
            alt="username"
          />
          <div className="name">
            <div className="user">Ilkayus</div>
            <div className="username">@ilkayus</div>
          </div>
        </div>
        <div className="down-arrow">
          <DownArrowIcon />
        </div>
      </div>
      <div className="container-text">lorem ipsum dolor sit amet,</div>
      <div className="container-time">
        <div>12:18</div>
        <p> * </p>
        <div>2/14/20</div>
        <p> * </p>
        <div className="platform">Twitter Web App</div>
      </div>
    </div>
  );
};
