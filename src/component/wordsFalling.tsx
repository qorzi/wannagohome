// MatterStepOne.js
import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export const MatterStepOne = () => {

  const boxRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);


  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Composite = Matter.Composite;
    let Bodies = Matter.Bodies;
    let Body = Matter.Body;
    let Svg = Matter.Svg;
    let Vertices = Matter.Vertices;
    let World = Matter.World;
    let Mouse = Matter.Mouse;
    let MouseConstraint = Matter.MouseConstraint;


    let engine = Engine.create({});
    let world = engine.world;

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 800,
        height: 600,
        background: 'rgba(255, 255, 255, 0.5)',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(300, 600, 400, 20, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    });

    const ball = Bodies.circle(150, 0, 10, {
      restitution: 0.9,
      render: {
        fillStyle: 'yellow'
      }
    });

    World.add(engine.world, [floor, ball]);

    Engine.run(engine);
    Render.run(render);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, Composite.allBodies(world));


  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        // width: 600,
        // height: 300
      }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MatterStepOne;