import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntorWrapper>
      <Intor>Life On The Street</Intor>
      <Intor>More Photos In My Instagram Account!</Intor>
      <SNSLink
        href="https://www.instagram.com/east_filmm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        east_filmm
      </SNSLink>
    </IntorWrapper>
  );
};

export default Intro;

const IntorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intor = styled.div`
  font-size: 0.8rem;
`;

const SNSLink = styled.a`
  margin-top: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: black;
  text-decoration: underline;
  font-weight: bold;
`;
