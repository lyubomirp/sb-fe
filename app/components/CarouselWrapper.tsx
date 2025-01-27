"use client";
import React, { ReactNode, useEffect, useState, useCallback } from "react";

const CarouselWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [translate, setTranslate] = useState<number>(320);

  const calculateTranslation = (speed: number, current: number) => {
    const newTranslation = current + speed;
    return Math.max(-7000, Math.min(7000, newTranslation));
  };

  const handleWheel = useCallback((e: WheelEvent) => {
    setTranslate((prevState) =>
      calculateTranslation(e.deltaY > 0 ? 72 : -72, prevState),
    );
  }, []);

  useEffect(() => {
    document.addEventListener("wheel", handleWheel);

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div className={"relative flex justify-center min-w-full"}>
      <div
        className={"relative flex justify-center min-w-full transition-all"}
        style={{ transform: `translate(${translate}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default CarouselWrapper;
