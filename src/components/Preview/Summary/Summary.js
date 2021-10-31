import classes from './Summary.module.css';

const Summary = (props) => {
    return (
        <div className={classes.container}>{props.summary}</div>
    )
}

export default Summary;