import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { StrictMode } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App.tsx';
import './index.css';
import Loading from './view/common/common-components/Loading.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer />
    <Loading />
    <App />
  </StrictMode>,
);
