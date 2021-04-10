import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

const evals = [
  {
    evaluator: 1,
    evaluatee: 2,
    accountability: 4,
    commitment: 3,
    conflict: 4,
    trust: 4,
    results: 4,
    comments: "Cool kid",
  },
  {
    evaluator: 3,
    evaluatee: 1,
    accountability: 5,
    commitment: 5,
    conflict: 5,
    trust: 5,
    results: 5,
    comments: "Coool dude",
  },
];

const users = [
  {
    name: "Eshaan Bhattad",
    email: "ebhattad@gmail.com",
    number: "8478509185",
    linkedin: "https://www.linkedin.com/in/eshaan-bhattad/",
    github: "https://github.com/eshaan-bhattad",
    groups: [],
  },
  {
    name: "Sathvik Daaram",
    email: "sdaaram2@illinois.edu",
    number: "6099371253",
    linkedin: "https://www.linkedin.com/in/sathvik-daaram/",
    github: "https://github.com/sdaaram",
    groups: [],
  },
  {
    name: "Pratyush Tulsian",
    email: "tulsian3@illinois.edu",
    number: "6099203116",
    linkedin: "https://www.linkedin.com/in/pratyush-tulsian/",
    github: "https://github.com/tulsian",
    groups: [1],
  },
];

const group = [
  {
    groupname: "212EAST",
    students: [1, 2],
    githubRepo: "https://github.com/eshaan-bhattad/evaluate-final",
    owner: 1,
    evaluations: [1],
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: users,
      evaluations: evals,
      groups: group,
    };
  }
  nameFromId = (id) => {
    var apiUrl = "http://127.0.0.1:8000/evaluat/users/" + id;
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Work with JSON data here
        console.log(data["name"]);
      })
      .catch((err) => {
        return;
      });
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
            {this.nameFromId(evaluation.evaluator)} -> {evaluation.evaluatee}
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
