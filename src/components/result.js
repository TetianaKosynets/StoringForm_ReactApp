import React, { Component } from 'react';

class Result extends Component {
  render() {
    return(
      <div className="app-result">
        <p>
          Name: {this.props.location.state.name}
        </p>
        <p>
          Email: {this.props.location.state.email}
        </p>
        <p>
          Address: {this.props.location.state.address}
        </p>
        <p>
          State: {this.props.location.state.state}
        </p>
      </div>
    );
  }
}

export default Result;
