import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router";
import "./index.css";
import App from "./App.tsx";
import Editor from "./pages/Editor.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  </BrowserRouter>
);
