import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import "./style.css"

export default function Table({ columns, data }) {

const [filterNameInput, setFilterNameInput] = useState("");
const [filterOccupationInput, setFilterOccupationInput] = useState("");
const [filterDepartmentInput, setFilterDepartmentInput] = useState("");

  const {
    getTableProps,
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow, 
    setFilter 
  } = useTable(
      {
    columns,
    data
  },
  useFilters,
  useSortBy
  );

  const handleFilterChangeName = e => {
    const value = e.target.value || undefined;
    setFilter("name", value);
    setFilterNameInput(value);
  };
  const handleFilterChangeOccupation = e => {
    const value = e.target.value || undefined;
    setFilter("occupation", value);
    setFilterOccupationInput(value);
  };
  
  const handleFilterChangeDepartment = e => {
    const value = e.target.value || undefined;
    setFilter("department", value);
    setFilterDepartmentInput(value);
  };
  
 return (
  <>
 <div className="search">
<input value={filterNameInput} onChange= {handleFilterChangeName} placeholder={"Input Name"}/> 
<input value={filterOccupationInput} onChange={handleFilterChangeOccupation } placeholder={"Input Role"}/> 
<input value={filterDepartmentInput} onChange={handleFilterChangeDepartment} placeholder={"Input Department"}/>
</div> 
<table {...getTableProps()}>
  <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </>
  );
}