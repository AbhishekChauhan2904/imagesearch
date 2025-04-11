import React from 'react';
import ImageCard from './Card';

const ImageGrid = ({ images }) => {
  return (
    <div
      className="image-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '60px',
        padding: '20px',
        width:'100%',
        marginBottom:'20px'
      }}
    >
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageGrid;
