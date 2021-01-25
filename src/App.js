import React from "react";
import Logo from "./componets/LogoHeader";
import FormSearch from "./componets/FormSearch";
import ResultSearch from "./componets/ResultSearch";
import styled from "styled-components";

function App(props) {
  const [user, setUser] = React.useState({});
  const searchUser = (newUser) => {
    //console.log(newUser);
    setUser(newUser);
  };

  const SearchBox = styled.section`
    display: flex;
    justify-content: center;
  `;


  return (
    <React.Fragment>
      <SearchBox>
        <Logo />
        <FormSearch searchUser={searchUser} />
      </SearchBox>
      {Object.keys(user).length > 0 ? <ResultSearch user = {user} /> : null}
    </React.Fragment>
  );
}

export default App;
