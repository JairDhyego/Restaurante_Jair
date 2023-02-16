import React from "react";
import ReactDOM from "react-dom/client";
import Cardapio from "./pages/cardapio";
import "./html.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);
