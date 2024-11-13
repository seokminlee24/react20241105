import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import MyApp69 from "./apps/MyApp69.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <Provider>
    <MyApp69 />
    <Toaster />
  </Provider>,
  //</StrictMode>,
);
