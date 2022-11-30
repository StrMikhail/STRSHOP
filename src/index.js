import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { createStore } from './app/store/createStore';

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
);
