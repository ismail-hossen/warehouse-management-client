import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// React Query Essentials
import { QueryClient, QueryClientProvider } from "react-query";
// React Query Config
const queryClient = new QueryClient(); // Global Store Instance

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provide access to Global Store
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </QueryClientProvider>
);
