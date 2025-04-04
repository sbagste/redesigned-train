import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router';
import './index.css';
import App from './App.jsx';
import Creator from './Creator.jsx';

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/creator' element={<Creator />} />
      </Routes>
    </HashRouter>
);
