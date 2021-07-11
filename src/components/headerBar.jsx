import React from "react";
import {Dropdown} from "react-bootstrap";
import "./style.scss";
import {connect} from "react-redux";
import {saveSelectedProfile} from "../_actions/User.action";

const HeaderBar = (props) => {
    let {user} = props;
    let profiles = user.meta.profiles
    let selectedProfile = user.meta.selectedProfile

    return (
        <div className="headerBlock text-left">
            <Dropdown className="headerDropdown">
                <Dropdown.Toggle
                    id="dropdown-basic">{selectedProfile ? selectedProfile.practiceName : "Please select practice"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {profiles?.map((item, index) => {
                        return (<Dropdown.Item onSelect={() => {
                            props.saveSelectedProfile(profiles[index])
                            props.history.push("/patient/dashboard")

                        }}>{item.practiceName}</Dropdown.Item>)
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <h6 className="latestUpdate">Last Updated: [MM/DD/YYYY]</h6>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        saveSelectedProfile: (values) => {
            dispatch(saveSelectedProfile(values))
        },
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);

