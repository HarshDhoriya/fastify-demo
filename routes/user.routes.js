// Define user login and registration routes here
const userRoutes = function (fastify) {


    fastify.post('/login', {
        schema: {
            description: 'User Login',
            tags: ['user'],
            summary: 'Use this API for user login',
            
            body: {
                type: 'object',
                properties: {
                    username: {
                        type: 'string',
                        description: 'provide username'
                    },
                    password: {
                        type: 'string',
                        description: 'provide password'
                    }
                    }
                }
            }
        },
    async (request, reply) => {
        const { username, password } = request.body;
        // Add your login logic here
        reply.send({ message: `User ${username} logged in successfully.` });
    });

    // Declare a route
    fastify.get('/', function (req, reply) {
        fastify.pg.query(
            'SELECT * FROM public.users',
            function onResult (err, result) {
                reply.send(err || result)
            }
        )
    })

    fastify.post('/', function (req, res) {
        const { body } = req;
        console.log
        res.send({ body: body, username: body.username, password: body.password });
    })
}

module.exports = userRoutes;