// src/components/AddBook.js
import React, { Component } from 'react';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: Date.now(), title: this.state.title };
    this.props.onAddBook(newBook); // Pass the new book to a parent component to handle the addition
    this.setState({ title: '' }); // Clear the input field
  };

  render() {
    return (
      <div>
        <h2>Add a Book</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Book Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
