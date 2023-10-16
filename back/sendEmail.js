const axios = require('axios');

let sendEmail = async (email) =>{
       let data = {
       "sender": {
          "name": "FinalDoc",
          "email": `sss@finaldoc.io`
       },
       "to": [
          {
             "email": "yomama@gmail.com",
             "name": "Recipitent"
          }
       ],
       "subject": `Subject`,
       "htmlContent": `Email Body`
       };

       axios.post('https://api.brevo.com/v3/smtp/email', data, { headers })
         .then(function (response) {
            console.log('Email Sent Sucessfully', response);
         }).catch(function (error) {
            console.log(error);
         });
    }

module.exports = sendEmail;