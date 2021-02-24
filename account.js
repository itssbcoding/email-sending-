const mailjet = require ('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
const sendEmail = mailjet.post("send")

const sendWelcomeEmail = (email, name) => {
    const emailData = {
        FromEmail: 'admin@easydevlopers.com',
        FromName: 'CEO Shubham Raj',
        Subject: 'Welcome to our Notes App.',
        'Text-part': `Welcome ${name}, to the Journey of EasyDevs where you'll find every Solution.`,
        Recipients: [{'Email': email}]
    }
    sendEmail.request(emailData)
}

const sendDeletingEmail = (email, name) => {
    const emailData = {
        FromEmail: 'admin@easydevlopers.com',
        FromName: 'Customer Care',
        Subject: 'Feedback',
        'Text-part': `Hi ${name}, sorry to see you go, please tell us why you are going by filling up a survey`,
        Recipients: [{'Email': email}]
    }
    sendEmail.request(emailData)
}

module.exports = {
    sendWelcomeEmail,
    sendDeletingEmail
}
