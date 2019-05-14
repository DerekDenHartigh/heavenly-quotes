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
    response.writeHead(200, {'content-type': "text/html"})  // format for api return
    // write body
    response.write(`
    <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet">
    <div style="width: 100%; height:100%; display:flex; flex-direction: column; justify-content: center;
        align-content: center; justify-items: center; align-items: center;
        font-family: 'Caveat', cursive; font-size: 2em; background-color: #81A0BB;">
        <h1 style="margin: 0px; padding: 0px; display:flex; color: #602C62">Random Quote:</h1>
        <br>
        <p style="margin: 0px; text-align: center; display: flex;  color: #602C62">${quoteRandomizer(quotes)}</p>
    <div>
    `)
    response.end(); // close connection
}).listen(3000); // where to listen
console.log('running @ http://localhost:3000')