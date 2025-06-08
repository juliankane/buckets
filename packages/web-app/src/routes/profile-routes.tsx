import { Navigate, RouteObject } from "react-router-dom";
import {
  Account,
  Appearence,
  Dashboard,
  Notifications,
  Preferences,
  Privacy,
} from "@pages/profile";
import { MobileSettings } from "@pages/profile/views/Settings";
import BucketLayout from "@layouts/private/BucketLayout";
import { DesktopSettingsLayout } from "@layouts/private/SettingsLayout";
import { ProfileLayout } from "@layouts/private/ProfileLayout";

export const profileRoutes: RouteObject = {
  path: ":id",
  Component: ProfileLayout,
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />,
    },
    {
      path: "dashboard",
      Component: Dashboard,
    },
    {
      path: ":bucket",
      Component: BucketLayout,
    },
    {
      path: "m/settings",
      Component: MobileSettings,
    },
    {
      path: "settings",
      Component: DesktopSettingsLayout,
      children: [
        { path: "account", Component: Account },
        { path: "appearence", Component: Appearence },
        { path: "notifications", Component: Notifications },
        { path: "preferences", Component: Preferences },
        { path: "privacy", Component: Privacy },
      ],
    },
  ],
};