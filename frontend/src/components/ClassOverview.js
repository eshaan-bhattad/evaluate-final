import React, {Component} from "react";
import {} from "reactstrap";
import axios from "axios";


// const groups  = [
//     {
//         "groupname": "group10",
//         "students": [
//             {
//                 "id": 1,
//                 "name": "bob",
//                 "email": "bob@gmail.com",
//                 "number": "3",
//                 "linkedin": "-",
//                 "github": "aadarshkrishnan",
//                 "groups": []
//             },
//             {
//                 "id": 2,
//                 "name": "joe",
//                 "email": "joe@gmail.com",
//                 "number": "2",
//                 "linkedin": "-",
//                 "github": "aadarshkrishnan",
//                 "groups": []
//             }
//         ],
//         "githubRepo": "-",
//         "owner": {
//             "id": 1,
//             "name": "bob",
//             "email": "bob@gmail.com",
//             "number": "3",
//             "linkedin": "-",
//             "github": "aadarshkrishnan",
//             "groups": []
//         },
//         "evaluations": []
//     },
//     {
//         "groupname": "group5",
//         "students": [
//             {
//                 "id": 2,
//                 "name": "joe",
//                 "email": "joe@gmail.com",
//                 "number": "2",
//                 "linkedin": "-",
//                 "github": "aadarshkrishnan",
//                 "groups": []
//             }
//         ],
//         "githubRepo": "-",
//         "owner": {
//             "id": 1,
//             "name": "bob",
//             "email": "bob@gmail.com",
//             "number": "3",
//             "linkedin": "-",
//             "github": "aadarshkrishnan",
//             "groups": []
//         },
//         "evaluations": []
//     },
//     {
//         "groupname": "group4",
//         "students": [
//             {
//                 "id": 1,
//                 "name": "bob",
//                 "email": "bob@gmail.com",
//                 "number": "3",
//                 "linkedin": "-",
//                 "github": "aadarshkrishnan",
//                 "groups": []
//             }
//         ],
//         "githubRepo": "-",
//         "owner": {
//             "id": 1,
//             "name": "bob",
//             "email": "bob@gmail.com",
//             "number": "3",
//             "linkedin": "-",
//             "github": "aadarshkrishnan",
//             "groups": []
//         },
//         "evaluations": []
//     }
// ]

export default class GroupOverivew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            course: [],
        };
    }

    componentDidMount() {
        this.refreshData().then(() => console.log(this.state.class));
    }

    refreshData = () => {
        return axios
            .get("evaluat/groups/").then((res) => this.setState({course: res.data})) 
            .catch((err) => console.log(err));
            console.log(this.state.course);
    }

    renderGroups = () => {
        return (
        <h1 class="list-header">Groups:
            <div class="row row-cols-1 row-cols-md-2 g-4">
                {this.state.course.map((group) => (
                    <div class="col">
                        <div className="card">
                            <h1 class="card-header btn text-nowrap">{group.groupname}</h1>
                            <div class="card-body">
                                {group.students.map((student) => (
                            <h6 class="btn-text">{student.name}</h6>
                            ))}
                        </div>
                        </div>
                    </div> 
                ))}
          </div>
        </h1>
        );
      };
    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-sm">
                <div>{this.renderGroups()}</div>
              </div>
            </div>
          </div>
        );
    }
}