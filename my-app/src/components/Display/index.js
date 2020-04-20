import React from "react";
import PropTypes from "prop-types";
import "./index.css";

class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Display;
