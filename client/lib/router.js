Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.render('home');
}, {
    name: 'home'
});
Router.route('insertCookie', function () {
    this.render('insertCookieForm');
}, {
    name: 'insertCookie'
});