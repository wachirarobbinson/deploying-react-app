import React from 'react';
import './App.css';
import AddBook from './components/AddBook'; // Updated import
import BookList from './components/Booklist'; // Updated import
import Nav from './components/Nav'; // Updated import
import SearchBar from './components/SearchBar'; // Updated import

function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
