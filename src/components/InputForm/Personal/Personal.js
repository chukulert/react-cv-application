import Input from "../../UI/Input/Input";
import InputWrapper from "../../UI/InputWrapper/InputWrapper";

const Personal = (props) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Name"
        name="name"
        onChange={props.onChange}
        value={props.personalInfo.name}
      />
      <Input
        type="text"
        placeholder="Title"
        name="title"
        onChange={props.onChange}
        value={props.personalInfo.title}
      />
      <Input
        type="text"
        placeholder="Phone"
        name="phone"
        onChange={props.onChange}
        value={props.personalInfo.phone}
      />
      <Input
        type="text"
        placeholder="Email"
        name="email"
        onChange={props.onChange}
        value={props.personalInfo.email}
      />
      <Input
        type="text"
        placeholder="Location"
        name="location"
        onChange={props.onChange}
        value={props.personalInfo.location}
      />
      <textarea
        type="textarea"
        placeholder="Summary"
        name="summary"
        onChange={props.onChange}
        value={props.personalInfo.summary}
      />
    </InputWrapper>
  );
};

export default Personal;
