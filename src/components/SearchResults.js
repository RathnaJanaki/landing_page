import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div style={styles.resultsContainer}>
      {results.length > 0 ? (
        results.map((result, index) => (
          <div key={index} style={styles.resultItem}>
            {result}
          </div>
        ))
      ) : (
        <p style={styles.noResults}>No results found. Try searching for something else.</p>
      )}
    </div>
  );
};

const styles = {
  resultsContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  resultItem: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    margin: '10px 0',
    borderRadius: '5px',
  },
  noResults: {
    color: 'gray',
  },
};

export default SearchResults;
