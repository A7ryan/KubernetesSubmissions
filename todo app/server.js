const http = require("http")

const PORT = process.env.PORT || 7000;

const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello from the todo app!");
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
