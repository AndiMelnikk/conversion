import React from "react";
import styled from "styled-components";
import { NumberType } from "../plugins/Validator";

export const InputTel = (props) => {
  const convert = (e) => {
    props.setValue(NumberType(e.target.value, 1));
  };

  return (
    <InputS loader={props.loader}>
      <input
        type='tel'
        disabled={props.loader}
        onChange={convert}
        value={props.current}
      />
    </InputS>
  );
};

export const InputText = (props) => {
  return (
    <InputS loader={props.loader}>
      <input
        type='text'
        onChange={props.onChange}
        onClick={props.onClick}
        onBlur={props.onBlur}
        value={props.current}
      />
    </InputS>
  );
};

const InputS = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;

  &:hover > input {
    background-color: ${(p) => (p.loader ? "rgb(170, 170, 170)" : "silver")};
  }
  > input {
    padding: 5px 20px;
    font-size: 1.2em;
    font-weight: 700;
    height: 100%;
    width: 100%;
    transition: 0.2s;
    border: none;
    border-bottom: 2px solid silver;
    cursor: ${(p) => (p.loader ? "not-allowed" : "pointer")};
    background-color: ${(p) => (p.loader ? "rgb(170, 170, 170)" : "")};
    color: ${(p) => (p.loader ? "rgba(231, 219, 219, 0)" : "black")};
    &:focus {
      border-bottom: 2px solid blue;
      outline: 0;
      -webkit-box-shadow: 0px 6px 13px -3px rgba(0, 0, 0, 0.9);
      box-shadow: 0px 6px 13px -3px rgba(0, 0, 0, 0.9);
      background-color: rgb(227, 227, 227);
    }
  }
`;

const InputTelS = styled(InputS)`
  > input {
    }
  }
`;
