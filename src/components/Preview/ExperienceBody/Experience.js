import EmploymentPreviewItem from "./EmploymentPreviewItem";
import EducationPreviewItem from "./EducationPreviewItem";

import classes from './Experience.module.css'

const Experience = (props) => {
  const employmentItems = props.employment.map((item) => (
    <EmploymentPreviewItem employment={item} key={item.id}/>
  ));

  const educationItems = props.education.map((item) => (
    <EducationPreviewItem education={item} key={item.id} />
  ));

  return (
    <div>
      <div className={classes.section}>
        <span className={classes.sectionTitle}>WORK EXPERIENCE</span>
        {employmentItems}
      </div>
      <div className={classes.section}>
        <span className={classes.sectionTitle}>EDUCATION</span>
        {educationItems}
      </div>
    </div>
  );
};

export default Experience;
