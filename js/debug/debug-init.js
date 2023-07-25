/**
 * 
 */
 
function init(){
	let date = Date();
	console.log("commit-init(): " + date);
	
	add_debug_head();
//	let content_date = document.getElementById("content-date");
//	content_date.innerHTML="<span>載入時間: "+ date + "</span>";
}

// 增加 debug head
function add_debug_head(){
	let body_element = document.getElementsByTagName("div")[0];
	let new_element = document.createElement("div");
	new_element.innerText="dddd";
	body_element.appendChild(new_element);
}

function debug_message(msg){
	console.log(msg);
}	 
 