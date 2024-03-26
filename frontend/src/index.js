import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { UserContextProvider } from "./components/context/UserContext";
// import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(
    <UserContextProvider>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </UserContextProvider>

);

