angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Categories) {
  $scope.categories = Categories.all();
})

.controller('ListingsCtrl', function($scope) {})


<<<<<<< HEAD
.controller('DetailsCtrl', function($scope) {})

.controller('QuantityCtrl', function($scope) {})

.controller('HelpCtrl', function($scope) {});


=======
.controller('DetailsCtrl', function($scope, Products) {
  $scope.products = Products.all();
});
>>>>>>> 096a2be56f164a821cc4f9989296b411f19b9e8a


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
