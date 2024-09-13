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
  width: 100%;
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

function ClubDirectory() {
  return (
    <Body>
      <Title>Club Directory</Title>
      <Filters>
        <Button>All</Button>
        <Button>Recreational</Button>
        <Button>Career Development</Button>
      </Filters>
      <Container>
        <PropFull />
      </Container>
    </Body>
  );
}

export default ClubDirectory;
