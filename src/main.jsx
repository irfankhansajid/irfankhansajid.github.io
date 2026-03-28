import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/tokens.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

requestAnimationFrame(() => console.log("%cYou looked at the source. I respect that.\nBuilt with React + Vite. Clean by intention.\n→ irfankhansajid@gmail.com", "font: 700 20px 'JetBrains Mono', monospace; color: #f0a500;"));
