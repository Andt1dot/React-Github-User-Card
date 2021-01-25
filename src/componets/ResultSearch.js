import React from "react";
import styled from "styled-components";

const ResultCard = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display:flex;
  justify-content: center;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ResultContainer = styled.div`
  padding: 2px 16px;
  text-align: center;
  font-size: 1.3em;
`;

const ResultNickName = styled.h1`
text-align:center;
font-family:Arial, Helvetica, sans-serif;
`;

const ResultInfo = styled.p`
`
const ResultAbout = styled.h3 `
text-align: center;
font-family:Arial, Helvetica, sans-serif;
`


const ResultImage = styled.img`
  border-radius: 50%;
`;

function ResultSearch(props) {
   
  const {user} = props; 
     console.log(Object.keys(props));

  return (
    <ResultCard>
  
   { Object.keys(user).length!==0 || user.message!=="Not Found" ? // vreau sa verific daca nu gaseste sa scrie Not Found 
        <ResultContainer>
        <ResultNickName>{user.name}</ResultNickName>
        <ResultImage src={user.avatar_url} />
        <ResultAbout>About</ResultAbout>
        <ResultInfo>This account created {user.created_at} </ResultInfo>
        <ResultInfo>Last activity {user.updated_at} </ResultInfo>
        <ResultInfo>Followers: {user.followers}  </ResultInfo>
        <ResultInfo>Following: {user.following} </ResultInfo>
      </ResultContainer>
   
    : <h1>Not found data</h1>
   
   }

    </ResultCard>
  );
}

export default ResultSearch;
