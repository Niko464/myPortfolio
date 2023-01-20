import "./styles/global.css";
import HomePage from "./pages/HomePage";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);