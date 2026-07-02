import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ReviewProvider } from "./context/ReviewContext.jsx";
import { PackageProvider } from "./context/PackageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ReviewProvider>
        <PackageProvider>
          <App />
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={10}
            toastOptions={{
              duration: 3000,

              style: {
                borderRadius: "12px",
              },
            }}
          />
        </PackageProvider>
      </ReviewProvider>
    </BrowserRouter>
  </StrictMode>,
);
