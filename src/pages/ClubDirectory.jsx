import { useState } from "react";
import styled from "styled-components";
import PropAll from "../components/Properties";
import { SearchBar } from "../components/SearchBar";
import "../App.css";

const Body = styled.body`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 200vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

const Search = styled.input`
  height: 3em;
  margin: 1rem;
  border: red 1px solid;
  background-color: white;
  border-radius: 10px;
  width: 20em;
  align-self: center;
`;

function ClubDirectory() {
  const [inputName, setInputName] = useState("");
  const [inputTag, setInputTag] = useState("All");

  return (
    <Body className="container">
      <div className="container">
        <Title>Club Directory</Title>
        <SearchBar />
        <Search
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
          placeholder="Search for a club by name ..."
        ></Search>
      </div>
      {/* <div className="container"> */}

      <Container className="container">
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
        <PropAll inputName={inputName} inputTag={inputTag} />
      </Container>
      {/* </div> */}
    </Body>
  );
}

export default ClubDirectory;
