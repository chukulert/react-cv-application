import React from "react";
import classes from "./PreviewHeader.module.css";
import phone from "../../../assets/phone-solid.png";
import envelope from "../../../assets/envelope-solid.png";
import map from "../../../assets/map-marker-solid.png";

const PreviewHeader = (props) => {
  return (
    <div className={classes.header}>
      <div>
        <h1>{props.personalInfo.name}</h1>
        <h2>{props.personalInfo.title}</h2>
      </div>
      <div className={classes.contact}>
        <div>
          {props.personalInfo.phone && <img src={phone} alt="phone-icon" />}
          <span>{props.personalInfo.phone}</span>
        </div>
        <div>
          {props.personalInfo.email && <img src={envelope} alt="email-icon" />}
          <span>{props.personalInfo.email}</span>
        </div>
        <div>
          {props.personalInfo.location && <img src={map} alt="location-icon" />}
          <span>{props.personalInfo.location}</span>
        </div>
      </div>
    </div>
  );
};

export default PreviewHeader;
