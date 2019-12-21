import React, { useEffect } from "react";

export const WebGl = () => {
  useEffect(() => {
    const canvas = document.getElementById("webgl")
    
    const initWebGL = (canvas: HTMLCanvasElement) => {
      let gl: WebGLRenderingContext | null = null
      try {
        gl = canvas.getContext("webgl")
      } catch (e) {}
      if (!gl) {
        alert(
          "WebGL を初期化できません。ブラウザはサポートしていないようです。"
        );
        gl = null;
      }
      return gl;
    };

    const gl = initWebGL(canvas as HTMLCanvasElement)
    if (gl) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    console.log('render canvas: ', gl)
  }, []);

  return <canvas id="webgl" width="400" height="400"></canvas>;
};
