Meteor.publish("fortuneCookies", function () {
    return FortuneCookies.find({}, {limit: 10});
});

Meteor.startup(function () {
    Meteor.publish("notifications", getUnreadNotifications);
});

Meteor.publish("readNotifications", function () {
    return ReadNotifications.find({'userId': this.userId}, {sort: {date: -1}});
});