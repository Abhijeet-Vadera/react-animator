import React, { useEffect, useState, ReactNode } from 'react';

// Define supported animation types
type AnimationType = 'fadeIn' |
  'fadeOut' |
  'bounce' |
  'zoomIn' |
  'zoomOut' |
  'rotateClockwise' |
  'rotateAntiClockwise' |
  'slideLeft' |
  'slideRight' |
  'slideUp' |
  'slideDown' |
  'pulse' |
  'flash' |
  'shake' |
  'flipX' |
  'flipY' |
  'rollIn' |
  'rollOut';

interface AnimatorProps {
  children: ReactNode;
  animationType: AnimationType;
  delay?: number; // Optional delay in milliseconds
  duration?: number; // Optional duration in milliseconds
}

const Animator: React.FC<AnimatorProps> = ({ children, animationType, delay = 0, duration = 1000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  const animationStyles = {
    fadeIn: { opacity: visible ? 1 : 0, transition: `opacity ${duration / 1000}s` },
    fadeOut: { opacity: visible ? 0 : 1, transition: `opacity ${duration / 1000}s` },
    bounce: { transform: visible ? 'scale(1.2)' : 'scale(1)', transition: `transform ${duration / 1000}s` },
    zoomIn: { transform: visible ? 'scale(1.2)' : 'scale(1)', transition: `transform ${duration / 1000}s` },
    zoomOut: { transform: visible ? 'scale(0.8)' : 'scale(1)', transition: `transform ${duration / 1000}s` },
    rotateClockwise: { transform: visible ? 'rotate(360deg)' : 'rotate(0deg)', transition: `transform ${duration / 1000}s` },
    rotateAntiClockwise: { transform: visible ? 'rotate(-360deg)' : 'rotate(0deg)', transition: `transform ${duration / 1000}s` },
    slideLeft: { transform: visible ? 'translateX(0)' : 'translateX(-100%)', transition: `transform ${duration / 1000}s` },
    slideRight: { transform: visible ? 'translateX(0)' : 'translateX(100%)', transition: `transform ${duration / 1000}s` },
    slideUp: { transform: visible ? 'translateY(0)' : 'translateY(-100%)', transition: `transform ${duration / 1000}s` },
    slideDown: { transform: visible ? 'translateY(0)' : 'translateY(100%)', transition: `transform ${duration / 1000}s` },
    pulse: { transform: visible ? 'scale(1.1)' : 'scale(1)', transition: `transform ${duration / 1000}s` },
    flash: { opacity: visible ? 1 : 0, transition: `opacity ${duration / 1000}s` },
    shake: { transform: visible ? 'translateX(-10px)' : 'translateX(0)', transition: `transform ${duration / 1000}s` },
    flipX: { transform: visible ? 'rotateX(180deg)' : 'rotateX(0deg)', transition: `transform ${duration / 1000}s` },
    flipY: { transform: visible ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: `transform ${duration / 1000}s` },
    rollIn: { transform: visible ? 'translateX(0) rotate(0)' : 'translateX(-100%) rotate(-120deg)', transition: `transform ${duration / 1000}s` },
    rollOut: { transform: visible ? 'translateX(0) rotate(0)' : 'translateX(100%) rotate(120deg)', transition: `transform ${duration / 1000}s` },
    // Add more animation styles as needed
  };


  return (
    <div style={animationStyles[animationType]}>
      {children}
    </div>
  );
};

export default Animator;