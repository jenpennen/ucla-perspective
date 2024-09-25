import React from "react";
import styled from "styled-components";
import "../App.css";
const FooterBody = styled.div`
  max-width: 100%;
  max-height: 30%;
  margin-top: 3rem;
  background-color: var(--accent);
  color: white;
`;
export default function Footer() {
  return (
    <div>
      <FooterBody>This is the footer</FooterBody>
    </div>
  );
}
