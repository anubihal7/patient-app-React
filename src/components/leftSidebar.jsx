import React, {useEffect} from "react";
import "./style.scss";
import logo from "../images/logo.svg";
import moblogo from "../images/mobileLogo.png";
import signout from "../images/SignOut.svg";
import {logoutUser} from "../_actions/persist.action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Auth} from "aws-amplify";
import {clearUserData} from "../_actions/User.action";

const LeftSidebar = (props) => {
    const logout = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
        props.logoutUser();
        props.history.push("/auth/login");
    };
    useEffect(() => {

    }, [])

    return (
        <div className="leftSideBar mobile text-left">
            <img src={logo} className="desktopLogo" alt="Logo"/>
            <img src={moblogo} className="mobileLogo" alt="Logo"/>
            <div className="leftSideTabs">
                <ul className="sideBarList">
                    <li>
                        <Link className="active" to="/patient/dashboard">
                            Patients
                        </Link>
                    </li>
                    <li>
                        <a href="">Reports</a>
                    </li>
                </ul>
                <p className="signOutbtn">
                    Signed in as Randy
                    <a style={{cursor: "pointer"}} onClick={logout}>
                        <img src={signout} className="desktopHidd" alt="logout"/>
                        Sign out
                    </a>
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.persist,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () =>{
            dispatch(logoutUser())
            dispatch(clearUserData())
        } ,
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);

// export default LeftSidebar;
