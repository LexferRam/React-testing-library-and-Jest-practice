# Test Debug

```javascript

    describe("Header", () => {
        it('should render same text passed into title prop', () => {
            render(
                <Header 
                title="todo"
                />
            );
            const h1Element = screen.getByText(/todo/i);
            console.log(prettyDOM(h1Element))
            screen.debug();
            expect(h1Element).toBeInTheDocument();
        });
    })
    
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