import React from "react";
import Header from "../components/Header";
import Routers from "../routes/Routes";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
