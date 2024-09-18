import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  searchBar: {
    textAlign: 'center',
    margin: '20px',
  },
  input: {
    padding: '10px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    marginLeft: '10px',
    borderRadius: '5px',
    backgroundColor: '#61dafb',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SearchBar;
