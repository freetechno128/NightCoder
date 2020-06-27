# NightCoder

Coding blog in development ... 

#### Desktop version:
<img src="https://raw.githubusercontent.com/freetechno128/nightcoder/master/preview.png" width="700">

#### Mobile version:
<img src="https://raw.githubusercontent.com/freetechno128/nightcoder/master/preview_mobile.png" width="300px">


## Things learned so far

* **Don't overuse styled-components (CSS-in-JS)** : CSS-in-JS is really useful when you need to control styling dynamically using states, clean unused CSS from the build or when global CSS rules become too much to handle. On the other end, they add a degree of complexity to the code. As an example: you need to inject styling with createGlobalStyle or contexts to reuse fonts & variables in the style. Following good coding practices like BEM guidelines and using conditional classes (``<div classNames={`banner ${state ? "active" : ""}`}>``) can handle most of theses edge cases.

## Built With

* [create-react-app](https://github.com/facebook/create-react-app) - Toolkit to setup a ReactJS website
* [react-three-fiber](https://github.com/react-spring/react-three-fiber) -  React reconciler for Threejs on the web
* [react-router-dom](https://www.npmjs.com/package/react-router-dom) - DOM bindings for React Router.



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

* **Philippe Talarico** - [freetechno128](https://github.com/freetechno128)
