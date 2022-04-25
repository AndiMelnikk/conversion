import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Footer from "../component/htmlBlock/footer/Footer";

import HeaderComponent from "../component/htmlBlock/header/HeaderComponent";
import Error from "./pages/error/Error";
import HomeComponent from "./pages/home/HomeComponent";

const Skeleton = (props) => {
  return (
    <SkeletonS>
      <HeaderComponent />
      <Routes>
        <Route exact path='/' element={<HomeComponent />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </SkeletonS>
  );
};

export default Skeleton;

const SkeletonS = styled.div`
  display: grid;
  grid-template-rows: minmax(70px, 10%) 80% 10%;
  height: 100vh;
  > div {
    overflow: hidden;
  }
`;
