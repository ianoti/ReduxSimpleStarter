import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import _ from 'lodash';


class SearchBar extends Component {
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
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ cityTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // format weather data input to get city and country country_code
    const inputString = this.state.cityTerm;
    let searchArray = [];
    if (inputString) {
      searchArray = inputString.split(",").map((value) => {
        return _.trim(value);
      });
    };
    // fetch weather data
    console.log('****', searchArray);
    this.props.fetchWeather(searchArray[0],searchArray[1]);
    this.setState({cityTerm: ''});
  }

  render(){
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="get a 5 day forecast in your favorite cities, enter city name in format: {city name}, {optional ISO 3166 country code}"
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
