/**
 * 
 */
init();

function init(){
	ex_start();
	make_title();
	progress_init();
}

function make_title(t){
	let title = document.getElementsByTagName("title")[0];
	let href = location.href;
	title.innerText = (t != null ? t : href.substring(href.lastIndexOf("/")+1)); 
}

function ex_start(m){
	let time = Date();
	let msg = (m != null ? m : "ex start on"); 
	console.log(msg + " : " + time);
}

function progress_init(p){
	let progress = document.getElementsByTagName("progress")[0];
	var p=0;
	setInterval(function(){
			console.log(p);
			p %= 100;
			progress.value=p;		
			console.log(p);
			p++;
		}, 100);
		
	
}