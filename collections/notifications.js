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
        label: "Date"
    }
});

Notifications.attachSchema(Schemas.Notifications);

if (Meteor.isServer) {
    Meteor.publish("notifications", function (date) {
        return Notifications.find({'date': {$gte: date}});
    });
}