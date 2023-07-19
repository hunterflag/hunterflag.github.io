/**
 * 
 */
 commit_init();
 
 function commit_init(){
	console.log("commit-init(): " + Date());
/*
	let element = document.getElementById("about-subway-studio");
	element.title="<h1>1981</h1>";
*/
	
	let date = document.getElementById("label-date");
	date.innerHTML="<span>"+ Date() + "</span>";
 }	 
 