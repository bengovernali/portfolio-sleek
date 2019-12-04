import React, { Component } from "react";
import headshot from "../images/headshot.jpg";

class Front extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="main-info">
          <div className="title">FULL STACK DEVELOPER</div>
          <div className="description">
            Full stack engineer with extensive project management experience and
            excellent inter-disciplinary communication skills.
          </div>
          <div className="resume">RESUME</div>
        </div>
        <div className="headshot">
          <img className="headshot" alt="headshot" src={headshot} />
        </div>
      </div>
    );
  }
}

export default Front;
