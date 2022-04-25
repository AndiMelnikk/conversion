import React from "react";
import Loader from "../../plugins/Loader";

import { HeaderS, ValutaSymbol, ImgBlock } from "./HederStyled";

const Header = (props) => {
  return (
    <HeaderS>
      <div>
        <h3>Тестове завдання «Конвертор валют» для компанії: «ITOP1000»</h3>
      </div>
      <div>
        <ValutaSymbol
          background='rgb(144, 184, 255)'
          borderColor='rgb(96, 146, 232)'>
          <ImgBlock>
            {props.oneCurrent[1].loader ? (
              <Loader />
            ) : (
              <img
                src={require("../../../img/flag-european.png")}
                alt='flag-european'
              />
            )}
          </ImgBlock>

          <p>
            <span>{props.oneCurrent[1].current}</span>
          </p>
        </ValutaSymbol>
        <ValutaSymbol
          background='rgb(249, 131, 142)'
          borderColor='rgb(249, 14, 14)'>
          <ImgBlock>
            {props.oneCurrent[0].loader ? (
              <Loader />
            ) : (
              <img
                src={require("../../../img/flag-united-states.png")}
                alt='flag-united-states'
              />
            )}
          </ImgBlock>
          <p>
            <span>{props.oneCurrent[0].current}</span>
          </p>
        </ValutaSymbol>
      </div>
    </HeaderS>
  );
};

export default Header;
