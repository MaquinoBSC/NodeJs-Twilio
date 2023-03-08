const accountSid = "";
const authToken = "";
const verifySid = "";
const client = require("twilio")(accountSid, authToken);

client.verify.v2
    .services(verifySid)
    .verifications.create({ to: "+525522959536", channel: "whatsapp" })
    .then((verification) => console.log(verification.status))
    .then(() => {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        readline.question("Please enter the OTP:", (otpCode) => {
            client.verify.v2
                .services(verifySid)
                .verificationChecks.create({ to: "+525522959536", code: otpCode })
                .then((verification_check) => console.log(verification_check.status))
                .then(() => readline.close());
        });
    })
    .catch((error) => {
        console.log(error);
    });