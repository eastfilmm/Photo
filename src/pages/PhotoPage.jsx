import styled from "styled-components";
import React from "react";
import Photo from "../components/Photo";
import Intro from "../components/Intro";

const PhotoPage = () => {
  const imageIndices = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <PageWrapper>
      <TopWrapper>EAST_FILMM</TopWrapper>
      <SubTileWrapper>[ Gallery ]</SubTileWrapper>
      <MainWrapper>
        <Main>
          {imageIndices.map((index) => (
            <Photo key={index} index={index} />
          ))}
        </Main>
      </MainWrapper>
      <BottomWrapper>
        <Intro />
      </BottomWrapper>
    </PageWrapper>
  );
};

export default PhotoPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  font-weight: bold;
`;

const TopWrapper = styled.div`
  flex: 1;
  font-size: 3rem;
  color: #f2d522;
  font-weight: bold;
`;

const MainWrapper = styled.div`
  flex: 5;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const BottomWrapper = styled.div`
  flex: 1;
  margin-top: 1rem;
`;

const SubTileWrapper = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`;
