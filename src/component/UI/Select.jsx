import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";
import { InputText } from "./Input";

const Select = ({ fullName, name, options, setValueOption }) => {
  const [value, setValue] = useState(fullName);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setValue(fullName);
  }, [fullName]);

  const onClick = () => setFocused(true);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 100);
  };

  const changeConversion = (e) => {
    const li = e.target.closest("li");
    setFocused(false);
    setValueOption(li.children[0].textContent);
  };

  const country = options
    .filter((country) =>
      country.currencyName.toLowerCase().includes(value.toLowerCase())
    )
    .map((e) => (
      <Li key={e.id}>
        <div>
          <span>{e.id}</span>
        </div>
        <div>
          <span>{e.currencyName}</span>
        </div>
        <div>
          <span>{e.currencySymbol || "-"}</span>
        </div>
      </Li>
    ));

  return (
    <SelectS>
      <SelectActive>
        <div>
          <span>{name}</span>
        </div>
        <div>
          <InputText
            current={value}
            onBlur={onBlur}
            onClick={onClick}
            onChange={onChange}
          />
        </div>
        <div>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
      </SelectActive>

      {focused ? (
        <Scroll>{<ul onClick={changeConversion}>{country}</ul>}</Scroll>
      ) : (
        ""
      )}
    </SelectS>
  );
};

export default Select;
const SelectS = styled.div`
  position: relative;
`;
const SelectActive = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  border: 1px solid silver;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  }
`;
const Scroll = styled.div`
  width: 100%;
  height: 200px;
  background-color: white;
  position: absolute;
  border: 1px solid silver;
  border-radius: 10px;
  ul {
    margin: 0;
    padding: 10px;
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
`;
const Li = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 0;
  list-style-type: none;
  border-bottom: 1px solid silver;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 10px;
  &:hover {
    background-color: silver;
  }
  > div {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
  > div:nth-child(1) span {
    font-weight: 700;
  }
  > div:nth-child(2) span {
    font-size: 0.8em;
  }
  > div:nth-child(3) {
    justify-content: center;
  }
`;
