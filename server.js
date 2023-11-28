const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = `https://api.porssisahko.net/v1/latest-prices.json`;

const options = {
	method: 'GET'
};


const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/get_prices', (req, res) => { //Line 9

// promise syntax
fetch(url, options)
.then(resp => resp.json())
.then(json => {console.log(json);res.send(json)})
.catch(err => console.error('error:' + err));
// // async await syntax
// try {
// 	const res = await fetch(url, options);
// 	const json = await res.json();
// 	console.log(json);
// } catch (err) {
// 	console.log(err);
// }

  // res.send({ prices: json }); //Line 10
}); //Line 11