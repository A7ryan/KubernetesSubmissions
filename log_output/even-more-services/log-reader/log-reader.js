const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 8080;

const LOG_FILE_PATH = "/usr/app/shared/file.log";

app.get("/", (req, res) => {
    if (!fs.existsSync(LOG_FILE_PATH)) {
        return res.status(200).send("<html><body><h2 align='center'>Logs are not yet available. Please wait a moment.</h2></body></html>");
    }

    fs.readFile(LOG_FILE_PATH, { encoding: "utf-8" }, (err, data) => {
        if (err) {
            console.error('Error reading log file:', err);
            return res.status(500).send("Error reading log file");
        }
        
        res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Logs Viewer</title>
                </head>
                <body>
                    <h2 align="center">Log Output</h2>
                    <pre style="background-color: #f4f4f4; padding: 20px; border: 1px solid #ddd;">${data}</pre>
                </body>
            </html>
        `);
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("Log Reader App running successfully on port", PORT);
});
