ReadNotifications = new Mongo.Collection('readNotifications');

var Schemas = {};

Schemas.ReadNotifications = new SimpleSchema({
    userId: {
        type: String,
        label: "UserID"
    },
    notificationId: {
        type: String,
        label: "NotificationID"
    },
    date: {
        type: Date,
        label: "Date",
        defaultValue: new Date()
    }
});

ReadNotifications.attachSchema(Schemas.ReadNotifications);

Meteor.methods({
    markNotificationAsRead: function (notificationId) {
        check(Meteor.userId(), String);
        check(notificationId, String);
        var readNotificationId = ReadNotifications.insert({notificationId: notificationId, userId: Meteor.userId()});
        return {
            _id: readNotificationId
        };
    }
});