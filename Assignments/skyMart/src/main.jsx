import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ContextProvider, MyStore } from "./context/MyContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider value={MyStore}>
      <App />
      <ToastContainer />
    </ContextProvider>
  </BrowserRouter>,
);
