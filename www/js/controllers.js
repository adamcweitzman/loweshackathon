angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
})

.controller('ListingsCtrl', function($scope, $stateParams, Listings) {
  var categoryId = $stateParams.categoryId;
  $scope.categoryId = categoryId;
  $scope.listings = Listings.getByCategoryId(categoryId);
})

.controller('DetailsCtrl', function($scope) {});


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
