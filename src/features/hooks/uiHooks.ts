import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 1,
    windowHeight: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export const useElementWidth = (id: string) => {
  const element = document.getElementById(id);
  const elemWidth = element?.clientWidth;
  const [width, setWidth] = useState<number>(
    elemWidth === undefined || elemWidth <= 0 ? 1 : elemWidth
  );
  console.log(elemWidth);
  useEffect(() => {
    const handleResize = () => {
      let newElemWidth = element?.clientWidth;
      setWidth(
        newElemWidth === undefined || newElemWidth <= 0 ? 1 : newElemWidth
      );
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [element?.clientWidth]);
  return width;
};
