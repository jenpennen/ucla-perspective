import { useState } from "react";
import PropFull from "../components/Properties";
import styled from "styled-components";

const Body = styled.body `
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div `
  max-width: 200vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;
`;

const Title = styled.h1 `
  width: 70%;
  font-weight: 800;
  font-size: 2.3em;
  text-align: left;
  margin: 0;
`;

const Filters = styled.div `
  margin: 0 25px;
`;

const Button = styled.button `
  border: none;
  text-transformation: uppercase;
  font-size: 1.2em;
`;

const Search = styled.input `
  height: 3em;
  background-color: white;
  border-radius: 10px;
  width: 20em;
  align-self: center;
`;

function ClubDirectory() {
  const [inputTxt, setInputTxt] = useState('');

  return (
    <Body>
      <Title>Club Directory</Title>
      <Search onChange={e => setInputTxt(e.target.value)} value={inputTxt} placeholder="Search for a club by name ..."></Search>
      <Filters>
        <Button>All</Button>
        <Button>Recreational</Button>
        <Button>Career Development</Button>
      </Filters>
      <Container>
        <PropFull input={inputTxt}/>
      </Container>
    </Body>
  );
}

export default ClubDirectory;
