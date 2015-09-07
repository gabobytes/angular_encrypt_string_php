	var miApp = angular.module('encriptar',[])	

		miApp.controller('ctrlEncriptar',['$scope', '$http', function($scope, $http){

			

			$scope.encriptar = function() {
				
				var request = $http({
					method: "post",
					url: window.location.href + "./model.php",
					data: {
						txtEncriptar: $scope.txtEncriptar
					},
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

				});


			 //check encript success

			 request.success(function(data){
			 	$scope.encriptado = data
			 });
			

			}
		}])