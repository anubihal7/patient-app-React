import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export const Input = (props) => {
  let { placeholder, type, inputClass, label } = props;
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        className={inputClass}
        autocomplete="false"
        {...props}
      />
    </Form.Group>
  );
};

export const InputWithIcon = (props) => {
  let { placeholder, type, inputIcon, inputClass, onKeyUp } = props;
  return (
    <Form.Group>
      <InputGroup className={inputClass}>
        <InputGroup.Prepend>
          <InputGroup.Text>
            {" "}
            <img src={inputIcon} alt="icon" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          type={type}
          placeholder={placeholder}
          {...props}
          onKeyUp={onKeyUp}
        />
      </InputGroup>
    </Form.Group>
  );
};

// export default LoginForm;
