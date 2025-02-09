import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing the new root API
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root element
root.render(<App />); // Rendering the App component using the new API
