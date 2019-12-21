import React, { useEffect } from "react";

export const WebGl = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas")
    if (canvas) {
      const gl = canvas.getContext('webgl')
      if (gl) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      }
      console.log('canvas: ', canvas)
      console.log('WebGLRenderingContext: ', gl)
    }
  }, []);

  return <canvas width="400" height="400"></canvas>;
};
