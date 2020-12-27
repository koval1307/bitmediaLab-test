import React from "react";
import Main from '../../components/Main/Main'
import Footer from '../../components/FooterHomePage/FooterHomePage'
import HeaderHomePage from "../../components/HeaderHomePage/HeaderHomePage";


const HomePage = (props) => {
  return (
    <>
      <HeaderHomePage />
          <Main />
          <Footer/>
    </>
  );
};

export default HomePage;
