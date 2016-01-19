Meteor.startup(function () {
    // If there are no fortune cookies, create some test data
    if (FortuneCookies.find().count() === 0) {

        var sampleFortuneCookies = [
            {
                wisdom: 'All our knowledge has its origin in our perceptions.',
                author: 'Leonardo Da Vinci'
            },
            {
                wisdom: 'For the best return on your money, pour your purse into your head.',
                author: 'Benjamin Franklin'
            },
            {
                wisdom: 'To get answers of life, ask questions.',
                author: 'Sukant Ratnakar'
            },
            {
                wisdom: 'It is not as much about who you used to be, as it is about who you choose to be.',
                author: 'Sanhita Baruah'
            },
            {
                wisdom: 'Let him who would move the world first move himself.',
                author: 'Socrates'
            }
        ];

        _.each(sampleFortuneCookies, function (fortuneCookie) {
            FortuneCookies.insert(fortuneCookie);
        });
    }
});
