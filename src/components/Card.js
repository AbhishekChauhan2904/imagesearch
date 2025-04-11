import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  const handleAddCaption = () => {
    navigate('/add-caption', { state: { imageUrl: image.largeImageURL } });
  };

  return (
    <div
      className="image-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        backgroundColor: '#fff',
        textAlign: 'center',
        height: '100%', 
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <img
          src={image.previewURL}
          alt={image.tags}
          style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px' }}
        />
      </div>
      <button
        onClick={handleAddCaption}
        style={{
          marginTop: '10px',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#000',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        Add Caption
      </button>
    </div>
  );
};

export default ImageCard;
