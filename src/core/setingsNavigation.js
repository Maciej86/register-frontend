import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION, ORGANIZATION } from "./InfoText";
import { App } from "./App";
import { Settings } from "../features/Settings";
import { Dashboard } from "../features/Dashboard";
import { ErrorPage } from "../features/ErrorPage";
import { Organization } from "../features/Organization/AddAndDelet";
import { OrganizationEdit } from "../features/Organization/Edit";
import { UsersTable } from "../features/Users/UsersTable";

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
        path: NAVIGATION.NAV_LINK_USERS,
        element: <UsersTable />,
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
        path: `${NAVIGATION.NAV_ID_ORGANIZATION}/:id`,
        element: <OrganizationEdit />,
      },
      {
        path: NAVIGATION.NAV_LINK_SETINGS,
        element: <Settings />,
      },
    ],
  },
]);
