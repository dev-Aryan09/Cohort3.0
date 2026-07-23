import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyStore, MyStoreContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <MyStoreContextProvider value={MyStore}>
    <App />
  </MyStoreContextProvider>,
);
