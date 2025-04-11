import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

const CanvasEditor = ({ imageUrl }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    const canvasInstance = new fabric.Canvas('canvas', {
      width: 600,
      height: 500,
      backgroundColor: '#fff',
      preserveObjectStacking: true, 
    });

    setCanvas(canvasInstance);

    return () => canvasInstance.dispose();
  }, []);

  useEffect(() => {
    if (canvas && imageUrl) {
      fabric.Image.fromURL(
        imageUrl,
        (img) => {
          img.set({
            selectable: false,
            evented: false,
          });

          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;

          img.scaleX = scaleX;
          img.scaleY = scaleY;

          canvas.setBackgroundImage(
            img,
            () => {
              canvas.renderAll();
            },
            {
              scaleX,
              scaleY,
              originX: 'left',
              originY: 'top',
            }
          );
        },
        { crossOrigin: 'anonymous' }
      );
    }
  }, [canvas, imageUrl]);

  const addText = () => {
    const text = new fabric.Textbox('Double click to edit', {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: 'white',
      editable: true,
    });
    canvas.add(text).setActiveObject(text);
  };

  const addShape = (type) => {
    let shape;

    switch (type) {
      case 'rectangle':
        shape = new fabric.Rect({
          left: 100,
          top: 100,
          width: 120,
          height: 80,
          fill: 'rgba(255,0,0,0.5)',
        });
        break;
      case 'circle':
        shape = new fabric.Circle({
          left: 150,
          top: 150,
          radius: 50,
          fill: 'rgba(0,0,255,0.5)',
        });
        break;
      case 'triangle':
        shape = new fabric.Triangle({
          left: 200,
          top: 200,
          width: 100,
          height: 100,
          fill: 'rgba(0,255,0,0.5)',
        });
        break;
      case 'polygon':
        shape = new fabric.Polygon([
          { x: 200, y: 0 },
          { x: 250, y: 50 },
          { x: 225, y: 100 },
          { x: 175, y: 100 },
          { x: 150, y: 50 },
        ], {
          left: 100,
          top: 100,
          fill: 'rgba(255,165,0,0.5)',
          objectCaching: false,
        });
        break;
      default:
        return;
    }

    shape.set({
      hasBorders: true,
      hasControls: true,
      lockScalingFlip: true,
    });

    canvas.add(shape).setActiveObject(shape);
  };

  const downloadImage = () => {
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1,
    });

    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'modified-image.png';
    link.click();
  };

  return (
    <div style={{ display: 'flex', gap: '80px', }}>
      
      <div>
        <canvas id="canvas" ref={canvasRef} />
      </div>

      
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: '200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button onClick={addText} style={{height:'40px'}}>Add Text</button>
          <button onClick={() => addShape('rectangle')} style={{height:'40px'}}>Add Rectangle</button>
          <button onClick={() => addShape('circle')} style={{height:'40px'}}>Add Circle</button>
          <button onClick={() => addShape('triangle')} style={{height:'40px'}}>Add Triangle</button>
          <button onClick={() => addShape('polygon')} style={{height:'40px'}}>Add Polygon</button>
        </div>
        <button onClick={downloadImage} style={{ marginTop: 'auto',height:'40px' }}>
          Download
        </button>
      </div>
    </div>
  );
};

export default CanvasEditor;
