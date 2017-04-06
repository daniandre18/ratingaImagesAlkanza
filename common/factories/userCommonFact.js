angular.module('ratingImages').factory("userCommonFact",["$q","$firebaseObject","$firebaseArray", "$firebaseAuth", function($q, $firebaseObject, $firebaseArray, $firebaseAuth){
    return {
        getCurrentUser : function() {
            return $firebaseAuth().$getAuth();
        },
        getCurrentUserLocalStorage : function (){
            var user = angular.fromJson(localStorage.userData);
            return user;
        },
        logout : function(){
            return $firebaseAuth().$signOut();
        },
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
        }, 

        registerUser : function(email, password){
        
            var defered = $q.defer();

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(authData) {
                defered.resolve(authData);
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
               defered.reject(error);
            });
           return defered.promise;

        },

        saveUser : function(dataUser){
            dataUser.state = 1;
            console.log("dataUser", dataUser);
            var usersRef = mainRef.child("users/"+dataUser.uid);
            usersRef.set(dataUser);   
        }



    }
}]);