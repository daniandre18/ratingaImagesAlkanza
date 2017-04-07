angular.module('ratingImages').service("homeUserSrv",["$q","userCommonFact","homeUserFact", function($q, userCommonFact, homeUserFact){
   
   var responseHomeUserSrv = {
   		loadImages : function(){

        /*homeUserFact.getImages()
        .then((data)=>{
            var images = data;
            console.log("data", error);
        })
        .catch((error)=>{
            console.log("error", error);
        })*/
        
        var images = [
          "http://static.ddmcdn.com/gif/lightning-gallery-1.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-2.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-3.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-4.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-5.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-6.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-7.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-8.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-9.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-10.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-11.jpg",
          "http://static.ddmcdn.com/gif/lightning-gallery-12.jpg"
        ];
        return images;
        
      },
      sendRate : function(image) {
          var user = userCommonFact.getCurrentUser();
          var dataSave = {
            uid :user.uid,
            image : image
          }
          return $q((resolve, reject)=>{
              homeUserFact.saveRate(dataSave)
              .then((sucess)=>{
                  resolve(true);
              })
              .catch((error)=>{
                  reject(error);
              })
          }); 
      },
      generateRandomImage : function (qtyImages){
        var size = qtyImages.length;
        var x = Math.floor(size*Math.random());
        return  qtyImages[x];
      }
   }

   return responseHomeUserSrv;
}]);