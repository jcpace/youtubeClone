import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input onChange={this.onInputChange} />;
  }
}
