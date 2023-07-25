## **Waiting for appearance**

If you need to wait for an element to appear, the async wait utilities allow you to wait for an assertion to be satisfied before proceeding. 
The async methods return a Promise, so you must always use await or .then(done) when calling them.

1. Using findBy Queries

```js
    test('movie title appears', async () => {
        // element is initially not present...
        // wait for appearance and return the element
        const movie = await findByText('the lion king')
    })
```

2. Using waitFor

```js
    test('movie title appears', async () => {
        // element is initially not present...

        // wait for appearance inside an assertion
        await waitFor(() => {
            expect(getByText('the lion king')).toBeInTheDocument()
        })
    })
```

## **Waiting for disappearance**

The waitForElementToBeRemoved async helper function uses a callback to query for the element on each DOM mutation and resolves to true when the element is removed.

```js
    test('movie title no longer present in DOM', async () => {
        // element is removed
        await waitForElementToBeRemoved(() => queryByText('the mummy'))
    })
```

```js
    test('movie title goes away', async () => {
        // element is initially present...
        // note use of queryBy instead of getBy to return null
        // instead of throwing in the query itself
        await waitFor(() => {
            expect(queryByText('i, robot')).not.toBeInTheDocument()
        })
    })
```

## **Asserting elements are not present**

```js
// use `queryBy` to avoid throwing an error with `getBy`
const submitButton = screen.queryByText('submit')
expect(submitButton).toBeNull() // it doesn't exist
```

The length of the array can be useful for assertions after elements are added or removed from the DOM.

```js
const submitButtons = screen.queryAllByText('submit')
expect(submitButtons).toHaveLength(0) // expect no elements
```

not.toBeInTheDocument():  matcher, which can be used to assert that an element is in the body of the document, or not. This can be more meaningful than asserting a query result is null.

```js
    import '@testing-library/jest-dom'
    // use `queryBy` to avoid throwing an error with `getBy`
    const submitButton = screen.queryByText('submit')
    expect(submitButton).not.toBeInTheDocument()
```
