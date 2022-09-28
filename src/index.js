import React from 'react';
import ReactDOM from 'react-dom/client';
import Education from './components/Education';
import General from './components/General';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <General />
    <Education />
  </React.StrictMode>
);