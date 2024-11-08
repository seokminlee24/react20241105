import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App48 from "./assets/practice/App48.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <Provider>
    <App48 />
    <Toaster />
  </Provider>,
  //</StrictMode>,
);
