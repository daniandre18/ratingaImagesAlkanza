
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
		var images = homeUserSrv.loadImages();
		var imageTwo =  homeUserSrv.generateRandomImage(images);
		vm.imageOne = homeUserSrv.generateRandomImage(images);
		vm.imageTwo = (vm.imageOne == imageTwo) ? homeUserSrv.generateRandomImage(images) :  imageTwo;
	}
	vm.sendRate = function (urlImage){
		console.log("image",urlImage);
		homeUserSrv.sendRate(urlImage)
		.then((response)=>{
			vm.loadImages();
		})
		.catch((error)=>{
			console.log("error al guardar calificacíón", error)
		})
	}
}]);
