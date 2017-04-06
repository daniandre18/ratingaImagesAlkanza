angular.module('ratingImages').service("homeUserSrv",["$q","userCommonFact","homeUserFact", function($q, userCommonFact, homeUserFact){
   
   var responseHomeUserSrv = {
   		
   		loadImages : function(){
        var images = [
          "http://static.ddmcdn.com/gif/lightning-gallery-17.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-18.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-19.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-20.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-21.jpg"
        ];
            
        return images;

       /* homeUserFact.getImages()
        .then((data)=>{



        })*/

      },
      saveRating : function(argument) {
        	
      }
   }

   return responseHomeUserSrv;
}]);