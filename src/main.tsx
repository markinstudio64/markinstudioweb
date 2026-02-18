
import { createRoot } from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App";
import "./styles/index.css";

injectSpeedInsights();

const container = document.getElementById("root");
const root = container ? createRoot(container) : null;
if (root) {
  root.render(<App />);
}
