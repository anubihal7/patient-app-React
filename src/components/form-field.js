import React from "react";

import { Button, Form } from "react-bootstrap";
import { Input } from "./input.jsx";
// import "./FormField.scss";
const TextArea = (props) => {
  const { meta = {} } = props;

  const inputProps = {
    type: props.type || "text",
    className: "form__input",
    name: props.input.name,
    id: props.input.name,
    readOnly: props.readOnly,
    autoFocus: props.autoFocus,
    autoComplete: props.autoComplete,
    placeholder: props.placeholder,
    maxLength: props.maxLength,
    value: meta.uncontrolled ? undefined : props.input.value,
    defaultValue: meta.uncontrolled ? props.defaultValue : undefined,
    onChange: props.input.onChange,
    onKeyUp: props.onKeyUp,
  };

  let errorClassName = meta.error ? "error-input" : "";
  return (
    <div>
      <React.Fragment>
        <textarea
          style={{ width: "100%" }}
          rows="6"
          {...inputProps}
          className={errorClassName}
        />
      </React.Fragment>
      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </div>
  );
};
const TextField = (props) => {
  const { meta = {} } = props;

  const inputProps = {
    type: props.type || "text",
    className: "form__input",
    name: props.input.name,
    id: props.input.name,
    readOnly: props.readOnly,
    autoFocus: props.autoFocus,
    autoComplete: props.autoComplete,
    placeholder: props.placeholder,
    maxLength: props.maxLength,
    value: meta.uncontrolled ? undefined : props.input.value,
    defaultValue: meta.uncontrolled ? props.defaultValue : undefined,
    onChange: props.input.onChange,
    onBlur: props.input.onBlur,
    onKeyUp: props.onKeyUp,
  };
  let errorClassName = meta.error ? "error-input" : "";
  return (
    <div>
      <React.Fragment>
        <Input {...inputProps} className={errorClassName} />
      </React.Fragment>
      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const CheckBox = (props) => {
  const { meta = {} } = props;

  const checboxProps = {
    type: "checkbox",
    className: props.className,
    name: props.input.name,
    id: props.input.name,
    value: props.input.value ? props.input.value : props.input.name,
    defaultChecked: meta.uncontrolled ? props.defaultChecked : undefined,
    onChange: props.input.onChange,
    checked: props.input.checked,
  };

  return (
    <React.Fragment>
      <input {...checboxProps} />
      <label className="form__checkbox-label" htmlFor={props.input.name}>
        {props.label}
      </label>
      {meta.touched && meta.error ? (
        <div className="form__field-error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

const SelectField = ({
  input,
  meta: { touched, error },
  children,
  values,
  inputvalue,
}) => {
  input["value"] = values;
  return (
    <React.Fragment>
      <select {...input} defaultValue={inputvalue}>
        {children.map((x, y) => (
          <option key={y} value={x.value}>
            {x.name}
          </option>
        ))}
      </select>
      {touched && error && <div className="form__field-error">{error}</div>}
    </React.Fragment>
  );
};

const FormField = (props) => {
  switch (props.type) {
    case "checkbox":
      return <CheckBox {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "textArea":
      return <TextArea {...props} />;
    case "input":

    default:
      return <TextField {...props} />;
  }
};

export { TextField, CheckBox, FormField };
