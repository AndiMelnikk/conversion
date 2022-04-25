import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

const HeaderComponent = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state) => {
  return {
    oneCurrent: [
      state.MoneyConversionReducer.UHA_USD,
      state.MoneyConversionReducer.UHA_EUR,
    ],
  };
};

export default connect(mapStateToProps, {})(HeaderComponent);
