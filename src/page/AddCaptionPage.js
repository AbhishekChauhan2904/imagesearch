import React from 'react';
import { useLocation } from 'react-router-dom';
import CanvasEditor from '../components/CanvasEditor';

const AddCaptionPage = () => {
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  return (
    <div style={{ padding: '10px', backgroundColor: '#000', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>
        Add Caption Page
      </h1>

      <div style={{ marginLeft: '80px' }}>
        {imageUrl ? (
          <CanvasEditor imageUrl={imageUrl} />
        ) : (
          <p style={{ color: '#fff' }}>No image selected.</p>
        )}
      </div>
    </div>
  );
};

export default AddCaptionPage;
