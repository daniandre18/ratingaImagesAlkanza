angular.module('ratingImages').factory("loginFact",["$q", "$firebaseArray", "$firebaseObject", "$firebaseAuth", function($q, $firebaseArray, $firebaseObject, $firebaseAuth){

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
        }, 

        registerTeacher : function(email, password){
            
            //console.log("email =>",email);
            //console.log("password =>",password);
            
            var defered = $q.defer();

            $firebaseAuth(mainRef).$createUser({
                email: email,
                password: password
            }).then(function(authData) {
                defered.resolve(authData);
            }).catch(function(error) {
                defered.reject(error);
            });
            
           return defered.promise;
        },

        saveRegisterTeacher : function(dataUser){
            
            /*var defered = $q.defer();

            var obj = $firebaseObject(mainRef.child("users/"));
            dataUser.role = 0;
            obj[dataUser.uid] = dataUser;
            //obj = dataUser;
            obj.$save().then(function(ref) {
                ref.key() === obj.$id; // true
                defered.resolve(ref.key() === obj.$id);
            }, function(error) {
                defered.reject(error);
            });
            return defered.promise;*/
            dataUser.state = 1;

            var usersRef = mainRef.child("users/"+dataUser.uid);
            usersRef.set(dataUser);

        }
    }

}]);