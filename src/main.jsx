import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Creator from './Creator.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='redesigned-train/' element={<App />} />
      <Route path='redesigned-train/creator' element={<Creator />} />
    </Routes>
  </BrowserRouter>
);
