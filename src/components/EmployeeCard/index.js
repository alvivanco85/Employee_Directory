import React from "react";
import "./style.css";

function EmployeeCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.friend} />
      </div>
    </div>
  );
}

export default EmployeeCard;

