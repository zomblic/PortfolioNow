import React from 'react';
import bgImage from '../assets/images/codingheader.jpg'; // Import image

export default function Header() {
  return (
    <header style={{ background: `url(${bgImage}) center/cover no-repeat` }} className="text-center">
      <h1 className="glitch-text display-3">🚀 Zomblic Headquarters 🚀</h1>
      <p className="text-neon-green">Where zombies eventually learn how to code</p>
    </header>
  );
}
