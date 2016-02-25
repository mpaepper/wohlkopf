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
        return getUnreadNotifications();
    },
    notificationsCount: function () {
        var coll = getUnreadNotifications();
        var count = coll.count();
        if (count > 0) {
            return count;
        } else {
            return ''; // To use Bootstrap auto-collapse functionality for badges
        }
    }
});

Template.notifications.onCreated(function () {
    this.subscribe('notifications');
});

Template.notification.events({
    'click .notification': function () {
        // TODO Make server function to make this secure
        ReadNotifications.insert({notificationId: this._id, userId: Meteor.userId()});
    }
});

accountsUIBootstrap3.setLanguage('de');

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});