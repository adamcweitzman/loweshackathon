angular.module('starter.services', [])

.factory('Listings', function() {
  var listings = [{
    id: 1,
    categoryId: 1,
    imagePath: 'img/ben.png'
  }, {
    id: 2,
    categoryId: 1,
    imagePath: 'img/ben.png'
  }, {
    id: 3,
    categoryId: 1,
    imagePath: 'img/ben.png'
  }, {
    id: 4,
    categoryId: 1,
    imagePath: 'img/ben.png'
  }, {
    id: 5,
    categoryId: 1,
    imagePath: 'img/ben.png'
  }];

  return {
    all: function() {
      return listings;
    },
    get: function(listingId) {
      for (var i = 0; i < chats.length; i++) {
        if (listings[i].id === parseInt(listingId, 10)) {
          return listings[i];
        }
      }
      return null;
    }
  };
})

.factory('Categories', function() {
  var categories = [{
    id: 1,
    name: 'Bathroom'
  }, {
    id: 2,
    name: 'Kitchen'
  }, {
    id: 3,
    name: 'Living Room'
  }];

  return {
    all: function() {
      return categories;
    },
    get: function(categoryId) {
      for (var i = 0; i < chats.length; i++) {
        if (categories[i].id === parseInt(categoryId, 10)) {
          return categories[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId, 10)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
