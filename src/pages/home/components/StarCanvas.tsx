import { useEffect, useRef } from "react";

export const StarCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starColor = "#d68ec7";

    type Star = {
      angle: number;
      radius: number;
      speed: number;
      rotationSpeed: number;
      size: number;
    };

    const sizes = [1, 2, 3];
    const stars: Star[] = [];

    // Başlanğıcda ulduzları yığılmış halda yox, normal şəkildə yarad
    for (let i = 0; i < 500; i++) {
      stars.push({
        angle: Math.random() * 2 * Math.PI,
        radius: Math.random() * Math.max(width, height),
        speed: 0.5 + Math.random() * 1.5,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        size: sizes[Math.floor(Math.random() * sizes.length)],
      });
    }

    const update = () => {
      if (!ctx) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fillRect(0, 0, width, height);

      for (let star of stars) {
        star.radius += star.speed;
        star.angle += star.rotationSpeed;

        if (star.radius > Math.max(width, height)) {
          star.radius = Math.random() * 10;
          star.angle = Math.random() * 2 * Math.PI;
          star.speed = 0.5 + Math.random() * 1.5;
          star.rotationSpeed = (Math.random() - 0.5) * 0.02;
        }

        const x = width / 2 + Math.cos(star.angle) * star.radius;
        const y = height / 2 + Math.sin(star.angle) * star.radius;

        ctx.fillStyle = starColor;
        ctx.fillRect(
          x - star.size / 2,
          y - star.size / 2,
          star.size,
          star.size
        );
      }

      requestAnimationFrame(update);
    };

    update();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ background: "black" }}
    />
  );
};
