import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestComponent from "./components/TestComponent.jsx";
import { ContextProvider } from "./context/MyContext.jsx";
import { MyStore } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider value={MyStore}>
    <TestComponent />
  </ContextProvider>,
);
