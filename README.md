# React Animators

[![npm version](https://badge.fury.io/js/react-animators-library.svg)](https://badge.fury.io/js/react-animators-library)
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

- FadeIn: Fade in animation.
- Bounce: Bounce animation.
- Zoom: Zoom animation.

## Props

Each animation component accepts the following props:

- children: ReactNode - The content to animate.
- duration: number - The duration of the animation in milliseconds (default: 1000ms).
- delay: number - The delay before the animation starts in milliseconds (default: 0ms).

## License

This package is licensed under the MIT License. See the LICENSE file for details.

## Author

Created by [Abhijeet Vadera](https://github.com/Abhijeet-Vadera).
