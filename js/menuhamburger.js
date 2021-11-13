function menuMobile(){
	
	let menu = document.getElementsByClassName("menu-box")[0];
	if(menu.dataset.menustatus=="off"){
		menu.classList.add("menu-on");
		document.body.style.overflow = "hidden";
		menu.dataset.menustatus="on";
	}

	else{
		menu.classList.remove("menu-on");
		document.body.style.overflow = "initial";
		menu.dataset.menustatus="off";
	}
}


function starter(){
	document.querySelector(".hamburger-container").addEventListener("click", menuMobile);
}

window.addEventListener("load", starter);

