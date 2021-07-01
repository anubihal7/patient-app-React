import React, {useState} from "react";
import {Input} from "../../components/input.jsx";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {Auth} from "aws-amplify";
import {showErrorAlert} from "../../_utils/error-helper";

const NewPasswordFormCognito = (props) => {
    let history = useHistory();
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState("");
    let searchParams = new URLSearchParams(props.location.search);
    let email=""
    if(searchParams&&searchParams.has("email")){
        email=searchParams.get("email")
    }
    const submit = async () => {
        let errors = []
        if (!newPass || newPass.length === 0) {
            errors.push("New password cannot be empty")
        }
        if (!confirmPass || confirmPass.length === 0)
            errors.push("Confirm password cannot be empty")
        else if (newPass !== confirmPass) {
            errors.push("Confirm password do not match with new password")
        }
        if (!verificationCode || verificationCode.length === 0) {
            errors.push("Verification code cannot be empty")
        }
        if (errors.length > 0) {
            let err = ""
            errors.forEach(er => {
                if (err !== "")
                    err = ".\n" + er
            })
            setError(err)
        }
        try {
            await Auth.forgotPasswordSubmit(
                email,
                verificationCode,
                newPass
            );
            history.push("/auth/allset");
        } catch (error) {
            setError(error.message)
        }

    };
    const handleChange = (e, section) => {
        switch (section) {
            case "newPass":
                setNewPass(e.target.value)
                break;
            case "confirmPass":
                setConfirmPass(e.target.value)
                break;
            case "verificationCode":
                setVerificationCode(e.target.value)
                break;
        }

    }

    return (
        <div className="authPageForm text-left">
            <h3 className="text-left">New password</h3>
            <p className="text-left">Please check your registered email for OTP to update your password</p>
            {error !== "" && showErrorAlert(error, () => {
                setError("")
            })}
            <Input
                placeholder="New Password"
                type="password"
                onChange={(evt) => {
                    handleChange(evt, "newPass")
                }}
                inputClass="formInput"
            />
            <Input
                placeholder="Re-enter New Password"
                type="text"
                onChange={(evt) => {
                    handleChange(evt, "confirmPass")
                }}
                inputClass="formInput"
            />
            <Input
                placeholder="OTP received on registered email"
                type="text"
                onChange={(evt) => {
                    handleChange(evt, "verificationCode")
                }}
                inputClass="formInput"
            />
            <Button variant="primary" onClick={submit} className="signInButton">
                Confirm New Password
            </Button>
        </div>
    );
};

export default NewPasswordFormCognito;
