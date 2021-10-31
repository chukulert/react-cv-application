import EmploymentItem from "./EmploymentItem";
import Button from "../../UI/Button/Button";
import InputWrapper from "../../UI/InputWrapper/InputWrapper";

const Employment = (props) => {
  const employmentItems = props.employment.map((item) => (
    <EmploymentItem
      key={item.id}
      id={item.id}
      onChange={props.onChange}
      onDelete={props.onDelete}
      employmentItem={item}
    />
  ));

  return (
    <InputWrapper>
      {employmentItems}
      <Button onClick={props.onAdd}>Add New Employment Entry</Button>
    </InputWrapper>
  );
};

export default Employment;

