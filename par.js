// Import the url module from Node.js
const url = require("url");

// Parse an URL string into its segments
// const myURL = url.parse(
//   "http://localhost:3000/pathname?search=test#hash",
//   true
// );

//console.log(myURL);
//console.log(myURL.query);

const urlObject = {
    protocol: 'http',
    hostname: 'localhost',
    port: 3000,
    pathname: '/pathname',
    query: { search: 'test' },
    hash: '#hash'
  };
  
  // Construct the URL
  const myURL = url.format(urlObject);
  
  console.log(myURL); //http://localhost:3000/pathname?search=test#hash

  