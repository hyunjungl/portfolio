import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { slideState } from "../atoms/slide";

export default function useWheel(max) {
  const [timer, setTimer] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [index, setIndex] = useRecoilState(slideState);

  const handleIndex = useCallback(
    (e) => {
      e.preventDefault();
      if (!scroll) {
        setScroll(true);
        if (e.deltaY > 0) {
          if (max > index) setIndex(index + 1);
        } else {
          if (index > 0) setIndex(index - 1);
        }
      }
      if (timer) clearTimeout(timer);
      const id = setTimeout(() => {
        setScroll(false);
      }, 500);
      setTimer(id);
    },
    [index, max, setIndex, scroll, setTimer, timer]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleIndex, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleIndex, { passive: false });
    };
  }, [handleIndex]);
  return index;
}
