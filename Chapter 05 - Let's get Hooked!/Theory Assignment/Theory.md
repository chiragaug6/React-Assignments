## What is the difference between Named Export, Default export and \* as export?

- export const abc=()=>{}; if we use export keyword before decalring function component then it will be called as Named export. in file there are many Named export are there. if we are imporing Named export then we have to use curly braces{} and inside braces we have to write exact Name of the component or varible.

- export default abc; here we are by default exporing a component or a varibale this know as defalt export.
  in one file there are only one default export. you can use any name while importing defalut export.

- - as export : this syntax used to import all the Named import from the file.

## What is the importance of config.js file?

- config.js are used to store things like api,ImpValue or anyting that are constant and we are using that multiple time in our app.

- if sometime we need to update some contant value in app so this file make work easy for us.

## What are React Hooks?

- React Hooks are Just Normal Javascript function writrten by Facbook developers.
  we are importing hook from React librabry.
  1. useState() is one of the Hook inside React which help us in creating local state varible inside component.
  2. useEffect() very useful for fetching data into website and many use case are there.

## Why do we need a useState Hook?

- in React we have to trace of varible inside component that are dynamicaly changing.
  React keeps tract of varible inside react component. we can create any number of react hook to keep tract of local varibles.

- Hooks make React so much better because you have simpler code that implements similar functionalities faster and more effectively
