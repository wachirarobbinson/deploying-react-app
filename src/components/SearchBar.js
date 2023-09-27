// src/components/SearchBar.js
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
    this.props.onSearch(e.target.value); // Pass the search query to a parent component to handle filtering
  };

  render() {
    return (
      <div>
        <h2>Search Bar</h2>
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchQuery}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchBar;
