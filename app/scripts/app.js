function generateTweets(){
  var data = [
    {
      name: 'Claudine Zillmann',
      handle: '@etteClaudette',
      activity: 'started learning polymer!',
      time: 'a moment ago',
      image: 'http://2.gravatar.com/avatar/a4b44835358d27fe87a3a5047e4c185d'
    },
    {
      name: 'Marcel Vaterott',
      handle: '@steveVata',
      activity: 'is turning into a Ninja',
      time: '5 hours ago'
    },
    {
      name: 'Hendrik Ebbers',
      handle: '@hendrikEbbers',
      activity: 'left for vacation :-D',
      time: 'one week ago',
      image: 'http://www.guigarage.com/wordpress/wp-content/uploads/2014/03/hendrik_ebbers.jpeg'
    }
  ];

  for(var i = 0; i < 50; i++){
    data.push({
      name: faker.name.findName(),
      handle: '@'+faker.internet.userName(),
      activity: faker.hacker.phrase(),
      time: faker.date.recent(),
      image: faker.internet.avatar()
    });
  }
  return data;
}


(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Yo, Polymer App!';

  function home() {
    app.route = 'home';
  }
  function tweets() {
    app.route = 'tweets';
  }
  function foo() {
    app.route = 'foo';
  }
  page('/', home);
  page('/tweets', tweets);
  page('/foo', foo);
  page({hashbang: true});

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });


// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));

