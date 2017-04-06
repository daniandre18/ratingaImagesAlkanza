
angular.module('ratingImages').controller('loginCtrl',['$scope', '$firebaseObject', '$firebaseArray', '$firebaseAuth', '$location', 'loginFact', 'userCommFact','$timeout', function ($scope, $firebaseObject, $firebaseArray, $firebaseAuth, $location, loginFact, userCommFact, $timeout) {
	$scope.login = {};
    $scope.alertsLogIn = [];
    userCommFact.getDataLogin().then(function(dataLoginLayout){
        $scope.dataLoginLayout = dataLoginLayout;
    })

    /* Funcion para validar autenticacion de usuarios con Firebase */
    $scope.authUser = function(){
        firebase.auth().signInWithEmailAndPassword($scope.login.email, $scope.login.password).then(function(authData){
            userCommFact.dataUserAccess(authData.uid)
            .then(function(dataUserAccess){
                $scope.alertsLogIn.push({type: 'success', msg: 'Los datos de autenticación son correctos.'});
                localStorage.setItem('userData', JSON.stringify({email:dataUserAccess.email, creationDate:dataUserAccess.creationDate, typesAccessUsers: dataUserAccess.typesAccessUsers, uid:authData.uid, image:dataUserAccess.image}));
                 
                location.reload();
                
            },function(error){
                $scope.login = {};
                $timeout(function() {
                    $scope.alertsLogIn.push({type: 'danger', msg: 'Error: Es posible que sus credenciales no tengan privilegios para ingresar a esta sección.'});
                });
            });
            
        },function(error){
            $scope.login = {};
            $timeout(function() {
                $scope.alertsLogIn.push({type: 'danger', msg: 'Error: Es posible que sus credenciales no tengan privilegios para ingresar a esta sección.'});
            });
            
        });

    };
    
    /* Funcion para eliminar alertas */
    $scope.closeAlertsLogIn = function(index) {
        $scope.alertsLogIn.splice(index, 1);
    };

    $scope.clearAlertsLogIn = function(index) {
        $scope.alertsLogIn = [];
    };
}]);
