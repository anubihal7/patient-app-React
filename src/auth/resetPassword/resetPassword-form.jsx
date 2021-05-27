import React from "react";
import { Input } from "../../components/input.jsx";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ResetForm = () => {
  let history = useHistory();
  const submit = () => {
    history.push("/auth/email");
  };
  return (
    <div className="authPageForm text-left">
      <h3 className="text-left">Password reset</h3>
      <p className="text-left">Enter account email below to reset password</p>
      <Input placeholder="Email address" type="text" inputClass="formInput" />
      <Button variant="primary" className="signInButton" onClick={submit}>
        Reset Password
      </Button>
    </div>
  );
};

export default ResetForm;
