import {Alert} from "react-bootstrap";
import React from "react";

export function showErrorAlert(message, onClose) {
    return (
        <Alert variant="danger" onClose={onClose} dismissible>
            <Alert.Heading>{message}</Alert.Heading>
        </Alert>
    )

}


