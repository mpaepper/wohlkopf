Notifications = new Mongo.Collection('notifications');

var Schemas = {};

Schemas.Notifications = new SimpleSchema({
//    type: {
//        type: String,
//        label: "Text",
//        max: 45
//    },
    text: {
        type: String,
        label: "Author"
    },
    url: {
        type: String,
        label: "Url"
    },
    date: {
        type: Date,
        label: "Date",
        defaultValue: new Date()
    }
});

Notifications.attachSchema(Schemas.Notifications);

Meteor.startup(function () {
    getUnreadNotifications = function () {
        var today = new Date();
        var date = new Date(today);
        date.setDate(today.getDate() - 7);
        var userId = this.userId;
        if (Meteor.isClient) {
            userId = Meteor.userId();
        }
        var arrayRead = ReadNotifications.find({'date': {$gte: date}, 'userId': userId}, {fields: {'notificationId': 1}}).fetch();
        var readNotifications = arrayRead.map(function (s) {
            return s.notificationId;
        });
        return Notifications.find({'date': {$gte: date}, '_id': {$nin: readNotifications}}, {sort: {date: -1}, limit: 10});
    };
});