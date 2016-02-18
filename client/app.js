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
        Meteor.setTimeout(function(){Session.set('fortuneCookie', '')}, 7000);
    }
});