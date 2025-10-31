import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import "matter-wrap"; // make sure you installed this
import "matter-attractors"; // and this

export default function CanvasBackground() {
  const canvasRef = useRef(null);
  const matterInstance = useRef(null);


  useEffect(() => {
    const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Bodies } =
      Matter;

    Matter.use("matter-attractors");
    Matter.use("matter-wrap");

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Create engine
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // Create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "",
      },
    });

    // Create runner
    const runner = Runner.create();
    const world = engine.world;
    world.gravity.scale = 0;

    // Create attractor body
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 10, dimensions.height / 10) / 6,
      {
        render: {
          fillStyle: "black",
          strokeStyle: "rgb(240,240,240)",
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // Add bodies
    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = Common.random() > 0.6 ? Common.random(10, 40) : Common.random(4, 30);
      let polygonNumber = Common.random(3, 6);

      const polygon = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 80,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#FFFFFF",
          strokeStyle: "#DDDDDD",
          lineWidth: 2,
        },
      });
      World.add(world, polygon);

      const r = Common.random(0, 4);

      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: r > 0.3 ? "#FF2D6A" : "rgb(240,240,240)",
          strokeStyle: "#E9202E",
          lineWidth: 2,
        },
      });
      World.add(world, circle1);

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? "#4267F8" : "rgb(240,240,240)",
          strokeStyle: "#3257E8",
          lineWidth: 4,
        },
      });
      World.add(world, circle2);

      const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: "#ff7f50",
          strokeStyle: "#FFFFFF",
          lineWidth: 3,
        },
      });
      World.add(world, circle3);
    }

    // Mouse control
    const mouse = Mouse.create(render.canvas);

    Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Run simulation
    Runner.run(runner, engine);
    Render.run(render);

    // Store for resize
    matterInstance.current = { render, engine };

    const handleResize = () => {
      const { render } = matterInstance.current;
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={canvasRef} className="hidden xl:block w-full h-[100%] z-0 fixed top-0 left-0 opacity-30 inset-0" />;
}
