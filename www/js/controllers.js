angular.module('starter.controllers', [])

.config(function($ionicConfigProvider) {
  //$ionicConfigProvider.navBar.transition('none');
})

.controller('HomeCtrl', function($scope, Categories, $location, $ionicNavBarDelegate) {
  $scope.categories = Categories.all();
  $scope.page = 1;

  // Hide the back button on the home screen
  var path = $location.path();

  if (path.indexOf('submit') != -1) {
    $ionicNavBarDelegate.showBackButton(false);
  } else {
    $ionicNavBarDelegate.showBackButton(true);
  }
  
})

.controller('ListingsCtrl', function($scope, $stateParams, Listings) {
  var categoryId = $stateParams.categoryId;
  $scope.categoryId = categoryId;
  $scope.listings = Listings.getByCategoryId(categoryId);
  // $scope.showAlert = function (id) {
  //   globalImgPath = Listings.get(id).imagePath;
  // };
})

.controller('QuantityCtrl', function($scope) {})

.controller('HelpCtrl', function($scope) {})

.controller('ConfirmationCtrl', function($scope) {})

.controller('PhotoCtrl', function($scope, Camera, $cordovaCamera) {
  
    $scope.takePicture = function() {
      ionic.Platform.ready(function(){
        var options = {
            quality : 75,
            destinationType : Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
          // An error occured. Show a message to the user
          console.log(err);
        });
      });
    };

})

.controller('FormCtrl', function($scope) {})

.controller('DetailsCtrl', function($scope, Products, Listings, $stateParams, $ionicPopup, $ionicLoading, $ionicPlatform) {
  $scope.products = Products.all();
  var listingId = $stateParams.listingId;
  var listing = Listings.get(listingId);

  $scope.imgPath = listing.imagePath;
})

.controller('LocationsCtrl', function($scope, Stores, $stateParams, $cordovaGeolocation, $ionicPopup, $ionicLoading, $ionicPlatform, $compile) {
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
          
          var contentString = "<h4>Lowe's Store #" +
            results[i]['storeNumber'] + "</h4><p>" +
            results[i]['address1'] + "<br>" +
            results[i]['city'] + " " +
            results[i]['state'] + " " +
            results[i]['zip'] + "</p><p><strong>" +
            results[i]['milesToStore'] + " miles away</strong></p>";
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

