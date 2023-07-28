# Assertions

When a writing tests, we often need to check that values meet certain conditions, assertions decide if a test passes or fail.

**expect(value)** is the argument should be the value that your code produces, typically, you will use the expect function with a matcher function to assert something about a value.

Docs matchers: 
* Jest <https://jestjs.io/docs/using-matchers>
* Jest-Dom <https://github.com/testing-library/jest-dom>
**jest-dom** adds custom jest matchers for asserting on DOM nodes

```js

    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)

```


```js

    toBeDisabled()
    toBeEnabled()
    toBeEmptyDOMElement()
    toBeInTheDocument()
    toBeInvalid()
    toBeRequired()
    toBeValid()
    toBeVisible()
    toContainElement()
    toContainHTML()
    toHaveAccessibleDescription()
    toHaveAccessibleErrorMessage()
    toHaveAccessibleName()
    toHaveAttribute()
    toHaveClass()
    toHaveFocus()
    toHaveFormValues()
    toHaveStyle()
    toHaveTextContent()
    toHaveValue()
    toHaveDisplayValue()
    toBeChecked()
    toBePartiallyChecked()
    toHaveErrorMessage()

```

## Filter tests

use test.only() y test.skip(), examples:

```js

    test.only("...", () => {
        // this test will run
    })

    test.skip("...", () => {
        // this test will be skipped
    })

```