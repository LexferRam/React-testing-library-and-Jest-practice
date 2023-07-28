# Mocking Request

**why mocking request?**

1. Request cost money.
2. Request are slow.
3. Our tests should not depend on external services.

we need to mock the request of "axios.get("https://randomuser.me/api/?results=5")" in order to test our code.
we dont need to actually  make the request, we just need to mock it.


1. crear carpeta llamada: __mocks__
  * Instalar "jest-fetch-mock": "^3.0.3",
2. dentro crear un archivo con el mismo nombre de los que queremos hacer mock: axios.js
3. hacer un export default con el método **get**:

```js
const mockResponse = { 
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/59.jpg"
                },
                login: {
                    username: "ThePhonyGOAT"
                }
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}
```