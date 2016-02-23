Meteor.startup(function () {
    // TODO Register mailgun data for sending emails
    smtp = {
      username: 'todo',
      password: 'todo',
      server:   'mailgun',
      port: 587
   };

    Accounts.emailTemplates.siteName = "Wohlkopf";
    Accounts.emailTemplates.from = "Wohlkopf <info@wohlkopf.de>";
    Accounts.emailTemplates.verifyEmail.subject = function (user) {
        return "Ein wohliges Moin Moin " + user.username;
    };
    Accounts.emailTemplates.verifyEmail.text = function (user, url) {
       return "Hallo " + user.username + ",\n\n" +
               "wir freuen uns, dass Du ein Teil der Wohlkopf Community wirst!\n\n" +
         "Bitte bestätige Deine E-Mail Adresse durch Klicken des untenstehenden Links:\n\n"
         + url + "\n\n\n" +
         "Fröhliche Grüße von Wohlkopf (http://www.wohlkopf.de)";
    };
    
  //process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});