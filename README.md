<p align="center">
    <a href="https://scroll-animations-js-web.vercel.app/">
        <img src="https://i.imgur.com/1eO3TpN.png" width="900"/>
    </a>

<!--     <a href="https://github.com/buefy/buefy/releases"><img src="https://img.shields.io/github/v/release/buefy/buefy?logo=buefy&color=7957d5&labelColor=lightgrey" /></a>
    <a href="https://www.npmjs.com/package/buefy"><img src="https://img.shields.io/npm/v/buefy.svg?logo=npm" /></a>
    <a href="https://www.npmjs.com/package/buefy"><img src="https://img.shields.io/npm/dt/buefy.svg" /></a>
    <a href="https://circleci.com/gh/buefy/buefy"><img src="https://img.shields.io/circleci/project/github/buefy/buefy.svg?style=flat-square" /></a>
    <a href="https://codecov.io/gh/buefy/buefy"><img src="https://img.shields.io/codecov/c/github/buefy/buefy.svg?style=flat-square" /></a>
    <a href="https://discordapp.com/invite/ZkdFJMr"><img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg?logo=discord" /></a>
    <a href="https://buefy.org"><img src="https://img.shields.io/badge/code_style-buefy-7957d5.svg?style=flat-square" /></a> -->
</p>

> Scroll-Animations-JS is a powerful scroll animation library for [React.js](https://reactjs.org/), [Vue.js](https://vuejs.org/) and Vanilla-JavaScript.

## Features

- 11 powerful animations
- Supports Vanilla JavaScript, React, and Vue
- Support TypeScript
- Supports all versions of React and Vue
- About 378KB min+gzip
- Focus on usability and performance without _over-animating_ stuff

## Documentation

The documentation is in the docs directory, it serves as the demo as well.

Browse [online documentation here](https://scroll-animations-js-web.vercel.app/).

## NPM

https://www.npmjs.com/package/scroll-animations-js

## 🛫 Quick start

#### Installation

```bash
npm install scroll-animations-js
```

or

```bash
yarn add scroll-animations-js
```

#### Link styles

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/scroll-animations-js@1.0.9/dist/css/index.min.css">
```

#### Add scripts

```js
<script src="https://cdn.jsdelivr.net/npm/scroll-animations-js@1.0.9/dist/scroll.min.js"></script>
```

## 🤔 How to use it?

- React

```js
import SA from 'scroll-animations-js';
import 'scroll-animations-js/dist/css/index.min.css';

function App() {
  useEffect(() => SA.init(), []); // initialize scroll-animations-js

  return <div class="sa-animation sa-fade-right" />; // use it
}
```

- HTML

```js
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/scroll-animations-js@1.0.9/dist/css/index.min.css">
<script src="https://cdn.jsdelivr.net/npm/scroll-animations-js@1.0.9/dist/scroll.min.js"></script>

<div class="sa-animation sa-fade-up-left" sa-duration="3000"></div>

<script>
    init({ // you can add your options
  delay: 3000,
  duration: 3000,
  intersectionObserverOptions: { threshold: 0, root: null, rootMargin: '0px' },
})
</script>
```

- Vue.js

1. Import package in your code.

```js
import Animation from 'scroll-animations-js/dist/vue.js';
import 'scroll-animations-js/dist/css/index.min.css';
```

2. Add the scroll-animations-js as a plugin to Vue

```js
Vue.use(Animation, {
  // you can add your options
  delay: 3000,
  duration: 3000,
  intersectionObserverOptions: { threshold: 0, root: null, rootMargin: '0px' },
});
```

3. Just add scroll-animations-js in your 'vue' file

```js
<template>
  <div class="sa-animation sa-fade-up-left" sa-duration="3000"></div>
</template>
```

- Nuxt.js

<span style="color:grey;">plugins/scroll-animation.js</span>

```js
import Vue from 'vue';
import Animation from 'scroll-animations-js/dist/vue.js';
import 'scroll-animations-js/dist/css/index.min.css';

Vue.use(Animation, {
  // you can add custom options
  delay: 3000,
  duration: 3000,
  intersectionObserverOptions: { threshold: 0, root: null, rootMargin: '0px' },
});
```

<span style="color:grey;">nuxt.config.js</span>

```js
    ...
  plugins: [
    { src: '~/plugins/scroll-animation', ssr: false },
  ],
    ...
```

```htmlmixed=
<template>
    <div class="sa-animation sa-fade-up-left" sa-duration="3000"></div>
</template>
```

## 👀 Advanced settings

These settings can be set both on certain elements, or as default while initializing script (in options object)

| Attribute   | Description                | Step | Default value | Range        |
| ----------- | -------------------------- | ---- | ------------- | ------------ |
| sa-duration | Duration of animation (ms) | 100  | 500           | 0 ~ 5000(ms) |
| sa-delay    | Delay of animation (ms)    | 100  | 0             | 0 ~ 5000(ms) |

If you use **fade animation**, you can customizing fade distance
**Caution** : If `sa-fade-distance` option value is out of range of view-port than animation will not work!
| Attribute | Description | Step | Default value | Range |
| --------- | ----------- | -------- | --- | --- |
| sa-fade-distance | Far distance from element (px) | 100 | 200 | 100~1000(px) |

If you use **scale animation**, you can customizing scaling
You **can't** use `sa-scale-x` or `sa-scale-y` with `sa-scale`
| Attribute | Description | Step | Default value | Range |
| --------- | ----------- | -------- | --- | --- |
| sa-scale-x | Scale to x-axis | 0.1 | 1.1 | 1.1 ~ 3.0 |
| sa-scale-y | Scale to y-axis | 0.1 | 1.1 | 1.1 ~ 3.0 |
| sa-scale | Scale transformation | 0.1 | 1.1 | 1.1 ~ 3.0 |

Example:

```js
div class="sa-animation sa-scale" sa-delay="300" sa-fade-distance="1000"></div>
```

## 👏 Global Setting

If you don't want to change setting for each element separately, you can change it globally.

You can change global animation delay, duration and [Intersection Observer options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

To do this, pass options object to init() function, like so:

```js
  <script>
    SA.init({
      delay: 0, // transition delay 0 ~ 5000ms, unit 100
      duration: 500, // transition duration 0 ~ 5000ms, unit 100
      intersectionObserver:{
          threshold:0,
          rootMargin:"0px",
          root: null
      }
    });
  </script>
```

## 🌞 Animations

There are serveral predefined animations you can use already:

Fade animations:

- **fade**
  - sa-fade-down
  - sa-fade-up
  - sa-fade-right
  - sa-fade-left
  - sa-fade-up-right
  - sa-fade-up-left
  - sa-fade-down-right
  - sa-fade-down-left
- **scale**
  - sa-scale

## Contributors :heart_eyes:

<table>
  <tr>
    <td align="center"><a href="https://github.com/jwun95"><img src="https://avatars.githubusercontent.com/u/14821702?v=4" width="80px;" alt=""/><br /><sub><b>jwun95</b></sub></a></td>
    <td align="center"><a href="https://github.com/borachoidev"><img src="https://avatars.githubusercontent.com/u/66766189?v=4" width="80px;" alt=""/><br /><sub><b>Bora Choi</b></sub></a></td>
    <td align="center"><a href="https://github.com/developerjhp"><img src="https://avatars.githubusercontent.com/u/85682854?v=4" width="80px;" alt=""/><br /><sub><b>developerjhp</b></sub></a></td>
    <td align="center"><a href="https://github.com/hyebin-Hwang"><img src="https://avatars.githubusercontent.com/u/67263146?v=4" width="80px;" alt=""/><br /><sub><b>Hyebin</b></sub></a></td>
    <td align="center"><a href="https://github.com/kjhg478"><img src="https://avatars.githubusercontent.com/u/31474272?v=4" width="80px;" alt=""/><br /><sub><b>kjhg478</b></sub></a></td>
    <td align="center"><a href="https://github.com/woobba94"><img src="https://avatars.githubusercontent.com/u/66201264?v=4" width="80px;" alt=""/><br /><sub><b>Woobba</b></sub></a></td>
    <td align="center"><a href="https://github.com/ww8007"><img src="https://avatars.githubusercontent.com/u/54137044?v=4" width="80px;" alt=""/><br /><sub><b>ww8007</b></sub></a></td>
  </tr>
</table>

## License

Copyright 2022 NICE MEETING PEOPLE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
