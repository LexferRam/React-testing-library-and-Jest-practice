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
