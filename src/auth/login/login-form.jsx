import React, {useState, useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import signIn from "../../images/signIn.svg";
import {Field, reduxForm} from "redux-form";
import {FormField} from "../../components/form-field";
import {required} from "redux-form-validators";
import {showErrorAlert} from "../../_utils/error-helper";

const LoginForm = (props) => {
    const {handleSubmit, errorMessage} = props;
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(errorMessage && errorMessage !== "");
    }, [errorMessage && errorMessage !== ""]);

    return (
        <div className="authPageForm text-left">
            <h3 className="text-left">Sign in</h3>
            <p className="text-left">Sign in to access your account</p>
            {show && showErrorAlert(errorMessage, setShow)}

            <Form onSubmit={handleSubmit}>
                <Field
                    className="custom-control-input"
                    name="username"
                    component={FormField}
                    validate={[required()]}
                    type="text"
                    placeholder="Username"
                />
                <Field
                    className="custom-control-input"
                    name="password"
                    component={FormField}
                    validate={[required()]}
                    type="password"
                    placeholder="Password"
                />
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Remember me"
                    className="formCheckBox"
                />
                <Button
                    variant="primary"
                    className="signInButton"
                    type="submit"
                    // disabled={pristine || submitting}
                >
                    <img src={signIn} alt="Sign in" className="signInImage"/>
                    Sign in
                </Button>
            </Form>
        </div>
    );
};
export default reduxForm({
    form: "loginForm",
})(LoginForm);
