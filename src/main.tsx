
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  const container = document.getElementById("root");
const root = container ? createRoot(container) : null;
if (root) {
  root.render(<App />);
}
  