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
      github: [],
    };
  }
  componentDidMount() {
    this.refreshData()
      .then(() =>
        this.loadCommits(this.state.students[0], this.state.groups[0])
      )
      .then(() => console.log(this.state.github));
  }
  loadCommits(student, group) {
    return axios
      .get(
        "https://api.github.com/repos/" +
          student.github +
          "/" +
          group.githubRepo +
          "/commits"
      )
      .then((githubs) => this.setState({ github: githubs }));
  }

  refreshData = () => {
    var students = axios
      .get("/evaluat/users/")
      .then((res) => this.setState({ students: res.data }))
      .catch((err) => console.log(err));
    console.log(this.students);
    var groups = axios
      .get("/evaluat/groups/")
      .then((res) => this.setState({ groups: res.data }))
      .catch((err) => console.log(err));
    var evaluations = axios
      .get("/evaluat/evaluations/")
      .then((res) => this.setState({ evaluations: res.data }))
      .catch((err) => console.log(err));
    return Promise.all([students, groups, evaluations]);
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
            {evaluation.evaluator.name} -> {evaluation.evaluatee}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div class="container" className="p-0">
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
