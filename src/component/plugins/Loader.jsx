import React from "react";
import styled from "styled-components";
const Loader = () => {
  return (
    <LoaderS>
      <img src={require("../../img/loader.gif")} alt='loader' />
    </LoaderS>
  );
};

export default Loader;

const LoaderS = styled.div`
  z-index: 10;
  position: absolute;
  top: 0%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    width: 30px;
    height: 30px;
  }
`;
