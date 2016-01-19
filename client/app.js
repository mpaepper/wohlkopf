Template.body.helpers({
  
  fortuneCookies: function() {
    return FortuneCookies.find();
  },
  
  getRandomFortuneCookie: function() {
      var allFortuneCookies = FortuneCookies.find().fetch();
      return Random.choice(allFortuneCookies);
  }
  
});