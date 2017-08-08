import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      cityTerm: '',
    }

    // this fixes the error of the "this" being referenced in the application being some mystery
    // context and not one we are in control of and hence the undefined error crops up,
    // we'll bind the action so it always opeartes in the right context
    // this is a different way of fixing it instead of using a fat arrow function onChange={() => {this.onInputChange()}}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ cityTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a 5 day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}

        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}
