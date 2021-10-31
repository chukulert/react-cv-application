import classes from "./Preview.module.css";
import PreviewHeader from "./PreviewHeader/PreviewHeader";
import Summary from "./Summary/Summary";
import Experience from "./ExperienceBody/Experience";
import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { cv } = this.props;
    return (
      <div className={classes.formWrapper}>
          <PreviewHeader personalInfo={cv.personalInfo} />
          <Summary summary={cv.personalInfo.summary} />
          <Experience employment={cv.employment} education={cv.education} />
      </div>
    );
  }
}

export default Preview;
