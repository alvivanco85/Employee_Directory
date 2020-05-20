import React, { Component } from "react";
import FriendCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Employee from "./employee.json";
import SearchBar from "./components/SearchBar"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Employee
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <SearchBar>Search Employee by id, name, occupation or department.</SearchBar>
        {this.state.Employee.map(Employee => (
          <FriendCard
            id={Employee.id}
            key={Employee.id}
            name={Employee.name}
            image={Employee.image}
            occupation={Employee.occupation}
            department={Employee.department}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
