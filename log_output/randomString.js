// Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp. e.g.
// Ref 1: https://stackoverflow.com/questions/46588994/how-to-use-setinterval-and-clearinterval-in-nodejs
// Ref 2: https://seankegel.com/quick-tip-use-node-to-create-random-strings

const { randomBytes } = require("node:crypto");

function generateRandomString(length) {
    // if we do not add len/2 it will generate len*2 char string
	return randomBytes(length/2).toString('hex');
}

const generatedString = generateRandomString(16);

setInterval(() => {
	const timestamp = new Date().toISOString();
	console.log(`[${timestamp}] Random String: ${generatedString}`);
}, 5000);
