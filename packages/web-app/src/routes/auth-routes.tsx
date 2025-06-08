import { AuthLayout } from "@layouts/index";
import { Authenticate } from "@pages/auth/Auth";

import { RouteObject } from "react-router-dom";

export const authRoutes: RouteObject = {
  Component: AuthLayout,
  children: [
    { path: "signin", Component: Authenticate },
    { path: "register", Component: Authenticate },
    { path: "forgotpassword", Component: Authenticate },
  ],
};
