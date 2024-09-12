import React from "react";
import styled from "styled-components";

const Tag = styled.button `
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  width: fit-content;
  background-color: purple;
  margin-left: 25px;
  padding: 6px;
  border-radius: 5px;
  border: none;
  font-size: .7em;
`;

const ClubBox = styled.div`
  background-color: white;
  width: 50vh;
  display: grid;
  border-radius: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
  box-shadow: 0 0 5px #c2c4c3;
  margin-bottom: 20px;
`;

const ClubName = styled.h3`
  background-color: transparent;
  justify-self: left;
  padding-left: 25px;
  padding-right: 25px;
  margin: .5em 0;
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

const Line = styled.hr `
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
  margin: 0;
  font-style: italic;
  font-weight: bold;
  font-size: .9em;
`;

const Info = styled.p `
  background-color: transparent;
  margin-top: 0.5em;
  text-align: left;
  padding-left: 25px;
  padding-right: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: .9em;
`;

function Club(club) {
  return (
    <ClubBox>
      <Tag>{club.tag}</Tag>
      <ClubName>{club.name}</ClubName>
      <Desc>{club.desc}</Desc>
      <Line/>
      <More>More Info</More>
      <Info>{club.info}</Info>
    </ClubBox>
  );
}

export default Club;
