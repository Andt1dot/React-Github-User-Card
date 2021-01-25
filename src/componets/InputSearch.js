import React from "react";
import styled from "styled-components";

const Search = styled.input.attrs({
  type: "text",
})`
  border-radius: 3px;
  border: 1px solid palevioletred;
  width: 300px;
  height: 30px;
  margin: 23px;
  font-size: 24px;
  font-family: "Lucida Console", "Courier New", monospace;
  ::placeholder {
    color: palevioletred;
  }
`;
function InputSearch(props) {
  return <Search onChange={props.changeRecieved} />; 
}

export default InputSearch;
