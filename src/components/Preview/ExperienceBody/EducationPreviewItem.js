import classes from './PreviewItem.module.css'

const EducationPreviewItem = (props) => {
  const divider = props.education.startDate && props.education.endDate ? '-' : '';
  return (
    <div className={classes.entry}>
      <div className={classes.entryHeader}>
        <h4>{props.education.program}</h4>
        <div className={classes.entrySubHeader}>
          {props.education.university && <p>{props.education.university} |</p>}
          <span>{`${props.education.startDate} ${divider} ${props.education.endDate}`}</span>
        </div>
      </div>
      <div className={classes.description}>{props.education.description}</div>
    </div>
  );
};

export default EducationPreviewItem;
