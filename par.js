// Import the url module from Node.js
const url = require("url");

// Parse an URL string into its segments
const myURL = url.parse(
  "https://www.youtube.com/watch?v=Nt-AsZh5woE&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo&index=8&t=1078s&ab_channel=PiyushGarg",
  true
);

console.log(myURL);
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
  //const myURL = url.format(urlObject);
  
  //console.log(myURL); //http://localhost:3000/pathname?search=test#hash

  