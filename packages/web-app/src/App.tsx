import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { router } from "./routes";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <RouterProvider router={router} />;
}
