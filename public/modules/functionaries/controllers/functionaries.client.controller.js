'use strict';

// Functionaries controller


angular.module('functionaries').controller('FunctionariesController', ['$scope', '$stateParams', '$location', '$controller', 'Authentication', 'Functionaries', 'Utility',
	function($scope, $stateParams, $location, Authentication, $controller, Functionaries, Utility) {
		$scope.authentication = Authentication;

		$scope.animationsEnabled = true;
		$scope.experience = [];
		$scope.education = [];

		//Open a modal window to Add a single education to the resume.
		$scope.toggleAnimation = function () {
			$scope.animationsEnabled = !$scope.animationsEnabled;
		};


		// Create new Experience
		$scope.create = function() {
			// Create new Functionary object
			var functionary = new Functionaries ({
				firstName: this.firstName,
				firstSurname: this.firstSurname,
				secondSurname: this.secondSurname,
				identification: this.identification,
				birthdate: this.birthdate,
				maritalStatus: this.maritalStatus.maritalStatus,
				role: this.role.role,
				address: this.address,
				phoneNumber: this.phoneNumber,
				cellphoneNumber: this.cellphoneNumber,
				email: this.email,
				hireDate: this.hireDate,
				status: this.status.status,
				schedule:this.schedule
			});


			// Redirect after save
			functionary.$save(function(response) {
				$location.path('functionaries/' + response._id);
				// Clear form fields
				$scope.firstName  = '';
				$scope.firstSurname = '';
				$scope.secondSurname = '';
				$scope.identification = '';
				$scope.birthdate = '';
				$scope.maritalStatus = '';
				$scope.role = '';
				$scope.phoneNumber = '';
				$scope.cellphoneNumber = '';
				$scope.email = '';
				$scope.hireDate = '';
				$scope.status = '';
				$scope.schedule='';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.optionsMaritalStatus = [{maritalStatus: 'Casado'}, {maritalStatus: 'Soltero'}, {maritalStatus:'Divorciado'}];
		$scope.optionsFunctionaryRoles = [{role: 'Academico'}, {role: 'Administrativo'}];
		$scope.optionsFunctionaryStatus = [{status: 'Activo'}, {status: 'Despedido'}, {status: 'Renuncio'}];
		$scope.maritalStatus = $scope.optionsMaritalStatus[0];
		$scope.role = $scope.optionsFunctionaryRoles[0];
		$scope.status = $scope.optionsFunctionaryStatus[0];
		$scope.subjects_list = [{name: 'Libre'},
								{name: 'Español'},
							 	{name: 'Matematicas'},
							  	{name: 'F\u00EDsica'},
							  	{name: 'Qu\u00EDmica'},
							  	{name: 'Biolog\u00EDa'},
							  	{name: 'Biotecnolog\u00EDa'},
							  	{name: 'Computaci\u00F3n'},
							  	{name: 'Rob\u00F3tica'},
							  	{name: 'Dibujo T\u00E9cnico'},
							  	{name: 'Ingl\u00E9s'},
							  	{name: 'Investigaci\u00F3n'},
							  	{name: 'Historia'},
							  	{name: 'Geograf\u00EDa'},
							  	{name: 'Religi\u00F3n'},
							  	{name: 'C\u00EDvica'},
							  	{name: 'Educ. F\u00EDsica'}];
		$scope.schedule0 = $scope.subjects_list[0];
		$scope.schedule1 = $scope.subjects_list[0];
		$scope.schedule2 = $scope.subjects_list[0];
		$scope.schedule3 = $scope.subjects_list[0];
		$scope.schedule4 = $scope.subjects_list[0];
		$scope.schedule5 = $scope.subjects_list[0];
		$scope.schedule6 = $scope.subjects_list[0];
		$scope.schedule7 = $scope.subjects_list[0];
		$scope.schedule8 = $scope.subjects_list[0];
		$scope.schedule9 = $scope.subjects_list[0];
		$scope.schedule10 = $scope.subjects_list[0];
		$scope.schedule11 = $scope.subjects_list[0];
		$scope.schedule12 = $scope.subjects_list[0];
		$scope.schedule13 = $scope.subjects_list[0];
		$scope.schedule14 = $scope.subjects_list[0];
		$scope.schedule15 = $scope.subjects_list[0];
		$scope.schedule16 = $scope.subjects_list[0];
		$scope.schedule17 = $scope.subjects_list[0];
		$scope.schedule18 = $scope.subjects_list[0];
		$scope.schedule19 = $scope.subjects_list[0];
		$scope.schedule20 = $scope.subjects_list[0];
		$scope.schedule21 = $scope.subjects_list[0];
		$scope.schedule22 = $scope.subjects_list[0];
		$scope.schedule23 = $scope.subjects_list[0];
		$scope.schedule24 = $scope.subjects_list[0];
		$scope.schedule25 = $scope.subjects_list[0];
		$scope.schedule26 = $scope.subjects_list[0];
		$scope.schedule27 = $scope.subjects_list[0];
		$scope.schedule28 = $scope.subjects_list[0];
		$scope.schedule29 = $scope.subjects_list[0];
		$scope.schedule30 = $scope.subjects_list[0];
		$scope.schedule31 = $scope.subjects_list[0];
		$scope.schedule32 = $scope.subjects_list[0];
		$scope.schedule33 = $scope.subjects_list[0];
		$scope.schedule34 = $scope.subjects_list[0];
		$scope.schedule35 = $scope.subjects_list[0];
		$scope.schedule36 = $scope.subjects_list[0];
		$scope.schedule37 = $scope.subjects_list[0];
		$scope.schedule38 = $scope.subjects_list[0];
		$scope.schedule39 = $scope.subjects_list[0];
		$scope.schedule40 = $scope.subjects_list[0];
		$scope.schedule41 = $scope.subjects_list[0];
		$scope.schedule42 = $scope.subjects_list[0];
		$scope.schedule43 = $scope.subjects_list[0];
		$scope.schedule44 = $scope.subjects_list[0];
		$scope.schedule45 = $scope.subjects_list[0];
		$scope.schedule46 = $scope.subjects_list[0];
		$scope.schedule47 = $scope.subjects_list[0];
		$scope.schedule48 = $scope.subjects_list[0];
		$scope.schedule49 = $scope.subjects_list[0];
		$scope.schedule50 = $scope.subjects_list[0];
		$scope.schedule51 = $scope.subjects_list[0];
		$scope.schedule52 = $scope.subjects_list[0];
		$scope.schedule53 = $scope.subjects_list[0];
		$scope.schedule54 = $scope.subjects_list[0];
		$scope.schedule55 = $scope.subjects_list[0];
		$scope.schedule56 = $scope.subjects_list[0];
		$scope.schedule57 = $scope.subjects_list[0];
		$scope.schedule58 = $scope.subjects_list[0];
		$scope.schedule59 = $scope.subjects_list[0];
		$scope.schedule60 = $scope.subjects_list[0];
		$scope.schedule61 = $scope.subjects_list[0];
		$scope.schedule62 = $scope.subjects_list[0];
		$scope.schedule63 = $scope.subjects_list[0];
		$scope.schedule64 = $scope.subjects_list[0];
		$scope.schedule65 = $scope.subjects_list[0];
		$scope.schedule66 = $scope.subjects_list[0];
		$scope.schedule67 = $scope.subjects_list[0];
		$scope.schedule68 = $scope.subjects_list[0];
		$scope.schedule69 = $scope.subjects_list[0];

		// Remove existing Functionary
		$scope.remove = function(event,functionary) {
			if ( functionary ) {
				event.preventDefault();
				event.stopPropagation();
				functionary.$remove();
				for (var i in $scope.functionaries) {
					if ($scope.functionaries [i] === functionary) {
						$scope.functionaries.splice(i, 1);
					}
				}
			} else {
				$scope.functionary.$remove(function(){});
			}
		};

		// Update existing Functionary
		$scope.update = function() {
			var functionary = $scope.functionary;
			functionary.maritalStatus = $scope.maritalStatus.maritalStatus;
			functionary.status = $scope.status.status;
			functionary.role = $scope.role.role;
			functionary.$update(function() {
				$location.path('functionaries/' + functionary._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
		$scope.addschedule = function(){
			var schedulelist=[];
			var e = document.getElementById("schedule_0");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_1");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_2");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_3");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_4");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_5");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_6");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_7");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_8");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_9");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_10");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_11");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_12");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_13");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_14");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_15");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_16");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_17");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_18");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_19");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_20");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_21");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_22");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_23");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_24");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_25");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_26");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_27");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_28");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_29");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_30");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_31");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_32");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_33");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_34");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_35");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_36");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_37");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_38");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_39");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_40");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_41");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_42");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_43");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_44");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_45");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_46");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_47");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_48");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_49");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_50");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_51");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_52");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_53");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_54");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_55");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_56");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_57");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_58");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_59");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_60");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_61");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_62");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_63");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_64");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_65");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_66");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_67");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_68");
			schedulelist.push(e.options[e.selectedIndex].text);
			e = document.getElementById("schedule_69");
			schedulelist.push(e.options[e.selectedIndex].text);
			$scope.functionary.schedule=schedulelist;
			$scope.update();
		};


		$scope.setComboValues = function () {
			$scope.functionary.$promise.then(function(functionary){
				$scope.optionsFunctionaryStatus.forEach(function(status){
					if(functionary.status === status.status){
						$scope.status = status;
					}
				});
				$scope.optionsFunctionaryRoles.forEach(function(role){
					if(functionary.role === role.role){
						$scope.role = role;
					}
				});
				$scope.optionsMaritalStatus.forEach(function(maritalStatus){
					if(functionary.maritalStatus === maritalStatus.maritalStatus){
						$scope.maritalStatus = maritalStatus;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[0] === subject.name){
						$scope.schedule0 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[1] === subject.name){
						$scope.schedule1 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[2] === subject.name){
						$scope.schedule2 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[3] === subject.name){
						$scope.schedule3 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[4] === subject.name){
						$scope.schedule4 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[5] === subject.name){
						$scope.schedule5 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[6] === subject.name){
						$scope.schedule6 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[7] === subject.name){
						$scope.schedule7 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[8] === subject.name){
						$scope.schedule8 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[9] === subject.name){
						$scope.schedule9 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[10] === subject.name){
						$scope.schedule10 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[11] === subject.name){
						$scope.schedule11 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[12] === subject.name){
						$scope.schedule12 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[13] === subject.name){
						$scope.schedule13 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[14] === subject.name){
						$scope.schedule14 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[15] === subject.name){
						$scope.schedule15 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[16] === subject.name){
						$scope.schedule16 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[17] === subject.name){
						$scope.schedule17 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[18] === subject.name){
						$scope.schedule18 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[19] === subject.name){
						$scope.schedule19 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[20] === subject.name){
						$scope.schedule20 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[21] === subject.name){
						$scope.schedule21 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[22] === subject.name){
						$scope.schedule22 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[23] === subject.name){
						$scope.schedule23 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[24] === subject.name){
						$scope.schedule24 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[25] === subject.name){
						$scope.schedule25 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[26] === subject.name){
						$scope.schedule26 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[27] === subject.name){
						$scope.schedule27 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[28] === subject.name){
						$scope.schedule28 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[29] === subject.name){
						$scope.schedule29 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[30] === subject.name){
						$scope.schedule30 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[31] === subject.name){
						$scope.schedule31 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[32] === subject.name){
						$scope.schedule32 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[33] === subject.name){
						$scope.schedule33 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[34] === subject.name){
						$scope.schedule34 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[35] === subject.name){
						$scope.schedule35 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[36] === subject.name){
						$scope.schedule36 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[37] === subject.name){
						$scope.schedule37 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[38] === subject.name){
						$scope.schedule38 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[39] === subject.name){
						$scope.schedule39 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[40] === subject.name){
						$scope.schedule40 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[41] === subject.name){
						$scope.schedule41 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[42] === subject.name){
						$scope.schedule42 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[43] === subject.name){
						$scope.schedule43 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[44] === subject.name){
						$scope.schedule44 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[45] === subject.name){
						$scope.schedule45 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[46] === subject.name){
						$scope.schedule46 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[47] === subject.name){
						$scope.schedule47 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[48] === subject.name){
						$scope.schedule48 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[49] === subject.name){
						$scope.schedule49 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[50] === subject.name){
						$scope.schedule50 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[51] === subject.name){
						$scope.schedule51 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[52] === subject.name){
						$scope.schedule52 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[53] === subject.name){
						$scope.schedule53 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[54] === subject.name){
						$scope.schedule54 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[55] === subject.name){
						$scope.schedule55 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[56] === subject.name){
						$scope.schedule56 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[57] === subject.name){
						$scope.schedule57 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[58] === subject.name){
						$scope.schedule58 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[59] === subject.name){
						$scope.schedule59 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[60] === subject.name){
						$scope.schedule60 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[61] === subject.name){
						$scope.schedule61 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[62] === subject.name){
						$scope.schedule62 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[63] === subject.name){
						$scope.schedule63 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[64] === subject.name){
						$scope.schedule64 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[65] === subject.name){
						$scope.schedule65 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[66] === subject.name){
						$scope.schedule66 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[67] === subject.name){
						$scope.schedule67 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[68] === subject.name){
						$scope.schedule68 = subject;
					}
				});
				$scope.subjects_list.forEach(function(subject){
					if(functionary.schedule[69] === subject.name){
						$scope.schedule69 = subject;
					}
				});
			});
		};

		// Find a list of Functionaries
		$scope.find = function() {
			$scope.functionaries = Functionaries.query();
		};

		// Find existing Functionary
		$scope.findOne = function() {
			$scope.functionary = Functionaries.get({ 
				functionaryId: $stateParams.functionaryId
			});
			$scope.setComboValues();
		};
	}
]);

