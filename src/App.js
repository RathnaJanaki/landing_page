import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Header from './components/header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    // Mock search logic: Filter results based on the search term.
    const mockData = ['React Basics', 'Advanced React', 'React Hooks', 'React Components'];
    const filteredResults = mockData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <Header/>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
