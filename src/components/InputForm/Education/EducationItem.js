import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import InputWrapper from "../../UI/InputWrapper/InputWrapper";

const EducationItem = (props) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Course / Program"
        name="program"
        id={props.educationItem.id}
        onChange={props.onChange}
        value={props.educationItem.program}
      />
      <Input
        type="text"
        placeholder="Education Institute"
        name="university"
        id={props.educationItem.id}
        onChange={props.onChange}
        value={props.educationItem.university}
      />
      <Input
        type="text"
        placeholder="Start Date"
        name="startDate"
        id={props.educationItem.id}
        onChange={props.onChange}
        value={props.educationItem.startDate}
      />
      <Input
        type="text"
        placeholder="End Date"
        name="endDate"
        id={props.educationItem.id}
        onChange={props.onChange}
        value={props.educationItem.endDate}
      />
      <Input
        type="text"
        placeholder="Description"
        name="description"
        id={props.educationItem.id}
        onChange={props.onChange}
        value={props.educationItem.description}
      />
      <Button onClick={props.onDelete} id={props.educationItem.id}>
        Delete
      </Button>
    </InputWrapper>
  );
};

export default EducationItem;
