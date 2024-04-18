# React Animators

[![npm version](https://badge.fury.io/js/react-animators.svg)](https://badge.fury.io/js/react-animators)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

React Animation Library is a collection of reusable React animation components designed to enhance user interfaces with dynamic animations.

## Installation

You can install React Animation Library via npm:

```bash
npm install react-animators
```

## Usage

Import the animation components into your React application and start animating your elements:

```typescript
import React from 'react';
import { Animator } from 'react-animators';

const App = () => {
  return (
    <div>
      <Animator animationType='fadeIn' delay={500} duration={1000}>
        <h1>FadeIn Animation</h1>
      </Animator>
      <Animator animationType='bounce' delay={1000} duration={500}>
        <h1>Bounce Animation</h1>
      </Animator>
    </div>
  );
};

export default App;
```

## Available Animations

- **FadeIn**: Fade in animation where the element gradually becomes visible by increasing its opacity.
- **FadeOut**: Fade out animation where the element gradually becomes invisible by decreasing its opacity.
- **Bounce**: Bounce animation where the element scales up and down, creating a bouncing effect.
- **ZoomIn**: Zoom in animation where the element gradually scales up in size.
- **ZoomOut**: Zoom out animation where the element gradually scales down in size.
- **RotateClockwise**: Rotate clockwise animation where the element rotates in a clockwise direction.
- **RotateAntiClockwise**: Rotate anti-clockwise animation where the element rotates in an anti-clockwise direction.
- **SlideLeft**: Slide left animation where the element moves horizontally to the left.
- **SlideRight**: Slide right animation where the element moves horizontally to the right.
- **SlideUp**: Slide up animation where the element moves vertically upwards.
- **SlideDown**: Slide down animation where the element moves vertically downwards.
- **Pulse**: Pulse animation where the element scales up and down rhythmically, creating a pulsating effect.
- **Flash**: Flash animation where the element quickly fades in and out, creating a flashing effect.
- **Shake**: Shake animation where the element shakes horizontally back and forth.
- **FlipX**: Flip on X-axis animation where the element flips horizontally.
- **FlipY**: Flip on Y-axis animation where the element flips vertically.
- **RollIn**: Roll in animation where the element rolls into view from the side.
- **RollOut**: Roll out animation where the element rolls out of view to the side.

## Props

| Name          | Type          | Description                                                                                                                                                                                                                                                                           |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| animationType | AnimationType | **Required:** The type of animation to apply. Supported types are: 'fadeIn', 'fadeOut', 'bounce', 'zoomIn', 'zoomOut', 'rotateClockwise', 'rotateAntiClockwise', 'slideLeft', 'slideRight', 'slideUp', 'slideDown', 'pulse', 'flash', 'shake', 'flipX', 'flipY', 'rollIn', 'rollOut'. |
| delay         | number        | Optional delay before the animation starts (ms).                                                                                                                                                                                                                                      |
| duration      | number        | Optional duration of the animation (ms).                                                                                                                                                                                                                                              |

## License

This package is licensed under the MIT License. See the LICENSE file for details.

## Author

Created by [Abhijeet Vadera](https://github.com/Abhijeet-Vadera).
