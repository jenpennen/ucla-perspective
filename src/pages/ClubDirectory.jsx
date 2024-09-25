import { useState } from "react";
import styled from "styled-components";
import PropAll from "../components/Properties";
import { SearchBar } from "../components/SearchBar";
import "../App.css";

const Body = styled.body`
  border: red solid 1px;
`;

const DirectoryContainer = styled.div`
  border: blue solid 10px;
  // display: flex;
  // flex-wrap: wrap;
  margin-top: 2em;
  width: 100rem;
`;

const ClubContainer = styled.div`
  border: purple solid 1px;
  width: calc(100% - 30rem);
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  gap: 2em;
  margin-top: 2em;
`;

const Title = styled.h1`
  width: 70%;
  font-weight: 800;
  font-size: 2.3em;
  text-align: left;
  margin: 0;
`;

const Filters = styled.div`
  margin: 0 25px;
`;

const Button = styled.button`
  border: none;
  text-transformation: uppercase;
  font-size: 1.2em;
`;

function ClubDirectory() {
  const [inputName, setInputName] = useState("");
  const [inputTag, setInputTag] = useState("All");

  return (
    <Body className="container">
      <div className="container">
        <Title>Club Directory</Title>
        <SearchBar inputName={inputName} setInputName={setInputName} />
      </div>
      {/* <div className="container"> */}
      <div className="container">
        <Filters>
          <Button onClick={() => setInputTag("All")} value={inputTag}>
            All
          </Button>
          <Button onClick={() => setInputTag("Recreational")} value={inputTag}>
            Recreational
          </Button>
          <Button
            onClick={() => setInputTag("Career Development")}
            value={inputTag}
          >
            Career Development
          </Button>
        </Filters>
      </div>
      <DirectoryContainer>
        <ClubContainer>
          <PropAll inputName={inputName} inputTag={inputTag} />
        </ClubContainer>
        {/* <ClubContainer>
          <PropAll inputName={inputName} inputTag={inputTag} />
        </ClubContainer> */}
      </DirectoryContainer>
      {/* </div> */}
    </Body>
  );
}

export default ClubDirectory;
