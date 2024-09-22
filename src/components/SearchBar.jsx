import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import "./NavBar.css";
const CenteredContainer = styled.div`
  display: flex;
  font-family: "Mulish", sans-serif;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  background-color: white;
  // border: purple solid 1px;
  border-radius: 8px;
  overflow: hidden;
`;
const SearchForm = styled.form`
  display: inline-block;
  align-items: center;
  //border: red solid 3px;
  flex-direction: column;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 0px 30px 0px 0px;
  //width: 40rem;
  background-color: white;
`;
const FormInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  border: none;
  //border: 3px solid lightgray;
  background-color: white;
  border-radius: 4px;
  width: 30em;
`;

export function SearchBar() {
  return (
    <CenteredContainer>
      <FormContainer>
        <SearchForm>
          <FormInput placeholder="Search for club by name"></FormInput>
          <FaSearch className="icons" />
        </SearchForm>
      </FormContainer>
    </CenteredContainer>
  );
}
