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
        <SlideItem color="red">1</SlideItem>
        <SlideItem color="blue">2</SlideItem>
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
  box-sizing: border-box;
  width: 1200px;
  position: relative;

  border: 1px solid #ddd;
  background-color: red;
`;

const SlideList = styled.ul`
  /* width: 1200px; */

  display: flex;
  /* border: 1px solid #ddd; */
  /* padding: 10px; */
  transition: 0.3s;

  box-sizing: border-box;
`;

const SlideItem = styled.li`
  width: 100%;
  height: 700px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: tomato;
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
`;
