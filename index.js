// index.js
const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("https://myapi/items")
    .then(function(response) {
        $scope.items = response.data;
    });

    $scope.addItem = function(item) {
        $http.post("https://myapi/items", item)
        .then(function(response) {
            $scope.items.push(item);
        });
    };

    $scope.deleteItem = function(item) {
        $http.delete(`https://myapi/items/${item.id}`)
        .then(function(response) {
            let index = $scope.items.indexOf(item);
            $scope.items.splice(index, 1);
        });
    };
});
