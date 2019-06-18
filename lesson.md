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

- `this` inside a component refers to the component/class instance, so it points to the instance where that component is being used (i.e. the JSX code where it's called). You can have as many instances of a component as you like.

- React rules/tips:
  - To assign a class to a element use `className=""`.
  - If you want to return sibling elements in `render()` you can use `<React.Fragment></React.Fragment>` and it will render only the enclosed elements to the DOM, otherwise you have to return the JSX elements in an enclosing tag (e.g. dummy `<div></div>` which could add extra `<div></div>`s to the markup.
  - To add a comment in JSX you have to use a block comment like this `{ /* comment */ }`.
  - You can name your props whatever you want as long as they don't override the HTML attributes of the element.
  - If you want to pass any prop other than a string you have to use curly brackets.
  - In DevTools, just like $0 helps reference the selected element for Reacth $r helps reference the selected component.
