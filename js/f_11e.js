function fu1_jaunsel(saturs){
	let newObj = document.createElement("p");
	// newObj.className = "klases nosaukums"
	newObj.setAttribute("vert","JanisPu");
	let newContent = document.createTextNode(saturs);
	newObj.appendChild(newContent);
	return newObj;
}
function dzest_obj(jumis){
	while(jumis.firstChild){
		let pirmais = jumis.firstChild;
		jumis.removeChild(pirmais);
	}
}

function fu2(){
	let tevs = document.getElementById("mumu");
	var i=0;
	let ma = ["Muris", "Reksis","Duksis","Lops"];
	let ma2 = ["Janv", "Febr","Mart","Apr"];
	//Izdzēst esošos bērnus
	dzest_obj(tevs);
	// Sistēmas laiks
	const sist_laiks = new Date();
	let s = sist_laiks.getSeconds();
	if(s % 2)
		fu3(ma,tevs);  //nepāra
	else
		fu3(ma2,tevs); //pāra
	console.log("Kārtējā");
}
function fu3(dati,papa){
	for(let k=0;k<3;k++){
		let jauna_rinda = fu1_jaunsel(dati[k]);
		papa.appendChild(jauna_rinda);
	}
}
window.setInterval(fu2,500);

