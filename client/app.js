Template.fortuneCookies.helpers({
    getRandomFortuneCookie: function () {
        return Session.get('fortuneCookie');
    }
});

Template.fortuneCookies.events({
    'click #fortuneCookieButton': function () {
        var allFortuneCookies = FortuneCookies.find().fetch();
        var cookie = Random.choice(allFortuneCookies);
        Session.set('fortuneCookie', cookie);
        Meteor.setTimeout(function () {
            Session.set('fortuneCookie', '');
        }, 7000);
    }
});

Template.notifications.helpers({
    notifications: function () {
        return Notifications.find({}, {sort: {date: -1}});
    },
    notificationsCount: function () {
        var count = Notifications.find().count();
        if (count > 0) {
            return count;
        } else {
            return ''; // To use Bootstrap auto-collapse functionality for badges
        }
    }
});

Template.notifications.onCreated(function () {
    var self = this;
    $today = new Date();
    $yesterday = new Date($today);
    $yesterday.setDate($today.getDate() - 1);
    // TODO Make sure to not show notifications more than once
    self.autorun(function () {
        self.subscribe('notifications', $yesterday);
    });
});


accountsUIBootstrap3.setLanguage('de');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});