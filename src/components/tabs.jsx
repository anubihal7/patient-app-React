import React, { useState, useEffect } from "react";
import "./style.scss";
import { Nav } from "react-bootstrap";
const Tab = (props) => {
  let [tabSelection, setTabSelection] = useState("demographics");

  useEffect(() => {
    setTabSelection(props.tabSelection);
  }, [props.tabSelection]);

  const setSelectedTab = (e) => {
    let patientId = props.match.params.patientId
    let practiceId = props.match.params.practiceId;
    props.history.push(`/practice/${practiceId}/patient/${patientId}/details/` + e);
    props.getTabSelection(e);
  };
  return (
    <div className="tabsBlock">
      <Nav
        activeKey="/demographics"
        onSelect={(selectedKey) => setSelectedTab(selectedKey)}
      >
        {/* className="active" */}
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "demographics" ? "active" : ""}
            eventKey="demographics"
          >
            Demographics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "contacts" ? "active" : ""}
            eventKey="contacts"
          >
            Contacts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "documents" ? "active" : ""}
            eventKey="documents"
          >
            Documents
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "insurances" ? "active" : ""}
            eventKey="insurances"
          >
            Insurances
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "appointment" ? "active" : ""}
            eventKey="appointment"
          >
            Appointments
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "claims" ? "active" : ""}
            eventKey="claims"
          >
            Claims
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={tabSelection == "clinicals" ? "active" : ""}
            eventKey="clinicals"
          >
            Clinicals
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Tab;
