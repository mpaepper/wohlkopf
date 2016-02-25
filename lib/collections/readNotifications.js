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