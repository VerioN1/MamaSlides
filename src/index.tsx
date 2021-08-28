import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.render(
    <ChakraProvider>
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
    </ChakraProvider>,
  document.getElementById('root')
);
