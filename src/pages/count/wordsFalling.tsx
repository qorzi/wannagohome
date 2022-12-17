// MatterStepOne.js
import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import styled from 'styled-components';

const STATIC_DENSITY = 60;
const PARTICLE_SIZE = 18;
const PARTICLE_BOUNCYNESS = 0.3;

export const MatterStepOne = () => {

  const boxRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

  const [constraints, setContraints] = useState<any>();
  const [scene, setScene] = useState<any>();

  const [someStateValue, setSomeStateValue] = useState<number>(0);

  const handleResize = () => {
    // box의 위치와 크기를 전달해주는 getBoundingDlientRect()
    setContraints(boxRef.current.getBoundingClientRect());
  };

  const handleClick = () => {
    setSomeStateValue(someStateValue+1);
    console.log(someStateValue)
  };

  useEffect(() => {

    window.addEventListener('keydown', handleClick);

    return () => {
      window.removeEventListener('keydown', handleClick);
    }
  }, [someStateValue])


  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Runner = Matter.Runner;
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
        background: 'rgba(255, 255, 255, 0.5)',
        wireframes: false
      }
    })

    const floor = Bodies.rectangle(0, 0, 0, STATIC_DENSITY, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    })

    const wallRight = Bodies.rectangle(0, 0, STATIC_DENSITY, 0, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    })

    const wallLeft = Bodies.rectangle(0, 0, STATIC_DENSITY, 0, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    })

    // 없애고 싶은데 이게 한번 떨어져야 알맞은 화면 사이즈가 만들어짐. 투명상태로 한번 떨굼.
    const ball = Bodies.circle(0, -PARTICLE_SIZE, PARTICLE_SIZE, {
      restitution: PARTICLE_BOUNCYNESS,
      render: {
        // fillStyle: 'transparent'
      }
    });

    World.add(world, [floor, wallRight, wallLeft, ball]);

    Engine.run(engine);
    Render.run(render);

    // create runner 움직임 가속
    // var runner = Runner.create();
    // Runner.run(runner, engine);

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

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  // 가져온 박스 크기와 위치로 화면 크기 구성
  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints

      // Dynamically update canvas and bounds
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      // Dynamically update floor
      const floor = scene.engine.world.bodies[0]
      const wallRight = scene.engine.world.bodies[1]
      const wallLeft =scene.engine.world.bodies[2]
      // console.log(scene.engine.world.bodies)

      Matter.Body.setPosition(floor, {
        x: width / 2,
        y: height + STATIC_DENSITY / 2
      })

      Matter.Body.setVertices(floor, [
        { x: 0, y: height },
        { x: width + STATIC_DENSITY, y: height },
        { x: width+ STATIC_DENSITY, y: height + STATIC_DENSITY },
        { x: 0, y: height + STATIC_DENSITY }
      ])

      Matter.Body.setPosition(wallRight, {
        x: width + 15,
        y: height / 2
      })
      
      Matter.Body.setVertices(wallRight, [
        { x: 0, y: 0 },
        { x: STATIC_DENSITY/2, y: 0 },
        { x: STATIC_DENSITY/2, y: height },
        { x: 0, y: height }
      ])

      Matter.Body.setPosition(wallLeft, {
        x: - STATIC_DENSITY/2 -10,
        y: height / 2
      })

      Matter.Body.setVertices(wallLeft, [
        { x: 0, y: 0 },
        { x: STATIC_DENSITY/2, y: 0 },
        { x: STATIC_DENSITY/2, y: height },
        { x: 0, y: height }
      ])
    }
  }, [scene, constraints])

  // 공추가 로직
  useEffect(() => {
    // Add a new "ball" everytime `someStateValue` changes
    if (scene) {
      let { width } = constraints
      let randomX = Math.floor(Math.random() * -width) + width
      Matter.World.add(
        scene.engine.world,
        [Matter.Bodies.circle(randomX, -PARTICLE_SIZE, PARTICLE_SIZE, {
          restitution: PARTICLE_BOUNCYNESS
        })]
      )
    }
  }, [someStateValue])

  return (
    <MatterBox
      ref={boxRef}
    >
      <canvas ref={canvasRef}/>
    </MatterBox>

  )
}

export default MatterStepOne;

const MatterBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: 'absolute',
  top: 0,
  left: 0,
`

const AddBtn = styled.button`
  cursor: 'pointer',
  display: 'block',
  textAlign: 'center',
  marginBottom: '16px',
  width: '100%'
`