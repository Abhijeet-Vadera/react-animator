// File: types/index.d.ts

declare module 'react-animators' {
  import { CSSProperties, ReactNode } from 'react';

  // Type definition for a CSS animation object
  interface AnimationObject {
    [key: string]: CSSProperties;
  }

  // Type definition for the FadeIn animation component
  export const FadeIn: React.FC<{ children: ReactNode; animation?: AnimationObject }>;

  // Add type definitions for other animation components here if needed
}