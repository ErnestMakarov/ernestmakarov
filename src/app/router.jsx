import { createBrowserRouter } from "react-router";

import Layout from "../components/layout/Layout.jsx";
import HomePage from "../pages/Home/Home.jsx";
import AboutPage from "../pages/About/About.jsx";
import ContactsPage from "../pages/Contacts/Contacts.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";
import Work from "../pages/Work/Work.jsx";
import Services from "../pages/Services/Services.jsx";
import Process from "../pages/Process/Process.jsx";
import Privacy from "../pages/Privacy/Privacy.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);