const { randomBytes } = require("node:crypto");
const fs = require("fs");
const path = require("path");

const LOG_FILE_PATH = "/usr/app/shared/file.log";

const dir = path.dirname(LOG_FILE_PATH);
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

function generateRandomString(length) {
    return randomBytes(length/2).toString('hex');
}

const generatedString = generateRandomString(16);

console.log(`Random String: ${generatedString}`);

// Write the log entry to the file every 5 seconds
setInterval(() => {
    const timestamp = new Date().toISOString();
    const content = `${timestamp} ${generatedString}\n`;

    fs.appendFile(LOG_FILE_PATH, content, err => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            console.log(`[${timestamp}] Wrote log entry to file`);
        }
    });
}, 5000);
