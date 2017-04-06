angular.module('ratingImages').factory("loginFact",["$q","$firebaseAuth", function($q,$firebaseAuth){

    

    return {
        authUser : function(email, password){
            
            var defered = $q.defer();
            
            $firebaseAuth(mainRef).$authWithPassword({
                email: email,
                password: password
            }).then(function(authData) {
                defered.resolve(authData);
            }).catch(function(error) {
                defered.reject(error);
            });
            
            return defered.promise;
        }
    }
}]);