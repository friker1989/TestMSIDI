var app = angular.module("myApp", []).
controller("TreeController", ['$scope', function($scope) {

	var oldTree = localStorage.getItem("myAppTree");
	console.log(oldTree);
  $scope.delete = function(data) {
    data.nodes = [];
    localStorage.setItem("myAppTree", $scope.tree);
    console.log($scope.tree);
  };

  $scope.deleteOneNode = function(parent, data, index) {
    if (data.nodes.length == 0 && parent.$parent.data.nodes != 'undefiend') {
    	parent.$parent.data.nodes.splice(index, 1);
    	localStorage.setItem("myAppTree", $scope.tree);
    }
  };

  $scope.add = function(data) {
    var post = data.nodes.length + 1;
    var newName = 'New Node';
    data.nodes.push({name: newName,nodes: []});
    localStorage.setItem("myAppTree", $scope.tree);
  };

  $scope.edit = function(data) {
    data.name = 'edited';
    localStorage.setItem("myAppTree", $scope.tree);
  };

  oldTree = null;
  $scope.tree = oldTree ? oldTree : [{name: "Node", nodes: []}];

}]);