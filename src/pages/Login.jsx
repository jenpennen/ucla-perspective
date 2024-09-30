import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  font-family: "Mulish", sans-serif;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 350px;
`;
const Header = styled.h2`
  background-color: #4853b5;
  text-align: center;
  color: white;
  margin: 0;
  padding: 20px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
`;
const Label = styled.p`
  background-color: white;
  margin-top: 0;
  margin-bottom: 5px;
  text-transform: uppercase;
  color: #3b3b3b;
  font-size: 0.1em;
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
const SelectRole = styled.select`
  background-color: white;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
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

const CreateAccountLink = styled.p`
  background-color: white;
  text-align: center;
  margin: 15px 0;
  font-size: 10px;

  a {
    color: #6671d1;
    text-decoration: underline;
  }
  &:hover {
    color: red;
  }
`;
function Login() {
  return (
    <div className="container">
      <CenteredContainer>
        <FormContainer>
          <Header>Login</Header>
          <LoginForm>
            <Label>Email</Label>
            <FormInput placeholder="Email"></FormInput>
            <Label>Password</Label>
            <FormInput placeholder="Password"></FormInput>
            <SelectRole>
              <option value="n/a">Select None</option>
              <option value="user">Student</option>
              <option value="admin">Club Admin</option>
            </SelectRole>
            <SubmitButton>Log In</SubmitButton>
          </LoginForm>
          <CreateAccountLink>
            Don't have an account? <Link to="/signup"> Create Account</Link>
          </CreateAccountLink>
        </FormContainer>
      </CenteredContainer>
    </div>
  );
}

export default Login;
