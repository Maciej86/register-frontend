import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION } from "./InfoText";
import { App } from "./App";
import { Settings } from "@features/Settings";
import { Dashboard } from "@features/Dashboard";
import { ErrorPage } from "@features/ErrorPage";
import { Organization } from "@features/Organization/AddAndDelet";
import { OrganizationEdit } from "@features/Organization/Edit";
import { TableUsers } from "@features/Users/TableUsers";
import { AddUser } from "@features/Users/AddUser";
import { EditUser } from "@features/Users/EditUser";

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
        element: <TableUsers />,
      },
      {
        path: NAVIGATION.NAV_LINK_ADD_USERS,
        element: <AddUser />,
      },
      {
        path: `${NAVIGATION.NAV_LINK_EDIT_USERS}/:id`,
        element: <EditUser />,
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
        path: NAVIGATION.NAV_LINK_SETTINGS,
        element: <Settings />,
      },
    ],
  },
]);
