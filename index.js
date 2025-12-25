const swagger = require('@fastify/swagger')
const swaggerConfig = require('./src/config/swagger.config');
require('dotenv').config();

const myServer = require('./src/server');
const userRoutes  = require('./routes/user.routes');
const authRoutes  = require('./routes/auth.routes');

///
myAsyncFunction = async() =>{
    await myServer.configureSwagger(swagger, swaggerConfig);
    myServer.connectDB(require('./src/config/db.config'));
    myServer.setRoutes(userRoutes);
    myServer.setRoutes(authRoutes);
    myServer.bootstrap();

}

myAsyncFunction();

