"use strict";

const url = require('url');
const http = require('http');

let quotes = require('./quotes.js');
let quoteRandomizer = require('./quote-randomizer.js');


http.createServer((request, response)=>{
    // if I want to query later?
    // var queryData = url.parse(request.url, true).query;
    // console.log(queryData,'queryData');
    //write headers
    response.writeHead(200, {'content-type': "text/plain"})  // format for api return
    // write body
    response.write(`Random Quote:\n\n${quoteRandomizer(quotes)}`)
    response.end(); // close connection
}).listen(3000); // where to listen
console.log('running @ http://localhost:3000')