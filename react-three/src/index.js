// import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthContextProvider } from './sprint3/Router/Components/AuthContext';


// import { AuthContextProvider } from './sprint3/Router/Components/AuthContext';
// import { createRoot } from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
     <BrowserRouter>
    
     <AuthContextProvider>
      
      <ChakraProvider>
      
      <App />
    </ChakraProvider>
     </AuthContextProvider>
   
    </BrowserRouter>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
