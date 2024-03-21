import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION } from "./InfoText";
import { App } from "./App";
import { ErrorPage } from "@features/ErrorPage";
import { Dashboard } from "@features/Dashboard";
import { Notes } from "@features/Notes";
import { TableUsers } from "@features/Users/TableUsers";
import { AddUser } from "@features/Users/AddUser";
import { EditUser } from "@features/Users/EditUser";
import { Organization } from "@features/Organization/AddAndDelet";
import { OrganizationEdit } from "@features/Organization/Edit";
import { Settings } from "@features/Settings";

const routes = [
  { path: "/", element: <Dashboard />, index: true },
  { path: NAVIGATION.NAV_LINK_DASHBOARD, element: <Dashboard /> },
  { path: NAVIGATION.NAV_LINK_NOTES, element: <Notes /> },
  { path: NAVIGATION.NAV_LINK_USERS, element: <TableUsers /> },
  { path: NAVIGATION.NAV_LINK_ADD_USERS, element: <AddUser /> },
  { path: `${NAVIGATION.NAV_LINK_EDIT_USERS}/:id`, element: <EditUser /> },
  { path: NAVIGATION.NAV_LINK_ORGANIZATION, element: <Organization /> },
  {
    path: `${NAVIGATION.NAV_ID_ORGANIZATION}/:id`,
    element: <OrganizationEdit />,
  },
  { path: NAVIGATION.NAV_LINK_SETTINGS, element: <Settings /> },
];

const generateRoutes = () => {
  const generatedRoutes = routes.map((route) => ({
    ...route,
  }));

  return [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: generatedRoutes,
    },
  ];
};

export const RouterSetings = createBrowserRouter(generateRoutes());
