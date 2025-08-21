const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

let counter = 0;
app.get("/pingpong", (req, res) => {
	++counter;
	const data = {
		pong: counter
	};
	res.json(data);
});

app.listen(PORT, '0.0.0.0', () => {

});
