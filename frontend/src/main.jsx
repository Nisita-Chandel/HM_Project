
// import { createRoot } from 'react-dom/client'
// import './index.css'
// // import App from './App.jsx'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import AppRouter from './router/AppRouter.jsx';
// import { ToastContainer,toast } from 'react-toastify';
// import { store } from './store/store.jsx';
// import {Provider} from "react-redux";

// const queryClient = new QueryClient();

// createRoot(document.getElementById('root')).render(

// <Provider store = {store}>
// <QueryClientProvider client = {queryClient}>
//      <AppRouter />
//   <ToastContainer/>
// </QueryClientProvider>
// </Provider>
// )
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { store } from "./store/store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
