## What is a Microservice?

- Microservice means more than one service. we devide our application into multiple service for multiple functionally inside app. like, login-logout , payment-gateway , shoping-cart all services are connected with Api. this kind of structure knows as Microservice.
  it just like breaking one big problem into small problems.

## What is Monolith architecture?

- Monolith architecture is pattren to create sofware. here all components of software are tightly interconnected and deployed together.

- if we are updateing any small change to application. then we have to deploye hole app.It makes the development and maintenance of large-scale applications complex and time-consuming.

- as application become large. it become more complex and less scalability, flexibility, and modularity.

## What is the difference between Monolith and Microservice?

- Monolithic architecture refers to a single, unified application where all components are tightly coupled and interdependent. It is typically deployed as a single unit and scaling involves replicating the entire application.

- Microservice architecture, on the other hand, involves breaking down an application into smaller, loosely coupled services that can be developed, deployed, and scaled independently. Each service focuses on a specific business capability and can be deployed and scaled individually.

## Why do we need a useEffect Hook?

- useEffect hook is usefull to perform side effect(any actions that are performed outside the scope of the component's render cycle) in functional component.

- like, fetching data from an API, subscribing to events, manipulating the DOM, or setting up timers.

1. Executing code after rendering
2. Handling side effects
3. Managing subscriptions and event listeners
4. Dependency tracking

## What is Optional Chaining?

- Optional chaining helps to avoid errors that would occur if we attempted to access properties on null or undefined values directly.

- it allows you to safely access properties and methods of an object without causing an error if any intermediate value in the chain is null or undefined. It provides a concise way to handle situations where a property or method may or may not exist in a nested object structure.

## What is Shimmer UI?

- Shimmer UI is the loading template.it is display before displaying actual data it one kind of loading Template.

## What is the difference between JS expression and JS statement

- JS expression : expression is a piace of code that that produces a value.t can be a single value, a combination of values, or a function call.

- JS Statements : Unlike expressions, statements do not produce values. Statements are used to control program flow, define functions, perform looping or branching, and modify program state.

## What is Conditional Rendering, explain with a code example

- using Conditional Rendering we can render component based on some condition.synatax of Conditional Rendering is similer to ternary oprator.

Ex.  
import React from "react";

function MyComponent({ isLoggedIn }) {
return (

<div>
{isLoggedIn ? (
<h1>Welcome, User!</h1>
) : (
<button>Login</button>
)}
</div>
);
}

export default MyComponent;

## What is CORS?

- CORS (Cross-Origin Resource Sharing) is a security mechanism in web browsers that controls how web pages or applications can request resources from a different domain. It ensures that websites from one domain can't access resources from another domain without explicit permission. CORS allows trusted domains to communicate with each other while protecting users from potential security risks.

## What is async and await?

- async and await are features in JavaScript that provide a more synchronous-looking syntax for working with asynchronous operations.

- The async keyword is used to define an asynchronous function that returns a promise implicitly.

- The await keyword is used inside an async function to pause execution until a promise is resolved or rejected. It allows for sequential and readable code flow.

- Together, async and await make it easier to write and understand asynchronous code, reducing the reliance on callbacks or promise chains.

## What is the use of `const json = await data.json();` in getRestaurants()

- it is used to extract the JSON data from an HTTP response obtained from the fetch() function in JavaScript.
