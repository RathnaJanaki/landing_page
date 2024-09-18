import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Welcome to the Search App</h1>
      <p>Search through our awesome content</p>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white'
  }
};

export default Header;
