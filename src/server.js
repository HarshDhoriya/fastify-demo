
class Server {
    constructor() {
        this.fastify = require('fastify')({
            logger: true
        });
    }
    async configureSwagger(swagger, swaggerConfig) {
        await this.fastify.register(swagger, swaggerConfig);
        await this.fastify.register(require('@fastify/swagger-ui'), {
            routePrefix: '/documentation',
            uiConfig: {
                docExpansion: 'full',
                deepLinking: false
            },
            uiHooks: {
                onRequest: function (request, reply, next) { next() },
                preHandler: function (request, reply, next) { next() }
            },
            staticCSP: true,
            transformStaticCSP: (header) => header,
            transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
            transformSpecificationClone: true
        });
    }
    bootstrap(){
        console.log("Bootstrapping the server...");
        // Run the server!
        this.fastify.listen({ port: 3000 }, function (err, address) {
            if (err) {
                this.fastify.log.error(err)
                process.exit(1)
            }
            console.log(`Server is now listening on ${address}`);
        });
        return this.fastify;
    }
    setRoutes(routesFunction) {
        routesFunction(this.fastify);
    }
}
const serverInstance = new Server();

module.exports = serverInstance;