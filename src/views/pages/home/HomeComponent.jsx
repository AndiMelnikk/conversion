import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setValue_AC,
  getCurrency,
  setName,
} from "../../../redux/reducer/MoneyConversion.js";
import Home from "./Home";

const HomeComponent = ({ getCurrency, ...props }) => {
  useEffect(() => {
    getCurrency();
  }, []);

  return <Home {...props} />;
};

const mapStateToProps = (state) => {
  return {
    currency: state.MoneyConversionReducer.currency,
    toCurrency: state.MoneyConversionReducer.toCurrency,
    interest: state.MoneyConversionReducer.interest,
    counterArray: state.MoneyConversionReducer.counterArray,
    loader: state.MoneyConversionReducer.loader,
  };
};

export default connect(mapStateToProps, {
  setValue_AC,
  getCurrency,
  setName,
})(HomeComponent);
