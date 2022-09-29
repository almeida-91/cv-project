import React from 'react';
import ReactDOM from 'react-dom/client';
import Education from './components/Education';
import General from './components/General';
import Practice from './components/Practice';
// eslint-disable-next-line no-unused-vars
import styles from './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>CV-Application</h1>
    <General />
    <Education />
    <Practice />
  </React.StrictMode>
);