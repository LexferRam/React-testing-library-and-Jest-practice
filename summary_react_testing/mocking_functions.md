# Mocking Functions

```js

test("", () => {
    const mock = jest.fn()
    mock("foo")
    mock("bar")

    expect(mock).toHaveBeenCalledTimes(2)
    expect(mock).toHaveBeenCalledWith("foo")
    expect(mock).toHaveBeenCalledWith("bar")
})

```

```js
test("", async () => {
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