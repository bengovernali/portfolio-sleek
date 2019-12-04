import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="site-title">Ben Governali</div>
        <div className="links">
          <a
            className="link"
            href="https://github.com/bengovernali"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="link"
            href="https://linkedin.com/in/bengovernali"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <div className="link">About</div>
          <div className="link">Projects</div>
          <div className="link">Skills</div>
          <div className="link">Contact</div>
        </div>
      </div>
    );
  }
}

export default Header;
