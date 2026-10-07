import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddProductForm } from './components/AddProductForm';
import './App.css';
import { Logs } from './components/Logs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddProductForm />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </Router>
  );
};

export default App;
