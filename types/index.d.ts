declare module 'react-animations' {
  import { ReactNode } from 'react';

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

  // Type definition for the AnimatorProps
  interface AnimatorProps {
    children: ReactNode;
    animationType: AnimationType;
    delay?: number; // Optional delay in milliseconds
    duration?: number; // Optional duration in milliseconds
  }

  // Type definition for the Animator component
  export const Animator: React.FC<AnimatorProps>;
}