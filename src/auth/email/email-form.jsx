import React from "react";
import { Button } from "react-bootstrap";
import arrow from "../../images/ArrowRight.svg";
import { useHistory } from "react-router-dom";

const EmailForm = () => {
  let history = useHistory();
  const submit = () => {
    history.push("/auth/login");
  };
  return (
    <div className="authPageForm text-left">
      <h3 className="text-left">Email sent</h3>
      <p className="text-left">
        Please check your email to continue with your password reset
      </p>
      <Button variant="primary" className="returnHome" onClick={submit}>
        Return to Home
        <img src={arrow} alt="Sign in" className="returnHomeImage" />
      </Button>
    </div>
  );
};

export default EmailForm;
