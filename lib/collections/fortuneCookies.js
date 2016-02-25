FortuneCookies = new Mongo.Collection('fortuneCookies');

var Schemas = {};

Schemas.FortuneCookies = new SimpleSchema({
    wisdom: {
        type: String,
        label: "Text",
        max: 512
    },
    author: {
        type: String,
        label: "Author"
    }
});

FortuneCookies.attachSchema(Schemas.FortuneCookies);

if (Meteor.isServer) {
  Meteor.publish("fortuneCookies", function () {
    return FortuneCookies.find();
  });
}
 
if (Meteor.isClient) {
  Meteor.subscribe("fortuneCookies");
}