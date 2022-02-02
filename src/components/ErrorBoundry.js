import React, { Component } from "react";

class ErorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <h2>Ooops. An error has occured!</h2>
    }
    return this.props.children;
  }
}

export default ErorBoundry;
