import React, {useEffect, useState} from "react";
import "./style.scss";
import smallArrow from "../images/smallArrow.svg";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const SearchNav = (props) => {
    let [crumbs, setCrumbs] = useState([])
    useEffect(() => {
        setCrumbs( props.breadCrumbs)
    }, [props.breadCrumbs])

    return (
        <div className="componentTree text-left">
            <Link to="/patient/dashboard">Home</Link>
            {crumbs && crumbs.map((crumb, index) => {

                return (
                    <React.Fragment>
                        <img src={smallArrow} alt="arrow"/>
                        {index === crumbs.length - 1 ? (
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
        breadCrumbs: state.persist.breadCrumb
    };
};

export default connect(mapStateToProps, null)(SearchNav);
