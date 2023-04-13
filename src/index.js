import React from 'react';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { store } from './components/Redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
