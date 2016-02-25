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