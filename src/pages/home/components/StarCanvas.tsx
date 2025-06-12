import React, { useMemo } from "react";

const generateBoxShadows = (count: number): string => {
  const shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(", ");
};

const StarLayer = React.memo(
  ({
    size,
    count,
    animationDuration,
  }: {
    size: number;
    count: number;
    animationDuration: number;
  }) => {
    const boxShadow = useMemo(() => generateBoxShadows(count), [count]);

    const style: React.CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      background: "transparent",
      boxShadow,
      animation: `animStar ${animationDuration}s linear infinite`,
      position: "absolute",
    };

    const afterStyle: React.CSSProperties = {
      position: "absolute",
      top: "2000px",
      width: `${size}px`,
      height: `${size}px`,
      background: "transparent",
      boxShadow,
    };

    return (
      <div style={style}>
        <div style={afterStyle}></div>
      </div>
    );
  }
);

export const StarCanvas = React.memo(() => {
  return (
    <>
      <style>
        {`
          @keyframes animStar {
            from { transform: translateY(0px); }
            to   { transform: translateY(-2000px); }
          }
        `}
      </style>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: 0,
          background:
            "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
        }}
      >
        <StarLayer size={1} count={700} animationDuration={50} />
        <StarLayer size={2} count={200} animationDuration={100} />
        <StarLayer size={3} count={100} animationDuration={150} />
      </div>
    </>
  );
});
