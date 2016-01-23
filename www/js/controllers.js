angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
  $scope.page = 1;
})

.controller('ListingsCtrl', function($scope, $stateParams, Listings) {
  var categoryId = $stateParams.categoryId;
  $scope.categoryId = categoryId;
  $scope.listings = Listings.getByCategoryId(categoryId);
})

.controller('QuantityCtrl', function($scope) {})

.controller('HelpCtrl', function($scope) {})

.controller('DetailsCtrl', function($scope, Products, $cordovaGeolocation, $ionicPopup, $ionicLoading, $ionicPlatform, $compile) {
  $scope.products = Products.all();

  // It is important to wrap geolocation code into Ionic deviceready event, 
  //  execution will timeout without it
  ionic.Platform.ready(function(){
    $ionicLoading.show({
          template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location..'
      });

    var posOptions = {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0
    };

    $cordovaGeolocation.getCurrentPosition(posOptions).then(function(position) {
        var lat  = position.coords.latitude;
        var long = position.coords.longitude;

        $ionicPopup.alert({
          title: 'Position found: ',
          content: 'lat: ' + lat + ' long: ' + long
        }).then(function(res) {
          console.log('Test Alert Box');
        });
         
        var myLatlng = new google.maps.LatLng(lat, long);
         
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        var contentString = "<div>Current Location</div>";
        var compiled = $compile(contentString)($scope);

        var infoWindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Current Location'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infoWindow.open(map,marker);
        });

        $scope.map = map;

        $ionicLoading.hide();
         
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
