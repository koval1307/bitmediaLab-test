import React from "react";
import Main from '../../components/Main/Main'
import FooterHomePage from '../../components/FooterHomePage/FooterHomePage'
import HeaderHomePage from "../../components/HeaderHomePage/HeaderHomePage";


const HomePage = (props) => {
  return (
    <>
      <HeaderHomePage />

          <Main />
        <FooterHomePage/>
    </>
  );
};

export default HomePage;
