import React, { Component } from "react";
import axios from "axios";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

export default class ListOfStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      students: [],

    };
  }

  componentDidMount() {
    this.refreshData().then(() => console.log(this.state.groups));
  }

  refreshData = () => {
    return axios
      .get("evaluat/groups/" + this.state.id)
      .then((res) => this.setState({students: res.data.students}))
      .catch((err) => console.log(err));
      console.log(this.state.students)
  };

  renderStudents = () => {
    return (
      <ul className="list-group">
        <li class="list-group-item">Students</li>
        {this.state.students.map((student) => (
          <li class="list-group-item">{student.name}</li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div>{this.renderStudents()}</div>
          </div>
        </div>
      </div>
    );
  }
}
