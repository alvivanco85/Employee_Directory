import React, { useState, useEffect, useMemo } from "react";

import EmployeeCard from "./components/EmployeeCard";
import Title from "./components/Title";
import Table from "./components/Table/Table";
import Employee from "./employee.json";


function App(){

  const [data, setData] = useState([]);

// Using useEffect to call the json once mounted and set the data
  useEffect(() => {
    const data = Employee;
      setData(data);

  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Employee",
        columns: [
          {
            Header: "",
            accessor: "image",
            Cell: ({ cell: { value } }) => <EmployeeCard employee={value}/>
          },
          {
            Header: "Name",
            accessor: "name"
          }
        ]
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Occupation",
            accessor: "occupation",
          },
          {
            Header: "Department",
            accessor: "department",
            
          },
        ]
      }
    ],
    
    []
  );

    return (
      <div className="App">
    
      <Title>Employee Directory</Title>
        <Table 
        columns={columns} 
        data={data} 
        setTable={setData}/>
        </div>
    );
  }


export default App;
