//Create auth/login and auth/registration routes here
const authRoutes = function (fastify) {
    fastify.post('/auth/login', async (request, reply) => {
        const { username, password } = request.body;    
        // Add your login logic here
        reply.send({ message: `Auth User ${username} logged in successfully.` });
    });
    fastify.post('/auth/register', async (request, reply) => {
        const { username, password, email } = request.body;
        // Add your registration logic here
        reply.send({ message: `Auth User ${username} registered successfully.` });
    });
}

module.exports = authRoutes;