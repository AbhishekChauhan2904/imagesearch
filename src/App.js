import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import AddCaptionPage from './page/AddCaptionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-caption" element={<AddCaptionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
