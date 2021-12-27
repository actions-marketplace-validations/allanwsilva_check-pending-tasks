const sgMail = require("@sendgrid/mail");

require('dotenv').config();

/**
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    app.log("The app was loaded!");

    app.on("issues.opened", async (context) => {

        console.log(context);

        app.log("Issue event triggered");

        console.log(process.env.SENDGRID_API_KEY);

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        let msg = {
            to: 'allanwsilva@gmail.com',
            from: 'siscredor@siscredor.com.br',
            subject: 'Check out these Pending Github tasks',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>'
        };
        // sgMail
        //     .send(msg)
        //     .then(() => {
        //         app.log('ALL GOOD!!!');
        //     }, error => {
        //         console.error(error);
        //
        //         if (error.response) {
        //             console.error(error.response.body)
        //         }
        //     });
        console.log('blah');
        return context.octokit.issues.createComment(
            context.issue({body: "Hello, World!"})
        );
    });
};
