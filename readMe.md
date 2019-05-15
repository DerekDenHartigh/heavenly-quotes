I should probably add a how to here:
    this uses node.js, so you'll need that, maybe run an npm init?  I'm not sure, quite new to all this.
    I'd get it running with "node server.js" (sans quotes) in the terminal, then ctrl click the console logged link to open it, or manually go to the specified http://localhost:3000.
    hit refresh to generate a new random quote.
    thats about all there is.

Additional tasks:
    - create an additional module that contains a function to get a random item from an array
- add a check using the `url` module that looks for `?id=<number>`, and id is set, return that index from the array, instead of a random one.
    - make the quotes objects, where the object is `{quote: 'string', quoteBy: 'string', quoteYear: number}` (edited) - done, but I don't really want to go through and put all that data in.