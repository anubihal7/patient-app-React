import React from "react";
import "./style.scss";
import {connect} from "react-redux";
import {errorOccurred} from "../_actions/persist.action";

const ErrorBlock = (props) => {
    let {error} = props;
    return (
        error && error !== "" ?
            <div className="errorBlock">
                <h6>{error}</h6>
                <a className="closeIcon" onClick={()=>{props.clearError()}}/>
            </div>
            : null
    )
        ;
};

const mapStateToProps = (state) => {
    return {
        error: state.persist.error,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => {
            dispatch(errorOccurred(""))
        },
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBlock);

