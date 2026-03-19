import { useRef, useState, useEffect } from 'react';
import styles from './BackgroundEffect.module.css';

const BackgroundEffect = () => {
  const lightRef = useRef(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!lightRef.current) return;
      const circleSize = lightRef.current.offsetWidth;
      setHoverPosition({ x: e.clientX - circleSize / 2, y: e.clientY - circleSize / 2 });
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
      ref={lightRef}
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

