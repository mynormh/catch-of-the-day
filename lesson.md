# Lessons

- The `react-scripts` npm package allows us to forget about stuff like babel and webpack config and just get straight into building our React app. If we wanna see those config files we have to do something called "eject" which will give us full control over it.

- A component is a reusable piece of a website/app and everything in React is a component. A component encapsulates HTML, CSS and/or JS.

- The state of a component refers to all the data that belongs in that component

- Every class in React needs at least one method, and that method is called `render()`. This method determines the HTML/DOM Elements are rendered in the component, and it takes two arguments: JSX and the root element of our React App.

- The only time we touch the DOM in React (select a DOM Element, update the inner text directly , etc.) is when we mount the entire app to the page.

- React can be used for a lot more than the web so we need to use the package specific to the web, called `react-dom`.

- JSX allows us to write HTML in JS, JSX is not required to write a React app but it's what's used in the vast majority of them.

- CSS in React can be loaded in different ways:

  - Add a `link:css` tag in the head of index.html.
  - Inline CSS for every component.
  - Import the css file into the entry JS file (index.js), so when we import a CSS file in JS webpack automatically knows it is a CSS file and adds the `link:css` tag in index.html.

- Props in React are the way we get data into a component, they are similar to the way we provide more information to a HTML tag via HTML attributes (e.g. `<img src="" alt=""/>`). Props is like an object of data that got passed in. So, state is where the data lives and props is how the data goes where it needs to go.

- If you want to use a variable in a Component you use curly brackets, this indicates JSX that you want to go back to regular JS and evaluate what's inside them.

- `this` inside a component's render method refers to the component/class instance, so it points to the instance where that component is being used (i.e. the JSX code where it's called). You can have as many instances of a component as you like.

- Stateless Functional Components are components that only present data or they are just markup and styles, they don't hold any state. So if a Component only has a `render()` method then it can be written as a Stateless Functional Component.

- Stateless Functional Components are written as functions, instead of classes, and can be written as regular function or arrow functions (preferred style). They also don't have a `this` associated so to use props you have to pass props as an argument of the component (you can even destructure `props` to each individual prop).

  - Component

    ```JS
    class MyComponent extends React.Component {
      render() {
        return (
          <h1>Title</h1>
          <p>My Component is {this.props.myProp}</p>
        )
      }
    }
    ```

  - Stateless Functional Component

  ```JS
  const MyComponent = props => (
    <h1>Title</h1>
    <p>My Component is {props.myProp}</p>
  );
  ```

- The router is not baked-in to React, so you need third party packages to route the app. In React, even the router is a Component. Popular routers are: ReactRouter, Next and ReachRouter.

- In the router component you define each of the routes and what component you want to render for it, you can create a fallback route and render a NotFound Component for any route that doesn't match.

- ReactRouter will automatically add information about the Route into the rendered component, it adds things like parameters and if you have a parameter in the path of the defined Route (e.g. `/:myParam`) it will automatically fill it with the parameter in the URL.

- Event handling (click, submit, hover, etc.) in React is pretty much the same as in vanilla JS but React wraps the events in something called SyntheticEvent (to make sure it works across all browsers). Also instead of selecting the element and adding an event handler, you handle the event inline in JSX by starting the event with `on..` followed by the event, e.g.: `onClick={this.handleClick}`.

- There are two ways to handle inputs in React:

  - Refs: It does touch the DOM elements. A ref helps us to reference an actual DOM node on the page.
  - Sync the input value into state.

- `this` outside of the `render()` function is `undefined` due to the binding in React and all of the methods that come from the class `React.Component` we extend that are bound by default but the ones we create are not. The solution to this is to bind our own methods, and instead of doing it in the constructor (it would be cumbersome), we actually declare a class property that will be set to an arrow function and since class properties will be bound to the instance rather than `undefined`.

- To change routes we use pushState, it will allow us to change the url without reloading the page or losing data in memory. Since React Router is the parent component of all our components and it passes some data with props to the components, we can access this data directly

- React rules/tips:
  - To assign a class to a element use `className=""`.
  - If you want to return sibling elements in `render()` you can use `<React.Fragment></React.Fragment>` and it will render only the enclosed elements to the DOM, otherwise you have to return the JSX elements in an enclosing tag (e.g. dummy `<div></div>` which could add extra `<div></div>`s to the markup.
  - To add a comment in JSX you have to use a block comment like this `{ /* comment */ }`.
  - You can name your props whatever you want as long as they don't override the HTML attributes of the element.
  - If you want to pass any prop other than a string you have to use curly brackets.
  - In DevTools, just like $0 helps reference the selected element for Reacth $r helps reference the selected component.
  - In Stateless Functional Components you can destructure the argument `props` into each individual prop, this way you can reference each variable directly.
  - In React if you put a `value=""` in a `<input/>` it will throw a warning, because values of inputs always need to be attached to state. So if you need text in an input you use the property `defaultValue`.
  - When indicating the function to run on an event we don't include `()` at the end of the function because that would cause the function to run when the component mounts. `onClick={this.handleClick()}` vs `onClick={this.handleClick}`.
  - The `constructor()` method is run before the component is created.
  - If you need to access `this` inside a custom method (not one provided by `React.Component`) then you must use class properties set to an arrow function or use the `constructor()` method.
