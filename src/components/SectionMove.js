import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { sectionIdx } from "../App";

export default function SectionMove() {
  const [scroll, setScroll] = useState(0);
  const [index, setIndex] = useRecoilState(sectionIdx);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 1000 * index, behavior: "smooth" });

    const handleIndex = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        if (index < 3) setIndex((index) => index + 1);
      } else {
        if (index > 0) setIndex(index - 1);
      }
    };

    window.addEventListener("wheel", handleIndex, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleIndex, { passive: false });
    };
  }, [setIndex, index]);

  return (
    <div styled={{ height: "500vh" }}>
      <div style={{ position: "fixed", top: 0 }}>
        {" "}
        {scroll}
        {scroll > 200 ? "200px 이상 내려옴" : "200px 이상 내려오지 않음"}
        인덱스: {index}
      </div>
      {/* <Text style={{ marginTop: 500 }} scroll={scroll}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
        accusamus, soluta voluptas perferendis totam enim doloremque temporibus
        sit nulla iste dicta nemo eveniet incidunt fugit odio atque aut magni
        cumque!
      </Text> */}
    </div>
  );
}

const Text = styled.p`
  ${({ scroll }) => css`
    transform: translate(${scroll}PX);
    opacity: ${scroll - 200};
  `}
`;
