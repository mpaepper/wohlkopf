Meteor.startup(function () {
    // If there are no fortune cookies, create some test data
    if (FortuneCookies.find().count() === 0) {

        var sampleFortuneCookies = [
            {
                wisdom: 'All unser Wissen hat seinen Ursprung in unser Wahrnehmung.',
                author: 'Leonardo Da Vinci'
            },
            {
                wisdom: 'Um am meisten aus Deinem Geld zu machen, nutze es um Neues zu lernen.',
                author: 'Benjamin Franklin'
            },
            {
                wisdom: 'Um die Antworten des Lebens zu finden, stelle Fragen.',
                author: 'Sukant Ratnakar'
            },
            {
                wisdom: 'Es geht nicht so sehr darum wer Du mal warst, sondern darum wofür Du Dich entscheidest zu sein.',
                author: 'Sanhita Baruah'
            },
            {
                wisdom: 'Lasse ihn der die Welt verändern will zunächst sich selbst verändern.',
                author: 'Socrates'
            }
        ];

        _.each(sampleFortuneCookies, function (fortuneCookie) {
            FortuneCookies.insert(fortuneCookie);
        });
    }
});
