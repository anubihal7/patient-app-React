import React from "react";
import {Dropdown} from "react-bootstrap";
import "./style.scss";
import {connect} from "react-redux";

const HeaderBar = (props) => {
    let {user, selectedProfile, selectProfile} = props;
    let profiles = user.meta.profiles
    return (
        <div className="headerBlock text-left">
            <Dropdown className="headerDropdown">
                <Dropdown.Toggle
                    id="dropdown-basic">{selectedProfile ? selectedProfile.practiceName : "Please select practice"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {profiles?.map((item, index) => {
                        return (<Dropdown.Item onSelect={() => {
                            if (selectProfile)
                                return selectProfile(item)
                            else return
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


export default connect(mapStateToProps, null)(HeaderBar);

