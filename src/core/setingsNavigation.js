import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION } from "./InfoText";
import { App } from "./App";
import { Settings } from "../features/Settings";
import { Dashboard } from "../features/Dashboard";
import { ErrorPage } from "../features/ErrorPage";
import { Organization } from "../features/Organization";
import { OrganizationEdit } from "../features/OrganizationEdit";

export const RouterSetings = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: NAVIGATION.NAV_LINK_DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: NAVIGATION.NAV_LINK_ORGANIZATION,
        element: <Organization />,
      },
      {
        path: "organizacja-edytuj/:id",
        element: <OrganizationEdit />,
      },
      {
        path: NAVIGATION.NAV_LINK_SETINGS,
        element: <Settings />,
      },
    ],
  },
]);
