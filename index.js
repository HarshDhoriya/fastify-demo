
const myServer = require('./src/server');
const userRoutes  = require('./routes/user.routes');
const authRoutes  = require('./routes/auth.routes');


///
myServer.setRoutes(userRoutes);
myServer.setRoutes(authRoutes);
myServer.bootstrap();

///