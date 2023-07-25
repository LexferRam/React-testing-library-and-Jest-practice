# Query Methods

## **Screen**

Is a way to interact with the component that is rendered in the virtual DOM of the test, provides a set of methods to find elements in the DOM.

## **Query Methods**

|              |                  getBy                   |                                   findBy | queryBy                                  |                getAllBy                 |                               findAllBy |                              queryAllBy |
| ------------ | :--------------------------------------: | ---------------------------------------: | ---------------------------------------- | :-------------------------------------: | --------------------------------------: | --------------------------------------: |
| **No Match** |  <span style="color: red">error</span>   |    <span style="color: red">error</span> | null                                     |  <span style="color: red">error</span>  |   <span style="color: red">error</span> | <span style="color: green">array</span> |
| **1 Match**  | <span style="color: green">return</span> | <span style="color: green">return</span> | <span style="color: green">return</span> | <span style="color: green">array</span> | <span style="color: green">array</span> | <span style="color: green">array</span> |
| **1+ Match** |  <span style="color: red">error</span>   |    <span style="color: red">error</span> | <span style="color: red">error</span>    | <span style="color: green">array</span> | <span style="color: green">array</span> | <span style="color: green">array</span> |
| **Await**    |                    no                    |                                      yes | no                                       |                   no                    |                                     yes |                                      no |

## **Priority**

This order of priority is based on functions that emulate or most closely resemble the actions a user can take.

1. **Accesible by Everyone**

getByRole

getByLabelText

getByPlaceholderText

getByText

2. **Semantic Queries**

getByAltText

getByTitle

3. **Test ID**

getByTestId

---

**getByRole()**

```javascript
const h1Element = screen.getByRole("heading");
// name es el texto de la etiqueta
const h1Element = screen.getByRole("heading", { name: /todo/i });
```

**getByTitle()**

```javascript
// title es el atributo que se le puede asignar a un tag html
// Header es el valor del atributo title
const h1Element = screen.getByTitle("Header");
```

**getByTestId()**

```javascript
    // data-testid es el atributo que se le asigna a un tag html
    // header-2 es el valor del atributo data-testid
    const h2Element = screen.getByTestId("header-2");
```

**findByText()**

```javascript
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = await screen.findByText(/todo/i);
```

**queryByText()**

queryByText() retorna null si no encuentra el elemento.

```javascript
    render(
        <Header 
          title="todo"
        />
    );
    const h1Element = screen.queryByText(/todo/i);
    expect(h1Element).not.toBeInTheDocument()
```

**getAllByText()**

retorna un arreglo con el resultado de la busqueda.

```javascript
    render(
        <Header 
          title="todo"
        />
    );
    const h1Elements = screen.getAllByText(/todo/i);
    expect(h1Elements.length).toBe(1)
```