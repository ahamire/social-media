const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

const privateKey = fs.readFileSync(path.join(__dirname, 'path/to/private-key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'path/to/certificate.pem'), 'utf8');

const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3000, () => {
  console.log('Server running on https://localhost:3000');
});
