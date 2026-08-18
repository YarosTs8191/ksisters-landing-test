# Ksisters Landing Page Test

Test task for a Front-End Developer (Landing Pages) position.

## Tech stack

- React
- Vite
- JavaScript
- CSS Modules

## Implemented

- Responsive layout for desktop and mobile
- Hero section based on the provided Figma design
- Parallax effect in the hero section
- Interactive before/after slider
- Mouse and touch support
- Entrance animations for comparison cards
- Responsive decorative elements

## Assets

Images were exported from Figma, prepared and optimized for the project.

For responsive images I used separate desktop and mobile assets where needed.

## Before/After Slider

The slider is built with two overlapping images.

The visible part of the second image is controlled with `clip-path`, while the slider position is controlled with a native `input[type="range"]`.

## Time spent

Approximately **10 hours of active work**.

This included:

- Figma analysis
- asset export and image optimization
- layout implementation
- responsive adjustments
- parallax and slider logic
- animations
- testing and cleanup

## Main difficulties

The main difficulty was preparing the assets from Figma and keeping the layout close to the design on both desktop and mobile.

The before/after slider also required accurate positioning of two images and correct behavior for mouse and touch.

## Run locally

```bash
npm install
npm run dev
npm run build
```

The project was also checked with:

npm run lint
Scope

I focused on the first two required sections.

The optional third section was not implemented because I decided to spend more time on the quality and responsiveness of the required parts.
