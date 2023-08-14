const app = require('./app');
const http = require('http');

// Create server
server = http.createServer(app);

// Run and listen server
server.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
