/**
 * 
 */
 
console.log("pos at (..., import_lab, global)");
func_in_import();

function func_in_import(){
	console.log("pos at (..., import_lab, func_in_import())");
	show_names();	
}

name = "name declare in global";
var name_var = "name_var declare in global";
let name_let = "name_let declare in global";
const name_const = "name_const declare in global";

function func_local(){
	console.log("<==== func_loacal() ====>");
	name = "name declare in local";
	var name_var = "name_var declare in local";
	let name_let = "name_let declare in local";
	const name_const = "name_const declare in local";

	show_names();
	
}

function show_names(){
	console.log("<==== show_names() ====>");
	console.log("name=" + name);
	console.log("name_var=" + name_var);
	console.log("name_let=" + name_let);
	console.log("name_const=" + name_const);
}

//func_local();
show_names();