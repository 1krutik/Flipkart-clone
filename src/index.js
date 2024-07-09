
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { myStore } from './Component/Store';
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={myStore}>

<BrowserRouter>

    <App />
    </BrowserRouter>
</Provider>
);
reportWebVitals()