const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const NAME = process.env.NAME || "User";

app.get("/", (req, res) => {
    res.status(200).set("Message", "Success");
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>1.8. The project</title>
            </head>
            <body>
                <h2 align="center">Grettings, ${NAME}!</h2>
                <footer align="center">Have a good day..</footer>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server started in port ${PORT}`);
});
