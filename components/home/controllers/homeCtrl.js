
angular.module('ratingImages').controller('homeCtrl',['homeUserSrv','commonUserSrv','userCommonFact', function (homeUserSrv, commonUserSrv, userCommonFact) {
	vm = this;
	vm.ratingContainer = false;

	vm.registerUser = function (){
		commonUserSrv.registerUser(vm.dataRegister)
			.then((data)=>{
				vm.ratingContainer = true;
				vm.user = userCommonFact.getCurrentUser();
				vm.loadImages();
		})
	}

	vm.loadImages = function (){
		var images = homeUserSrv.loadImages()
		var size = images.length;
		var x = Math.floor(size*Math.random());
		vm.imageOne = images[x];
		vm.imageTo = images[x-1];

		console.log("images", images);
	}

	vm.sendRate = function (idImage){
		vm.loadImages();


	}
    
}]);
