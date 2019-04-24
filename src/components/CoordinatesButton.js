// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    const { onReceiveCoordinates } = this.props;
    onReceiveCoordinates([event.clientX, event.clientY]);
  };
  render() {
    return <button onClick={this.handleClick}>CoordinatesButton</button>;
  }
}

export default CoordinatesButton;
