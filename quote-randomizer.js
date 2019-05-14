"use strict";

quoteRandomizer = (quotes)=>{ // quotes is an array of quote strings
    let index = Math.floor(Math.random()*quotes.length) // index # of quote to display
    let randomQuote = quotes[index];
    return randomQuote;
}

module.exports = quoteRandomizer();