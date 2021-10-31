import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

import Form from "./InputForm/Form";
import emptyCV from "./Utils/EmptyCV";
import sampleCV from "./Utils/SampleCV";
import Preview from "./Preview/Preview";
import classes from "./Main.module.css";

const Main = () => {
  const [cv, setCV] = useState(emptyCV);
  const componentRef = useRef();

  const changePersonalHandler = (e) => {
    const { name, value } = e.target;

    setCV((prevState) => {
      const newPersonalInfo = { ...prevState.personalInfo, [name]: value };
      return { ...prevState, personalInfo: { ...newPersonalInfo } };
    });
  };

  const changeEducationHandler = (e) => {
    const { name, value, id } = e.target;

    setCV((prevState) => {
      const newEducation = prevState.education.map((educationItem) => {
        if (educationItem.id === +id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const addEducationhandler = () => {
    setCV((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: Date.now() + Math.random(),
          program: "",
          university: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const deleteEducationHandler = (e) => {
    const { id } = e.target;
    setCV((prevState) => {
      const newEducation = prevState.education.filter((educationItem) => {
        return educationItem.id !== +id;
      });
      return { ...prevState, education: [...newEducation] };
    });
  };

  const changeEmploymentHandler = (e) => {
    const { name, value, id } = e.target;

    setCV((prevState) => {
      const newEmployment = prevState.employment.map((employmentItem) => {
        if (employmentItem.id === +id) {
          return { ...employmentItem, [name]: value };
        }
        return employmentItem;
      });
      return { ...prevState, employment: [...newEmployment] };
    });
  };

  const addEmploymentHandler = () => {
    setCV((prevState) => ({
      ...prevState,
      employment: [
        ...prevState.employment,
        {
          id: Date.now() + Math.random(),
          company: "",
          designation: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  const deleteEmploymentHandler = (e) => {
    const { id } = e.target;
    setCV((prevState) => {
      const newEmployment = prevState.employment.filter((employmentItem) => {
        return employmentItem.id !== +id;
      });
      return { ...prevState, employment: [...newEmployment] };
    });
  };

  const resetCVHandler = () => {
    setCV(emptyCV);
  };

  const loadSampleCVHandler = () => {
    setCV(sampleCV);
  };

  const printHandler = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={classes.container}>
      <Form
        cv={cv}
        onChangePersonal={changePersonalHandler}
        onChangeEducation={changeEducationHandler}
        onAddEducation={addEducationhandler}
        onDeleteEducation={deleteEducationHandler}
        onChangeEmployment={changeEmploymentHandler}
        onAddEmployment={addEmploymentHandler}
        onDeleteEmployment={deleteEmploymentHandler}
      />
      <div className={classes.previewSection}>
        <Preview cv={cv} ref={componentRef} />
        <div className={classes.buttonContainer}>
          <button className={classes.menuBtn} onClick={loadSampleCVHandler}>
            Load Sample CV
          </button>
          <button className={classes.menuBtn} onClick={resetCVHandler}>
            Empty all Fields
          </button>
          <button className={classes.menuBtn} onClick={printHandler}>
            Generate PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
