const nodemailer = require('nodemailer');
const Imap = require('imap');
const simpleParser = require('mailparser').simpleParser;

// Email account configuration
const senderEmail = 'justin2013pdx@gmail.com';
const senderPassword = 'Sunglasses19';
const recipientEmail = 'topperbrown2k@gmail.com';

// Configuration for IMAP server (Gmail in this example)
const imapConfig = {
  user: senderEmail,
  password: senderPassword,
  host: 'imap.gmail.com',
  port: 993,
  tlsOptions: {
    rejectUnauthorized: false
}
};

// Configuration for SMTP server (Gmail in this example)
const smtpConfig = {
  service: 'gmail',
  auth: {
    user: senderEmail,
    pass: senderPassword,
  },
  tlsOptions: {
    rejectUnauthorized: false
}
};

async function checkForConfirmation() {
  try {
    // Connect to the IMAP server
    const imap = new Imap(imapConfig);

    imap.once('ready', () => {
      imap.openBox('INBOX', true, (err) => {
        if (err) {
          console.error('Error opening mailbox:', err);
          imap.end();
          return;
        }

        // Search for confirmation emails (modify search criteria as needed)
        const searchCriteria = ['UNSEEN', ['FROM', 'noreply@email.apple.com']];
        const fetchOptions = { bodies: ['TEXT'] };

        imap.search(searchCriteria, (err, results) => {
          if (err) {
            console.error('Error searching for emails:', err);
            imap.end();
            return;
          }

          const messageCount = results.length;
          console.log(`Found ${messageCount} confirmation emails.`);

          results.forEach((emailId) => {
            const fetch = imap.fetch(emailId, fetchOptions);
            fetch.on('message', (msg) => {
              msg.on('body', (stream) => {
                simpleParser(stream, async (err, parsedEmail) => {
                  if (err) {
                    console.error('Error parsing email:', err);
                    return;
                  }

                  // Create a new email to forward
                  const transporter = nodemailer.createTransport(smtpConfig);

                  const mailOptions = {
                    from: senderEmail,
                    to: recipientEmail,
                    subject: 'Forwarded Confirmation',
                    text: parsedEmail.text,
                  };

                  // Send the forwarded email
                  await transporter.sendMail(mailOptions);

                  console.log('Confirmation email forwarded.');
                });
              });
            });
          });

          // Close the IMAP connection
          imap.end();
        });
      });
    });

    imap.connect();
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = checkForConfirmation;
