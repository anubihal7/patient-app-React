import React from "react";
import { Button } from "react-bootstrap";
import arrows from "../../images/ArrowRight.svg";
import { useHistory } from "react-router-dom";
const AllSetForm = () => {
  let history = useHistory();
  const submit = () => {
    history.push("/auth/login");
  };
  return (
    <div className="authPageForm text-left">
      <h3 className="text-left">You’re all set!</h3>
      <p className="text-left">You’ve successfully changed your password</p>
      <Button variant="primary" className="returnHome" onClick={submit}>
        Return to Home
        <img src={arrows} alt="Sign in" className="returnHomeImage" />
      </Button>
    </div>
  );
};

export default AllSetForm;
