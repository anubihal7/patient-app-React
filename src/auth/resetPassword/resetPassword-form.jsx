import React, {useState} from "react";
import {Input} from "../../components/input.jsx";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {Auth} from "aws-amplify";
import {showErrorAlert} from "../../_utils/error-helper";

const ResetForm = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const submit = async (e) => {
        e.preventDefault()
        try {
            await Auth.forgotPassword(email)
            history.push("/auth/new-password-cognito?email="+email);
        } catch (e) {
            setError("Cannot send reset email, please check the email entered.")
        }
    };
    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    return (
        <div className="authPageForm text-left">
            <h3 className="text-left">Password reset</h3>
            <p className="text-left">Enter account email below to reset password</p>
            {error !== "" && showErrorAlert(error, ()=>{setError("")})}
            <Input placeholder="Email address" type="text" inputClass="formInput" onChange={handleChange}/>
            <Button variant="primary" className="signInButton" onClick={submit}>
                Reset Password
            </Button>
        </div>
    );
};

export default ResetForm;
