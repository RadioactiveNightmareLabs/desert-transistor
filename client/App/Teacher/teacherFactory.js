angular
	  .module('teacherFactory', [])
	  .factory('teacherFactory',[ function(){

		var socket = io();

		var confusedStudents = [];

			socket.on("teacher:update", function(data){
			    confusedStudents.push(data);
			    calculateConfusion(confusedStudents);
			})
		
	  	return {
	  		confusedStudents: confusedStudents
	  	};

	  }]);
