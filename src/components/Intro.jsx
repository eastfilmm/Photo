import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntorWrapper>
      <Intor>I Can Do This All Day!</Intor>
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
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

const Intor = styled.div`
  font-size: 15px;
`;

const SNSLink = styled.a`
  font-size: 20px;
  cursor: pointer;
  color: black;
  text-decoration: underline;
  font-weight: bold;
`;
