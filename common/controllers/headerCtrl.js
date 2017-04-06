angular.module('ratingImages').controller('headerCtrl',['userCommFact', function (userCommFact) {
  

    console.log("headerCtrl");

   /* $scope.dataHeader = {};
    
    $timeout(function() {
        $scope.sesionState = userCommFact.getCurrentUser();
    },200);

    $scope.logout = function(){
        commonUserSrv.logout();
        $location.path('#/home');
        location.reload();
    };

    $scope.viewProfile = function (){
    	userCommFact.getDataUser($scope.sesionState.uid)
            .then(function(dataUserAccess){
         	})
    }
    userCommFact.getDataHeader().then(function(dataHeader){
        
        $scope.dataHeader = dataHeader;
    })*/

}]);
