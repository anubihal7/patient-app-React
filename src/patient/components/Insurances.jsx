import React from "react";
import { InputWithIcon } from "../../components/input";
import darkSearch from "../../images/DarkSearch.png";
import "./style.scss";
import { Button, Table } from "react-bootstrap";

const data = [
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
  {
    tdata1: "1",
    tdata2: "Medical",
    tdata3: "Medicare",
    tdata4: "01/01/2018",
    tdata5: "__",
    tdata6: "345323340A",
    tdata7: "__",
    tdata8: "Active"
  },
];
const Insurances = () => (
  <div className="Demographics text-left">
    <div className="claimHeader">
      <h5>Insurances</h5>
      <InputWithIcon
        inputIcon={darkSearch}
        inputClass="searchIconInput"
        placeholder="Search claims"
        type="text"
      />
    </div>
    <div className="sectionOne">
      <div className="buttonTabs">
        <Button variant="primary" className="tabButton">
            Active Only
        </Button>
        <Button variant="primary" className="tabButton active">
          Show All
        </Button>
      </div>
      <Table className="customTable" responsive hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Type</th>
            <th>Plan</th>
            <th>Start</th>
            <th>End</th>
            <th>Policy</th>
            <th>Group</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.tdata1}</td>
                <td>{item.tdata2}</td>
                <td>{item.tdata3}</td>
                <td>{item.tdata4}</td>
                <td>{item.tdata5}</td>
                <td>{item.tdata6}</td>
                <td>{item.tdata7}</td>
                <td>{item.tdata8}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  </div>
);

export default Insurances;
