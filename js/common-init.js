/**
 * 
 */
 
common_init();
 
function common_init(){
	let date = Date();
	console.log("commit-init(): " + date);

	let content_date = document.getElementById("content-date");
	content_date.innerHTML="<span>本頁載入時間: "+ date + "</span>";
}	 
 