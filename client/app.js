Template.body.helpers({
    fortuneCookies: function () {
        return FortuneCookies.find();
    },
    getRandomFortuneCookie: function () {
        return Session.get('fortuneCookie');
    }
});

Template.body.events({
    'click #fortuneCookieButton': function () {
        if (!Session.get('fortuneCookie')) {
            var allFortuneCookies = FortuneCookies.find().fetch();
            var cookie = Random.choice(allFortuneCookies);
            Session.set('fortuneCookie', cookie);
            jQuery('#fortuneCookieButton').hide();
        }
    }
});