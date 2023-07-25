# React testing library.

## What is React testing library?

The core library, DOM Testing Library, is a light-weight solution for testing web pages by querying and interacting with DOM nodes (whether simulated with JSDOM/Jest or in the browser). The main utilities it provides involve querying the DOM for nodes in a way that's similar to how the user finds elements on the page. In this way, the library helps ensure your tests give you confidence that your application will work when a real user uses it.

**Dependencies:**

```js
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "jest-fetch-mock": "^3.0.3"
```

## **Why is important:**

- Catch bugs in your implementation
- Increase confidence in your code
- Speed up QA time
- Can serve as documentation for your code

## **Types of tests:**

- Unit tests: test a single function, component, or class
- Integration tests: test how multiple units work together
- End-to-end (E2E) tests: test the entire application from start to finish

- **Happy-path testing** is a type of software testing that uses known input and produces an expected output.
- **Edge case test cases** are those scenarios validated for boundary conditions or in extreme conditions on product usability. In edge cases, we test those scenarios which are uncommon, unknown. Edge case testing is performed to ensure that the application is working as expected in unusual conditions.


## **Common structure of a test (Test block):**

1. render a component to test
2. find the element we want to interact with
3. interact with those elements
4. assert that the results are as expected

```javascript

import { rendrer, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  // render the component
  // render the component into the virtual DOM of this test
  render(<App />);

  // find the element we want to interact with
  const linkElement = screen.getByText(/learn react/i);

  // assert that the results are as expected
  expect(linkElement).toBeInTheDocument();

});

```

## **Tools and Playgrounds**

* Testing Playground is an interactive sandbox where you can run different queries against your own html, and get visual feedback matching the rules mentioned above.
<https://testing-playground.com/>

* Browser **extension** for generating queries for Testing Library.

* GitHub copilot: write "it" and then ctrl + enter to see posible test suggestions.

* Debug methods 

```js
   // debug This method is essentially a shortcut for console.log(prettyDOM())
    console.log(prettyDOM(h1Element))
    screen.debug();
    screen.logTestingPlaygroundURL()
```

* CodiumAI estension (cmd + crtl + c) to generate test for you, or click the button "test this function" on the top of the function.
