import React from 'react';
import Image from 'next/image'; // Import the Image component from Next.js

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="image-container">
          <Image
            src="/DESIGN12.jpg" alt="Hero Image"  layout="fill" objectFit="cover" //quality={100} 
          />
        </div>
        <div className="contentleft">
          <h1 className="fade-in">Welcome to Design Pop</h1>
          <p>A world of Customized Mobile Back Covers</p>
          <button>Explore Now</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
