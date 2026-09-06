import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import AosController from "../ui/AosController";

function Layout() {
  return (
    <>
      <AosController />
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;