angular.module('starter.services', [])

.factory('Listings', function() {
  var listings = [{
    id: 1,
    categoryId: 1,
    name: 'Listing 1',
    imagePath: 'img/ben.png'
  }, {
    id: 2,
    categoryId: 1,
    name: 'Listing 2',
    imagePath: 'img/ben.png'
  }, {
    id: 3,
    categoryId: 1,
    name: 'Listing 3',
    imagePath: 'img/ben.png'
  }, {
    id: 4,
    categoryId: 1,
    name: 'Listing 4',
    imagePath: 'img/ben.png'
  }, {
    id: 5,
    categoryId: 1,
    name: 'Listing 5',
    imagePath: 'img/ben.png'
  }];

  return {
    all: function() {
      return listings;
    },
    get: function(listingId) {
      for (var i = 0; i < listings.length; i++) {
        if (listings[i].id === parseInt(listingId, 10)) {
          return listings[i];
        }
      }
      return null;
    },
    getByCategoryId: function(categoryId) {
      var out = [];
      for (var i = 0; i < listings.length; i++) {
        if (listings[i].categoryId === parseInt(categoryId, 10)) {
          out.push(listings[i]);
        }
      }
      return out;
    }
  };
})

.factory('Categories', function() {
  var categories = [{
    id: 1,
    name: 'Bathroom',
    imagePath: 'img/ben.png'
  }, {
    id: 2,
    name: 'Kitchen',
    imagePath: 'img/ben.png'
  }, {
    id: 3,
    name: 'Living Room',
    imagePath: 'img/ben.png'
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

.factory('Products', function() {
  var products = [  
      {  
         "networkPrice":"1321.63",
         "description":"Whitehaven 21.5625-in x 35.6875-in White Single-Basin Cast Iron Apron Front/Farmhouse Commercial/Residential Kitchen Sink",
         "brand":"KOHLER",
         "productId":50065393,
         "itemNumber":"548035",
         "modelId":"6489-0",
         "vendorNumber":"20602",
         "rating":5.0,
         "reviewCount":1,
         "imageUrls":{  },
         "type":"LOCALONLY",
         "mulQuantity":0,
         "minQuantity":0,
         "disclaimer":"Does not include faucet or drain",
         "links":[  ],
         "position":1
      },
      {  
         "networkPrice":"199.0",
         "description":"Savile Stainless 1-Handle Pull-Down Kitchen Faucet",
         "brand":"Delta",
         "productId":3195915,
         "itemNumber":"5365",
         "modelId":"19949-SSSD-DST",
         "vendorNumber":"72981",
         "rating":4.6761,
         "reviewCount":460,
         "imageUrls":{  },
         "type":"ANY",
         "mulQuantity":-1,
         "minQuantity":-1,
         "disclaimer":"In-use/lifestyle images - faucet only",
         "links":[  ],
         "position":2
      },
      {  
         "networkPrice":"824.25",
         "description":"Whitehaven 21.5625-in x 29.6875-in White Single-Basin Cast Iron Apron Front/Farmhouse Commercial Kitchen Sink",
         "brand":"KOHLER",
         "productId":4780021,
         "itemNumber":"498598",
         "modelId":"6487-0",
         "vendorNumber":"20602",
         "rating":5.0,
         "reviewCount":1,
         "imageUrls":{  },
         "type":"LOCALONLY",
         "mulQuantity":-1,
         "minQuantity":-1,
         "disclaimer":"Does not include faucet or drain",
         "links":[  ],
         "position":3
      },
      {  
         "networkPrice":"133.0",
         "description":"Concord 30-in W x 30-in H x 12-in D Finished White Double Door Kitchen Wall Cabinet",
         "brand":"Kitchen Classics",
         "productId":50143016,
         "itemNumber":"58039",
         "modelId":"23 W3030B",
         "vendorNumber":"66150",
         "rating":3.5455,
         "reviewCount":11,
         "imageUrls":{  },
         "type":"LOCALONLY",
         "mulQuantity":0,
         "minQuantity":0,
         "links":[  ],
         "position":4
      },
      {  
         "networkPrice":"199.0",
         "description":"Fresco Stainless Steel 1-Handle Pull-Down Kitchen Faucet",
         "brand":"Giagni",
         "productId":3878899,
         "itemNumber":"130203",
         "modelId":"PD180-SS",
         "vendorNumber":"52361",
         "rating":4.4706,
         "reviewCount":153,
         "imageUrls":{  },
         "type":"ANY",
         "mulQuantity":-1,
         "minQuantity":-1,
         "disclaimer":"In use/lifestyle image - accessories not included",
         "links":[  ],
         "position":5
      }
   ];

  return {
    all: function(){
      return products;
    }
  };

});

/*

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
*/
