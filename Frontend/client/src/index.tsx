import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App';
import { HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
