/**
 * 
 */

util = {
	set_title: function (input){
		let str = "MbH";
		if (input == null) {
		
		} else if (typeof(input) == "string"){
			str = input;
		} else {
			str = location.pathname.substring(location.pathname.lastIndexOf("/")+1);
		}
		
		
		let title = document.getElementsByTagName("title")[0];
		if (title == null){
			title = document.createElement("title");
			document.getElementsByTagName("head")[0].appendChild(title)
		}

		title.innerText = str;			
	},
	
	show_message: function (msg){
		console.log("<=MbH=> " + msg);
	}	 
	

}; 

___ = util;
 