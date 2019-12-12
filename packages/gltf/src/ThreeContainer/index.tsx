import React, { useEffect, useRef } from 'react';
import { draw } from './draw';

export const ThreeContainer: React.FC = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    draw(containerRef.current);
  });
  return <div id="container" ref={containerRef} />;
};

export default ThreeContainer;
