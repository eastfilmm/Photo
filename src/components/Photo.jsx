import styled from "styled-components";
import { useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import PropTypes from "prop-types";

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
    <Wrapper>
      <LazyLoad height={200} offset={100}>
        <ImageWrapper src={imagePath} alt={`${index}`} />
      </LazyLoad>
    </Wrapper>
  );
};

Photo.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Photo;

const Wrapper = styled.div`
  align-items: center;
  width: 45rem;
  height: 30rem;
`;

const ImageWrapper = styled.img`
  max-width: 45rem;
  height: 30rem;
  margin-top: 0.5rem;
`;

const LoadingIndicator = styled.div`
  font-size: 16px;
  color: #777;
  width: 45rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorIndicator = styled.div`
  font-size: 16px;
  color: #ff0000;
`;
