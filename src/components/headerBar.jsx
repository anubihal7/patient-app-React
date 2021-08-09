import React, {useEffect, useState} from "react";
import {Dropdown} from "react-bootstrap";
import "./style.scss";
import {connect, useDispatch} from "react-redux";
import {saveSelectedProfile, saveUserProfiles} from "../_actions/User.action";
import {getUserProfile} from "../patient/patient-dashboard/api";

const HeaderBar = (props) => {
    let {user} = props;
    let [selectedProfile, setSelectedProfile] = useState(null);
    let profiles = user.meta.profiles
    const dispatch = useDispatch()
    useEffect(async () => {
        setSelectedProfile(user.meta.selectedProfile)
        if (!selectedProfile) {
            let practiceId = props.match.params.practiceId;
            if (practiceId) {
                if (!profiles) {
                    let userProf = await getUserProfile()
                    dispatch(saveUserProfiles(userProf.items))
                    selectedProfile = userProf.items.find(prof => {
                        return prof.practiceId === practiceId
                    })
                } else {
                    selectedProfile = profiles.find(prof => {
                        return prof.practiceId === practiceId
                    })
                }
                setSelectedProfile(selectedProfile)
            }
        }

    }, [user.meta.selectedProfile]);
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

