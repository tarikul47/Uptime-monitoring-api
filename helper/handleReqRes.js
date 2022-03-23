/*
 * Title: Handle Request Response
 * Description: Handle Resquest and response
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 11/15/2020
 *
 */
// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const handle = {};

handle.handleRequest = (req, res) => {
    // request handling 
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    console.log(req);

    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        //console.log(realData);
        // response handle
        res.end(realData);
    });
}

module.exports = handle;