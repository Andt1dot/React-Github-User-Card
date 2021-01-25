import React from "react";
import styled from "styled-components";

const Logo = styled.img.attrs({
  src: "/Header.jpg",
})`
  width: 200px;
  height: 100px;
  border: 1px solid #868684;
  border-radius: 2px;
`;

function LogoHeader() {
  return <Logo />;
}

export default LogoHeader;
