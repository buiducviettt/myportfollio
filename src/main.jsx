// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './components/GlobalStyles/index';
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </StrictMode>,
  );
}
