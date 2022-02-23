import React, { useRef, useEffect } from 'react';

const Canvas = ({init, draw}) => {
  const canvasRef = useRef(null);
  
  function resizeCanvasToDisplaySize(canvas) {
    const { width, height } = canvas.getBoundingClientRect()
  
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width
      canvas.height = height
      init(canvas);
      return true
    }
  
    return false
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const updateCanvas = () => {
      window.requestAnimationFrame(updateCanvas);
      resizeCanvasToDisplaySize(canvas);
      draw(context, canvas)
    }
    // init(canvas);
    updateCanvas();
  }, []);
  
  return (
    <canvas className='canvas' ref={canvasRef} />
  );
}

export default Canvas;
