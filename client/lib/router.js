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
Router.route('/seiten/:topic', function () {
  this.render(this.params.topic);
}, {
    name: 'pages'
});
Router.route('/seiten/:topic/:subtopic', function () {
    var topic = this.params.topic;
    var subtopic = this.params.subtopic;
    var template = topic.concat("-").concat(subtopic);
    this.render(template);
}, {
    name: 'subpages'
});