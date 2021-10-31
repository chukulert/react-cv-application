import Education from "./Education/Education";
import Employment from "./Employment/Employment";
import Personal from "./Personal/Personal";
import InputWrapper from "../UI/InputWrapper/InputWrapper";

import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <InputWrapper className={classes.formWrapper}>
      <h1>Personal</h1>
      <Personal
        personalInfo={props.cv.personalInfo}
        onChange={props.onChangePersonal}
      />
      {props.cv.employment && <h1>Employment</h1>}
      <Employment
        employment={props.cv.employment}
        onChange={props.onChangeEmployment}
        onDelete={props.onDeleteEmployment}
        onAdd={props.onAddEmployment}
      />
      {props.cv.education && <h1>Education</h1>}
      <Education
        education={props.cv.education}
        onChange={props.onChangeEducation}
        onDelete={props.onDeleteEducation}
        onAdd={props.onAddEducation}
      />
    </InputWrapper>
  );
};

export default Form;
