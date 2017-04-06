angular.module('ratingImages').service("commonUserSrv",["$q","userCommonFact", function($q, userCommonFact){
  
  	var commonUserSrv =  {
        authUser : function(email, password){
        	userCommonFact.authUser(email, password)
        		.then((data)=>{
        		defered.resolve(data);
        	})
            return defered.promise;
        }, 

        registerUser : function(dataRegister){
            var defered = $q.defer();
            userCommonFact.registerUser(dataRegister.email, dataRegister.password)
	            .then((data)=>{
	            	dataUser = {
	            		uid : data.uid,
	            		name : dataRegister.nameUser,
	            		email : dataRegister.email
	            	}
	            	return userCommonFact.saveUser(dataUser)
	            })
	            .then((data)=>{
	            	defered.resolve(data);
	            })
	            .catch(function(error) {
	                defered.reject(error);
	            });
           	return defered.promise;
        }
   	}

   	return commonUserSrv;
}]);