import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import MyApp70 from "./apps/MyApp70.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <Provider>
    <MyApp70 />
    <Toaster />
  </Provider>,
  //</StrictMode>,
);
