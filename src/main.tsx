import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";
import "./index.css";
import App from "./App.tsx";
import Editor from "./pages/editor/editor.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  </BrowserRouter>
);
