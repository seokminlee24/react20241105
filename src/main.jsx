import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import MyApp63 from "./apps/MyApp63.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <Provider>
    <MyApp63 />
    <Toaster />
  </Provider>,
  //</StrictMode>,
);
