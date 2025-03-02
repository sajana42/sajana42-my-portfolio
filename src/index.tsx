import './index.css';
import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client"; // Updated import
import { App } from "./App";
const root = createRoot(document.getElementById("root")!); // Create a root (use ! to assert non-null)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);