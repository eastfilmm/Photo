import styled from "styled-components";
import React, { useState, useEffect } from "react";

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
      <ImageWrapper src={imagePath} alt={`${index}`} />
      <TitleWrapper>-{subtitles[index - 1]}-</TitleWrapper>
    </Wrapper>
  );
};

export default Photo;

const Wrapper = styled.div`
  align-items: center;
  font-size: 20px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  max-width: 100%;
  align-items: center;
`;

const ImageWrapper = styled.img`
  max-width: 80%;
  height: auto;
  margin-top: 1rem;
`;

const LoadingIndicator = styled.div`
  font-size: 16px;
  color: #777;
`;

const ErrorIndicator = styled.div`
  font-size: 16px;
  color: #ff0000;
`;
