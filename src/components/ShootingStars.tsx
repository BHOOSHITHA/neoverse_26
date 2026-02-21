"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useState, useRef, useMemo } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  // Random position along the top edge or left edge
  const startFromTop = Math.random() > 0.5;
  
  if (startFromTop) {
    // Start from top edge, moving diagonally down-right
    return { 
      x: Math.random() * window.innerWidth * 0.5, 
      y: 0, 
      angle: 135 
    };
  } else {
    // Start from left edge, moving diagonally down-right
    return { 
      x: 0, 
      y: Math.random() * window.innerHeight * 0.5, 
      angle: 135 
    };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 200,
  maxDelay = 800,
  starColor = "#D946EF",
  trailColor = "#14B8A6",
  starWidth = 20,
  starHeight = 3,
  className,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  // Generate static background dots (reduced by 30%)
  const backgroundDots = useMemo(() => {
    const dots = [];
    for (let i = 0; i < 105; i++) { // Reduced from 150 to 105 (30% reduction)
      dots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    return dots;
  }, []);

  useEffect(() => {
    const intervals: ReturnType<typeof setTimeout>[] = [];
    
    // Create multiple star generators (reduced by 30%)
    for (let i = 0; i < 3; i++) { // Reduced from 5 to 3 generators
      const createStar = () => {
        const { x, y, angle } = getRandomStartPoint();
        const newStar: ShootingStar = {
          id: Date.now() + Math.random(),
          x,
          y,
          angle,
          scale: 1,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
        };
        setStars((prevStars) => [...prevStars, newStar]);

        const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
        const timeout = setTimeout(createStar, randomDelay);
        intervals.push(timeout);
      };

      // Stagger the initial creation
      setTimeout(createStar, i * 300);
    }

    return () => {
      intervals.forEach(interval => clearTimeout(interval));
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) => {
        return prevStars
          .map((star) => {
            const newX =
              star.x +
              star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y +
              star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;
            
            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20
            ) {
              return null;
            }
            
            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter((star): star is ShootingStar => star !== null);
      });
    };

    const animationFrame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrame);
  }, [stars]);

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
      style={{ willChange: 'auto' }}
    >
      {/* Background dots with teal and pink colors */}
      {backgroundDots.map((dot) => (
        <circle
          key={dot.id}
          cx={`${dot.x}%`}
          cy={`${dot.y}%`}
          r={dot.size}
          fill={dot.id % 2 === 0 ? "#14B8A6" : "#D946EF"}
          opacity={dot.opacity * 0.6}
        />
      ))}

      {/* Shooting stars */}
      {stars.map((star, index) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill={index % 2 === 0 ? "url(#gradient1)" : "url(#gradient2)"}
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        {/* Teal to Pink gradient */}
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#14B8A6", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#D946EF", stopOpacity: 1 }} />
        </linearGradient>
        {/* Pink to Teal gradient */}
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D946EF", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#14B8A6", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
