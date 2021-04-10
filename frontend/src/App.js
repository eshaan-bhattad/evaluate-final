import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Header from "./components/Header.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      evaluations: [],
      groups: [],
    };
  }
  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    axios
      .get("/evaluat/users/")
      .then((res) => this.setState({ students: res.data }))
      .catch((err) => console.log(err));
    console.log(this.students);
    axios
      .get("/evaluat/groups/")
      .then((res) => this.setState({ groups: res.data }))
      .catch((err) => console.log(err));
    axios
      .get("/evaluat/evaluations/")
      .then((res) => this.setState({ evaluations: res.data }))
      .catch((err) => console.log(err));
    axios
      .get("/evaluat/users/id")
      .then((res) => this.setState({ evaluations: res.data }))
      .catch((err) => console.log(err));
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
  renderGroups = () => {
    return (
      <ul className="list-group">
        <li class="list-group-item">Groups</li>
        {this.state.groups.map((group) => (
          <li class="list-group-item">{group.groupname}</li>
        ))}
      </ul>
    );
  };
  renderEvaluations = () => {
    return (
      <ul className="list-group">
        <li class="list-group-item">Evaluations</li>
        {this.state.evaluations.map((evaluation) => (
          <li class="list-group-item">
            {evaluation.evaluator.name} -> {evaluation.evaluatee.name}
          </li>
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
          <div class="col-sm">
            <div>{this.renderGroups()}</div>
          </div>
          <div class="col-sm">
            <div>{this.renderEvaluations()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
