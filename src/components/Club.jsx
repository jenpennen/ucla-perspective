import React from "react";
import styled from "styled-components";

const Tag = styled.button`
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  width: fit-content;
  background-color: #4853b5;
  margin-left: 25px;
  padding: 6px;
  border-radius: 5px;
  border: none;
  font-size: 0.7em;
`;

const ClubBox = styled.div`
  background-color: white;
  width: 50vh;
  display: grid;
  border-radius: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  box-shadow: 0 0 5px #c2c4c3;
`;

const ClubName = styled.h3`
  background-color: transparent;
  justify-self: left;
  padding-left: 25px;
  padding-right: 25px;
  margin: 0.5em 0;
  font-weight: bold;
  font-size: 1.3em;
`;

const Desc = styled.p`
  background-color: transparent;
  justify-self: left;
  padding-left: 25px;
  padding-right: 25px;
  margin: 0;
  font-weight: bold;
  font-size: 1.1em;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background-color: grey;
`;

const More = styled.p`
  background-color: transparent;
  justify-self: left;
  padding-left: 25px;
  padding-right: 25px;
  margin: 1em 0;
  font-style: italic;
  font-weight: bold;
  font-size: 0.9em;
`;

const Info = styled.p`
  background-color: transparent;
  margin-top: 0.5em;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 0.9em;
`;

const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  padding: 0 25px;
  margin: 0.5em 0;
  column-gap: 1em;
`;

const Board = styled.p`
  background-color: transparent;
  font-weight: bold;
  margin: 0;
  align-content: center;
`;

const Logo = styled.div`
  min-width: 3em;
  min-height: 3em;
  background-color: green;
  border-radius: 50%;
  margin: 0;
`;

export default function ClubSummary(prop) {
  return (
    <ClubBox>
      <Tag>{prop.tag}</Tag>
      <ClubName>{prop.name}</ClubName>
      <Desc>{prop.upcoming}</Desc>
      <Line />
      <More>More Info</More>
      <Info>{prop.summary}</Info>
    </ClubBox>
  );
}

export function ClubFull(prop) {
  return (
    <ClubBox>
      <Tag>{prop.tag}</Tag>
      <ClubName>{prop.name}</ClubName>
      <Container>
        <Logo></Logo>
        <Board>
          President: {prop.pres} <br />
          Vice President: {prop.vice}
        </Board>
      </Container>
      <Line />
      <More>Club Info</More>
      <Info>{prop.summary}</Info>
    </ClubBox>
  );
}
