import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../router/Routers";

const Layouts = () => {
  return (
    <>
      <Header />
      <Routers />
      <Footer/>
    </>
  );
};

export default Layouts;
