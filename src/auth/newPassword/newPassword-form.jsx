import React from "react";
import { Input } from "../../components/input.jsx";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const NewPasswordForm = () => {
  let history = useHistory();
  const submit = () => {
    history.push("/auth/allset");
  };
  return (
    <div className="authPageForm text-left">
      <h3 className="text-left">New password</h3>
      <p className="text-left">Create or change password for your account</p>
      <Input
        placeholder="New Password"
        type="password"
        inputClass="formInput"
      />
      <Input
        placeholder="Re-enter New Password"
        type="text"
        inputClass="formInput"
      />
      <Button variant="primary" onClick={submit} className="signInButton">
        Confirm New Password
      </Button>
    </div>
  );
};

export default NewPasswordForm;
