import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public-routes";
import { authRoutes } from "./auth-routes";
import { profileRoutes } from "./profile-routes";

export const router = createBrowserRouter([
  publicRoutes,
  authRoutes,
  profileRoutes,
]);
