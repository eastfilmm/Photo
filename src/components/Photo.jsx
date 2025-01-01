import styled from "styled-components";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";

const Photo = ({ index }) => {
  const [imagePath, setImagePath] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return (
      <LoadingIndicator>
        <p>Loading...</p>
      </LoadingIndicator>
    );
  }

  if (!imagePath) {
    return (
      <ErrorIndicator>Error loading image for index {index}</ErrorIndicator>
    );
  }

  return (
    <Wrapper isVertical={index >= 11}>
      <LazyLoad height={index >= 11 ? 450 : 300} offset={1000}>
        <ImageWrapper
          src={imagePath}
          alt={`${index}`}
          isVertical={index >= 11}
        />
      </LazyLoad>
    </Wrapper>
  );
};

export default Photo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45rem;
  height: 45rem;
`;

const ImageWrapper = styled.img`
  max-width: ${(props) => (props.isVertical ? "30rem" : "45rem")};
  height: ${(props) => (props.isVertical ? "45rem" : "30rem")};
  display: block;
  border: none;
  outline: none;
  box-shadow: none;
`;

const LoadingIndicator = styled.div`
  font-size: 16px;
  width: 45rem;
  height: 45rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorIndicator = styled.div`
  font-size: 16px;
  color: #ff0000;
`;
