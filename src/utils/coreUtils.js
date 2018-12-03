const sgMail = require('@sendgrid/mail');

export const getEnvironment = () => {
    return process.env.NODE_ENV || 'development';
};

export const sendEmail = async (sandgrid_api_key, leadData) => {

    //const firstName = leadData.find(f => f.key === 'firstName').value;
    //const lastName = leadData.find(f => f.key === 'lastName').value;
    const email = leadData.find(f => f.key === 'email').value;
    //const phone = leadData.find(f => f.key === 'phone').value;

    sgMail.setApiKey(sandgrid_api_key);
    const msg = {
        to: email,
        from: 'orassayag@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    };

    let response = null;
    try {
        //response = await sgMail.send(msg);
        console.log(msg);
    } catch (err) {
        return err.message;
    }
    return response;
};