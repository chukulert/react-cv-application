import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import InputWrapper from "../../UI/InputWrapper/InputWrapper";

const EmploymentItem = (props) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Company"
        name="company"
        id={props.employmentItem.id}
        onChange={props.onChange}
        value={props.employmentItem.company}
      />
      <Input
        type="text"
        placeholder="Designation"
        name="designation"
        id={props.employmentItem.id}
        onChange={props.onChange}
        value={props.employmentItem.designation}
      />
      <Input
        type="text"
        placeholder="Start Date"
        name="startDate"
        id={props.employmentItem.id}
        onChange={props.onChange}
        value={props.employmentItem.startDate}
      />
      <Input
        type="text"
        placeholder="End Date"
        name="endDate"
        id={props.employmentItem.id}
        onChange={props.onChange}
        value={props.employmentItem.endDate}
      />
      <Input
        type="text"
        placeholder="Description"
        name="description"
        id={props.employmentItem.id}
        onChange={props.onChange}
        value={props.employmentItem.description}
      />
      <Button onClick={props.onDelete} id={props.employmentItem.id}>Delete</Button>
    </InputWrapper>
  );
};

export default EmploymentItem;
