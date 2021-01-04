import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="nav-container">
        <i className="navbar-logo fas fa-flag-checkered"></i>
        <span className="navbar-title">HABIT TRACKER!</span>
        <span className="navbar-count">
          {this.props.totalCount < 1 ? 0 : this.props.totalCount}
        </span>
      </header>
    );
  }
}

export default Navbar;
