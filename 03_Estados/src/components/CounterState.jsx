import React, { Component } from 'react';

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <StateSon counterSon={this.state.counter} />
      </div>
    );
  }
}

function StateSon(props) {
  return <h3>{props.counterSon}</h3>;
}
