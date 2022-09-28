import React from 'react';
import ReactDOM from 'react-dom/client';
import Education from './components/Education';
import General from './components/General';
import Practice from './components/Practice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <General />
    <Education />
    <Practice />
  </React.StrictMode>
);