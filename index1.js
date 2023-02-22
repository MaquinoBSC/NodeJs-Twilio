require('dotenv').config();
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse; // Permite recibir mensajes desde twilio

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    twiml.message('He recibido tu mensaje');

    res.writeHead(200, { 'Content-Type': 'txt/xml' });
    res.end(twiml.toString());
});

app.listen(4000, () => {
    console.log('Server on port 4000');
})