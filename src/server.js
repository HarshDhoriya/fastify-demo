
class Server {
    constructor() {
        this.fastify = require('fastify')({
            logger: true
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