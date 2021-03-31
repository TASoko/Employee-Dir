import React,  { Component } from "react";
import API from "../utils/API";

class employeeTable extends Component {
  state = {
    results: [],
    error: "" ,
    filter:[],
  };

  componentDidMount() {
    API.getEmployees()
      .then(
        (result) => {
          this.setState({
            results: result.data.results
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  sort = () => {
    console.log("it's working")
  }
  render (){
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col" onClick={this.sort}>Last Name</th>
              <th scope="col">City</th>
              <th scope="col">County</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Cell Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.length > 0 &&
              this.state.results.map((results) => (
                <tr>
                  <td>
                    {results.name.first}
                  </td>
                  <td>{results.name.last}</td>
                  <td>{results.location.city}</td>
                  <td>{results.location.country}</td>
                  <td>{results.email}</td>
                  <td>{results.phone}</td>
                  <td>{results.cell}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default employeeTable;