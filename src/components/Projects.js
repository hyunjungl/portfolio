import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const TOTAL_SLIDES = 2;
  const slideRef = useRef();

  const handleBannerRight = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBannerLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  });
  return (
    <SlideContainer>
      <SlideList ref={slideRef}>
        <SlideItem></SlideItem>
        <SlideItem></SlideItem>
      </SlideList>

      <Button>
        <IoIosArrowBack size={50} onClick={handleBannerLeft} />
      </Button>
      <Button>
        <IoIosArrowForward size={50} onClick={handleBannerRight} />
      </Button>
    </SlideContainer>
  );
}

const SlideContainer = styled.div`
  overflow: hidden;
  height: 700px;
  position: relative;
`;

const SlideList = styled.ul`
  /* width: 1500px; */
  display: flex;
  align-items: center;
  transition: 0.3s;
`;

const SlideItem = styled.li`
  /* width: 1500px; */
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  margin-bottom: 100px;
  ${({ color }) => css`
    background: ${color};
  `}
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  :nth-child(3) {
    right: 0;
  }
  cursor: pointer;
`;
