/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Tarikul Islam
 * Date: 3/23/2022
 */

// dependencies
const http = require('http');
const { handleRequest } = require('./helper/handleReqRes');



// app object - module scaffolding 
const app = {};

// configuration
app.config = {
    port: 4000
};

// create server 
app.createServer = () => {
    const server = http.createServer(app.handleRequest);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
}

// Handle Request Resposne
app.handleRequest = handleRequest;

// start the server 
app.createServer();