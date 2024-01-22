import styled from "styled-components";
import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazyload"; // react-lazyload 패키지 import

const Photo = ({ index, subtitle }) => {
  const [imagePath, setImagePath] = useState(null);
  const [loading, setLoading] = useState(true);
  const subtitles = [
    "Jeju",
    "Seoul",
    "Tokyo",
    "Las Vegas",
    "Daegu",
    "Busan",
    "Daegu",
    "Pohang",
  ];

  useEffect(() => {
    const importImage = async () => {
      try {
        const imageModule = await import(`../assets/${index}.jpg`);
        setImagePath(imageModule.default);
        setLoading(false);
      } catch (error) {
        console.error(`Error loading image for index ${index}:`, error);
      }
    };

    importImage();
  }, [index]);

  if (loading) {
    return <LoadingIndicator>Loading...</LoadingIndicator>;
  }

  if (!imagePath) {
    return (
      <ErrorIndicator>Error loading image for index {index}</ErrorIndicator>
    );
  }

  return (
    <Wrapper>
      {/* LazyLoad 컴포넌트로 감싸기 */}
      <LazyLoad height={200} offset={100}>
        <ImageWrapper src={imagePath} alt={`${index}`} />
      </LazyLoad>
      <TitleWrapper>{subtitles[index - 1]}</TitleWrapper>
    </Wrapper>
  );
};

export default Photo;

const Wrapper = styled.div`
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const TitleWrapper = styled.div`
  text-align: center;
  max-width: 100%;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 20px;
`;

const ImageWrapper = styled.img`
  max-width: 80%;
  height: auto;
  margin-top: 0.5rem;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.7);
`;

const LoadingIndicator = styled.div`
  font-size: 16px;
  color: #777;
`;

const ErrorIndicator = styled.div`
  font-size: 16px;
  color: #ff0000;
`;
