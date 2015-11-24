function calc1() {
	var Low = document.getElementById('BLow').value ;
	var Mid = document.getElementById('BMid').value ;
	var Top = document.getElementById('BTop').value ;

	var Fcouf = document.getElementById('FCouf').value ;
	var Ecouf = document.getElementById('ECouf').value ;

	var ELow = Low/(Math.sqrt(Fcouf/Ecouf))
	var EMid = Mid/(Math.sqrt(Fcouf/Ecouf))
	var ETop = Top/(Math.sqrt(Fcouf/Ecouf))

	ELow = ELow.toFixed();
	EMid = EMid.toFixed();
	ETop = ETop.toFixed();

	document.getElementById('ALow').value = ELow;
	document.getElementById('AMid').value = EMid;
	document.getElementById('ATop').value = ETop;
}

function calc2() {
	var Low = document.getElementById('BLow').value ;
	var Mid = document.getElementById('BMid').value ;
	var Top = document.getElementById('BTop').value ;

	var Low2 = document.getElementById('BLow2').value ;
	var Mid2 = document.getElementById('BMid2').value ;
	var Top2 = document.getElementById('BTop2').value ;

	var Fcouf = document.getElementById('FCouf').value ;
	var Ecouf = document.getElementById('ECouf').value ;




	var ELow2 = parseInt(Low)-parseInt(Low2)+(Low2/(Math.sqrt(Fcouf/Ecouf)));
	var EMid2 = parseInt(Mid)-parseInt(Mid2)+(Mid2/(Math.sqrt(Fcouf/Ecouf)));
	var ETop2 = parseInt(Top)-parseInt(Top2)+(Top2/(Math.sqrt(Fcouf/Ecouf)));

	document.getElementById('ALow2').value = ELow2.toFixed();
	document.getElementById('AMid2').value = EMid2.toFixed();
	document.getElementById('ATop2').value = ETop2.toFixed();
}



