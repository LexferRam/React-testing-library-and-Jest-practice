# React testing library.

# Before starting to apply TDD

It is extremely important that you have requirements such as acceptance criteria or use cases, without them it will be very difficult to apply TDD in a way that creates value in development.

If these processes have not matured in your work team, it is important that you raise your hand and convey the need to do so.

Ultimately, you can define the criteria and validate them with the person who makes the final decisions in the development.

## React testing library

is a javascript testing utility for testing web pages, provides a virtual DOM for testing React components which we can use to interact with and verify the behaviour of a React component. With React testing  library, we are not concerned about the implementation details of a component

**React testing library philosophy**: "The more your tests resemble the way your software is used, the more confidence they can give you "
"Your test should resemble how users interact with your code as much as posible"

## Jest 

Jest is a javascript testing framework. Jest is a test runner that finds test,run the tests, and report the results.

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

## TDD(Test Driven Development)

Is a software development process where you write tests before writing the software code, once the test have been written, you then write the code to ensure the test passes.

1. Create tests that describe the desired functionality
2. Write software code to make the tests pass
3. Refactor the code to make it cleaner while ensuring the tests still pass

## Test Driven Development o Desarrollo dirigido por pruebas

<image src="../src/assets/images/tdd-flow.svg" width="400px" height="400px" />

Test Driven Development is a technique for developing software that consists of short cycle, in which you first write an automated test that fails, then do the minimum necessary to make it pass, and finally do a refactor.

Cycle <span style="color:red">Red</span>, <span style="color:green">Green</span>, <span style="color:blue">Refactor</span>
The Red, Green, Refactor cycle is the essence of TDD and consists of:

<span style="color:red">RED</span>: Start by creating an automated test that fails out of the box. Typically, a failed test is colored red in test runners.

<span style="color:green">GREEN</span>: Do the minimum necessary for the test to pass. Usually, a test that passes has a green color in a test runner.

<span style="color:blue">REFACTOR</span>: Apply refactor techniques and good practices in the code created so far. SOLID principles or others, for example.

**NOTE**:
tests should be considered as part of functionality development!
