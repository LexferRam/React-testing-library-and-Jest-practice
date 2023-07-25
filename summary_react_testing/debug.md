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