// Define user login and registration routes here
const userRoutes = function (fastify) {


    fastify.post('/login', async (request, reply) => {
        const { username, password } = request.body;
        // Add your login logic here
        reply.send({ message: `User ${username} logged in successfully.` });
    });

    // Declare a route
    fastify.get('/', function (req, reply) {
        reply.send({ hello: 'world' })
    })

    fastify.post('/', function (req, res) {
        const { body } = req;
        console.log
        res.send({ body: body, username: body.username, password: body.password });
    })
}

module.exports = userRoutes;