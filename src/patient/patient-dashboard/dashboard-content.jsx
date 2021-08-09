import React from "react";
import "./style.scss";
import dashImage from "../../images/dashImage.svg";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {getNameFromEmail} from "../../_utils/common-utils";

const DashboardContent = (props) => (
    <div className="dashboardContant text-left">
        <h4 className="dashHeading">{`Good morning, ${getNameFromEmail(props.user.attributes.email)}!`}</h4>
        <h5 className="dashSubHeading">
            Look up a patient above by name, ID number, or date of birth to get
            started.{" "}
        </h5>
        <div className="dashWhatsNew">
            <div className="imageSection">
                <img src={dashImage} alt="Dashboard image"/>
            </div>
            <div className="textSetion ">
                <h6>What’s New</h6>
                <h3>Lorem ipsum dolors sit amet</h3>
                <p>
                    Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
                    no suscipit quaerendum. At nam minimum ponderum. Est audiam animal
                    molestiae te. Ex duo eripuit mentitum.
                </p>
                <Button className="readMore">Read more</Button>
            </div>
        </div>
    </div>
);


const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps, null)(DashboardContent);
