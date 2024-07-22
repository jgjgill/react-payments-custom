import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { CardProvider } from "./providers/card-provider/card-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CardProvider>
      <App />
    </CardProvider>
  </React.StrictMode>
);
