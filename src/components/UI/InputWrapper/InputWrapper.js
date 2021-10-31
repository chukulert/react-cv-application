import classes from './InputWrapper.module.css';

const InputWrapper = (props) => {
    return (
        <div className={`${classes.container} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default InputWrapper;