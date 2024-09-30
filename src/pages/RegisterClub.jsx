import React from "react";
import "../App.css";
import styled from "styled-components";

const Header = styled.div`
  margin-top: 4rem;
  font-size: 4rem;
  font-weight: 700;
  color: var(--accent);
`;
const RegisterContainer = styled.div`
  margin: 10rem;
  height: 80vh;
`;
const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
`;
const Label = styled.p`
  background-color: white;
  text-align: left;
  margin-top: 0;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #3b3b3b;
  font-size: 1em;
  font-weight: 500;
`;
const FormInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 4px;
`;
const ClubDescriptionInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  height: 10rem;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 4px;
`;
const SubmitButton = styled.button`
  background-color: #e6e6fa;
  display: center;
  color: black;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #8a93e0;
    color: white;
  }
`;
const SelectRole = styled.select`
  background-color: white;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
function RegisterClub() {
  return (
    <div className="container">
      <Header>Register Club</Header>
      <RegisterContainer>
        <FormContainer>
          <RegisterForm>
            <Label>UCLA Email</Label>
            <FormInput placeholder="joebruin@ucla.edu"></FormInput>
            <Label>Club Name</Label>
            <FormInput placeholder="Club Name"></FormInput>
            <Label>New or Existing Club?</Label>
            <SelectRole>
              <option value="n/a">N/A</option>
              <option value="new">New</option>
              <option value="existing">Existing</option>
            </SelectRole>
            <Label>Club Description</Label>
            <ClubDescriptionInput placeholder="Club Description"></ClubDescriptionInput>
            <SubmitButton>Register Club</SubmitButton>
          </RegisterForm>
        </FormContainer>
      </RegisterContainer>
    </div>
  );
}
export default RegisterClub;
