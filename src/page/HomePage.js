import React, { useState } from 'react';
import { fetchImages } from '../api/imageApi';
import ImageGrid from '../components/Grid';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    const result = await fetchImages(query);
    setImages(result);
  };

  return (
    <div
      className="home-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <h1 style={{ marginBottom: '15px' }}>Image Search</h1>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter Your Search Terms"
          style={{
            width: '400px',
            height: '35px',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            height: '60px',
            padding: '0 20px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Search
        </button>
      </div>

      <br />
      <ImageGrid images={images} />
    </div>
  );
};

export default HomePage;
