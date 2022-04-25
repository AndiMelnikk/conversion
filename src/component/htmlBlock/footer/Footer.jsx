import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterS>
      <h3>Із задовлення вислухаю критикую, для подальшого навчання.</h3>
    </FooterS>
  );
};

export default Footer;

const FooterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > h3 {
  }
`;
