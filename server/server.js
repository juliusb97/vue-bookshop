const express = require("express");

const app = express();
const PORT = 9400;

console.log(`Test Server bookshop listening on ${PORT}`);

app.get("/", (req, res) => {

	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*");

	const books = [
		{
			title: "In Cold Blood",
			author: "Truman Capote",
			price: 6.99
		},
		{
			title: "A Brief History Of Time",
			author: "Steven Hawking",
			price: 9.99
		},
		{
			title: "Wer wir waren",
			author: "Roger Willemsen",
			price: 5.99
		}
	];

	console.log("Sent books");

	res.send(books);

});

app.listen(PORT);