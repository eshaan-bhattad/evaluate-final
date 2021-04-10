import React, { Component } from "react";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

export default class RadarGraph extends Component {
  render() {
    return (
      <div>
                        
        <RadarChart
          captions={{
            // columns
            participation: "Participation",
            communication: "Communication",
            contribution: "Contribution",
            organization: "Organization",
            handlingconflict: "Handling Conflict",
          }}
          data={[
            // data
            {
              data: {
                participation: this.props.part / 5,
                communication: this.props.com / 5,
                contribution: this.props.con / 5,
                organization: this.props.org / 5,
                handlingconflict: this.props.hc / 5,
              },
              meta: { color: "#58FCEC" },
            },
          ]}
          size={300}
        />
      </div>
    );
  }
}
