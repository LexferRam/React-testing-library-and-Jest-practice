# Integration Test

```js
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from "../Todo"
import { BrowserRouter } from "react-router-dom"

const MockTodo = () => {
    return (
        <BrowserRouter>
          <Todo/>
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i} );
    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    })
}

it('should be able to type into input', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i); 
    expect(divElement).toBeInTheDocument()
});

it('should render multiple items', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
    const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
    expect(divElements.length).toBe(3)
});

it('task should not have complete class when initally rendered', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active")
});

it('task should have complete class when clicked', () => {
    render(
        <MockTodo />
    );
    addTask(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i);
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
});

it("should render 3 tasks", () => {
    render(<MockTodo />);
    addTask(["Go Grocery Shopping1", "Go Grocery Shopping2", "Go Grocery Shopping3"])
    const divElements = screen.queryAllByTestId("task-container");
    expect(divElements.length).toBe(3)
})
```

## Hooks de testing

```ts
beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    jest.mock("../../../__mocks__/axios")
})

beforeAll(() => {
    console.log("RUNS ONCE BEFORE ALL TESTS")
})

afterEach(() => {
    console.log("RUNS AFTER EACH TEST")
})

afterAll(() => {
    console.log("RUNS ONCE AFTER ALL TESTS")
})
```

NOTA: si se usan dentro de un describe() los hooks solo seran aplicados a los bloques de test dentro de este