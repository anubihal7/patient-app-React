import React from "react";
import "./style.scss";
import smallArrow from "../images/smallArrow.svg";
import {Link} from "react-router-dom";
import {connect, useSelector} from "react-redux";
import {getBreadCrumb} from "../_utils/breadcrumb-util";

const SearchNav = (props) => {

    let breadCrumbs = useSelector((state) => getBreadCrumb(state));

    return (
        <div className="componentTree text-left">
            <Link to="/patient/dashboard">Home</Link>
            {breadCrumbs && breadCrumbs.map((crumb, index) => {

                return (
                    <React.Fragment>
                        <img src={smallArrow} alt="arrow"/>
                        {index === breadCrumbs.length - 1 ? (
                                <a className="active">
                                    {crumb.name}</a>)
                            : (<Link className="active" to={crumb.link}>
                                {crumb.name}
                            </Link>)}
                    </React.Fragment>)
            })}

        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        searchKey: state.persist.searchKey,
    };
};

export default connect(mapStateToProps, null)(SearchNav);
