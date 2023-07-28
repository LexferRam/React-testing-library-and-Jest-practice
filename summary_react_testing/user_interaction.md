# USER INTERACTIONS (fireEvent / user-event)

It allows simulating actions that the user performs on an element, such as clicking a button, writing text in a text field, selecting an element from a drop-down list, etc. your test should resemble how users interact with your code (component, page, etc.) as much as possible.

```js
// Click a button
fireEvent.click(screen.getByPlaceholderText(/Add a new task here.../i))

// Write text in a text field
fireEvent.change(
    screen.getByPlaceholderText(/Add a new task here.../i),
     { target: { value: "Go Grocery Shopping" } }
)

```

## Using Jest Function Mocks with React Testing Library

```js
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(getByText(/Click Me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
```

## **Async Methods**

Several utilities are provided for dealing with asynchronous code. These can be useful to wait for an element to appear or disappear in response to an event, user action, timeout, or Promise.The async methods return Promises, so be sure to use await.

**findBy Queries**

findBy methods are a combination of getBy queries and waitFor. findBy queries work when you expect an element to appear but the change to the DOM might not happen immediately.

```js
    const button = screen.getByRole('button', {name: 'Click Me'})
    fireEvent.click(button)
    await screen.findByText('Clicked once')
    fireEvent.click(button)
    await screen.findByText('Clicked twice')
```

**waitFor**

When in need to wait for any period of time you can use waitFor, to wait for your expectations to pass. Returning a falsy condition is not sufficient to trigger a retry, the callback must throw an error in order to retry the condition.

```js
    // ...
    // Wait until the callback does not throw an error. In this case, that means
    // it'll wait until the mock function has been called once.
    await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
    // ...
```

**waitForElementToBeRemoved**

To wait for the removal of element(s) from the DOM you can use waitForElementToBeRemoved. The waitForElementToBeRemoved function is a small wrapper around the waitFor utility.

```js
    const el = document.querySelector('div.getOuttaHere')

    waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() =>
        console.log('Element no longer in DOM'),
    )
```

## **Difference between fireEvent and userEvent**

The main difference between fireEvent and userEvent is that the latter implements the events more realistically, so it is recommended to use userEvent whenever possible.

* **fireEvent:** is a method from RTL which is used to dispatch DOM events.
* **userEvent:** is a library that contains a set of methods to simulate user interactions, simulates full interactions. e.g: wouldn't let a user click a hidden element or type in a disabled text box.


```js
    // fireEvent
    fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
    fireEvent.click(buttonElement);

    // userEvent
    userEvent.type(inputElement, "Go Grocery Shopping");
    userEvent.click(buttonElement);
```

example using userEvent:

```js
import user from "@testing-library/user-event";  

test("test increment and decrement functions", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
        <CounterTwo
            count={0}
            handleIncrement={incrementHandler}
            handleDecrement={decrementHandler}
        />
    )

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    await user.click(incrementButton)
    await user.click(decrementButton) 

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
})

```
