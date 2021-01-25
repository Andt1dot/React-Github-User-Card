import React from "react";
import styled from "styled-components";
import InputSearch from "./InputSearch";
import Result from "./ResultSearch";

const Form = styled.form`
background-color: rgb(134,134,132);
display: flex;
justify-content: center;
padding:10px;
width: inherit;
border-radius: 3px;
}
`;
const ButtonSearch = styled.button.attrs({
  type: "submit",
})`
  border-radius: 3px;
  border: 1px solid palevioletred;
  margin: 24px;
  height: 30px;
  width: 100px;
  border-radius: 5px;
`;

function FormSearch(props) {
  const [query, setQuery] = React.useState("");

  const [userData, setUserData] = React.useState({});

  const [input, setInput] = React.useState("");

  React.useEffect(() => {
     if (query!==""){  
      const fetchData = async () => {
      const requestData = await fetch(`https://api.github.com/users/${query}`);
      const responseData = await requestData.json();
      props.searchUser(responseData);
      setUserData(responseData);
      console.log(responseData)
      };
      // console.log(responseData);
    
    fetchData();  }
  }, [query]);

  const inputDate = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  // const searchUser = () => {
   
  //   console.log(UserData);
  // };
  //console.log(UserData);
  return (
    <React.Fragment>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(input);
        }}
      >
        <InputSearch changeRecieved={inputDate} />
        <ButtonSearch>Search</ButtonSearch>
      </Form>
    </React.Fragment>
  );
}

export default FormSearch;
