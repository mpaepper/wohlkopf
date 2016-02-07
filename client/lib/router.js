Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.render('home');
}, {
    name: 'home'
});
Router.route('homeExplanation', function () {
    this.render('homeExplanation');
}, {
    name: 'homeExplanation'
});
Router.route('insertCookie', function () {
    this.render('insertCookieForm');
}, {
    name: 'insertCookie'
});