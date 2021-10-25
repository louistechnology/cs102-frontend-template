import Form from "react-bootstrap/Form";
// import styles from "./input.module.css";

const Input = (props) => {
  const {
    label,
    type = "text", // email, password
    placeholder = "",
    id = null,
    smallText = "",
    value = "",
    onValueChange = () => {} // empty function
  } = props;

  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          event.preventDefault();
          onValueChange(event.target.value);
        }}
      />
      <Form.Text className="text-muted">{smallText}</Form.Text>
    </Form.Group>
  );
};

export default Input;
