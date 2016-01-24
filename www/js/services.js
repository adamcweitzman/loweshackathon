angular.module('starter.services', [])


.factory('Listings', function() {
  var listings = [{
    id: 1,
    categoryId: 1,
    name: 'The Mike',
    imagePath: 'img/bathroom_one.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 2,
    categoryId: 1,
    name: 'The Ryan',
    imagePath: 'img/bathroom_two.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 3,
    categoryId: 1,
    name: 'The Ale',
    imagePath: 'img/bathroom_three.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 4,
    categoryId: 1,
    name: 'The Adam',
    imagePath: 'img/bathroom_four.jpeg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 5,
    categoryId: 2,
    name: 'Chef\'s Kitchen',
    imagePath: 'img/kitchen_one.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 6,
    categoryId: 2,
    name: 'Charlie\'s Kitchen',
    imagePath: 'img/kitchen_two.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 7,
    categoryId: 2,
    name: 'Kitchen\'s Deli',
    imagePath: 'img/kitchen_three.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 8,
    categoryId: 2,
    name: 'Highland Kitchen',
    imagePath: 'img/kitchen_four.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 9,
    categoryId: 2,
    name: 'Corner Kitchen',
    imagePath: 'img/kitchen_five.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 10,
    categoryId: 3,
    name: 'Den',
    imagePath: 'img/lroom_one.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 11,
    categoryId: 3,
    name: 'Cellar',
    imagePath: 'img/lroom_two.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
  }, {
    id: 12,
    categoryId: 3,
    name: 'Foyer',
    imagePath: 'img/lroom_three.jpg',
    description: 'Duis consequat sem sed sapien semper, a convallis elit ornare. Nam rutrum lorem urna. Ut dignissim nec dui nec dignissim. Sed egestas congue sodales. Praesent vulputate, mauris nec tincidunt dignissim, felis est luctus libero, quis ullamcorper magna est sit amet dolor. Integer mollis feugiat ex, quis commodo ligula faucibus vitae. Nullam placerat luctus efficitur.'
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
    imagePath: 'img/bathroom_one.jpg'
  }, {
    id: 2,
    name: 'Kitchen',
    imagePath: 'img/kitchen_one.jpg'
  }, {
    id: 3,
    name: 'Living Room',
    imagePath: 'img/lroom_one.jpg'
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

})

.factory('Stores', function($http) {

  return {
    findByPosition: function(lat, long, maxResults, callback) {
      // @todo Set this in global config
      $http.defaults.headers.common.Authorization = 'Basic QWRvYmU6ZW9pdWV3ZjA5ZmV3bw==';

      // @todo API key should not be hardcoded and base api url
      $http({
        method: 'GET',
        url: 'http://api.lowes.com/store/location?query=' + lat + '%2C' + long + '&maxResults=' + maxResults + '&api_key=xkqmdm8afd2cuwy88nzzvucq'
      }).then(function successCallback(response) {
        console.log('success!');

        callback(response.data.storeLocation);
      }, function errorCallback(response) {
        console.log(response);
        callback(response);
      });
    }
  };
});
