import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import preset from "@rebass/preset";
import { QueryClientProvider, QueryClient } from 'react-query';
const root = ReactDOM.createRoot(document.getElementById('root'));

const queryCLient = new QueryClient();


root.render(

  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>

    <ThemeProvider theme={preset}>
      <BrowserRouter>

      <App />

      </BrowserRouter>

    </ThemeProvider>
    </QueryClientProvider>

  </React.StrictMode>
);

