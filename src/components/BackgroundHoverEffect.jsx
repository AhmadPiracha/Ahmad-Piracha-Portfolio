import { useState, useEffect } from 'react';
import styles from './BackgroundEffect.module.css';

const BackgroundEffect = () => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circle = document.querySelector(`.${styles.light}`);
      const circleSize = circle.offsetWidth;
      const x = e.clientX - circleSize / 2;
      const y = e.clientY - circleSize / 2;
      setHoverPosition({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={styles.light}
      style={{
        left: hoverPosition.x,
        top: hoverPosition.y,
        opacity: isHovering ? '1' : '0',
        transition: 'opacity 500ms ease, left 0.1s ease, top 0.1s ease',
      }}
    />
  );
};

export default BackgroundEffect;
