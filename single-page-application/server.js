const http = require("http")

const PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "User";

const server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!Doctype>
        <html>
            <head>
                <meta charset="utf-8">
                <title>1.5. The project</title>
            </head>
            <body>
                <h2 align="center">Grettings, ${NAME}!</h2>
                <footer align="center">Have a good day..</footer>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
