import React from "react";
import "../claim-information/style.scss";
import {Pagination, Button} from "react-bootstrap";
import previous from "../../images/smallArrow.svg";

const PaginationBlock = (props) => {
    const {prevClick, nextClick, currentPage, limit, currentLength} = props
    let prevTotal = currentPage > 0 ? currentPage * limit : 0
    return (
        <>
            <div className="pagintionBlock">
                <p>{props.name} {1 + prevTotal}-{prevTotal + currentLength} </p>
                <Pagination>
                    <Pagination.Prev disabled={currentPage === 0} onClick={prevClick}/>
                     <Pagination.Next disabled={currentLength !== limit} onClick={nextClick}/>
                </Pagination>
            </div>
        </>
    );
}

export default PaginationBlock;
