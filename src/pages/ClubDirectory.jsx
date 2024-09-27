import { useState } from "react";
import styled from "styled-components";
import PropAll from "../components/Properties";
import { SearchBar } from "../components/SearchBar";
import "../App.css";

const Body = styled.body`
  border: red solid 1px;
`;

const DirectoryContainer = styled.div`
  // border: blue solid 10px;
  margin-top: 2em;
`;

const ClubContainer = styled.div`
  // border: purple solid 10px;
  // width: calc(100% - 5em);
  margin: 5em;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 4em;
  text-align: center;
  margin-top: 5rem;
`;

const Filters = styled.div`
  margin: 2rem 25px;
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
          <Button onClick={() => setInputTag("Cultural")} value={inputTag}>
            Cultural
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
    </Body>
  );
}

export default ClubDirectory;
