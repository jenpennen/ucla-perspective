import PropFull from "../components/Properties";
import styled from "styled-components";

const Body = styled.body `
  display: flex;
  justify-content: center;
`;

const Container = styled.div `
  max-width: 200vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`;

function ClubDirectory() {
  return (
    <Body>
      <Container>
        <PropFull />
      </Container>
    </Body>
  );
}

export default ClubDirectory;
