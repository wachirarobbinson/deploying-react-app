// src/components/BookList.js
import React, { Component } from 'react';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { id: 1, title: 'To Kill a Mockingbird' },
        { id: 2, title: '1984' },
        { id: 3, title: 'The Great Gatsby' },
        { id: 4, title: 'Pride and Prejudice' },
        { id: 5, title: 'The Catcher in the Rye' },
        { id: 6, title: 'The Lord of the Rings' },
        { id: 7, title: 'The Hobbit' },
        { id: 8, title: 'The Harry Potter Series' },
        { id: 9, title: 'The Chronicles of Narnia' },
        { id: 10, title: 'Moby-Dick' },
        { id: 11, title: 'Brave New World' },
        { id: 12, title: 'The Grapes of Wrath' },
        { id: 13, title: 'The Odyssey' },
        { id: 14, title: 'War and Peace' },
        { id: 15, title: 'The Divine Comedy' },
        { id: 16, title: 'Crime and Punishment' },
        { id: 17, title: 'The Adventures of Huckleberry Finn' },
        { id: 18, title: 'The Brothers Karamazov' },
        { id: 19, title: 'Frankenstein' },
        { id: 20, title: 'Jane Eyre' },
        { id: 21, title: 'The Picture of Dorian Gray' },
        { id: 22, title: 'The Count of Monte Cristo' },
        { id: 23, title: 'The Iliad' },
        { id: 24, title: 'The Road' },
        { id: 25, title: 'To the Lighthouse' },
        { id: 26, title: 'The Color Purple' },
        { id: 27, title: 'The Alchemist' },
        { id: 28, title: 'One Hundred Years of Solitude' },
        { id: 29, title: 'The Shining' },
        { id: 30, title: 'The Hunger Games' },
        // Add more books here
      ],
    };
  }

  handleDeleteBook = (id) => {
    const updatedBooks = this.state.books.filter((book) => book.id !== id);
    this.setState({ books: updatedBooks });
  };

  render() {
    return (
      <div>
        <h2>Book List</h2>
        <ul>
          {this.state.books.map((book) => (
            <li key={book.id}>
              {book.title}
              <button onClick={() => this.handleDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookList;
