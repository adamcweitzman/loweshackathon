angular.module('starter.controllers', [])

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.navBar.transition('none')
})

.controller('HomeCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
  $scope.page = 1;
})

.controller('ListingsCtrl', function($scope, $stateParams, Listings) {
  var categoryId = $stateParams.categoryId;
  $scope.categoryId = categoryId;
  $scope.listings = Listings.getByCategoryId(categoryId);
  $scope.showAlert = function (id) {
    globalImgPath = Listings.get(id).imagePath
  }
})

.controller('QuantityCtrl', function($scope) {})

.controller('HelpCtrl', function($scope) {})

.controller('DetailsCtrl', function($scope, Products, Stores, $cordovaGeolocation, $ionicPopup, $ionicLoading, $ionicPlatform, $compile) {
  $scope.products = Products.all();
  $scope.path = globalImgPath

  // It is important to wrap geolocation code into Ionic deviceready event, 
  //  execution will timeout without it
  ionic.Platform.ready(function(){
    $ionicLoading.show({
          template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Locating nearby stores..'
      });

    var posOptions = {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0
    };

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ' + lat + ' long: ' + long);

        // $ionicPopup.alert({
        //   title: 'Position found: ',
        //   content: 'lat: ' + lat + ' long: ' + long
        // }).then(function(res) {
        //   console.log('Test Alert Box');
        // });
        
        Stores.findByPosition(lat, long, 5, function(results) {
          console.log('Results: ', results);

          var myLatlng = new google.maps.LatLng(lat, long);
         
          var mapOptions = {
              center: myLatlng,
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);
          var infoWindow = new google.maps.InfoWindow({});
          
          for (var i=0; i<results.length; i++) {
            console.log('testing: ', results[i]['latitude']);
            var newLatlng = new google.maps.LatLng(results[i]['latitude'], results[i]['longitude']);
            
            var contentString = "<h4>Lowe's Store #" + results[i]['storeNumber'] + "</h4><p>" + results[i]['address1'] + "<br>" + results[i]['city'] + " " + results[i]['state'] + " " + results[i]['zip'] + "</p><p><strong>" + results[i]['milesToStore'] + " miles away</strong></p>";
            //var compiled = $compile(contentString)($scope);

            var marker = new google.maps.Marker({
              position: newLatlng,
              map: map,
              title: 'Store Location'
            });

            google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
                return function() {
                    infowindow.setContent(content);
                    infowindow.open(map,marker);
                };
            })(marker, contentString, infoWindow));
          }

          $scope.map = map;
          $ionicLoading.hide();
        });
         
    }, function(err) {
        $ionicLoading.hide();
        console.log(err);
    });
  });
});


// The following is from the generated project and only use for an example
/*
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
*/
