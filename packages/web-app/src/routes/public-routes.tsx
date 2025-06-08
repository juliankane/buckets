import { PublicLayout } from "@layouts/index";
import { Home } from "@pages/landing/Home";

import { RouteObject } from "react-router-dom";

export const publicRoutes: RouteObject = {
  path: "/",
  Component: PublicLayout,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
};