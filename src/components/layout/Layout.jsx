import { Outlet } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ui/ScrollToTop";
import AosController from "../ui/AosController";
import { Analytics } from "@vercel/analytics/next"

function Layout() {
  return (
    <>
      <ScrollToTop />
      <AosController />
      <Analytics />

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;