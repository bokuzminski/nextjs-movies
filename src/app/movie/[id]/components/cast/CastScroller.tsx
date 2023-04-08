"use client";

import "glider-js/glider.min.css";
import GliderComponent from "react-glider";

export const CastScroller: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <GliderComponent
      className="glider-container"
      draggable
      hasDots
      itemWidth={92}
      slidesToShow={"auto"}
      hasArrows
    >
      {children}
    </GliderComponent>
  );
};
