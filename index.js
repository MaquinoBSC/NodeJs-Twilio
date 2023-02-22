// Envio de mensajes desde el servidor

require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
        to: myPhoneNumber,
        from: '+13866663660',
    body: 'Hola Maquino, desde twilio',
})
.then((message) => {
    console.log(message.sid);
})
.catch((error) => {
    console.log(error);
});