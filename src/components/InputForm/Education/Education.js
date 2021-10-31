import EducationItem from "./EducationItem";
import Button from "../../UI/Button/Button";
import InputWrapper from "../../UI/InputWrapper/InputWrapper";

const Education = (props) => {
  const educationItems = props.education.map((item) => (
    <EducationItem
      key={item.id}
      id={item.id}
      onChange={props.onChange}
      onDelete={props.onDelete}
      educationItem={item}
    />
  ));

  return (
    <InputWrapper>
      {educationItems}
      <Button onClick={props.onAdd}>Add New Education Entry</Button>
    </InputWrapper>
  );
};

export default Education;
