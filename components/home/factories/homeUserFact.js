angular.module('ratingImages').factory("homeUserFact",["$q","$http", "$firebaseObject", "$firebaseArray", function($q, $http, $firebaseObject, $firebaseArray){
    return {
        saveRate : function(data){ 
            return $q((resolve, reject)=>{
                mainRef.child('ratings/'+data.uid).push(data.image, function (error){
                    if(error){
                        reject(error);
                    }else{
                        resolve(true);
                    }
                });
            }); 
        },

        getImages : function(){
            var defered = $q.defer();
            // Secret 1f23c1a05a592a66867fe5abae45752f1749a46e4addcdf33d64777e5dd86412
            // Aplication ID bf4dc818dc6a3d243c1623690ecbc1f608cb835c420a9413f4aaa782075e7db
            $http({
           		method: "GET",
          		url: "https://api.unsplash.com/photos/?client_id=bf4dc818dc6a3d243c1623690ecbc1f608cb835c420a9413f4aaa782075e7db1&per_page=30&page=1",
		     }).then(
		         function(res)
		         {
		            var totalFound=res.data.length;
		            console.log('totalFound',res);
		            var photo=[];

		            for(var i=0;i<totalFound;i++)
		            {
		                var full=res.data[i].urls.full;
		                var regular=res.data[i].urls.regular;
		                var raw=res.data[i].urls.raw;
		                var small=res.data[i].urls.small;
		                var thumb=res.data[i].urls.thumb;

		                photo.push({
		                    full:full,
		                    regular:regular,
		                    raw:raw,
		                    small:small,
		                    thumb:thumb
		                });

		            }
		         },
		        function(res){
		       		console.log('error',res);
        		});
        },

        getAllRatings : function (){
        	return $q((resolve, reject) => {
                $firebaseObject(mainRef.child('ratings/')).$loaded(function (data) {
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