import React, { useState, useEffect } from "react";
import "./style.scss";
import smallArrow from "../../images/smallArrow.svg";
import { Table } from "react-bootstrap";
import darkArrow from "../../images/darkArrow.svg";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    priorId: "20010",
    dob: "09/07/1996",
    name: "Tom Walker",
    tdata5: " ",
    tdata6: { darkArrow },
  },
  {
    id: "2",
    priorId: "200011",
    dob: "01/10/1990",
    name: "John Doe",
    tdata5: " ",
    tdata6: { darkArrow },
  },
  {
    id: "3",
    priorId: "20010",
    dob: "09/07/1996",
    name: "Tom Walker",
    tdata5: " ",
    tdata6: { darkArrow },
  },
  {
    id: "4",
    priorId: "200011",
    dob: "01/10/1987",
    name: "Julie Jolie",
    tdata5: " ",
    tdata6: { darkArrow },
  },
  {
    id: "5",
    priorId: "30010",
    dob: "09/07/1993",
    name: "Sam Doe",
    tdata5: " ",
    tdata6: { darkArrow },
  },
  {
    id: "6",
    priorId: "400011",
    dob: "01/10/1991",
    name: "John Murphy",
    tdata5: " ",
    tdata6: { darkArrow },
  },
];
const SearchResultsContent = (props) => {
  let { searchKey } = props;
  let [searchData, setSearchData] = useState([]);

  useEffect(() => {
    searchKey = searchKey.toLowerCase();
    let filterData = data.filter((key) => {
      return (
        key.id.toLowerCase().includes(searchKey) ||
        key.dob.toLowerCase().includes(searchKey) ||
        key.name.toLowerCase().includes(searchKey) ||
        key.priorId.toLowerCase().includes(searchKey)
      );
    });
    setSearchData(filterData);
  }, [searchKey]);

  return (
    <div className="searchResultsBlock">
      <div className="componentTree text-left">
        <a href="">Home</a>
        <img src={smallArrow} alt="arrow" />
        <a href="" className="active">
          Search results for “{searchKey}”
        </a>
      </div>
      {/* Search no results */}
      {searchData.length == 0 && (
        <div className="noResult text-left">
          <h6>Sorry, there are no results for “{searchKey}”</h6>
          <p>Try searching by name, date of birth, or ID number.</p>
        </div>
      )}

      {/* Search user results */}
      {searchData.length > 0 && (
        <div className="userSearchResult text-left">
          <h4>Search results for "{searchKey}"</h4>

          <Table className="customTable" responsive hover>
            <thead>
              <tr>
                <th>New ID</th>
                <th>Prior ID</th>
                <th>Date of Birth</th>
                <th>Name (Last, first MI)</th>
                <th className="transparent">Empaty section</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {searchData?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.priorId}</td>
                    <td>{item.dob}</td>
                    <td>{item.name}</td>
                    <td>{item.tdata5}</td>
                    <td>
                      <Link to="/patient/details/demographics">
                        <img src={darkArrow} alt="rightArrow" />
                      </Link>
                      {/* <a  >
                        <img src={darkArrow} alt="rightArrow" />
                      </a> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SearchResultsContent;
