// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component {
  handleClick = event => {
    const { onDelayedClick, delay } = this.props;
    event.persist();
    setTimeout(() => {
      onDelayedClick(event);
    }, delay);
  };
  render() {
    return <button onClick={this.handleClick} />;
  }
}

export default DelayedButton;
