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
//    url: {
//        type: String,
//        label: "Url"
//    },
    date: {
        type: Date,
        label: "Date",
        defaultValue: new Date()
    }
});

Notifications.attachSchema(Schemas.Notifications);

if (Meteor.isServer) {
    Meteor.publish("notifications", function (date) {
        // Filter out already read notifications
        var arrayRead = ReadNotifications.find({'date': {$gte: date}, 'userId': this.userId}, {fields: {'notificationId': 1}}).fetch();
        var readNotifications = arrayRead.map(function (s){ return s.notificationId; });
        return Notifications.find({'date': {$gte: date}, '_id': {$nin: readNotifications}}, {sort: {date: -1}});
    });
}