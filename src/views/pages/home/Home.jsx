import React, { useState, useEffect } from "react";

import { BsArrowLeftRight } from "react-icons/bs";
import Loader from "../../../component/plugins/Loader";
import { InputTel } from "../../../component/UI/Input";

import Select from "../../../component/UI/Select";
import {
  Convertor,
  HomeS,
  ChangeConversion,
  PopularConversion,
  PopularConvertor,
} from "./HomeStyled";

const Home = (props) => {
  const [v, setV] = useState([1, 1 * props.interest]);

  useEffect(() => {
    setV([1, 1 * props.interest]);
  }, [props.interest]);

  const newValue = (value) => {
    setV([value, value * props.interest]);
  };
  const toNewValue = (value) => {
    setV([value / props.interest, value]);
  };

  const selectValue = (value) => {
    props.setName(value, "with", props.toCurrency.name);
  };

  const selectToValue = (value) => {
    props.setName(value, "to", props.currency.name);
  };

  const optionsChange = () => {
    props.setName(props.currency.name, "all", props.toCurrency.name);
  };

  return (
    <HomeS>
      <Convertor>
        <div>
          <Select
            run='white'
            name={props.currency.name}
            fullName={props.currency.fullName}
            options={props.counterArray}
            setValueOption={selectValue}
          />
          <div>
            <InputTel
              current={v[0]}
              setValue={newValue}
              loader={props.loader}
            />
          </div>

          <PopularConversion>
            <PopularConvertor onClick={() => selectValue("UAH")}>
              UAH
            </PopularConvertor>
            <PopularConvertor onClick={() => selectValue("RUB")}>
              RUB
            </PopularConvertor>
          </PopularConversion>
        </div>
        <ChangeConversion onClick={optionsChange}>
          <div>{props.loader ? <Loader /> : <BsArrowLeftRight />}</div>
        </ChangeConversion>
        <div>
          <Select
            run='to'
            name={props.toCurrency.name}
            fullName={props.toCurrency.fullName}
            options={props.counterArray}
            setValueOption={selectToValue}
          />
          <div>
            <InputTel
              current={v[1]}
              setValue={toNewValue}
              loader={props.loader}
            />
          </div>

          <PopularConversion>
            <PopularConvertor onClick={() => selectToValue("USD")}>
              USD
            </PopularConvertor>
            <PopularConvertor onClick={() => selectToValue("EUR")}>
              EUR
            </PopularConvertor>
          </PopularConversion>
        </div>
      </Convertor>
    </HomeS>
  );
};

export default Home;
