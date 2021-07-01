import React from "react";
import "../claim-information/style.scss";
import {Pagination, Button} from "react-bootstrap";
import previous from "../../images/smallArrow.svg";

const PaginationBlock = (props) => {
    const {prevClick, nextClick, nextPage, limit, currentLength} = props
    let currentPage=parseInt(nextPage)-1
    let prevTotal = (currentPage - 1) * limit
    return (
        <>
            <div className="pagintionBlock">
                <p>{props.name} {1 + prevTotal}-{prevTotal + currentLength} </p>
                <Pagination>

                    {currentPage>1&&<Pagination.Prev onClick={prevClick}/>}

                    <Pagination.Next onClick={nextClick}/>
                </Pagination>
            </div>
        </>
    );
}

export default PaginationBlock;
