import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestComponent from "./components/TestComponent.jsx";
import { ContextProvider } from "./context/MyContext.jsx";
import { MyStore } from "./context/MyContext.jsx";
import { MyShop, MyShopContextProvider } from "./context/MyShopContext.jsx";

createRoot(document.getElementById("root")).render(
  // <ContextProvider value={MyStore}>
  //   <TestComponent />
  // </ContextProvider>

  // React simply returns the latest value exposed by the nearest matching Provider.
  <MyShopContextProvider value={MyShop}>
    <App />,
  </MyShopContextProvider>,
);
