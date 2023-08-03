/**
 * 
 */
 
var date = Date();
function debug_init(){
	console.log("debug_init(): " + date);
	add_debug_head();
}

// 增加 debug head
function add_debug_head(){
	let element = document.getElementsByTagName("footer")[0];
	let new_element = document.createElement("div");
	new_element.innerHTML="<span>載入時間: "+ date + "</span>";
	element.appendChild(new_element);
}

function debug_message(msg){
	console.log(msg);
}	 
 