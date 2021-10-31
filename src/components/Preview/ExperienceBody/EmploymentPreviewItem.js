import classes from "./PreviewItem.module.css";

const EmploymentPreviewItem = (props) => {

  const divider = props.employment.startDate && props.employment.endDate ? '-' : '';

  return (
    <div className={classes.entry}>
      <div className={classes.entryHeader}>
        <h4>{props.employment.designation}</h4>
        <div className={classes.entrySubHeader}>
          {props.employment.company && <p>{props.employment.company} |</p>}
          <span>{`${props.employment.startDate} ${divider} ${props.employment.endDate}`}</span>
        </div>
      </div>
      <div className={classes.description}>{props.employment.description}</div>
    </div>
  );
};

export default EmploymentPreviewItem;
