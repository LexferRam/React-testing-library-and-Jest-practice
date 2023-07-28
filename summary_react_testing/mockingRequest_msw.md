# MSW (Mock service worker)

Setup:

* Install the package
```bash
npm install msw
```

* within the source folder, create a `src/mocks` folder

* create a `src/mocks/server.ts` file

* copiar el setUp server del adocumentacion <https://mswjs.io/docs/getting-started/integrate/node>

```js
// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handler'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
```

* create a `src/mocks/handlers.ts` file

```js
import { rest } from 'msw'

// aqui vamos a manejar todas las peticiones mocks que se hagan con su respectiva respuesta
export const handlers = [
    rest.get('/api', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
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
            ]),
        )
    }), 
] 
```

* add this to the `src/setupTests.ts` file

```js
// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }))

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
```

## MSW Error handling 

