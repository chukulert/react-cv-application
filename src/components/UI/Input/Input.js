import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      id={props.id}
      name={props.name}
      className={classes.input}
      type={props.type || "text"}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
