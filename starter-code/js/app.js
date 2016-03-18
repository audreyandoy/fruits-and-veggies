var app = angular.module('StuffList', []);/* setup your angular app here */

app.controller('ListCtrl', ['$scope', function($scope) {
    console.log('Controller exists!');
    // $scope.stuff = '';
    // $scope.fruit = '';
    // $scope.veggies = '';

//debug stuff to show the app is loading and fruit / veggies are available
    console.log('App Started');
    // console.log('Fruit count', fruit.length);
    // console.log('Veggie count', vegetables.length);

    stuff = fruit.concat(vegetables);


    $scope.stuffList = stuff;
    $scope.fruitList = [];
    $scope.veggieList = [];

    $scope.moveFromPoolToFruit = function(idx) {
        var move = $scope.stuffList.splice(idx, 1);
        $scope.fruitList = $scope.fruitList.concat(move);
    }

    $scope.moveFromPooltoVeggies = function(idx) {
        var move = $scope.stuffList.splice(idx, 1);
        $scope.veggieList = $scope.veggieList.concat(move);

    }

    $scope.moveFromFruitToPool = function(idx) {
    
        // var move = $scope.fruitList.splice(idx, 1);
        // $scope.stuffList = $scope.stuffList.push(move);
        $scope.stuffList.push($scope.fruitList[idx]);
        $scope.fruitList.splice(idx, 1);

    }
    
    $scope.moveFromVeggiesToPool = function(idx) {
        $scope.stuffList.push($scope.veggieList[idx]);
        $scope.veggieList.splice(idx, 1);
    }


    $scope.wrongStuff = function(type, idx) {
        if ($scope.stuffList.length === 0) {
          if (type === "fruit") {
            if(fruit.indexOf($scope.fruitList[idx]) === -1){
              return true;
            } else {
              return false;
            }
          } else if (type === "veggies") {
            if(vegetables.indexOf($scope.veggieList[idx]) === -1){
              return true;
            } else {
              return false;
            }
          }
        }
    }

    //I need help declaring that the user matched all the right fruits and vegetables. This script makes sense to me but it won't 
    //recognize the 'new' fruit and vegetables arrays I made. 
    
    // $scope.correct = function(idx) {
    //   if ($scope.stuffList.length === 0) {
    //     if (fruit.indexOf($scope.fruitList[idx] && vegetables.indexOf($scope.veggieList[idx]) != -1){
    //       alert("Correct!");
    //     }
    //   }
    // }


}]);