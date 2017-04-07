angular.module('ratingImages').factory("homeUserFact",["$q","$http", "$firebaseObject", "$firebaseArray", function($q, $http, $firebaseObject, $firebaseArray){
    return {
        getAllRatings : function (){
        	return $q((resolve, reject) => {
                $firebaseArray(mainRef.child('ratings/')).$loaded(function (data) {
                    if(data){
                        resolve(data);
                    }else{
                        reject("no data exist");
                    }
                });

            });
        }
    }
}]);