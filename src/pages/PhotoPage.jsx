import styled from "styled-components";
import React, { useState, useMemo } from "react"; // useState와 useMemo 추가
import Photo from "../components/Photo";
import Intro from "../components/Intro";

const PhotoPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageIndices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageIndices.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageIndices.length - 1 : prevIndex - 1
    );
  };

  // intro 컴포넌트를 useMemo로 감싸고 imageIndices를 의존성 배열로 지정
  const introComponent = useMemo(() => <Intro />, [imageIndices]);

  return (
    <PageWrapper>
      <TopWrapper>EAST_FILMM</TopWrapper>
      <SmallWrapper>Film & Digital</SmallWrapper>
      <MainWrapper>
        <LeftBTN onClick={goToPreviousImage}>{"<"}</LeftBTN>
        <Main>
          <Photo
            key={imageIndices[currentImageIndex]}
            index={imageIndices[currentImageIndex]}
          />
        </Main>
        <RightBTN onClick={goToNextImage}>{">"}</RightBTN>
      </MainWrapper>
      <BottomWrapper>
        {/* memoized intro 컴포넌트 */}
        {introComponent}
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
`;

const TopWrapper = styled.div`
  flex: 1;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

const SmallWrapper = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const MainWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  justify-content: space-around;
  align-items: center;
`;

const BottomWrapper = styled.div`
  flex: 1;
  margin-top: 1rem;
`;

const RightBTN = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const LeftBTN = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
