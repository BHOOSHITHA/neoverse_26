"use client";

import { ShootingStars } from "./ShootingStars";

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-black pointer-events-none z-0" style={{ willChange: 'auto' }}>
      <ShootingStars 
        starColor="#D946EF"
        trailColor="#14B8A6"
        minSpeed={10}
        maxSpeed={30}
      />
    </div>
  );
}
