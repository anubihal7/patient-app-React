import React from "react";
import "../claim-information/style.scss";
import { Pagination, Button } from "react-bootstrap";
import previous from "../../images/smallArrow.svg";

const PaginationBlock = (props) => (
  <>
    <div className="pagintionBlock">
      <p>{props.name} 1-10 of 10</p>
      <Pagination>
        {/* <Pagination.First /> */}
        <Pagination.Prev />

        <Pagination.Next />
        {/* <Pagination.Last /> */}
      </Pagination>
    </div>
  </>
);

export default PaginationBlock;
