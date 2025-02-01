import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import Photo from "../components/Photo";
import Intro from "../components/Intro";

const PhotoPage = () => {
  const baseImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // 무한 슬라이드를 위해 앞뒤로 이미지 추가
  const imageIndices = [
    baseImages[baseImages.length - 1],
    ...baseImages,
    baseImages[0],
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const [transform, setTransform] = useState({
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: "transform 0.5s ease-out",
  });

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    setTransform({
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: "transform 0.5s ease-out",
    });

    const timer = setTimeout(() => {
      setIsAnimating(false);

      // 마지막 슬라이드에서 첫 번째로 순간이동
      if (currentIndex === imageIndices.length - 1) {
        setTransform({
          transform: `translateX(-100%)`,
          transition: "none",
        });
        setCurrentIndex(1);
      }

      // 첫 번째 슬라이드에서 마지막으로 순간이동
      if (currentIndex === 0) {
        setTransform({
          transform: `translateX(-${imageIndices.length - 2}00%)`,
          transition: "none",
        });
        setCurrentIndex(imageIndices.length - 2);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex, imageIndices.length]);

  const introComponent = useMemo(() => <Intro />, []);

  return (
    <PageWrapper>
      <TopWrapper>EAST_FILMM</TopWrapper>
      <SmallWrapper>Film & Digital</SmallWrapper>
      <MainWrapper>
        <LeftBTN onClick={handlePrev}>{"<"}</LeftBTN>
        <SliderContainer>
          <SliderTrack style={transform}>
            {imageIndices.map((index, i) => (
              <SlideItem key={i}>
                <Photo index={index} />
              </SlideItem>
            ))}
          </SliderTrack>
        </SliderContainer>
        <RightBTN onClick={handleNext}>{">"}</RightBTN>
      </MainWrapper>
      <BottomWrapper>{introComponent}</BottomWrapper>
    </PageWrapper>
  );
};

export default PhotoPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrapper = styled.div`
  /* flex: 1; */
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
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const BottomWrapper = styled.div`
  flex: 1;
  margin-top: 2rem;
`;

const RightBTN = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  right: -2rem;
  z-index: 1;
`;

const LeftBTN = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  left: -2rem;
  z-index: 1;
`;

const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  display: flex;
  width: 100%;
`;

const SlideItem = styled.div`
  width: 100%;
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 600px;
    object-fit: contain;
  }
`;
