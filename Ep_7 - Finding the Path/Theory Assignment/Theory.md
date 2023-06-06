## What are various ways to add images into our App? Explain with code examples

1. Importing Images as Modules

ex. import myImage from './path/to/image.jpg';

 <img src={myImage} alt="My Image" />

2. Using the require Function : it is useful when working with older versions of React or when you need to dynamically load images.

<img src={require('./path/to/image.jpg')} alt="My Image" />

3. Using an External URL:

<img src={imageUrl} alt="My Image" />

## What would happen if we do console.log(useState())?

- The useState() function in React returns an array with two elements. The first element (stateValue) represents the current state, and the second element (setStateFunction) is a function that allows you to update the state.

## How will useEffect behave if we don't add a dependency array ?

- the effect will run after every render of the component. This means that the effect will be triggered on initial render and on every subsequent re-render.

## What is SPA?

- SPA stands for Single-Page Application. It is a web application architecture where the entire application runs within a single web page.
  SPAs are commonly used for web applications that require rich interactivity, real-time updates, and a more seamless user experience. However, they may require more complex JavaScript frameworks and can be less SEO-friendly compared to traditional multi-page applications.

1. Dynamic Updates
2. Smooth User Experience
3. Client-Side Rendering
4. Routing
5. Improved Performance

## What is difference between Client Side Routing and Server Side Routing?

- client-side routing is more suitable for modern, interactive web applications where speed, interactivity, and a seamless user experience are important. Server-side routing, on the other hand, is often used in traditional web applications and content-heavy sites that prioritize search engine optimization and simplicity.
