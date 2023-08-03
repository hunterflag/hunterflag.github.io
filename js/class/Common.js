/**
 * 
 */
function Common(){
		
	console.log("constructor() this.name");
}

Common.prototype = {
	init: function(){
		console.log("init() this.name");
	},
	end: function(){
		console.log("end() this.name");		
	}	
};