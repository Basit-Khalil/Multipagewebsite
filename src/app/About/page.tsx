import Image from 'next/image';
import styles from './about.module.css';

const About = () => {
  return (
    <div className='container'>
      <h1 className='heading'>About Us</h1>
      <div className='content'>
        <div className='leftbox'>
          <h2>Welcome to DESIGN POP</h2>
          <p>
          Where your phone meets your style! We specialize in designing and creating custom mobile covers that reflect your personality, your interests, and your individuality. Whether you want to showcase your favorite photo, logo, artwork, or create a one-of-a-kind design, we make it easy to turn your mobile cover into a personalized masterpiece.</p>
        </div>
        <div className='rightbox'>
          <Image className='imagebox'
            src="/design1.jpg" alt="about image" width={460} height={450} />
        </div>
      </div>
    </div>
  );
};

export default About;

