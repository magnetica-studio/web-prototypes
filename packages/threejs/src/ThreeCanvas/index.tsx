import React, { useEffect, useRef } from 'react';

const draw = (canvas: HTMLCanvasElement | null) => {
  if (!(canvas instanceof HTMLCanvasElement))
    throw new Error('Invalid canvas element');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Invalid canvas context');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }
};

export const ThreeCanvas: React.FC = () => {
  const canvasRef = useRef(null);
  useEffect(() => draw(canvasRef.current));
  return (
    <div>
      <canvas id="canvas" ref={canvasRef} width="150" height="150" />
    </div>
  );
};

export default ThreeCanvas;
