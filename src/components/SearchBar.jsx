import styled from "styled-components";
import Button from "react-bootstrap/Button";
const SearchContainer = styled.div`
  //display: flex;
  border: 1px red solid;
  align-items: center;
  margin: 0.5rem 2rem 1rem 2rem;
`;
const SearchInput = styled.div`
  padding: 0.5rem;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 0.8rem;
`;
export function SearchBar() {
  return (
    <SearchContainer>
      <SearchInput>
        Search for club by name <Button variant="primary">Search</Button>
      </SearchInput>
    </SearchContainer>
  );
}
